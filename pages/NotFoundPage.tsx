import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-4 text-neutral-600 max-w-2xl">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
        >
          Go to homepage
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 hover:bg-neutral-50"
        >
          Contact support
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

