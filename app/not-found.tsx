import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow mx-auto">Error 404</p>
        <h1 className="mt-6 text-7xl font-bold gradient-text sm:text-8xl">404</h1>
        <h2 className="mt-4 heading-md text-secondary">Page not found</h2>
        <p className="lead mx-auto mt-4 max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/#contact" className="btn-secondary">
            <Search className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
