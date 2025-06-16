import { NextResponse } from 'next/server';
import { sampleSubjects, sampleOccupations } from '@/data/sampleData';
import { RoadmapResponse } from '@/types';

export async function POST(request: Request) {
  try {
    const { occupation } = await request.json();

    // TODO: Implement Gemini API integration
    // For now, return mock data
    const mockResponse: RoadmapResponse = {
      occupation: sampleOccupations[0],
      roadmap: sampleSubjects.map((subject, index) => ({
        id: `node-${index}`,
        subject,
        level: Math.floor(index / 2),
        position: index % 2,
        connections: []
      })),
      explanation: `This roadmap is designed for ${occupation} career path.`
    };

    return NextResponse.json(mockResponse);
  } catch (error) {
    console.error('Error generating roadmap:', error);
    return NextResponse.json(
      { error: 'Failed to generate roadmap' },
      { status: 500 }
    );
  }
} 