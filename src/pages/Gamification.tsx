import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Zap,
  Target,
  Crown,
  TrendingUp,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Academic Star",
    description: "Complete 5 academic activities",
    icon: Star,
    progress: 100,
    unlocked: true,
    points: 100,
    color: "text-yellow-500",
  },
  {
    id: 2,
    title: "Sports Champion",
    description: "Win 3 sports competitions",
    icon: Trophy,
    progress: 67,
    unlocked: false,
    points: 150,
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Community Helper", 
    description: "Complete 10 community service hours",
    icon: Award,
    progress: 80,
    unlocked: false,
    points: 120,
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Leadership Excellence",
    description: "Lead 2 student organizations",
    icon: Crown,
    progress: 50,
    unlocked: false,
    points: 200,
    color: "text-purple-500",
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "Alice Johnson",
    id: "CS2021001",
    points: 2450,
    activities: 28,
    badge: "🏆",
  },
  {
    rank: 2,
    name: "John Doe", 
    id: "CS2021002",
    points: 1250,
    activities: 24,
    badge: "🥈",
    isCurrentUser: true,
  },
  {
    rank: 3,
    name: "Sarah Wilson",
    id: "CS2021003", 
    points: 1180,
    activities: 22,
    badge: "🥉",
  },
  {
    rank: 4,
    name: "Mike Chen",
    id: "CS2021004",
    points: 980,
    activities: 19,
    badge: "",
  },
  {
    rank: 5,
    name: "Emily Davis",
    id: "CS2021005",
    points: 856,
    activities: 17,
    badge: "",
  },
];

const pointsHistory = [
  { activity: "Mathematics Olympiad", points: 50, date: "Jan 15, 2024" },
  { activity: "AI Workshop", points: 30, date: "Jan 12, 2024" },
  { activity: "Basketball Tournament", points: 25, date: "Jan 10, 2024" },
  { activity: "Science Fair", points: 40, date: "Jan 8, 2024" },
  { activity: "Coding Competition", points: 35, date: "Jan 5, 2024" },
];

export default function Gamification() {
  const currentUserPoints = 1250;
  const nextLevelPoints = 1500;
  const levelProgress = (currentUserPoints / nextLevelPoints) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Your Achievements</h1>
        <p className="text-muted-foreground">Track your progress and compete with peers</p>
      </div>

      {/* User Level & Points */}
      <Card className="bg-gradient-primary text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Level 8 Scholar</h3>
                <p className="text-white/80">John Doe • CS2021002</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{currentUserPoints}</div>
              <div className="text-white/80 text-sm">Total Points</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level 9</span>
              <span>{currentUserPoints} / {nextLevelPoints}</span>
            </div>
            <Progress value={levelProgress} className="h-2 bg-white/20" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border transition-colors ${
                  achievement.unlocked 
                    ? 'bg-success/5 border-success/20' 
                    : 'bg-muted/50 border-border'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full bg-background ${achievement.color}`}>
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <Badge variant={achievement.unlocked ? "default" : "secondary"}>
                        {achievement.points} pts
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboard.map((user) => (
              <div
                key={user.id}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  user.isCurrentUser 
                    ? 'bg-primary/5 border border-primary/20' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-lg font-bold w-8 text-center">
                    {user.rank <= 3 ? user.badge : `#${user.rank}`}
                  </div>
                  
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{user.name}</span>
                      {user.isCurrentUser && (
                        <Badge variant="outline" className="text-xs">You</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {user.activities} activities • {user.id}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-primary">{user.points}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Points History */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            Recent Point Earnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pointsHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{item.activity}</h4>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <Badge className="bg-success text-success-foreground">
                  +{item.points} pts
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Challenge */}
      <Card className="bg-gradient-card border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="inline-flex p-3 bg-primary/10 rounded-full">
              <Target className="h-8 w-8 text-primary" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold">January Challenge</h3>
              <p className="text-muted-foreground">Complete 8 activities this month</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>6 / 8 activities</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <p className="text-sm">
              <span className="font-medium">250 bonus points</span> for completing this challenge!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}