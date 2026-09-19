import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import CoreReactPage from "./pages/CoreReactPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import SectionPlaceholder from "./pages/SectionPlaceholder.jsx";
import HooksPage from "./pages/HooksPage.jsx";
import FormsPage from "./pages/FormsPage.jsx";
import RenderingPage from "./pages/RenderingPage.jsx";
import PatternsPage from "./pages/PatternsPage.jsx";
import PerformancePage from "./pages/PerformancePage.jsx";
import PracticePage from "./pages/PracticePage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="core" element={<CoreReactPage />} />
        <Route path="hooks" element={<HooksPage />} />
        <Route path="forms" element={<FormsPage />} />
        <Route path="rendering" element={<RenderingPage />} />
        <Route path="patterns" element={<PatternsPage />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

