import React from 'react';
import { Link } from 'react-router-dom';

const trainings = [
  {
    to: '/training/tungsten-totalagility',
    title: 'Tungsten TotalAgility',
    description: 'Build and scale intelligent automation workflows.',
  },
  {
    to: '/training/gcp',
    title: 'GCP',
    description: 'Learn Google Cloud best practices for document AI.',
  },
  {
    to: '/training/azure',
    title: 'Azure',
    description: 'Master Azure Document Intelligence integrations.',
  },
];

const TrainingPage: React.FC = () => {
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">Training</h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600 text-center">
          Upskill your team with hands-on training across leading IDP and cloud platforms.
        </p>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {trainings.map((training) => (
              <Link
                key={training.to}
                to={training.to}
                className="block rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-neutral-900">{training.title}</h2>
                <p className="mt-2 text-neutral-600">{training.description}</p>
                <div className="mt-4 text-primary font-semibold">View details</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;

