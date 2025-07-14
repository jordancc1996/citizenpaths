import React, { useState } from 'react';
import { FormData, QuestionnaireProps, FormErrors } from '@/types';

const Questionnaire: React.FC<QuestionnaireProps> = ({ onSubmit, loading, error }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    current_citizenship: '',
    investment_amount: '',
    investment_type: '',
    tax_priority: '',
    processing_time: '',
    visa_destinations: '',
    family_inclusion: '',
    residency_preference: '',
    economic_profile: '',
    dual_citizenship: '',
    program_reputation: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="form-card fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-crimson font-semibold text-brand-dark-gray mb-4">
          Where Could You Belong?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Answer a few questions to get personalized citizenship recommendations 
          based on current programs and requirements.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          <p className="font-medium">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <section>
          <h3 className="section-header">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">My name is</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className={`form-input flex-1 min-w-[200px] ${errors.name ? 'border-red-500' : ''}`}
                disabled={loading}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">and I currently hold citizenship in</span>
              <input
                type="text"
                name="current_citizenship"
                value={formData.current_citizenship}
                onChange={handleInputChange}
                placeholder="Country (e.g., United States)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
            </div>
          </div>
        </section>

        {/* Investment & Financial Factors */}
        <section>
          <h3 className="section-header">Investment & Financial Factors</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">I'm prepared to invest</span>
              <input
                type="text"
                name="investment_amount"
                value={formData.investment_amount}
                onChange={handleInputChange}
                placeholder="Amount (e.g., $500,000)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">My preferred investment type is</span>
              <input
                type="text"
                name="investment_type"
                value={formData.investment_type}
                onChange={handleInputChange}
                placeholder="Investment type (e.g., Real Estate)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">Tax optimization is</span>
              <input
                type="text"
                name="tax_priority"
                value={formData.tax_priority}
                onChange={handleInputChange}
                placeholder="Priority level (e.g., Critical)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">to me.</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">I need the citizenship processed within</span>
              <input
                type="text"
                name="processing_time"
                value={formData.processing_time}
                onChange={handleInputChange}
                placeholder="Timeframe (e.g., 12 months)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
            </div>
          </div>
        </section>

        {/* Travel & Mobility */}
        <section>
          <h3 className="section-header">Travel & Mobility</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">I frequently travel to</span>
              <input
                type="text"
                name="visa_destinations"
                value={formData.visa_destinations}
                onChange={handleInputChange}
                placeholder="Destinations (e.g., Europe, US)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">and need visa-free access.</span>
            </div>
          </div>
        </section>

        {/* Lifestyle & Long-term Goals */}
        <section>
          <h3 className="section-header">Lifestyle & Long-term Goals</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">For family inclusion, I</span>
              <input
                type="text"
                name="family_inclusion"
                value={formData.family_inclusion}
                onChange={handleInputChange}
                placeholder="need/prefer/don't need"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">this option.</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">My residency requirement preference is</span>
              <input
                type="text"
                name="residency_preference"
                value={formData.residency_preference}
                onChange={handleInputChange}
                placeholder="Preference (e.g., Minimal)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">I prefer countries with</span>
              <input
                type="text"
                name="economic_profile"
                value={formData.economic_profile}
                onChange={handleInputChange}
                placeholder="Economic profile (e.g., Stable)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">economic stability.</span>
            </div>
          </div>
        </section>

        {/* Legal & Ethical Considerations */}
        <section>
          <h3 className="section-header">Legal & Ethical Considerations</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">Dual citizenship is</span>
              <input
                type="text"
                name="dual_citizenship"
                value={formData.dual_citizenship}
                onChange={handleInputChange}
                placeholder="Status (e.g., Required)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">for my situation.</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">Program reputation is</span>
              <input
                type="text"
                name="program_reputation"
                value={formData.program_reputation}
                onChange={handleInputChange}
                placeholder="Importance (e.g., Critical)"
                className="form-input flex-1 min-w-[200px]"
                disabled={loading}
              />
              <span className="text-gray-700">to me.</span>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h3 className="section-header">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">My email address is</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`form-input flex-1 min-w-[250px] ${errors.email ? 'border-red-500' : ''}`}
                disabled={loading}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={loading}
            className="primary-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="loading-spinner"></div>
                <span>Analyzing Your Profile...</span>
              </div>
            ) : (
              'Get My Citizenship Strategy'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;

