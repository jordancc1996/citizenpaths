import type { NextApiRequest, NextApiResponse } from 'next';
import { FormData, RecommendationResponse, CitizenshipProgram, CitizenshipRecommendation, UserProfile } from '@/types';

// Mock citizenship programs data (in production, this would come from a database)
const CITIZENSHIP_PROGRAMS: CitizenshipProgram[] = [
  {
    id: 'dominica',
    country: 'Dominica',
    program_name: 'Economic Citizenship Program',
    min_investment: 200000,
    processing_time_months: 4,
    visa_free_destinations: 144,
    investment_options: ['Government Fund Donation', 'Real Estate'],
    family_inclusion: true,
    dual_citizenship_allowed: true,
    residency_requirements: 'No residency requirement',
    key_benefits: ['Fast processing', 'No residency requirement', 'Dual citizenship allowed'],
    requirements: ['Clean criminal record', 'Source of funds verification', 'Medical examination'],
    fees: {
      government: 200000,
      legal: 15000,
      due_diligence: 7500
    }
  },
  {
    id: 'st_lucia',
    country: 'St. Lucia',
    program_name: 'Citizenship by Investment Program',
    min_investment: 240000,
    processing_time_months: 5,
    visa_free_destinations: 146,
    investment_options: ['Government Fund', 'Real Estate', 'Enterprise Projects'],
    family_inclusion: true,
    dual_citizenship_allowed: true,
    residency_requirements: 'No residency requirement',
    key_benefits: ['Multiple investment options', 'Strong passport', 'Commonwealth member'],
    requirements: ['Background checks', 'Medical examination', 'Investment commitment'],
    fees: {
      government: 240000,
      legal: 20000,
      due_diligence: 8000
    }
  },
  {
    id: 'malta',
    country: 'Malta',
    program_name: 'Malta Permanent Residence Programme',
    min_investment: 1150000,
    processing_time_months: 14,
    visa_free_destinations: 186,
    investment_options: ['Real Estate', 'Government Bonds', 'Donation'],
    family_inclusion: true,
    dual_citizenship_allowed: true,
    residency_requirements: '12 months residency before citizenship',
    key_benefits: ['EU citizenship', 'Strongest passport', 'High-quality healthcare'],
    requirements: ['EU residency', 'Substantial investment', 'Clean background'],
    fees: {
      government: 1150000,
      legal: 50000,
      due_diligence: 15000
    }
  }
];

// AI-powered recommendation algorithm
function generateRecommendations(formData: FormData): CitizenshipRecommendation[] {
  const recommendations: CitizenshipRecommendation[] = [];
  
  // Parse investment amount
  const investmentAmount = parseFloat(formData.investment_amount.replace(/[^0-9.]/g, '')) || 0;
  
  for (const program of CITIZENSHIP_PROGRAMS) {
    let score = 0;
    const reasons: string[] = [];
    const highlights: string[] = [];
    
    // Investment amount matching
    if (investmentAmount >= program.min_investment) {
      score += 30;
      reasons.push(`Your budget of $${investmentAmount.toLocaleString()} meets the minimum investment requirement`);
    } else {
      score -= 20;
    }
    
    // Processing time preference
    if (formData.processing_time.toLowerCase().includes('fast') || formData.processing_time.includes('6')) {
      if (program.processing_time_months <= 6) {
        score += 25;
        reasons.push(`Fast processing time of ${program.processing_time_months} months matches your preference`);
        highlights.push('Fast Processing');
      }
    }
    
    // Family inclusion
    if (formData.family_inclusion.toLowerCase().includes('need') || formData.family_inclusion.toLowerCase().includes('prefer')) {
      if (program.family_inclusion) {
        score += 20;
        reasons.push('Program includes family members in the application');
        highlights.push('Family Inclusion');
      }
    }
    
    // Dual citizenship
    if (formData.dual_citizenship.toLowerCase().includes('required') || formData.dual_citizenship.toLowerCase().includes('important')) {
      if (program.dual_citizenship_allowed) {
        score += 15;
        reasons.push('Allows dual citizenship as required');
        highlights.push('Dual Citizenship');
      }
    }
    
    // Visa-free travel
    if (formData.visa_destinations.toLowerCase().includes('europe') || formData.visa_destinations.toLowerCase().includes('us')) {
      if (program.visa_free_destinations > 140) {
        score += 15;
        reasons.push(`Strong passport with ${program.visa_free_destinations} visa-free destinations`);
        highlights.push('Strong Passport');
      }
    }
    
    // Investment type preference
    if (formData.investment_type.toLowerCase().includes('real estate')) {
      if (program.investment_options.some(option => option.toLowerCase().includes('real estate'))) {
        score += 10;
        reasons.push('Offers real estate investment option as preferred');
        highlights.push('Real Estate Option');
      }
    }
    
    // Residency requirements
    if (formData.residency_preference.toLowerCase().includes('minimal') || formData.residency_preference.toLowerCase().includes('none')) {
      if (program.residency_requirements.toLowerCase().includes('no residency')) {
        score += 15;
        reasons.push('No residency requirement matches your preference');
        highlights.push('No Residency Required');
      }
    }
    
    // Add program-specific highlights
    highlights.push(...program.key_benefits.slice(0, 2));
    
    // Ensure minimum score for viable programs
    if (score < 20) score = 20;
    if (score > 100) score = 100;
    
    recommendations.push({
      program,
      match_score: score,
      reasons: reasons.slice(0, 4), // Limit to top 4 reasons
      investment_required: program.min_investment,
      estimated_timeline: `${program.processing_time_months} months`,
      key_highlights: [...new Set(highlights)].slice(0, 4) // Remove duplicates and limit
    });
  }
  
  // Sort by match score and return top 3
  return recommendations
    .sort((a, b) => b.match_score - a.match_score)
    .slice(0, 3);
}

// Generate user profile from form data
function generateUserProfile(formData: FormData): UserProfile {
  const investmentAmount = parseFloat(formData.investment_amount.replace(/[^0-9.]/g, '')) || 0;
  
  return {
    name: formData.name,
    current_citizenship: formData.current_citizenship,
    investment_budget: investmentAmount,
    priorities: [
      formData.tax_priority,
      formData.processing_time,
      formData.program_reputation
    ].filter(Boolean),
    preferences: {
      processing_time: formData.processing_time,
      tax_optimization: formData.tax_priority,
      family_inclusion: formData.family_inclusion,
      dual_citizenship: formData.dual_citizenship
    }
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecommendationResponse | { error: string }>
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    const formData: FormData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
    }
    
    // Generate recommendations
    const recommendations = generateRecommendations(formData);
    const userProfile = generateUserProfile(formData);
    
    const response: RecommendationResponse = {
      success: true,
      recommendations,
      user_profile: userProfile,
      timestamp: new Date().toISOString()
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

