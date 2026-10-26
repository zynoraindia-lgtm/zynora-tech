// ---------------------------------------------------------------------------
// Service detail pages — copy for /services/<slug>, one object per service.
// Keyed by the service `id` in `services` (lib/site.js); that entry's `href`
// must match `/services/<slug>` so its "Explore" button opens the page.
// The pages are rendered by components/ServiceDetailPage.jsx.
//
// NOTE: Draft copy — review the claims in `standards` and the FAQ answers
// against how Zynora actually works before publishing.
// ---------------------------------------------------------------------------

const web = {
  serviceId: 'web',
  slug: 'web-development',
  contactService: 'Website Development',
  metaTitle: 'Website Development',
  metaDescription:
    'Corporate websites, business websites, landing pages, CMS builds, enterprise portals and custom web applications — fast, responsive and engineered to convert by Zynora Technology.',
  hero: {
    eyebrow: 'Website Development',
    title: 'Digital Experiences',
    accent: 'That Perform.',
    body:
      'Your website is often the first conversation a customer has with your business. We design and engineer websites that load fast, read clearly on every screen and turn visitors into enquiries — then keep improving them after launch.',
    highlights: ['Responsive by default', 'SEO-ready structure', 'Built to convert'],
    primaryCta: 'Start a Web Project',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'What We Build',
    title: 'Every Kind of Website',
    accent: 'Your Business Needs.',
    description:
      'From a focused landing page to a portal your whole organisation logs into — each build is scoped around what the site has to achieve.',
    items: [
      {
        title: 'Corporate Websites',
        icon: 'Building2',
        body: 'A credible, considered presence for established organisations — clear structure, brand-consistent design and content that explains what you do.',
      },
      {
        title: 'Business Websites',
        icon: 'Store',
        body: 'Practical websites for growing businesses that need to be found, trusted and contacted — with call, WhatsApp and enquiry paths built in.',
      },
      {
        title: 'Custom Web Applications',
        icon: 'AppWindow',
        body: 'Browser-based tools built around your workflow: booking systems, calculators, dashboards, client areas and internal utilities.',
      },
      {
        title: 'Enterprise Portals',
        icon: 'LayoutDashboard',
        body: 'Secure portals for customers, partners, vendors or staff, with role-based access, document handling and links to existing systems.',
      },
      {
        title: 'Landing Pages',
        icon: 'MousePointerClick',
        body: 'Campaign-ready pages designed around a single action, with tracking in place for ads, launches and lead generation.',
      },
      {
        title: 'CMS Development',
        icon: 'FilePenLine',
        body: 'Content management set up so your team can update pages, products, news and media without waiting on a developer.',
      },
      {
        title: 'API Integration',
        icon: 'Plug',
        body: 'Connect your site to payment gateways, CRM and ERP systems, maps, messaging and the third-party services you already use.',
      },
      {
        title: 'Performance Optimization',
        icon: 'Gauge',
        body: 'Audit and improve an existing site — load speed, Core Web Vitals, image delivery, caching and code weight, measured before and after.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every Build',
    title: 'The Details That',
    accent: 'Make a Site Work.',
    description:
      'These are not add-ons. They are part of how every Zynora website is designed, built and handed over.',
    items: [
      {
        title: 'Responsive on Every Screen',
        icon: 'Smartphone',
        body: 'Layouts designed and tested for phones, tablets and desktops — not a desktop page squeezed down.',
      },
      {
        title: 'Fast by Default',
        icon: 'Zap',
        body: 'Optimised images, lean code and modern rendering so pages load quickly, even on mobile networks.',
      },
      {
        title: 'SEO-Ready Structure',
        icon: 'Search',
        body: 'Semantic markup, page metadata, clean URLs, sitemaps and structured data in place from launch.',
      },
      {
        title: 'Accessible',
        icon: 'Accessibility',
        body: 'Readable contrast, keyboard navigation and labelled forms, so more people can use the site comfortably.',
      },
      {
        title: 'Secure',
        icon: 'ShieldCheck',
        body: 'HTTPS, validated forms, sensible security headers and up-to-date dependencies, considered from day one.',
      },
      {
        title: 'Measurable',
        icon: 'ChartColumn',
        body: 'Analytics and enquiry tracking set up so you can see what visitors do and where leads come from.',
      },
    ],
    // Pulled from `techStack` so this list stays in sync with the Services page.
    techCategories: ['Frontend', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How a Website Comes Together',
    title: 'From Brief',
    accent: 'to Live Site.',
    description:
      'Six stages, each ending with something you can review — so the site you approve is the site that launches.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        body: 'Goals, audience, competitors and the actions the site needs visitors to take.',
      },
      {
        number: '02',
        title: 'Plan',
        body: 'Sitemap, page structure, content plan and the right technology for the build.',
      },
      {
        number: '03',
        title: 'Design',
        body: 'Wireframes, then full designs for key pages, reviewed with you before development.',
      },
      {
        number: '04',
        title: 'Develop',
        body: 'Responsive front end, CMS and integrations, built and tested in reviewed increments.',
      },
      {
        number: '05',
        title: 'Launch',
        body: 'Cross-device testing, speed and SEO checks, then deployment and go-live support.',
      },
      {
        number: '06',
        title: 'Grow',
        body: 'Monitoring, updates, new pages and improvements as the business evolves.',
      },
    ],
  },
  clients: {
    eyebrow: 'Our Clients',
    title: 'Trusted by',
    accent: 'Growing Businesses.',
    description:
      'A sample of the businesses across Tamil Nadu we have built websites and digital platforms for — each logo opens their live site.',
  },
  faqDescription:
    'Common questions about website projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'How long does it take to build a website?',
      a: 'It depends on scope. A landing page or small business site moves much faster than a portal or custom web application. After the discovery conversation we share a delivery plan with clear milestones before any development starts.',
    },
    {
      q: 'Will I be able to update the website myself?',
      a: 'Yes, if you need to. We can set up a content management system so your team can edit pages, products, news and images without touching code — and we walk you through it at handover.',
    },
    {
      q: 'Can you redesign our existing website?',
      a: 'Yes. We review what works today — content, search visibility, enquiries — and carry it forward, so a redesign improves the site without losing what it has already earned.',
    },
    {
      q: 'Is SEO included?',
      a: 'Technical SEO foundations are part of every build: semantic markup, page metadata, clean URLs, sitemaps, structured data and fast loading. Ongoing content and keyword work can be added separately.',
    },
    {
      q: 'Can the website connect to our other systems?',
      a: 'Yes. Payment gateways, CRM and ERP systems, booking tools, WhatsApp and email are common integrations. If a system has an API, we can usually connect to it.',
    },
    {
      q: 'What happens after the website goes live?',
      a: 'We stay on. Monitoring, fixes, content updates, new pages and performance improvements are all available after launch, so the site keeps pace with the business.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Start a Web Project',
    title: 'Ready for a Website',
    accent: 'That Works Harder?',
    description:
      "Tell us what your website needs to do. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

const mobile = {
  serviceId: 'mobile',
  slug: 'mobile-app-development',
  contactService: 'Mobile App Development',
  metaTitle: 'Mobile App Development',
  metaDescription:
    'Android, iOS and cross-platform Flutter apps with secure sign-in, payments, push notifications and API integration — designed and engineered by Zynora Technology.',
  hero: {
    eyebrow: 'Mobile App Development',
    title: 'Your Business.',
    accent: 'In Every Hand.',
    body:
      'Your customers and teams already live on their phones. We design and build mobile apps that feel fast and familiar, connect to the systems you run, and keep improving long after they reach the store.',
    highlights: ['Android & iOS', 'Cross-platform with Flutter', 'Store-ready releases'],
    primaryCta: 'Start Your App Project',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'What We Build',
    title: 'Apps for Customers,',
    accent: 'Teams and Operations.',
    description:
      'Customer-facing apps, field-team tools and companion apps for your platform — each one built for the people who will use it every day.',
    items: [
      {
        title: 'Android Applications',
        icon: 'Smartphone',
        body: 'Apps built for the wide range of Android devices your customers actually use, from budget phones to flagships.',
      },
      {
        title: 'iOS Applications',
        icon: 'TabletSmartphone',
        body: 'iPhone and iPad apps that follow Apple design conventions and feel at home on the platform.',
      },
      {
        title: 'Cross-Platform Applications',
        icon: 'Layers',
        body: 'One codebase for Android and iOS, so both audiences get the same features on the same day.',
      },
      {
        title: 'Flutter Development',
        icon: 'Blocks',
        body: 'Smooth, consistent interfaces built with Flutter — a strong fit when speed to market and a shared codebase matter.',
      },
      {
        title: 'API Integration',
        icon: 'Plug',
        body: 'Connect the app to your website, ERP, CRM, maps, messaging and third-party services through secure APIs.',
      },
      {
        title: 'Authentication',
        icon: 'KeyRound',
        body: 'Sign-in with mobile OTP, email or social accounts, with sessions and user roles handled securely.',
      },
      {
        title: 'Payment Integration',
        icon: 'CreditCard',
        body: 'In-app payments, subscriptions and wallets connected to the payment gateway that suits your market.',
      },
      {
        title: 'Push Notifications',
        icon: 'BellRing',
        body: 'Timely, targeted notifications for orders, reminders and updates that bring users back to the app.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every App',
    title: 'The Details That',
    accent: 'Make an App Stick.',
    description:
      'Apps get judged in the first few seconds. These are part of how every Zynora app is designed, built and released.',
    items: [
      {
        title: 'Smooth Performance',
        icon: 'Gauge',
        body: 'Fast start-up, fluid scrolling and lean screens, tested on mid-range phones as well as flagships.',
      },
      {
        title: 'Built for Real Networks',
        icon: 'Wifi',
        body: 'Caching and clear loading and offline states, so the app stays usable when the connection drops.',
      },
      {
        title: 'Secure by Design',
        icon: 'ShieldCheck',
        body: 'Secure sign-in, encrypted connections and careful handling of personal and payment data.',
      },
      {
        title: 'Store-Ready Releases',
        icon: 'Rocket',
        body: 'Release builds, store listings and Google Play and App Store submission prepared with you.',
      },
      {
        title: 'Usage Insights',
        icon: 'ChartColumn',
        body: 'Analytics and crash reporting set up so you can see how the app is used and fix issues quickly.',
      },
      {
        title: 'A Backend That Scales',
        icon: 'Server',
        body: 'APIs, databases and cloud hosting sized for today and ready for more users tomorrow.',
      },
    ],
    techCategories: ['Mobile', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How an App Comes Together',
    title: 'From Idea',
    accent: 'to App Store.',
    description:
      'Six stages, with working builds in your hands early — so you see the app on your own phone long before launch.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        body: 'Users, key journeys, platforms and the systems the app needs to talk to.',
      },
      {
        number: '02',
        title: 'Design',
        body: 'User flows and screen designs for the key journeys, reviewed with you before build.',
      },
      {
        number: '03',
        title: 'Build',
        body: 'App and backend built in short cycles, with test builds you can install and try.',
      },
      {
        number: '04',
        title: 'Test',
        body: 'Checks across devices, screen sizes, OS versions and network conditions.',
      },
      {
        number: '05',
        title: 'Release',
        body: 'Store listings, submission and launch support on Google Play and the App Store.',
      },
      {
        number: '06',
        title: 'Evolve',
        body: 'Updates for new OS versions, fixes and new features based on how people use it.',
      },
    ],
  },
  faqDescription:
    'Common questions about mobile app projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'Should we build for Android, iOS or both?',
      a: 'It depends on who your users are. A cross-platform build with Flutter lets one codebase serve both, which suits most business apps. Native development makes sense when an app leans heavily on platform-specific features. We recommend an approach after the discovery conversation.',
    },
    {
      q: 'Do you publish the app on Google Play and the App Store?',
      a: 'Yes. We prepare the release builds and store listings and take the app through submission, using your developer accounts so the app stays in your business name.',
    },
    {
      q: 'Can the app work with our existing website or software?',
      a: 'Yes. Apps usually share data with a website, ERP, CRM or booking system through APIs. If a system you use does not have an API yet, we can build one.',
    },
    {
      q: 'How do you handle security and user data?',
      a: 'Secure sign-in, encrypted connections, role-based permissions and storing only the data the app genuinely needs. Payment details are handled by the payment gateway rather than stored in the app.',
    },
    {
      q: 'What happens after the app is live?',
      a: 'Apps need care as Android and iOS change. We provide updates for new OS versions, fixes, performance improvements and new features as your business grows.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Start an App Project',
    title: 'Ready to Put Your Business',
    accent: 'in Their Pocket?',
    description:
      "Tell us who the app is for and what it needs to do. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

const ecommerce = {
  serviceId: 'ecommerce',
  slug: 'ecommerce-development',
  contactService: 'E-Commerce',
  metaTitle: 'E-Commerce Development',
  metaDescription:
    'B2C and B2B online stores with secure payments, product, order, inventory and customer management — e-commerce platforms engineered for growth by Zynora Technology.',
  hero: {
    eyebrow: 'E-Commerce Development',
    title: 'Commerce Built',
    accent: 'for Growth.',
    body:
      'An online store is more than a catalogue with a cart. We build e-commerce platforms that make buying easy for your customers and running the store easy for your team — from the product page to payment, fulfilment and reporting.',
    highlights: ['B2C & B2B stores', 'Secure payments', 'Inventory in sync'],
    primaryCta: 'Start Your Store',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'What We Build',
    title: 'Everything a Store',
    accent: 'Needs to Sell.',
    description:
      'The customer-facing storefront and the back office behind it, designed to work as one system.',
    items: [
      {
        title: 'B2C E-Commerce',
        icon: 'ShoppingBag',
        body: 'Consumer storefronts with clear product pages, quick search and a checkout that does not lose people halfway.',
      },
      {
        title: 'B2B E-Commerce',
        icon: 'Briefcase',
        body: 'Trade portals with customer-specific pricing, bulk and repeat ordering, quotes and account-based access.',
      },
      {
        title: 'Custom Stores',
        icon: 'Store',
        body: 'Stores built around how you actually sell — custom products, configurators, subscriptions or multi-vendor models.',
      },
      {
        title: 'Payment Gateway Integration',
        icon: 'CreditCard',
        body: 'Cards, UPI, wallets and net banking through the gateway that suits your market, with clear payment status.',
      },
      {
        title: 'Product Management',
        icon: 'Package',
        body: 'Categories, variants, pricing, images and offers managed from one admin panel without developer help.',
      },
      {
        title: 'Order Management',
        icon: 'ClipboardList',
        body: 'Every order tracked from payment to dispatch and delivery, with returns, refunds and customer notifications.',
      },
      {
        title: 'Inventory Integration',
        icon: 'Boxes',
        body: 'Stock kept in sync with your warehouse, billing or ERP system so customers only buy what you have.',
      },
      {
        title: 'Customer Management',
        icon: 'Users',
        body: 'Customer accounts, order history, addresses and segments that support repeat sales and better service.',
      },
      {
        title: 'Analytics',
        icon: 'ChartColumn',
        body: 'Sales, conversion, top products and abandoned carts reported clearly, so decisions are based on data.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every Store',
    title: 'The Details That',
    accent: 'Turn Visitors Into Buyers.',
    description:
      'Small things decide whether a visitor buys. These are part of how every Zynora store is designed and built.',
    items: [
      {
        title: 'Mobile-First Shopping',
        icon: 'Smartphone',
        body: 'Product browsing, cart and checkout designed for phones first, where most shoppers start.',
      },
      {
        title: 'Smooth Checkout',
        icon: 'ShoppingCart',
        body: 'Fewer steps, guest checkout where it suits and clear delivery and payment options.',
      },
      {
        title: 'Secure Payments',
        icon: 'ShieldCheck',
        body: 'HTTPS throughout and card details handled by the payment gateway, never stored on the store.',
      },
      {
        title: 'Search-Ready Products',
        icon: 'Search',
        body: 'Clean product URLs, metadata and structured data so products can be found in search.',
      },
      {
        title: 'Stock You Can Trust',
        icon: 'RefreshCw',
        body: 'Inventory updated as orders come in, so the store does not sell what is not on the shelf.',
      },
      {
        title: 'Clear Sales Reporting',
        icon: 'TrendingUp',
        body: 'Revenue, orders and product performance visible from the admin panel at any time.',
      },
    ],
    techCategories: ['Frontend', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How a Store Comes Together',
    title: 'From Catalogue',
    accent: 'to First Order.',
    description:
      'Six stages that cover the storefront, the back office and everything in between — tested with real orders before launch.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        body: 'Products, customers, payment methods, delivery and the systems the store must connect to.',
      },
      {
        number: '02',
        title: 'Plan',
        body: 'Store structure, product data, integrations and the right platform for the build.',
      },
      {
        number: '03',
        title: 'Design',
        body: 'Home, category, product, cart and checkout designs, reviewed with you before build.',
      },
      {
        number: '04',
        title: 'Build',
        body: 'Storefront, admin panel, payments and integrations built and tested in increments.',
      },
      {
        number: '05',
        title: 'Launch',
        body: 'Test orders, payment and notification checks, product upload support and go-live.',
      },
      {
        number: '06',
        title: 'Grow',
        body: 'Analytics review, offers, new features and performance tuning as sales grow.',
      },
    ],
  },
  faqDescription:
    'Common questions about e-commerce projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'Which payment methods can the store accept?',
      a: 'We integrate the payment gateway that suits your market and bank. In India that usually means cards, UPI, wallets and net banking; for Gulf markets, cards and local payment methods. Cash on delivery can be supported where it makes sense.',
    },
    {
      q: 'Can I manage products and orders myself?',
      a: 'Yes. Every store comes with an admin panel for products, prices, stock, offers, orders and customers, and we walk your team through it at handover.',
    },
    {
      q: 'Can the store connect to our billing, inventory or ERP system?',
      a: 'Yes. Stock, orders and customer data can sync with the systems you already use, so nobody has to re-enter orders by hand.',
    },
    {
      q: 'What is different about a B2B store?',
      a: 'B2B buyers usually need customer-specific prices, bulk and repeat orders, quotes, credit terms and approval steps. We build those around how you already trade with your customers.',
    },
    {
      q: 'What happens after the store goes live?',
      a: 'We stay on for fixes, updates, new features, seasonal changes and performance improvements, so the store keeps pace with your sales.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Start Your Store',
    title: 'Ready to Sell',
    accent: 'Online?',
    description:
      "Tell us what you sell and how you sell it today. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

const erp = {
  serviceId: 'erp',
  slug: 'erp-solutions',
  contactService: 'ERP',
  metaTitle: 'ERP Solutions',
  metaDescription:
    'Custom ERP systems connecting inventory, finance, HR, sales, purchase, accounting and operations on one platform with dashboards and reporting — built by Zynora Technology.',
  hero: {
    eyebrow: 'ERP Solutions',
    title: 'One Platform.',
    accent: 'Your Entire Business.',
    body:
      'When stock lives in one spreadsheet, invoices in another and approvals in someone’s inbox, nobody sees the whole picture. We build ERP systems around how your business actually works — connecting every department on one platform with one version of the truth.',
    highlights: ['Built around your process', 'Module by module', 'One source of truth'],
    primaryCta: 'Plan Your ERP',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'ERP Modules',
    title: 'Every Department,',
    accent: 'Connected.',
    description:
      'Start with the modules you need most and add the rest as you grow. Each one shares the same data, so nothing is entered twice.',
    items: [
      {
        title: 'Inventory',
        icon: 'Boxes',
        body: 'Stock levels, locations, batches and movements tracked as they happen, with low-stock alerts.',
      },
      {
        title: 'Finance',
        icon: 'Landmark',
        body: 'Receivables, payables, cash flow and budgets visible in one place, linked to every transaction.',
      },
      {
        title: 'HR',
        icon: 'Users',
        body: 'Employee records, attendance, leave and payroll inputs managed without paperwork.',
      },
      {
        title: 'Sales',
        icon: 'TrendingUp',
        body: 'Quotations, sales orders, invoices and dispatch connected from first enquiry to payment.',
      },
      {
        title: 'Purchase',
        icon: 'ShoppingCart',
        body: 'Purchase requests, approvals, orders and supplier records with a clear audit trail.',
      },
      {
        title: 'Accounting',
        icon: 'Calculator',
        body: 'Ledgers, journals, tax and statements generated from the transactions already in the system.',
      },
      {
        title: 'Operations',
        icon: 'Settings2',
        body: 'Production, jobs, service tickets or projects — the day-to-day work specific to your business.',
      },
      {
        title: 'Reporting',
        icon: 'FileText',
        body: 'Ready-made and custom reports by department, branch or period, exportable when you need them.',
      },
      {
        title: 'Dashboard & Analytics',
        icon: 'LayoutDashboard',
        body: 'Live dashboards that show management how the business is performing today, not last month.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every ERP',
    title: 'Built for Control,',
    accent: 'Not Just Data Entry.',
    description:
      'An ERP only works if people trust it and use it. These are part of how every Zynora ERP is designed and delivered.',
    items: [
      {
        title: 'Role-Based Access',
        icon: 'UserCog',
        body: 'Each person sees and does only what their role requires, by department, branch or approval level.',
      },
      {
        title: 'One Source of Truth',
        icon: 'Database',
        body: 'Every module works from the same data, so figures match across departments and reports.',
      },
      {
        title: 'Audit Trails',
        icon: 'History',
        body: 'Who changed what, and when, recorded for key records and approvals.',
      },
      {
        title: 'Live Dashboards',
        icon: 'Activity',
        body: 'Key numbers updated as transactions happen, so decisions are made on current data.',
      },
      {
        title: 'Integrations',
        icon: 'Plug',
        body: 'Connects to your website, e-commerce store, accounting tools, payment gateways and devices.',
      },
      {
        title: 'Data Migration',
        icon: 'ArrowRightLeft',
        body: 'Existing data moved over from spreadsheets or old software, checked before go-live.',
      },
    ],
    techCategories: ['Frontend', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How an ERP Comes Together',
    title: 'From Paperwork',
    accent: 'to One Platform.',
    description:
      'Six stages, delivered module by module, so your team adopts the system step by step instead of all at once.',
    steps: [
      { number: '01', title: 'Discover', body: 'Map each department’s process, documents, approvals and pain points.' },
      { number: '02', title: 'Design', body: 'Modules, data model, roles and workflows agreed with the people who will use them.' },
      { number: '03', title: 'Build', body: 'Modules built and reviewed one at a time, with demos to your team along the way.' },
      { number: '04', title: 'Migrate', body: 'Existing data moved from spreadsheets or old systems and checked for accuracy.' },
      { number: '05', title: 'Launch', body: 'User training, a supported go-live and quick fixes in the first weeks of use.' },
      { number: '06', title: 'Evolve', body: 'New modules, reports and improvements as the business and its processes change.' },
    ],
  },
  faqDescription:
    'Common questions about ERP projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'Why a custom ERP instead of an off-the-shelf product?',
      a: 'Off-the-shelf ERPs often force a business to change how it works, or pay for modules it never uses. A custom ERP is built around your existing process, includes only what you need, and can grow with you one module at a time.',
    },
    {
      q: 'Can we start with just a few modules?',
      a: 'Yes, and we usually recommend it. Starting with the departments that feel the most pain gets value early, and the remaining modules plug into the same data later.',
    },
    {
      q: 'Can you move our existing data into the new system?',
      a: 'Yes. We migrate data from spreadsheets or your current software — customers, suppliers, items, opening balances — and check it with you before go-live.',
    },
    {
      q: 'Can we control who sees what?',
      a: 'Yes. Access is set by role, department and branch, and key changes and approvals are recorded in an audit trail.',
    },
    {
      q: 'Do you train our team and support the system after launch?',
      a: 'Yes. We train users before go-live, support the first weeks closely, and continue with fixes, improvements and new modules afterwards.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Plan Your ERP',
    title: 'Ready to Run the Business',
    accent: 'From One Place?',
    description:
      "Tell us which departments and processes you want to connect. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

const crm = {
  serviceId: 'crm',
  slug: 'crm-solutions',
  contactService: 'CRM',
  metaTitle: 'CRM Solutions',
  metaDescription:
    'Custom CRM systems for lead management, sales pipelines, follow-ups, customer communication, tasks, reports and user permissions — built by Zynora Technology.',
  hero: {
    eyebrow: 'CRM Solutions',
    title: 'Turn Customer Data',
    accent: 'Into Relationships.',
    body:
      'Leads arrive from your website, phone, WhatsApp and walk-ins — and too many go cold before anyone follows up. We build CRM systems that capture every enquiry, keep every conversation in one place and give your sales team a single pipeline they actually use.',
    highlights: ['Every lead captured', 'Clear sales pipeline', 'Follow-ups that happen'],
    primaryCta: 'Plan Your CRM',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'What Your CRM Can Do',
    title: 'From First Enquiry',
    accent: 'to Loyal Customer.',
    description:
      'Every feature is shaped around your sales process — the stages, fields and rules your team already works with.',
    items: [
      {
        title: 'Lead Management',
        icon: 'Magnet',
        body: 'Leads captured from website forms, calls, WhatsApp and campaigns, then assigned to the right person automatically.',
      },
      {
        title: 'Customer Management',
        icon: 'CircleUserRound',
        body: 'One profile per customer with contact details, history, purchases, documents and notes.',
      },
      {
        title: 'Sales Pipeline',
        icon: 'SquareKanban',
        body: 'Every deal moving through clear stages, so you can see what is likely to close and what is stuck.',
      },
      {
        title: 'Follow-ups',
        icon: 'CalendarClock',
        body: 'Scheduled reminders and follow-up queues so no enquiry is forgotten after the first call.',
      },
      {
        title: 'Communication',
        icon: 'MessagesSquare',
        body: 'Calls, emails and WhatsApp conversations logged against the customer for the whole team to see.',
      },
      {
        title: 'Task Management',
        icon: 'ListChecks',
        body: 'Tasks assigned, tracked and completed against leads and customers, with due dates and owners.',
      },
      {
        title: 'Reports',
        icon: 'FileText',
        body: 'Lead sources, conversion, team activity and revenue reports, ready when management needs them.',
      },
      {
        title: 'Analytics',
        icon: 'ChartColumn',
        body: 'Dashboards that show pipeline value, win rates and trends at a glance.',
      },
      {
        title: 'User Roles & Permissions',
        icon: 'UserCog',
        body: 'Control who sees which leads, customers and reports — by team, branch or role.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every CRM',
    title: 'A CRM Your Team',
    accent: 'Will Actually Use.',
    description:
      'A CRM is only as good as the data people put into it. These are part of how every Zynora CRM is designed and delivered.',
    items: [
      {
        title: 'Single Customer View',
        icon: 'Users',
        body: 'Every interaction with a customer in one timeline, whoever on the team handled it.',
      },
      {
        title: 'Reminders That Fire',
        icon: 'BellRing',
        body: 'Automatic alerts for due follow-ups, idle leads and stalled deals.',
      },
      {
        title: 'Works on the Move',
        icon: 'Smartphone',
        body: 'Screens designed for phones too, so field and sales teams can update leads on the spot.',
      },
      {
        title: 'Connected Lead Sources',
        icon: 'Plug',
        body: 'Website forms, landing pages and messaging channels feeding leads straight into the pipeline.',
      },
      {
        title: 'Secure Access',
        icon: 'ShieldCheck',
        body: 'Role-based permissions and secure sign-in protect customer data inside the business.',
      },
      {
        title: 'Clear Reporting',
        icon: 'TrendingUp',
        body: 'Conversion and team performance visible without exporting anything to a spreadsheet.',
      },
    ],
    techCategories: ['Frontend', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How a CRM Comes Together',
    title: 'From Scattered Leads',
    accent: 'to One Pipeline.',
    description:
      'Six stages, shaped with your sales team from the start — so the CRM matches how they sell rather than the other way round.',
    steps: [
      { number: '01', title: 'Discover', body: 'Sales process, lead sources, team structure and the reports management needs.' },
      { number: '02', title: 'Design', body: 'Pipeline stages, fields, roles and automation rules agreed with your team.' },
      { number: '03', title: 'Build', body: 'CRM, integrations and dashboards built and demonstrated in increments.' },
      { number: '04', title: 'Import', body: 'Existing customers and open leads moved in from spreadsheets or old tools.' },
      { number: '05', title: 'Launch', body: 'Team training, a supported go-live and quick adjustments in the first weeks.' },
      { number: '06', title: 'Improve', body: 'New automations, reports and features as the sales process evolves.' },
    ],
  },
  faqDescription:
    'Common questions about CRM projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'Why build a custom CRM instead of subscribing to one?',
      a: 'Subscription CRMs are built for everyone, which often means extra complexity, per-user fees and workarounds for how you really sell. A custom CRM follows your stages, fields and rules, and grows with your team.',
    },
    {
      q: 'Can leads from our website and WhatsApp come in automatically?',
      a: 'Yes. Website and landing-page forms can feed leads straight into the CRM, and other channels can be connected depending on the tools you use.',
    },
    {
      q: 'Can our sales team use it on their phones?',
      a: 'Yes. Screens are designed to work on phones as well as desktops, so updates can be made straight after a call or visit.',
    },
    {
      q: 'Can we import our existing customer and lead lists?',
      a: 'Yes. We import customers and open leads from spreadsheets or your current tool, and check the data with you before go-live.',
    },
    {
      q: 'Can we control which leads each person sees?',
      a: 'Yes. Access can be set by role, team or branch, so people see the leads and customers that are theirs to work.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Plan Your CRM',
    title: 'Ready to Stop Losing',
    accent: 'Good Leads?',
    description:
      "Tell us how enquiries reach you and how your team follows up today. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

const custom = {
  serviceId: 'custom',
  slug: 'custom-software',
  contactService: 'Custom Software',
  metaTitle: 'Custom Software Development',
  metaDescription:
    'Custom business software, automation systems, internal platforms, APIs, integrations and cloud applications — engineered around your requirement by Zynora Technology.',
  hero: {
    eyebrow: 'Custom Software',
    title: 'If You Can Imagine It,',
    accent: 'We Can Engineer It.',
    body:
      'Some requirements do not fit any product on the market. When off-the-shelf software forces workarounds, we design and build software around the way your business works — from a single automation to a platform your whole organisation runs on.',
    highlights: ['Built to your requirement', 'Integrates with your tools', 'Scales as you grow'],
    primaryCta: 'Discuss Your Requirement',
    secondaryCta: 'All Services',
  },
  offerings: {
    eyebrow: 'What We Build',
    title: 'Software Shaped',
    accent: 'Around Your Business.',
    description:
      'From internal tools that remove hours of manual work to enterprise applications that run core operations.',
    items: [
      {
        title: 'Custom Business Software',
        icon: 'Briefcase',
        body: 'Applications built for a process that is unique to your business, rather than bent to fit a generic product.',
      },
      {
        title: 'Automation Systems',
        icon: 'Workflow',
        body: 'Repetitive work — data entry, approvals, reports, notifications — handled automatically and reliably.',
      },
      {
        title: 'Internal Management Platforms',
        icon: 'LayoutDashboard',
        body: 'Admin panels and portals that give teams one place to manage records, tasks and approvals.',
      },
      {
        title: 'API Development',
        icon: 'CodeXml',
        body: 'Documented, secure APIs that let your apps, partners and systems share data cleanly.',
      },
      {
        title: 'Third-Party Integrations',
        icon: 'Plug',
        body: 'Payment gateways, messaging, maps, accounting and other services connected to your software.',
      },
      {
        title: 'Cloud Applications',
        icon: 'Cloud',
        body: 'Web-based applications hosted on managed cloud platforms, available wherever your team works.',
      },
      {
        title: 'Enterprise Applications',
        icon: 'Building2',
        body: 'Multi-user, multi-branch systems with permissions, audit trails and the reliability core operations need.',
      },
    ],
  },
  standards: {
    eyebrow: 'Included in Every Build',
    title: 'Engineered to Last,',
    accent: 'Not Just to Launch.',
    description:
      'Custom software has to be maintained for years. These are part of how every Zynora build is designed and handed over.',
    items: [
      {
        title: 'Requirement-Led Design',
        icon: 'Target',
        body: 'Features defined from real business needs and user workflows, agreed before code is written.',
      },
      {
        title: 'Scalable Architecture',
        icon: 'Layers',
        body: 'Structured so new users, modules and integrations can be added without a rebuild.',
      },
      {
        title: 'Secure by Design',
        icon: 'ShieldCheck',
        body: 'Access control, secure sign-in and careful data handling considered from day one.',
      },
      {
        title: 'Tested Releases',
        icon: 'BadgeCheck',
        body: 'Reviewed code and tested releases, so new features do not break what already works.',
      },
      {
        title: 'Documented & Maintainable',
        icon: 'BookOpen',
        body: 'Clear structure and documentation, so the software stays easy to support and extend.',
      },
      {
        title: 'Long-Term Support',
        icon: 'Handshake',
        body: 'Monitoring, fixes and improvements after go-live as the business and its needs change.',
      },
    ],
    techCategories: ['Frontend', 'Backend', 'Database', 'Cloud & Infrastructure'],
  },
  process: {
    eyebrow: 'How Custom Software Comes Together',
    title: 'From Requirement',
    accent: 'to Running System.',
    description:
      'Six stages that keep scope, architecture and expectations visible — with working software to review at every step.',
    steps: [
      { number: '01', title: 'Discover', body: 'Understand the requirement, users, existing systems and what success looks like.' },
      { number: '02', title: 'Define', body: 'Scope, architecture, technology and a phased delivery plan agreed up front.' },
      { number: '03', title: 'Design', body: 'User flows and interfaces for the key screens, reviewed before development.' },
      { number: '04', title: 'Engineer', body: 'Built in short cycles with reviewed code, tested releases and regular demos.' },
      { number: '05', title: 'Launch', body: 'Deployment, data setup, user training and a supported go-live.' },
      { number: '06', title: 'Evolve', body: 'Monitoring, improvements and new features as the business grows.' },
    ],
  },
  faqDescription:
    'Common questions about custom software projects. If yours is not covered here, send it through the enquiry form — we answer it directly.',
  faqs: [
    {
      q: 'What kind of software can you build?',
      a: 'Internal management platforms, automation systems, portals, APIs, integrations and enterprise applications — anything a business process needs that existing products do not cover well.',
    },
    {
      q: 'How is a custom software project scoped?',
      a: 'It starts with a discovery conversation. We map the requirement, agree the scope and architecture, and share a phased delivery plan with an indicative estimate before development begins.',
    },
    {
      q: 'Can you work with software we already have?',
      a: 'Yes. We can integrate with your existing systems through APIs, and extend or modernise existing software after reviewing how it is built.',
    },
    {
      q: 'Will the software grow with our business?',
      a: 'That is the aim from day one. The architecture is planned so users, modules and integrations can be added later without starting again.',
    },
    {
      q: 'What happens after the software goes live?',
      a: 'We support it after launch with monitoring, fixes, improvements and new features, so it keeps up as the business changes.',
    },
  ],
  related: {
    eyebrow: 'More From Zynora',
    title: 'Explore Our',
    accent: 'Other Services.',
  },
  cta: {
    eyebrow: 'Discuss Your Requirement',
    title: 'Have a Requirement',
    accent: 'Nothing Else Fits?',
    description:
      "Tell us what you need the software to do. We'll come back with questions, a proposed approach and an indicative scope.",
  },
};

export const serviceDetails = { web, mobile, ecommerce, erp, crm, custom };
