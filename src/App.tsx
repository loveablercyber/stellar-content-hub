
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import MainLayout from "@/components/layout/MainLayout";
import AuthenticatedRoute from "@/components/auth/AuthenticatedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import PagesListPage from "./pages/PagesListPage";
import PageEditorPage from "./pages/PageEditorPage";
import SettingsPage from "./pages/SettingsPage";
import StatisticsPage from "./pages/StatisticsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route element={
              <AuthenticatedRoute>
                <MainLayout />
              </AuthenticatedRoute>
            }>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/pages" element={<PagesListPage />} />
              <Route path="/pages/new" element={<PageEditorPage />} />
              <Route path="/pages/:id" element={<PageEditorPage />} />
              <Route path="/pages/:id/edit" element={<PageEditorPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
