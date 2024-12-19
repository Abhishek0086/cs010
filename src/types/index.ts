export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student';
  avatar?: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  enrollmentDate: string;
  studentId: string;
  courses: Course[];
  grades: Grade[];
}

export interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
  instructor: string;
  credits: number;
  students: Student[];
}

export interface Grade {
  id: string;
  studentId: string;
  courseId: string;
  type: 'assignment' | 'exam' | 'quiz';
  score: number;
  maxScore: number;
  date: string;
  feedback?: string;
}