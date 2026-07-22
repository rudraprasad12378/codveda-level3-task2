import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Features = lazy(() => import("../components/Features"));
const Gallery = lazy(() => import("../components/Gallery"));
const Footer = lazy(() => import("../components/Footer"));

function Loader() {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary"></div>
      <p className="mt-3">Loading...</p>
    </div>
  );
}

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </Suspense>
  );
}

export default Home;