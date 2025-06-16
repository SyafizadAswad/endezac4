import { Subject, Occupation } from '@/types';

export const sampleSubjects: Subject[] = [
  {
    id: 'EE101',
    name: 'Introduction to Electrical Engineering',
    code: 'EE101',
    credits: 3,
    semester: 1,
    syllabus: 'Basic concepts of electrical engineering, circuit analysis, and electronics.',
    prerequisites: [],
    category: 'core'
  },
  {
    id: 'EE201',
    name: 'Digital Electronics',
    code: 'EE201',
    credits: 3,
    semester: 2,
    syllabus: 'Digital logic, Boolean algebra, and digital circuit design.',
    prerequisites: ['EE101'],
    category: 'core'
  },
  {
    id: 'EE301',
    name: 'Communication Systems',
    code: 'EE301',
    credits: 3,
    semester: 3,
    syllabus: 'Analog and digital communication systems, modulation techniques.',
    prerequisites: ['EE201'],
    category: 'specialized'
  }
];

export const sampleOccupations: Occupation[] = [
  {
    id: 'elec_eng',
    name: 'Electrical Engineer',
    description: 'Design and develop electrical systems and equipment.',
    requiredSkills: ['circuit analysis', 'power systems', 'control systems'],
    recommendedSubjects: ['EE101', 'EE201']
  },
  {
    id: 'comm_eng',
    name: 'Communication Engineer',
    description: 'Design and implement communication systems and networks.',
    requiredSkills: ['signal processing', 'communication systems', 'networking'],
    recommendedSubjects: ['EE101', 'EE201', 'EE301']
  }
]; 