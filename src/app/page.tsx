'use client';

import React, { useState } from 'react';
import { Occupation, RoadmapResponse } from '@/types';

export default function Home() {
  const [occupation, setOccupation] = useState('');
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ occupation }),
      });
      const data = await response.json();
      setRoadmap(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tokushima University Course Planner
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                What is your dream occupation?
              </label>
              <input
                type="text"
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g., Electrical Engineer, Communication Engineer"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Generating Roadmap...' : 'Generate Roadmap'}
            </button>
          </form>

          {roadmap && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">{roadmap.occupation.name}</h2>
              <p className="text-gray-600 mb-6">{roadmap.explanation}</p>
              <div className="space-y-4">
                {roadmap.roadmap.map((node) => (
                  <div key={node.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium">{node.subject.name}</h3>
                    <p className="text-sm text-gray-500">{node.subject.code} - {node.subject.credits} credits</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 