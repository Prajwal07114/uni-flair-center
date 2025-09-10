import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  BookOpen,
  Trophy,
  Users,
  FileText,
  Settings,
  Menu,
  X,
  GraduationCap,
  LogOut,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  role?: string;
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/student-hub", label: "Student Hub", icon: BookOpen },
  { href: "/activities", label: "Activities", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: FileText },
  { href: "/gamification", label: "Achievements", icon: Trophy },
  { href: "/faculty", label: "Faculty Panel", icon: Users, role: "faculty" },
  { href: "/admin", label: "Admin Panel", icon: Settings, role: "admin" },
  { href: "/club", label: "Club Dashboard", icon: Users, role: "club" },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth();
  
  if (!user) return null;
  
  const userRole = user.role === 'student-representative' ? 'admin' : 
                   user.role === 'teacher' ? 'faculty' : 'student';

  const filteredNavItems = navItems.filter(
    (item) => !item.role || item.role === userRole
  );

  return (
    <div
      className={cn(
        "bg-card border-r border-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                Student Hub
              </span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                "hover:bg-muted",
                isActive && "bg-primary text-primary-foreground",
                isCollapsed && "justify-center"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
          <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-white">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.role.replace('-', ' ')}</p>
            </div>
          )}
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={logout}
              className="h-8 w-8"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};