import type { NextApiRequest, NextApiResponse } from 'next';

type HealthResponse = {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const response: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  };
  
  res.status(200).json(response);
}

