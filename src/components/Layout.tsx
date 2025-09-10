import { useLocation } from "react-router-dom";
import { Sidebar } from "./navigation/Sidebar";
import { Topbar } from "./navigation/Topbar";
import { ChatBot } from "./ai/ChatBot";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const isLandingPage = location.pathname === "/";
  const isAuthPage = location.pathname.startsWith("/login") || 
                     location.pathname === "/unauthorized";

  if (isLandingPage || isAuthPage) {
    return (
      <div className="min-h-screen bg-background">
        {children}
      </div>
    );
  }

  // Show loading state while checking auth
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <ChatBot />
    </div>
  );
};