
const architectureRadar = {  
  // Quadrants
  quadrants: [
    { name: "IT Solution Building Blocks" },
    { name: "Functional Solution Building Blocks" },
    { name: "Patterns & Styles" },
    { name: "Methods & Approaches" },
  ],

  // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

  // Entries
  entries: [

    // Note from Jean-Rémy Revy, 21/08/05
    // According to architects convictions, please consider using the following notation : [ABB] - [SBB]
    // Architecture Building Blocks is a concept, eg:RDBMS
    // Solution Build Blocks is a solution implementing a concept, eg:Postgre SQL

    // Quadrant 0 - IT Solution Building Blocks

    // RDBMS
    {
      quadrant: 0,
      ring: 0,
      label: "RSBMS - Postgre",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "RSBMS - Oracle",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "RSBMS - RDS",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "RSBMS - SQLServer",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Archipels",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "CrystalChain",
      active: true,
      moved: 0,
    },

    // NoSQL
    {
      quadrant: 0,
      ring: 0,
      label: "NoSQL - Mongo",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "NoSQL - Cassandra",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "NoSQL - Firestore",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "NoSQL - DynamoDB",
      active: true,
      moved: 0,
    },

    // API
    {
      quadrant: 0,
      ring: 0,
      label: "REST",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "SOAP",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "GraphQL",
      active: true,
      moved: 0,
    },

    // MOM
    {
      quadrant: 0,
      ring: 0,
      label: "Kafka",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "RabbitMQ",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Pulsar",
      active: true,
      moved: 0,
    },
    
    // Concept
    {
      quadrant: 0,
      ring: 2,
      label: "Vertical-market clouds",
      active: true,
      moved: 0,
    },

    // API Management
    {
      quadrant: 0,
      ring: 0,
      label: "APIM - Kong",
      active: true,
      moved: 0,
    },

    {
      quadrant: 0,
      ring: 0,
      label: "APIM - WSO2",
      active: true,
      moved: 0,
    },

    {
      quadrant: 0,
      ring: 0,
      label: "APIM - Apigee",
      active: true,
      moved: 0,
    },

    // ESB
    {
      quadrant: 0,
      ring: 3,
      label: "ESB - Mulesoft",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "ESB - WSO2",
      active: true,
      moved: 0,
    },

    // BPM
    {
      quadrant: 0,
      ring: 0,
      label: "BPM - Camunda",
      active: true,
      moved: 0,
    },

    // Quadrant 1 - Functional Solution Building Blocks

    // CRM
    {
      quadrant: 1,
      ring: 3,
      label: "Salesforce",
      active: true,
      moved: 0,
    },

    // ERP
    {
      quadrant: 1,
      ring: 3,
      label: "SAP",
      active: false,
      moved: 0,
    },

    // CMS
    {
      quadrant: 1,
      ring: 1,
      label: "CMS - Directus",
      active: true,
      moved: 0,
    },

    // ECM
    {
      quadrant: 1,
      ring: 1,
      label: "Alfresco",
      active: true,
      moved: 0,
    },

    // MDM
    {
      quadrant: 1,
      ring: 2,
      label: "Blueway",
      active: true,
      moved: 0,
    },

    // Quadrant 2

    // Pattern
    {
      quadrant: 2,
      ring: 0,
      label: "Monolith",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Modular Monolith",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Streaming",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Event sourcing",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Change Data Capture",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "CQRS",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "BFF",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Strangler Pattern",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Micro Frontend",
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
      quadrant: 2,
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