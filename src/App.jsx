import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const Registration = lazy(() => import("./pages/Registration"));
const Rules = lazy(() => import("./pages/Rules"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Organizers = lazy(() => import("./pages/Organizers"));
const Media = lazy(() => import("./pages/Media"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Registration />} />
            <Route path="rules" element={<Rules />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="organizers" element={<Organizers />} />
            <Route path="media" element={<Media />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
