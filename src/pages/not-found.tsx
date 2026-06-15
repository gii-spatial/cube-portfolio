import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">
        {/* Sad Square Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative h-16 w-16 rounded-xl border-2 border-gray-800">
            {/* eyes */}
            <div className="absolute left-4 top-5 h-1 w-1 rounded-full bg-gray-800" />
            <div className="absolute right-4 top-5 h-1 w-1 rounded-full bg-gray-800" />

            {/* sad mouth (curved upward = sad) */}
            <div className="absolute bottom-3 left-1/2 h-2 w-6 -translate-x-1/2 border-t-2 border-gray-800 rounded-t-full" />
          </div>
        </div>

        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">404</h1>

        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            Go back
          </a>
        </div>
      </div>
    </div>
  );
}
