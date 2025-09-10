import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Layout } from "./components/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities";
import Faculty from "./pages/Faculty";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";
import ClubDashboard from "./pages/ClubDashboard";
import Gamification from "./pages/Gamification";
import StudentHub from "./pages/StudentHub";
import StudentRepresentative from "./pages/StudentRepresentative";
import Login from "./pages/auth/Login";
import Unauthorized from "./pages/auth/Unauthorized";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/activities" element={
                <ProtectedRoute>
                  <Activities />
                </ProtectedRoute>
              } />
              
              <Route path="/portfolio" element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              } />
              
              <Route path="/gamification" element={
                <ProtectedRoute>
                  <Gamification />
                </ProtectedRoute>
              } />
              
              <Route path="/student-hub" element={
                <ProtectedRoute>
                  <StudentHub />
                </ProtectedRoute>
              } />
              
              <Route path="/student-representative" element={
                <ProtectedRoute>
                  <StudentRepresentative />
                </ProtectedRoute>
              } />
              
              <Route path="/faculty" element={
                <ProtectedRoute>
                  <Faculty />
                </ProtectedRoute>
              } />
              
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              
              <Route path="/club" element={
                <ProtectedRoute>
                  <ClubDashboard />
                </ProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
