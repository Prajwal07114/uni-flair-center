import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export const Topbar = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search activities, courses..."
            className="pl-9"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Welcome, {user.name.split(' ')[0]}
        </span>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};