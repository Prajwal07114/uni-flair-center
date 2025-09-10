import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, BarChart3, Home, Trophy } from "lucide-react";

export default function StudentHub() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Student Hub</h1>
        <p className="text-muted-foreground mt-2">Access your profile and track activities</p>
      </div>

      {/* Student Profile Section */}
      <Card className="overflow-hidden shadow-card">
        <div className="h-32 bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Student Profile</h2>
            <p className="text-muted-foreground">
              View and manage your academic and personal information.
            </p>
          </div>
          
          <Link to="/portfolio" className="block">
            <Button className="w-full justify-center gap-2 bg-blue-500 hover:bg-blue-600" size="lg">
              Go to Profile
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Activity Tracker Section */}
      <Card className="overflow-hidden shadow-card">
        <div className="h-32 bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <div className="relative w-24 h-24 rounded-full bg-white/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-success flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Decorative paper and pen illustration elements */}
          <div className="absolute left-4 top-4 w-8 h-10 bg-white/40 rounded-sm transform rotate-12"></div>
          <div className="absolute right-6 bottom-4 w-12 h-1 bg-green-300/60 rounded-full transform -rotate-12"></div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Activity Tracker</h2>
            <p className="text-muted-foreground">
              Track your participation in various campus activities and events.
            </p>
          </div>
          
          <Link to="/activities" className="block">
            <Button className="w-full justify-center gap-2 bg-green-500 hover:bg-green-600" size="lg">
              View Activities
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-4 gap-1 bg-muted p-1 rounded-lg">
        <Link to="/dashboard" className="flex flex-col items-center p-3 rounded-md bg-primary text-primary-foreground">
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Dashboard</span>
        </Link>
        <Link to="/portfolio" className="flex flex-col items-center p-3 rounded-md bg-primary text-primary-foreground">
          <User className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium text-muted-foreground">Profile</span>
        </Link>
        <Link to="/activities" className="flex flex-col items-center p-3 rounded-md hover:bg-muted-foreground/10 transition-colors">
          <BarChart3 className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium text-muted-foreground">Activities</span>
        </Link>
        <Link to="/gamification" className="flex flex-col items-center p-3 rounded-md hover:bg-muted-foreground/10 transition-colors">
          <Trophy className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium text-muted-foreground">Achievements</span>
        </Link>
      </div>
    </div>
  );
}