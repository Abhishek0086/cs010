import { Users, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';

const performanceData = [
  { date: 'Jan', average: 85 },
  { date: 'Feb', average: 82 },
  { date: 'Mar', average: 88 },
  { date: 'Apr', average: 86 },
  { date: 'May', average: 89 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your academic management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="256"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          description="12% increase from last month"
        />
        <StatCard
          title="Active Courses"
          value="24"
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
          description="4 new courses this semester"
        />
        <StatCard
          title="Average Grade"
          value="87.5%"
          icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />}
          description="3.2% increase from last semester"
        />
        <StatCard
          title="Performance Trend"
          value="+4.3%"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          description="Positive trend in last 30 days"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PerformanceChart data={performanceData} />
        {/* Add more dashboard widgets here */}
      </div>
    </div>
  );
}