import ResumePDF from '../assets/German_James_Resume_Fall2025.pdf';
export const personalInfo = {
  name: 'Jimmy German',
  email: 'jgjimmy1@gmail.com',
  phone: '(440) 991-7975',
  github: 'https://github.com/jimmygerman99',
  linkedin: 'https://www.linkedin.com/in/jamesger',
  resume: ResumePDF,
  tagline:
    'Building intelligent web applications with a focus on machine learning and full-stack development',
};

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'SQL'],
  frameworks: ['React', 'Svelte', 'Flask', 'FastAPI', 'PyTorch', 'Node.js'],
  ml: ['CNNs', 'RNNs', 'Transformers', 'Supervised & Unsupervised Learning'],
};

export const projects = [
  {
    title: 'Neural Network Builder',
    description:
      'Drag-and-drop, node-based editor for visual neural network design and training',
    tech: ['Svelte', 'Flask', 'PyTorch', 'REST APIs', 'Figma'],
    highlights: [
      'Engineered visual editor in Svelte & SvelteFlow',
      'Integrated frontend with Flask/PyTorch backend',
      'Presented to stakeholders, professors, and judges',
    ],
    status: 'In Progress',
    date: 'Nov 2024 - Apr 2025',
  },
  {
    title: 'Credit Card Redemption Calculator',
    description:
      'Flight search engine with multi-factor filtering for optimal credit card redemptions',
    tech: ['React.js', 'FastAPI', 'MySQL'],
    highlights: [
      'Built FastAPI endpoints for real-time flight data',
      'Designed React frontend for seamless navigation',
      'Developed MySQL database with encrypted data',
    ],
    status: 'In Progress',
    date: 'Oct 2024 - Dec 2024',
  },
  {
    title: 'Machine Learning Models',
    description:
      'Classification and prediction models for animal species and music origin',
    tech: ['Python', 'CNNs', 'PyTorch', 'Pandas'],
    highlights: [
      'Built classification models for American animal species',
      'Utilized CNNs for high-performing models',
      'Applied optimization methods and algorithms',
    ],
    status: 'Completed',
    date: 'Mar 2024 - May 2024',
  },
];

export const experience = [
  {
    company: 'Siemens',
    role: 'Backend Software Engineer',
    location: 'Milford, OH',
    date: 'Jan 2022 - Dec 2022',
    description: 'TeamCenter Integration for NX (TCIN)',
    highlights: [
      'Debugged 50,000+ C/C++ source files',
      'Co-led UI development using Windows Presentation Foundation',
      'Utilized Agile Development and UML diagrams',
    ],
  },
  {
    company: 'Cyrkl',
    role: 'Challenge Project',
    location: 'Prague, Czechia',
    date: 'Jan 2024 - May 2024',
    description: 'Waste Emissions Calculator',
    highlights: [
      'Developed calculator for 50+ industrial waste types',
      'Conducted data analysis for carbon emissions',
      'Presented to stakeholders for future use',
    ],
  },
];

export const timeline = [
  {
    year: 2002,
    title: 'Born in Ohio',
    event: 'Grew up into tech, travel, outdoors.',
  },
  {
    year: 2019,
    title: 'Early coding',
    event: 'JS/C++ projects and web tools.',
  },
  {
    year: 2023,
    title: 'S-Docs Intern',
    subtitle: 'Technical Support Engineer',
    event: 'Customer-facing debugging & product fluency.',
  },
  {
    year: 2024,
    title: 'Travel Redemption Calculator',
    event: 'CPP comparisons + partner mapping.',
  },
  {
    year: 2024,
    title: 'Neural Network Builder',
    subtitle: 'Senior Design',
    event: 'Local PyTorch + browser UI; tested node/flow.',
  },
  {
    year: 2025,
    title: 'B.S. Computer Science',
    subtitle: 'University of Cincinnati, GPA 3.42',
    event: 'Dean’s List; systems, full-stack, ML tooling.',
  },
  {
    year: 'Now',
    title: 'New-grad SWE + Building',
    event: 'Shipping features; outdoorsy travel.',
  },
];
