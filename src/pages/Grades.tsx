import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getGrades } from '@/lib/api/grades';

export default function Grades() {
  const [courseFilter, setCourseFilter] = useState('all');
  const [search, setSearch] = useState('');

  const { data: grades = [], isLoading } = useQuery({
    queryKey: ['grades'],
    queryFn: getGrades,
  });

  const filteredGrades = grades.filter((grade) => {
    const matchesSearch = `${grade.studentId} ${grade.type}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCourse = courseFilter === 'all' || grade.courseId === courseFilter;
    return matchesSearch && matchesCourse;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Grades</h1>
        <p className="text-muted-foreground">
          View and manage student grades across all courses
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search grades..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select
          value={courseFilter}
          onValueChange={setCourseFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="cs101">CS101</SelectItem>
            <SelectItem value="math201">MATH201</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-full h-12 bg-muted rounded animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell>{grade.studentId}</TableCell>
                  <TableCell>{grade.courseId}</TableCell>
                  <TableCell className="capitalize">{grade.type}</TableCell>
                  <TableCell>{grade.score}/{grade.maxScore}</TableCell>
                  <TableCell>{new Date(grade.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}