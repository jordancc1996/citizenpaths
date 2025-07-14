import React from 'react';
import { ResultsProps, CitizenshipRecommendation } from '@/types';
import { CheckCircle, Clock, DollarSign, Globe, Users, Shield } from 'lucide-react';

const ProgramCard: React.FC<{ recommendation: CitizenshipRecommendation; rank: number }> = ({ 
  recommendation, 
  rank 
}) => {
  const { program, match_score, reasons, investment_required, estimated_timeline, key_highlights } = recommendation;

  return (
    <div className="program-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="program-rank">{rank}</div>
          <div>
            <h3 className="text-xl font-crimson font-semibold text-brand-dark-gray">
              {program.country}
            </h3>
            <p className="text-gray-600">{program.program_name}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-brand-dark-gray">
            {Math.round(match_score)}%
          </div>
          <div className="text-sm text-gray-500">Match Score</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <DollarSign className="w-4 h-4 text-brand-light-gray" />
          <span className="font-medium">Investment:</span>
          <span>${investment_required.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="w-4 h-4 text-brand-light-gray" />
          <span className="font-medium">Timeline:</span>
          <span>{estimated_timeline}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-700">
          <Globe className="w-4 h-4 text-brand-light-gray" />
          <span className="font-medium">Visa-free:</span>
          <span>{program.visa_free_destinations} destinations</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-4 h-4 text-brand-light-gray" />
          <span className="font-medium">Family:</span>
          <span>{program.family_inclusion ? 'Included' : 'Not included'}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-brand-dark-gray mb-2">Key Highlights:</h4>
        <div className="flex flex-wrap gap-2">
          {key_highlights.map((highlight, index) => (
            <span key={index} className="highlight-badge">
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-brand-dark-gray mb-2">Why This Matches You:</h4>
        <ul className="space-y-1">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="secondary-button flex-1">
          Learn More
        </button>
        <button className="secondary-button flex-1">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};

const Results: React.FC<ResultsProps> = ({ recommendations, userProfile, onRetake }) => {
  return (
    <div className="fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-crimson font-semibold text-brand-dark-gray mb-4">
          Your Personalized Citizenship Recommendations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Based on your profile, here are the top citizenship by investment programs 
          that match your requirements and preferences.
        </p>
      </div>

      {/* User Profile Summary */}
      <div className="bg-brand-very-light-gray rounded-lg p-6 mb-8">
        <h3 className="text-xl font-crimson font-semibold text-brand-dark-gray mb-4">
          Your Profile Summary
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Current Citizenship:</span>
            <p className="text-brand-dark-gray">{userProfile.current_citizenship}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Investment Budget:</span>
            <p className="text-brand-dark-gray">${userProfile.investment_budget.toLocaleString()}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Processing Time:</span>
            <p className="text-brand-dark-gray">{userProfile.preferences.processing_time}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Family Inclusion:</span>
            <p className="text-brand-dark-gray">{userProfile.preferences.family_inclusion}</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6 mb-8">
        {recommendations.map((recommendation, index) => (
          <ProgramCard
            key={recommendation.program.id}
            recommendation={recommendation}
            rank={index + 1}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-brand-dark-gray text-brand-white rounded-lg p-8">
        <h3 className="text-2xl font-crimson font-semibold mb-4">
          Ready to Take the Next Step?
        </h3>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Our citizenship experts are ready to help you navigate the application process 
          and ensure you choose the right program for your unique situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-white text-brand-dark-gray px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Schedule Free Consultation
          </button>
          <button 
            onClick={onRetake}
            className="bg-brand-dark-gray text-brand-white border border-brand-white px-8 py-3 rounded-md font-semibold hover:bg-brand-medium-gray transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          * Recommendations are based on current program information and your provided preferences. 
          Investment amounts and processing times may vary. Please consult with our experts for 
          the most up-to-date information and personalized guidance.
        </p>
      </div>
    </div>
  );
};

export default Results;

