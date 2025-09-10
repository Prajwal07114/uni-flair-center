import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Unauthorized() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Access Denied</CardTitle>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {user && (
            <div className="p-3 bg-muted rounded-lg text-center">
              <p className="text-sm">
                Logged in as: <span className="font-medium">{user.name}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Role: {user.role.replace('-', ' ')}
              </p>
            </div>
          )}
          
          <div className="space-y-2">
            <Link to="/" className="block">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go to Home
              </Button>
            </Link>
            
            <Button 
              onClick={logout}
              variant="destructive" 
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}