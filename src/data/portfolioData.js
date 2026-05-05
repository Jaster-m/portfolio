import projectBusiness1 from '../assets/projects/project-business-1.png';
import projectTrading2 from '../assets/projects/project-trading-2.png';
import projectBusiness3 from '../assets/projects/project-business-3.png';
import projectSkincare4 from '../assets/projects/project-skincare-4.png';

const services = [
  {
    title: 'CMS Development & Customization',
    description:
      'Experienced in building and customizing WordPress and Joomla websites with flexible architecture, strong performance, and easy content control.',
    icon: 'CMS',
  },
  {
    title: 'E-commerce Development',
    description:
      'Skilled in developing and optimizing Shopify and BigCommerce stores, including product workflows, payment integration, and conversion improvements.',
    icon: 'ECM',
  },
  {
    title: 'Custom Front-End Development',
    description:
      'Modern, interactive applications built with HTML, CSS, JavaScript, React, and Next.js for speed, scalability, and maintainability.',
    icon: 'FED',
  },
  {
    title: 'Static Site Architecture',
    description:
      'Ultra-fast and SEO-friendly websites built with modern static site patterns that reduce overhead and improve performance.',
    icon: 'SSG',
  },
  {
    title: 'No-Code & Visual Builder Solutions',
    description:
      'Rapid professional website delivery using no-code tools and visual builders without sacrificing design quality or functionality.',
    icon: 'NCD',
  },
];

const projects = [
  {
    title: 'Full-Stack SaaS Marketing Platform',
    description:
      'A conversion-focused web experience combining modern UI, reusable components, and scalable architecture for product growth.',
    type: 'Full Stack',
    image: projectBusiness1,
    imageAlt: 'Business platform website landing page',
  },
  {
    title: 'Shopify Store Optimization',
    description:
      'An e-commerce optimization project focused on product discoverability, checkout flow, and performance improvements.',
    type: 'E-commerce',
    image: projectSkincare4,
    imageAlt: 'Skincare ecommerce storefront homepage',
  },
  {
    title: 'Next.js Business Website',
    description:
      'A fast, SEO-friendly business website with responsive design, clear content structure, and maintainable component architecture.',
    type: 'Custom Development',
    image: projectBusiness3,
    imageAlt: 'Corporate website homepage with services',
  },
  {
    title: 'Static Site for Service Brand',
    description:
      'A lightweight static site project focused on loading speed, accessibility, and conversion-focused user journeys.',
    type: 'Static Site',
    image: projectTrading2,
    imageAlt: 'Dark themed product landing page',
  },
];

const skills = [
  'WordPress',
  'Joomla',
  'Shopify',
  'BigCommerce',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Static Site Architecture',
  'No-Code Builders',
  'Responsive Design',
];

export { services, projects, skills };
