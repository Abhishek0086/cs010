import { Course } from '@/types';

export async function getCourses(): Promise<Course[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Introduction to Computer Science',
          code: 'CS101',
          description: 'Fundamental concepts of programming and computer science',
          instructor: 'Dr. Jane Smith',
          credits: 3,
          students: [],
        },
        // Add more mock data as needed
      ]);
    }, 500);
  });
}

export async function getCourse(id: string): Promise<Course> {
  const courses = await getCourses();
  const course = courses.find((c) => c.id === id);
  if (!course) throw new Error('Course not found');
  return course;
}