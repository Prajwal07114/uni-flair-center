import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, Users, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Smart Student Hub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Your Academic Journey,
            <br />
            Perfectly Organized
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track activities, build your portfolio, and unlock achievements while staying connected with your academic community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="shadow-card hover:shadow-floating transition-shadow">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Activity Tracking</h3>
              <p className="text-muted-foreground">
                Log and manage all your academic and extracurricular activities with ease.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-shadow">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-warning" />
              <h3 className="text-xl font-semibold mb-2">Gamification</h3>
              <p className="text-muted-foreground">
                Earn points, unlock badges, and compete on leaderboards for your achievements.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-success" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Connect with faculty and peers through streamlined approval workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">15,000+</div>
              <div className="text-muted-foreground">Activities Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">500+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}