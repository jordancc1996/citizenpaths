import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Questionnaire from '@/components/Questionnaire';
import Results from '@/components/Results';
import { FormData, CitizenshipRecommendation, UserProfile, LoadingState } from '@/types';
import { apiService, ApiError } from '@/lib/api';

const Home: NextPage = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CitizenshipRecommendation[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setLoadingState('loading');
    setError(null);

    try {
      const response = await apiService.getRecommendations(formData);
      
      if (response.success) {
        setRecommendations(response.recommendations);
        setUserProfile(response.user_profile);
        setShowResults(true);
        setLoadingState('success');
      } else {
        throw new Error('Failed to get recommendations');
      }
    } catch (err) {
      setLoadingState('error');
      
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      
      console.error('API Error:', err);
    }
  };

  const handleRetakeAssessment = () => {
    setShowResults(false);
    setRecommendations([]);
    setUserProfile(null);
    setLoadingState('idle');
    setError(null);
  };

  return (
    <Layout>
      {!showResults ? (
        <Questionnaire
          onSubmit={handleFormSubmit}
          loading={loadingState === 'loading'}
          error={error}
        />
      ) : (
        userProfile && (
          <Results
            recommendations={recommendations}
            userProfile={userProfile}
            onRetake={handleRetakeAssessment}
          />
        )
      )}
    </Layout>
  );
};

export default Home;

