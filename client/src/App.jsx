import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {!welcomeComplete ? (
        <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
      ) : (
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Analytics />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;