
const architectureRadar = {  
  // Quadrants
  quadrants: [
    { name: "Architecture Building Blocks" },
    { name: "Application Patterns & Styles" },
    { name: "Enterprise Patterns & Styles" },
    { name: "Methods & Approaches" },
  ],

  // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

  // Entries
  entries: [


    // Quadrant 0 - Architecture Building Blocks

    {
      quadrant: 0,
      ring: 0,
      label: "API Gateways",
      active: true,
      moved: 0,
    },

    {
      quadrant: 0,
      ring: 0,
      label: "API Managers",
      active: true,
      moved: 0,
    },

    // ESB
    {
      quadrant: 0,
      ring: 2,
      label: "Enterprise Service Bus",
      active: true,
      moved: -1,
    },

    // BPM
    {
      quadrant: 0,
      ring: 1,
      label: "Business Process Managers",
      active: true,
      moved: +1,
    },

    // CMS
    {
      quadrant: 0,
      ring: 1,
      label: "Headless CMS",
      active: true,
      moved: +1,
    },

    // ECM
    {
      quadrant: 0,
      ring: 1,
      label: "Enterprise Content Management",
      active: true,
      moved: +1,
    },

    // MDM
    {
      quadrant: 0,
      ring: 2,
      label: "Master Data Management",
      active: true,
      moved: 0,
    },

    // Quadrant 1

    // Pattern
    {
      quadrant: 1,
      ring: 0,
      label: "Loosely Coupled Architectures",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "REST Style",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 3,
      label: "SOAP",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 1,
      label: "GraphQL",
      active: true,
      moved: +1,
    },

    // Quadrant 2
    {
      quadrant: 2,
      ring: 2,
      label: "Plateform Enterprise",
      active: true,
      moved: 0,
    },

    {
      quadrant: 2,
      ring: 1,
      label: "Design Authority",
      active: true,
      moved: 0,
    },


    // Quadrant 3

    // Pratiques
    {
      quadrant: 3,
      ring: 0,
      label: "Domain Driven Design (strategic)",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Model Driven Design",
      active: true,
      moved: 0,
    },

    // Ateliers
    {
      quadrant: 3,
      ring: 0,
      label: "Event storming",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Quality storming",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Value Stream Mapping",
      active: true,
      moved: 0,
    },
  ]
}