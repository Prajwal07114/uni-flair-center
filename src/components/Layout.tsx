import { useLocation } from "react-router-dom";
import { Sidebar } from "./navigation/Sidebar";
import { Topbar } from "./navigation/Topbar";
import { ChatBot } from "./ai/ChatBot";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  if (isLandingPage) {
    return (
      <div className="min-h-screen bg-background">
        {children}
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