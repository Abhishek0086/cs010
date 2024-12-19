import { Student } from '@/types';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface StudentCardProps {
  student: Student;
  onClick?: () => void;
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage 
            src={`https://ui-avatars.com/api/?name=${student.firstName}+${student.lastName}`} 
            alt={`${student.firstName} ${student.lastName}`} 
          />
          <AvatarFallback>{student.firstName[0]}{student.lastName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{student.firstName} {student.lastName}</h3>
          <p className="text-sm text-muted-foreground">{student.email}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <Badge variant="secondary">ID: {student.studentId}</Badge>
          <span className="text-sm text-muted-foreground">
            Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}