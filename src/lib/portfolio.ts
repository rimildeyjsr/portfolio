export const profile = {
  name: 'Rimil Dey',
  role: 'Senior frontend engineer',
  summary:
    'Senior frontend engineer with 7 years of experience shipping responsive product experiences across high-growth teams. Known for improving complex surfaces, strengthening maintainability, and partnering closely with product teams.',
  contact: {
    email: 'rimildeyjsr@gmail.com',
    phone: '+971-50-496-8939',
    linkedin: 'https://linkedin.com/in/rimildeyjsr/',
    github: 'https://github.com/rimildeyjsr',
    website: 'https://rimildeyjsr.com',
    resume:
      'https://www.dropbox.com/scl/fi/0dngczts4qccjo0j9otd5/rimil-resume.pdf?rlkey=v86zwkbau4hgm470kfbe3383y&st=znkbaxu6&dl=0',
  },
} as const

export const hero = {
  eyebrow: 'Senior Frontend Engineer · 7 years experience · Currently at Cercli',
  intro: 'Hi, I am Rimil',
  headline:
    'A frontend engineer focused on making complex workflows feel simple, reliable, and easy to use.',
  supporting:
    'Experience across Cercli, Deel, Paradime Labs, Appsmith, Rippling, and Springboard: building data-heavy interfaces and systems that need to hold up under real-world usage.',
} as const

export const proofThemes = [
  {
    kicker: 'Frontend',
    title: 'Complex dashboards made clearer and easier to use',
    body: 'Led major frontend refactors across card, payslips, and payments experiences: simplifying UI structure, improving clarity, and reducing service friction by ',
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
    'At Cercli, I work on a new AI-assisted recruitment product while leading frontend foundations for AI-driven workflows: building core features and systems that need to remain stable as both the product and tooling evolve.',
  quote:
    'Building the foundations, workflows, and product surfaces that make AI-assisted recruiting usable in practice.',
  bullets: [
    'Leading frontend foundation for AI-assisted development workflows.',
    'Driving adoption of AI tooling like Claude, Pi, and Figma MCP to improve developer productivity and consistency.',
    'Building a 0→1 AI-native recruitment product, owning core workflows including candidate profiles, bulk actions, and application forms.',
    'Owning end-to-end development of the feedback management system, a key feature for customer onboarding and retention.',
    'Contributing across frontend and backend, implementing API updates and fixes to unblock feature delivery.',
  ],
} as const

export const experience = [
  {
    company: 'Deel',
    title: 'Senior Front-end Engineer',
    period: 'July 2024 - August 2025',
    highlights: [
      'Worked on a major refactor of the Deel card dashboard, simplified the interface with a more intuitive layout, and made it responsive.',
      'Implemented the Payslips and payments dashboard, collaborating across different product teams, that made our UI more user-friendly, and reduced the customer service requests by 2%.',
      'Built the MVP version of Expense cards, with card/spend controls, card issuance, expense reports and role based access control.',
      'Laid the foundation and improving the test coverage of our new products, and achieved around 50% coverage by mandating tests with every pull request.',
    ],
  },
  {
    company: 'Paradime Labs',
    title: 'Senior Front-end Engineer',
    period: 'June 2023 - May 2024',
    highlights: [
      'Built a real-time parser for SQL models, simplifying the UI and reducing user friction, leading to ~5% faster query validation and iteration',
      'Fixed the unit test infrastructure in the repository, and started covering key flows of the product with unit tests to improve reliability.',
      'Automated the audit logs generation, a key customer requirement, which led us renewing accounts with our key customers.',
      'Implemented role-based access control (RBAC), a key customer requirement, directly contributing to closing 2 new client deals',
    ],
  },
  {
    company: 'Appsmith',
    title: 'Senior Front-end Engineer',
    period: 'March 2022 - June 2023',
    highlights: [
      'Built auto-indentation on top of the Javascript editor with visual tests, improving user experience',
      'Exposed window.postMessage() as a global function on the platform, which was one of the top requested features from our users.',
      'Supported the docs and marketing team with documentation, diagrams and examples for complex technical features, increasing feature adoption.',
      'Refactored Action selectors from regex to AST based parsing which improved reliability of this feature and reduced bugs by 8%',
    ],
  },
  {
    company: 'Rippling',
    title: 'Software Engineer',
    period: 'April 2021 - February 2022',
    highlights: [
      'Delivered core inventory management features within 2 weeks of onboarding, ramping from Angular to production-grade React',
      'Added integration test coverage for critical flows, improving release reliability and reducing regressions',
      'Migrated legacy class components to hooks, improving maintainability and developer velocity',
      'Collaborated cross-functionally to ship MVP in ~ 4 months, meeting aggressive product timelines',
    ],
  },
  {
    company: 'Springboard',
    title: 'Software Engineer',
    period: 'June 2018 - March 2021',
    highlights: [
      'Reduced load time of mentor dashboard from 2.5 minutes to under 5 secs, by refactoring the vanilla JS/jQuery code to Angular, and speeding up APIs.',
      'Built the project submission feature on the mentor dashboard, reducing manual workflows (spreadsheets/emails) and cutting ops effort by ~40%',
      'Implemented and maintained the chrome extension for job submission tracking, which, increasing submission rate by around 5%',
      'Established front-end event tracking (Amplitude), enabling product analytics across all apps',
      'Optimized course time estimates, contributing to ~ 15% increase in 6-month completion rates',
    ],
  },
] as const

export const openSource = [
  {
    name: 'FAST by Microsoft',
    href: 'https://github.com/microsoft/fast/pull/3730',
  },
  {
    name: 'Reactist by Doist',
    href: 'https://github.com/Doist/reactist/pull/268',
  },
  {
    name: 'Lexical by Meta',
    href: 'https://github.com/facebook/lexical/pull/1873',
  },
  {
    name: 'Appsmith',
    href: 'https://github.com/appsmithorg/appsmith/pulls?q=is%3Apr+author%3Arimildeyjsr+is%3Aclosed',
  },
] as const

export const skills = [
  {
    name: 'React',
    src: '/skills/react.svg',
  },
  {
    name: 'TypeScript',
    src: '/skills/typescript.svg',
  },
  {
    name: 'JavaScript',
    src: '/skills/javascript.svg',
  },
  {
    name: 'Angular',
    src: '/skills/angular.svg',
  },
  {
    name: 'HTML',
    src: '/skills/html5.svg',
  },
  {
    name: 'CSS',
    src: '/skills/css.svg',
  },
  {
    name: 'Sass',
    src: '/skills/sass.svg',
  },
] as const

export const personalNotes = [
  {
    label: 'Currently reading',
    title: 'Sense and Sensibility by Jane Austen',
    emphasis: 'large-link',
    body: 'Next: The Once and Future King by T.H. White',
    bodySmall: true,
  },
  {
    label: 'Currently listening',
    title: 'Charlie Puth: Home (feat. Hikaru Utada)',
    emphasis: 'large-link',
  },
  {
    label: 'Travel',
    title: 'A growing list: Bali, Thailand, London, Athens, Tbilisi, Singapore, Kuala Lumpur',
    body: 'Next: Paris and Egypt (hopefully soon).',
    emphasis: 'large-link',
    bodySmall: true,
  },
] as const
