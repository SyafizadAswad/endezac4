export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  semester: number;
  syllabus: string;
  prerequisites: string[];
  category: 'core' | 'elective' | 'specialized';
}

export interface RoadmapNode {
  id: string;
  subject: Subject;
  level: number;
  position: number;
  connections: string[]; // IDs of connected nodes
}

export interface Occupation {
  id: string;
  name: string;
  description: string;
  requiredSkills: string[];
  recommendedSubjects: string[]; // Subject IDs
}

export interface RoadmapResponse {
  occupation: Occupation;
  roadmap: RoadmapNode[];
  explanation: string;
} 