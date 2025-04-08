
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AiDemoCall from "./pages/AiDemoCall";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import Industries from "../src/pages/Industries"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="viteTheme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="ai/demo/free" element={<AiDemoCall />} />
          <Route path="integration" element={<Industries />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
