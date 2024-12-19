import { Student } from '@/types';

// Simulated API calls - replace with actual API endpoints
export async function getStudents(): Promise<Student[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          enrollmentDate: '2023-09-01',
          studentId: 'STU001',
          courses: [],
          grades: [],
        },
        // Add more mock data as needed
      ]);
    }, 500);
  });
}

export async function getStudent(id: string): Promise<Student> {
  const students = await getStudents();
  const student = students.find((s) => s.id === id);
  if (!student) throw new Error('Student not found');
  return student;
}