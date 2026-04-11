export const profile = {
  name: 'Rimil Dey',
  role: 'Senior frontend engineer',
  summary:
    'Senior frontend engineer with 7 years of experience shipping thoughtful, responsive product experiences across high-growth teams. Known for redesigning complex surfaces, improving maintainability, and partnering closely with design and product.',
  contact: {
    email: 'rimildeyjsr@gmail.com',
    phone: '+971-50-496-8939',
    linkedin: 'https://linkedin.com/in/rimildeyjsr/',
    github: 'https://github.com/rimildeyjsr',
    website: 'https://rimildeyjsr.com',
    resume: '/rimil-dey-resume.pdf',
  },
} as const

export const hero = {
  eyebrow: 'Currently at Cercli · Senior frontend engineer · 7 years of experience',
  headline: 'I design clarity into complex product surfaces.',
  dek: 'A frontend engineer with product taste: redesigning dashboards, strengthening systems, and shipping interfaces that feel calm, fast, and considered.',
  supporting:
    'Experience across Cercli, Deel, Paradime Labs, Appsmith, Rippling, and Springboard — working with React, TypeScript, Angular, JavaScript, HTML, CSS, and Sass.',
} as const

export const proofThemes = [
  {
    kicker: 'Redesign',
    title: 'Complex dashboards made calmer and easier to use',
    body: 'Led complete redesign and responsive refactor work across card, payslips, and payments experiences — simplifying UI structure, improving clarity, and reducing service friction by ',
    metric: '2%',
  },
  {
    kicker: 'Reliability',
    title: 'Frontend systems built to hold up under growth',
    body: 'Raised testing discipline on new product surfaces and brought coverage to roughly ',
    metric: '50%',
    suffix:
      ', while improving unit test infrastructure and maintainability across key flows.',
  },
  {
    kicker: 'Performance',
    title: 'Implementation tied to measurable product outcomes',
    body: 'Shipped work tied to ',
    metric: '~5% faster',
    suffix:
      ' validation, 8% fewer bugs, mentor dashboard loads cut to under 5 secs, and ops effort reduced by ~40%.',
  },
] as const

export const currentChapter = {
  label: 'Current chapter',
  statement:
    'At Cercli, I work on financial product surfaces that need to feel intuitive, responsive, and trustworthy — especially when the workflows behind them are anything but simple.',
  quote:
    'Redesigning the parts of a product people rely on most, then backing them with stronger frontend foundations.',
  bullets: [
    'Worked on the complete re-design and refactor of the Deel card dashboard, simplifying the UI/UX with a more intuitive layout and making the experience responsive.',
    'Implemented the payslips and payments dashboard with cross-team collaboration, helping make the product more user-friendly and reducing customer service requests by 2%.',
    'Built the MVP version of Expense cards with card controls, spend controls, card issuance, expense reports, role-based access control, and stronger test expectations across pull requests.',
  ],
} as const

export const experience = [
  {
    company: 'Cercli',
    title: 'Member of Technical Staff',
    period: 'August 2025 — Present',
    highlights: [
      'Worked on the complete re-design and refactor of the Deel card dashboard, simplifying the UI/UX with a more intuitive layout and making the layout responsive.',
      'Implemented the payslips and payments dashboard with different product teams, making the UI more user-friendly and reducing customer service requests by 2%.',
      'Built the MVP version of Expense cards, including card and spend controls, card issuance, expense reports, and role-based access control.',
    ],
  },
  {
    company: 'Deel',
    title: 'Senior Front-end Engineer',
    period: 'July 2024 — August 2025',
    highlights: [
      'Worked on the complete re-design and refactor of the Deel card dashboard, simplifying the UI/UX with a more intuitive layout and making the layout responsive.',
      'Implemented the payslips and payments dashboard with different product teams, making the UI more user-friendly and reducing customer service requests by 2%.',
      'Laid the foundation for stronger test coverage on new products and achieved around 50% coverage by mandating tests with every pull request.',
    ],
  },
  {
    company: 'Paradime Labs',
    title: 'Senior Front-end Engineer',
    period: 'June 2023 — May 2024',
    highlights: [
      'Built a real-time parser for SQL models, simplifying the UI and reducing user friction, leading to ~5% faster query validation and iteration.',
      'Fixed the unit test infrastructure in the repository and started covering key product flows with unit tests to improve reliability.',
      'Automated audit log generation and implemented role-based access control, directly supporting enterprise customer requirements and new client deals.',
    ],
  },
  {
    company: 'Appsmith',
    title: 'Senior Front-end Engineer',
    period: 'March 2022 — June 2023',
    highlights: [
      'Built auto-indentation on top of the JavaScript editor with visual tests, improving the editing experience.',
      'Exposed window.postMessage() as a global function on the platform, one of the top requested features from users.',
      'Refactored Action selectors from regex to AST-based parsing, improving reliability and reducing bugs by 8%.',
    ],
  },
  {
    company: 'Rippling',
    title: 'Software Engineer',
    period: 'April 2021 — February 2022',
    highlights: [
      'Delivered core inventory management features within 2 weeks of onboarding while ramping from Angular to production-grade React.',
      'Added integration test coverage for critical flows, improving release reliability and reducing regressions.',
      'Migrated legacy class components to hooks, improving maintainability and developer velocity.',
    ],
  },
  {
    company: 'Springboard',
    title: 'Software Engineer',
    period: 'June 2018 — March 2021',
    highlights: [
      'Reduced load time of the mentor dashboard from 2.5 minutes to under 5 secs by refactoring vanilla JS and jQuery code to Angular and speeding up APIs.',
      'Built the project submission feature on the mentor dashboard, reducing manual workflows and cutting ops effort by ~40%.',
      'Optimized course time estimates, contributing to ~15% increase in 6-month completion rates.',
    ],
  },
] as const

export const openSource = [
  'FAST by Microsoft',
  'Reactist by Doist',
  'Operational UI by Contiamo',
  'Lexical by Meta',
  'Flexile by Antiwork',
] as const

export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Angular',
  'HTML',
  'CSS & Sass',
] as const

export const selectedSignals = [
  '7 years',
  '2%',
  '50%',
  '~5% faster',
  '8%',
  'under 5 secs',
  '~40%',
  '~15%',
] as const
