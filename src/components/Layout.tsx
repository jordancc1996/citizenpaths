import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'CitizenPaths | AI-Powered Citizenship by Investment Solutions',
  description = 'Discover your optimal citizenship by investment path with AI-powered recommendations based on current programs and requirements.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CitizenPaths" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="CitizenPaths" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="hero-section py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-crimson font-bold mb-4">
              CitizenPaths
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Discover Your Optimal Citizenship by Investment Path
            </p>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-brand-dark-gray text-brand-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">
              © 2024 CitizenPaths. Professional citizenship by investment guidance.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              AI-powered recommendations • Real-time program data • Expert analysis
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

