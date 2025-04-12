
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AiDemoCall from "./pages/AiDemoCall";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form"
import { ThemeProvider } from "./components/theme-provider";
import Industries from "../src/pages/Industries"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPage from "./pages/CookiesPage";
import TermsConditionPage from "./pages/TermsConditionsPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="viteTheme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="ai/demo/free" element={<Form />} />
          <Route path="integration" element={<Industries />} />
          <Route path="ai/demo/agents" element={<AiDemoCall />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/use-of-cookies" element={<CookiesPage />} />
          <Route path="/legal/omnisolai/terms-and-conditions" element={<TermsConditionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
