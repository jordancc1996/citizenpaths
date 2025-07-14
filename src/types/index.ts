// Form data types
export interface FormData {
  name: string;
  current_citizenship: string;
  investment_amount: string;
  investment_type: string;
  tax_priority: string;
  processing_time: string;
  visa_destinations: string;
  family_inclusion: string;
  residency_preference: string;
  economic_profile: string;
  dual_citizenship: string;
  program_reputation: string;
  email: string;
}

// Citizenship program types
export interface CitizenshipProgram {
  id: string;
  country: string;
  program_name: string;
  min_investment: number;
  max_investment?: number;
  processing_time_months: number;
  visa_free_destinations: number;
  investment_options: string[];
  family_inclusion: boolean;
  dual_citizenship_allowed: boolean;
  residency_requirements: string;
  key_benefits: string[];
  requirements: string[];
  fees: {
    government: number;
    legal: number;
    due_diligence: number;
  };
}

// API response types
export interface RecommendationResponse {
  success: boolean;
  recommendations: CitizenshipRecommendation[];
  user_profile: UserProfile;
  timestamp: string;
}

export interface CitizenshipRecommendation {
  program: CitizenshipProgram;
  match_score: number;
  reasons: string[];
  investment_required: number;
  estimated_timeline: string;
  key_highlights: string[];
}

export interface UserProfile {
  name: string;
  current_citizenship: string;
  investment_budget: number;
  priorities: string[];
  preferences: {
    processing_time: string;
    tax_optimization: string;
    family_inclusion: string;
    dual_citizenship: string;
  };
}

// Component props types
export interface QuestionnaireProps {
  onSubmit: (data: FormData) => void;
  loading: boolean;
  error: string | null;
}

export interface ResultsProps {
  recommendations: CitizenshipRecommendation[];
  userProfile: UserProfile;
  onRetake: () => void;
}

export interface ProgramCardProps {
  recommendation: CitizenshipRecommendation;
  rank: number;
}

// API error types
export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Form validation types
export interface FormErrors {
  [key: string]: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

