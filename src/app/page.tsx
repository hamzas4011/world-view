'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* 🌍 Hero Section */}
      <section className="text-center px-4 pt-20 pb-16 bg-gradient-to-tr from-blue-50 to-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">🌍 Welcome to World View App</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 mb-6">
          Discover the world’s countries, cultures, flags, and facts — all in one place.
          Built for everyone, everywhere.
        </p>
        <Link
          href="/explore"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Start Exploring
        </Link>
      </section>

      {/* ✨ What Can You Do Section */}
      <section className="bg-white py-16 px-6" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          ✨ What Can You Do Here?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          <div>
            <div className="text-5xl mb-3" role="img" aria-label="Map emoji">🗺️</div>
            <h3 className="text-lg font-bold mb-1">Explore Countries</h3>
            <p className="text-sm text-gray-600">Browse 250+ nations and their unique data.</p>
          </div>
          <div>
            <div className="text-5xl mb-3" role="img" aria-label="Flag emoji">🏳️</div>
            <h3 className="text-lg font-bold mb-1">View Flags</h3>
            <p className="text-sm text-gray-600">See the flags of the world in one place.</p>
          </div>
          <div>
            <div className="text-5xl mb-3" role="img" aria-label="Language emoji">🔤</div>
            <h3 className="text-lg font-bold mb-1">Discover Languages</h3>
            <p className="text-sm text-gray-600">Learn which languages are spoken around the globe.</p>
          </div>
          <div>
            <div className="text-5xl mb-3" role="img" aria-label="Search emoji">🔍</div>
            <h3 className="text-lg font-bold mb-1">Smart Search</h3>
            <p className="text-sm text-gray-600">Filter by country name or region easily.</p>
          </div>
        </div>
      </section>

      {/* 🧠 Why World View Section */}
      <section className="bg-blue-50 px-6 pt-12 pb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why World View?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          World View is a simple, accessible, and beautiful way to learn more about the countries we share our planet with.
          Whether you are curious, researching, or learning — this is your global starting point.
        </p>
      </section>
    </>
  );
}