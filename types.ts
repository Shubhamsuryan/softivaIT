// FIX: Import React to provide the React namespace for React.ReactNode.
import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  isFeatured: boolean;
}

export interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export interface Solution {
    industry: string;
    description: string;
    useCases: string[];
    icon: React.ReactNode;
    benefits?: string[];
    link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
}