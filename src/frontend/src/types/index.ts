export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  specifications: Record<string, string>;
  certifications: string[];
  image: string;
  images: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  deliveryTime: string;
  fileFormats: string[];
  software: string[];
  standards: string[];
  images: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
