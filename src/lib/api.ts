import { FormData, RecommendationResponse, ApiError } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status.toString(),
          errorData
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Network or other errors
      throw new ApiError(
        'Network error. Please check your connection and try again.',
        'NETWORK_ERROR',
        error
      );
    }
  }

  async getRecommendations(formData: FormData): Promise<RecommendationResponse> {
    return this.request<RecommendationResponse>('/recommendations', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

// Custom error class for API errors
class ApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Export singleton instance
export const apiService = new ApiService();
export { ApiError };

