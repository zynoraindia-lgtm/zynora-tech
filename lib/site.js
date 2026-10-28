// ---------------------------------------------------------------------------
// Zynora Technology Private Limited — single source of truth for site content.
// Edit copy here; components read from this file.
// ---------------------------------------------------------------------------

export const company = {
  name: 'Zynora Technology Private Limited',
  shortName: 'Zynora',
  tagline: 'Engineering Digital Experiences That Move Businesses Forward.',
  heroHeadline: "Technology That Builds What's Next.",
  heroSub:
    'We engineer scalable websites, mobile applications, ERP, CRM and e-commerce solutions that help ambitious businesses grow in a digital-first world.',
  // Main number: used for WhatsApp and the "call" button.
  phone: '95855 33810',
  phoneIntl: '+919585533810',
  // Every number listed on the site (Contact page, footer, mobile menu).
  phones: [
    { display: '95855 33810', intl: '+919585533810' },
    { display: '95667 57229', intl: '+919566757229' },
  ],
  email: 'zynoraindia@gmail.com',
  address: {
    line1: 'No. 56, Nethaji 4th Cross Street',
    line2: 'Kalimuthu Nagar',
    line3: 'Madurai – 625010, India',
  },
  regions: ['India', 'UAE'],
  url: 'https://zynoratechnology.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

// Preview cards on the Home page, one per page. Tags are filled in from the
// data further down (differentiators, services, transformation, industries).
export const highlights = [
  {
    key: 'about',
    title: 'About Zynora',
    href: '/about',
    cta: 'Explore About',
    body: 'The working principles that shape how every Zynora engagement is scoped, built and supported — and the markets we work in.',
  },
  {
    key: 'services',
    title: 'Services',
    href: '/services',
    cta: 'Explore Services',
    body: 'Six delivery capabilities, from the first page a customer sees to the system that runs the back office.',
  },
  {
    key: 'solutions',
    title: 'Solutions',
    href: '/solutions',
    cta: 'Explore Solutions',
    body: 'Connecting the systems a business already runs, removing the manual work in between, on an architecture built to scale.',
  },
  {
    key: 'industries',
    title: 'Industries',
    href: '/industries',
    cta: 'Explore Industries',
    body: 'The patterns we most often solve across sectors, the businesses we have built technology for, and our focus on Gulf markets.',
  },
];

export const presence = [
  {
    region: 'India',
    detail: 'Technology Development & Delivery',
    coords: { x: 69.5, y: 51.5 },
  },
  {
    region: 'UAE',
    detail: 'Digital Technology & Enterprise Solutions',
    coords: { x: 62.4, y: 47.5 },
  },
  {
    region: 'Global',
    detail: 'Remote Technology Partnership',
    coords: null,
  },
];

export const services = [
  {
    id: 'web',
    number: '01',
    title: 'Website Development',
    promise: 'Digital Experiences That Perform.',
    description:
      'Build high-performance websites designed around business goals — fast, accessible and engineered to convert.',
    capabilities: [
      'Corporate Websites',
      'Business Websites',
      'Custom Web Applications',
      'Enterprise Portals',
      'Landing Pages',
      'CMS Development',
      'API Integration',
      'Performance Optimization',
    ],
    cta: 'Explore Web Development',
    href: '/services/web-development',
    visual: 'browser',
    image: '/services/website.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'Web Development Company in India',
    accent: 'cyan',
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Mobile App Development',
    promise: 'Your Business. In Every Hand.',
    description:
      'Create powerful mobile applications for modern businesses, from native builds to cross-platform delivery.',
    capabilities: [
      'Android Applications',
      'iOS Applications',
      'Cross-Platform Applications',
      'Flutter Development',
      'API Integration',
      'Authentication',
      'Payment Integration',
      'Push Notifications',
    ],
    cta: 'Explore Mobile Development',
    href: '/services/mobile-app-development',
    visual: 'mobile',
    image: '/services/mobile-app.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'Mobile App Development Company in India',
    accent: 'azure',
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-Commerce Development',
    promise: 'Commerce Built for Growth.',
    description:
      'Scalable digital commerce experiences that handle catalogue, payment, fulfilment and customer operations.',
    capabilities: [
      'B2C E-Commerce',
      'B2B E-Commerce',
      'Custom Stores',
      'Payment Gateway Integration',
      'Product Management',
      'Order Management',
      'Inventory Integration',
      'Customer Management',
      'Analytics',
    ],
    cta: 'Explore E-Commerce',
    href: '/services/ecommerce-development',
    visual: 'commerce',
    image: '/services/ecommerce.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'Ecommerce Website Development Company in India',
    accent: 'violet',
  },
  {
    id: 'erp',
    number: '04',
    title: 'ERP Solutions',
    promise: 'One Platform. Your Entire Business.',
    description:
      'Design and develop customised ERP systems that connect operations, finance and people on one platform.',
    capabilities: [
      'Inventory',
      'Finance',
      'HR',
      'Sales',
      'Purchase',
      'Accounting',
      'Operations',
      'Reporting',
      'Dashboard & Analytics',
    ],
    cta: 'Explore ERP',
    href: '/services/erp-solutions',
    visual: 'erp',
    image: '/services/erp.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'ERP Software Development Company in India',
    accent: 'cyan',
  },
  {
    id: 'crm',
    number: '05',
    title: 'CRM Solutions',
    promise: 'Turn Customer Data Into Relationships.',
    description:
      'Intelligent CRM systems that centralise customer operations and give sales teams a single pipeline of truth.',
    capabilities: [
      'Lead Management',
      'Customer Management',
      'Sales Pipeline',
      'Follow-ups',
      'Communication',
      'Task Management',
      'Reports',
      'Analytics',
      'User Roles & Permissions',
    ],
    cta: 'Explore CRM',
    href: '/services/crm-solutions',
    visual: 'crm',
    image: '/services/crm.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'CRM Software Development Services in India',
    accent: 'azure',
  },
  {
    id: 'custom',
    number: '06',
    title: 'Custom Software',
    promise: 'If You Can Imagine It, We Can Engineer It.',
    description:
      'Customised business applications built around requirements no off-the-shelf product covers.',
    capabilities: [
      'Custom Business Software',
      'Automation Systems',
      'Internal Management Platforms',
      'API Development',
      'Third-Party Integrations',
      'Cloud Applications',
      'Enterprise Applications',
    ],
    cta: 'Explore Custom Software',
    href: '/services/custom-software',
    visual: 'custom',
    image: '/services/custom-software.webp',
    // Image alt text = this service page's H1 (lib/service-pages.js).
    imageAlt: 'Custom Software Development Services in India',
    accent: 'violet',
  },
];

export const transformation = {
  challenge: {
    label: 'Challenge',
    items: [
      'Manual Processes',
      'Disconnected Systems',
      'Data Silos',
      'Operational Complexity',
    ],
  },
  zynora: {
    label: 'Zynora',
    items: [
      'Technology Strategy',
      'Software Engineering',
      'System Integration',
      'Automation',
    ],
  },
  outcome: {
    label: 'Outcome',
    items: [
      'Connected Business',
      'Better Visibility',
      'Faster Operations',
      'Scalable Growth',
    ],
  },
};

export const differentiators = [
  {
    title: 'Business-First Engineering',
    body: 'We build technology around real business objectives, not around a framework we happen to like.',
    icon: 'Target',
  },
  {
    title: 'Scalable Architecture',
    body: 'Solutions designed to grow alongside your organisation, from first release to enterprise load.',
    icon: 'Layers',
  },
  {
    title: 'Modern Technology',
    body: 'Contemporary frameworks, cloud technologies and development practices, applied with judgement.',
    icon: 'Cpu',
  },
  {
    title: 'Security by Design',
    body: 'Secure architecture, access control and responsible data handling considered from day one.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Transparent Collaboration',
    body: 'Clear communication throughout the development lifecycle — no black boxes, no surprises.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Long-Term Partnership',
    body: 'We go beyond project delivery and support continuous digital growth after launch.',
    icon: 'Handshake',
  },
];

// NOTE: Placeholder stack. Replace with the technologies Zynora actually uses.
export const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
  },
  { category: 'Mobile', items: ['Flutter', 'Android', 'iOS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'REST APIs'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'] },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Cloud Infrastructure', 'CI/CD'],
  },
];

export const industries = [
  {
    name: 'Healthcare',
    challenge: 'Patient records and appointments spread across registers and spreadsheets.',
    solution: 'Unified patient management with role-based access and appointment workflows.',
    outcome: 'Faster consultations and a reliable clinical record.',
  },
  {
    name: 'Education',
    challenge: 'Admissions, attendance and fees tracked in disconnected tools.',
    solution: 'Institution portal linking enrolment, academics and finance.',
    outcome: 'Less administrative load and clearer academic visibility.',
  },
  {
    name: 'Retail',
    challenge: 'Store and online inventory drift apart through the day.',
    solution: 'Commerce platform with shared stock, orders and customer data.',
    outcome: 'Accurate availability and fewer cancelled orders.',
  },
  {
    name: 'Logistics',
    challenge: 'Shipment status depends on phone calls and manual updates.',
    solution: 'Tracking and dispatch system with status events and reporting.',
    outcome: 'Live movement visibility across the delivery chain.',
  },
  {
    name: 'Real Estate',
    challenge: 'Enquiries arrive across channels and go cold before follow-up.',
    solution: 'CRM with lead capture, assignment, follow-up and pipeline reporting.',
    outcome: 'Faster response and measurable conversion.',
  },
  {
    name: 'Finance',
    challenge: 'Customer, collection and compliance data held in separate ledgers.',
    solution: 'Secure platform with audit trails, permissions and reporting.',
    outcome: 'Controlled access and dependable reconciliation.',
  },
  {
    name: 'Hospitality',
    challenge: 'Bookings, availability and billing handled by different systems.',
    solution: 'Reservation and operations platform with integrated billing.',
    outcome: 'Smoother guest experience and cleaner revenue reporting.',
  },
  {
    name: 'Manufacturing',
    challenge: 'Production, purchase and stock updated after the fact.',
    solution: 'ERP modules linking purchase, production, inventory and finance.',
    outcome: 'Planning based on current data rather than last week.',
  },
  {
    name: 'Professional Services',
    challenge: 'Project time, deliverables and invoicing tracked by hand.',
    solution: 'Internal platform for projects, tasks, timesheets and billing.',
    outcome: 'Accurate utilisation and predictable invoicing.',
  },
];

export const process = [
  {
    number: '01',
    title: 'Discover',
    body: 'Understand business requirements, users and objectives before writing a line of code.',
  },
  {
    number: '02',
    title: 'Strategize',
    body: 'Define technology architecture, delivery approach and product direction.',
  },
  {
    number: '03',
    title: 'Design',
    body: 'Create intuitive, scalable user experiences and a consistent interface system.',
  },
  {
    number: '04',
    title: 'Engineer',
    body: 'Build robust, maintainable software with reviewed code and tested releases.',
  },
  {
    number: '05',
    title: 'Integrate',
    body: 'Connect systems, APIs and business workflows into one operating picture.',
  },
  {
    number: '06',
    title: 'Launch',
    body: 'Deploy, test and optimise across performance, security and accessibility.',
  },
  {
    number: '07',
    title: 'Evolve',
    body: 'Continuous improvement, monitoring and technology support after go-live.',
  },
];

// NOTE: Placeholder case studies. Replace with real projects before publishing.
// Do not add client names, metrics or results that have not been confirmed.
export const caseStudies = [
  {
    category: 'Enterprise Platform',
    discipline: 'ERP / Business Operations',
    name: 'Project Placeholder — Operations Platform',
    industry: 'Manufacturing',
    technology: 'React · Node.js · PostgreSQL',
    challenge:
      'Placeholder: describe the operational problem the client brought to Zynora.',
    solution:
      'Placeholder: describe the modules built and how systems were integrated.',
    result: 'Placeholder: add the confirmed business outcome once available.',
    accent: 'cyan',
  },
  {
    category: 'Commerce Platform',
    discipline: 'E-Commerce',
    name: 'Project Placeholder — Commerce Build',
    industry: 'Retail',
    technology: 'Next.js · Payment Gateway · MySQL',
    challenge: 'Placeholder: describe the commerce challenge.',
    solution: 'Placeholder: describe the storefront and back-office solution.',
    result: 'Placeholder: add the confirmed business outcome once available.',
    accent: 'violet',
  },
  {
    category: 'Customer Platform',
    discipline: 'CRM',
    name: 'Project Placeholder — Sales CRM',
    industry: 'Real Estate',
    technology: 'React · REST APIs · MongoDB',
    challenge: 'Placeholder: describe the lead management challenge.',
    solution: 'Placeholder: describe the pipeline and follow-up system.',
    result: 'Placeholder: add the confirmed business outcome once available.',
    accent: 'azure',
  },
  {
    category: 'Digital Experience',
    discipline: 'Corporate Website',
    name: 'Project Placeholder — Corporate Website',
    industry: 'Professional Services',
    technology: 'Next.js · CMS · Cloud Hosting',
    challenge: 'Placeholder: describe the brand and visibility challenge.',
    solution: 'Placeholder: describe the site architecture and content model.',
    result: 'Placeholder: add the confirmed business outcome once available.',
    accent: 'cyan',
  },
  {
    category: 'Mobile Platform',
    discipline: 'Mobile Application',
    name: 'Project Placeholder — Mobile App',
    industry: 'Logistics',
    technology: 'Flutter · REST APIs · Push Notifications',
    challenge: 'Placeholder: describe the field-operations challenge.',
    solution: 'Placeholder: describe the app and its integrations.',
    result: 'Placeholder: add the confirmed business outcome once available.',
    accent: 'violet',
  },
];

export const architecture = [
  {
    layer: 'Frontend',
    note: 'Interfaces built for speed, clarity and accessibility across devices.',
  },
  {
    layer: 'API Layer',
    note: 'Documented, versioned endpoints that keep clients and services decoupled.',
  },
  {
    layer: 'Business Logic',
    note: 'Domain rules held in one place, testable and independent of the UI.',
  },
  {
    layer: 'Database',
    note: 'Modelled schemas, sensible indexing and considered data ownership.',
  },
  {
    layer: 'Cloud Infrastructure',
    note: 'Deployment, scaling and monitoring on managed cloud platforms.',
  },
];

export const architectureQualities = [
  'Performance',
  'Security',
  'Scalability',
  'Integration',
  'Reliability',
];

export const middleEast = [
  {
    region: 'India',
    body: 'Engineering and technology delivery from our India base in Madurai.',
  },
  {
    region: 'UAE',
    body: 'Supporting businesses with modern digital experiences and enterprise technology.',
  },
];

export const faqs = [
  {
    q: 'What kinds of projects does Zynora take on?',
    a: 'Websites and web applications, mobile apps, e-commerce platforms, ERP and CRM systems, and custom business software built to a specific requirement.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes. We work with businesses across the UAE, India and other markets, delivering remotely with structured communication and agreed working hours.',
  },
  {
    q: 'How does a project usually start?',
    a: 'With a discovery conversation. We map the business requirement, agree on scope and architecture, and share a delivery plan before development begins.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes. Integration work — APIs, third-party platforms, existing databases — is a standard part of what we build.',
  },
  {
    q: 'What happens after launch?',
    a: 'We support the platform after go-live: monitoring, fixes, improvements and new modules as the business grows.',
  },
  {
    q: 'How do we get an estimate?',
    a: 'Send your requirement through the enquiry form or message us directly. We come back with questions, a proposed approach and an indicative scope.',
  },
];

export const serviceOptions = [
  'Website Development',
  'Mobile App Development',
  'E-Commerce',
  'ERP',
  'CRM',
  'Custom Software',
  'Other',
];

export const scopeOptions = [
  'Exploring options',
  'Small project',
  'Medium project',
  'Large / enterprise project',
  'Ongoing partnership',
];

export const countryOptions = [
  'United Arab Emirates',
  'India',
  'Saudi Arabia',
  'Oman',
  'Kuwait',
  'Bahrain',
  'United Kingdom',
  'United States',
  'Singapore',
  'Other',
];

// Real client logos, supplied by Balaji — do not fabricate additional entries.
export const clients = [
  {
    name: 'MS Civil Care',
    tagline: 'Waterproofing & Epoxy',
    logo: '/clients/ms-civil-care.jpg',
    href: 'https://mscivilcare.in',
  },
  {
    name: 'Shiva Kumar Water Proofing Services',
    tagline: 'Waterproofing Services',
    logo: '/clients/shivakumar-waterproofing.png',
    href: 'https://shivakumarwaterproof.com',
  },
  {
    name: 'Metro Kitchen',
    tagline: 'Modular Kitchen',
    logo: '/clients/metro-kitchen.jpeg',
    href: 'https://metrokithcen.com',
  },
  {
    name: 'A&B Tours & Travels',
    tagline: 'Tours & Travel',
    logo: '/clients/ab-tours.png',
    href: 'https://abtoursandtravels.in',
  },
  {
    name: 'Sri Masani Amman Textiles',
    tagline: 'Mop Thread Manufacturing',
    logo: '/clients/sri-masani-amman-textiles.jpeg',
    href: 'https://srimasaniammantextiles.com',
  },
  {
    name: 'Sri Vinayaga Chimney Work',
    tagline: 'Chimney & Kitchen Solutions',
    logo: '/clients/sri-vinayaga-chimney-work.jpeg',
    href: 'https://srivinayagachimneyworks.com',
  },
  {
    name: 'Vetrivaagai Chit Funds',
    tagline: 'Chit Funds & Finance',
    logo: '/clients/vetrivaagai-chit-funds.png',
    href: 'https://vetrivaagai.com',
  },
  {
    name: 'BGLRGM',
    tagline: 'Institute of Vocational Education Training',
    logo: '/clients/bglrgm.png',
    href: 'https://bglrgm.com',
  },
];
