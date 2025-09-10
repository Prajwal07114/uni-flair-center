import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Upload,
  FileText,
  Download,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";

const performanceData = [
  { subject: "Math", score: 85 },
  { subject: "Physics", score: 92 },
  { subject: "Chemistry", score: 78 },
  { subject: "Biology", score: 88 },
  { subject: "English", score: 90 },
];

const activityData = [
  { name: "Academic", value: 45, color: "hsl(217, 91%, 60%)" },
  { name: "Sports", value: 25, color: "hsl(142, 71%, 45%)" },
  { name: "Cultural", value: 20, color: "hsl(38, 92%, 50%)" },
  { name: "Community", value: 10, color: "hsl(262, 52%, 47%)" },
];

const recentActivities = [
  {
    id: 1,
    title: "Mathematics Olympiad",
    type: "Academic",
    date: "2024-01-15",
    status: "approved",
    points: 50,
  },
  {
    id: 2,
    title: "Basketball Tournament",
    type: "Sports",
    date: "2024-01-12",
    status: "pending",
    points: 30,
  },
  {
    id: 3,
    title: "Science Fair Project",
    type: "Academic",
    date: "2024-01-10",
    status: "rejected",
    points: 0,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-white/80">Here's your academic progress overview</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">1,250</div>
            <div className="text-white/80 text-sm">Total Points</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-2xl font-bold text-success">94%</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">CGPA</p>
                <p className="text-2xl font-bold text-primary">8.6</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Activities</p>
                <p className="text-2xl font-bold text-warning">24</p>
              </div>
              <BookOpen className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Badges</p>
                <p className="text-2xl font-bold text-accent">12</p>
              </div>
              <Award className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 border border-border rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {activity.type} • {activity.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      activity.status === "approved"
                        ? "default"
                        : activity.status === "pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {activity.status}
                  </Badge>
                  <span className="text-sm font-medium">{activity.points} pts</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" size="lg">
              <Upload className="mr-2 h-4 w-4" />
              Upload New Activity
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <FileText className="mr-2 h-4 w-4" />
              View Portfolio
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Progress Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Semester Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Course Completion</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Assignment Submission</span>
              <span>88%</span>
            </div>
            <Progress value={88} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Extracurricular Goals</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}