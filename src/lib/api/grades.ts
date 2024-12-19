import { Grade } from '@/types';

export async function getGrades(): Promise<Grade[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          studentId: 'STU001',
          courseId: 'CS101',
          type: 'assignment',
          score: 85,
          maxScore: 100,
          date: '2024-03-15',
          feedback: 'Good work on the implementation',
        },
        // Add more mock data as needed
      ]);
    }, 500);
  });
}