
const softwareengineeringRadar = {
  // Quadrants
  quadrants: [
    { name: "Langages & Frameworks" },
    { name: "Bundler & Locale DevX" },
    { name: "Concepts" },
    { name: "Tests" },
  ],

  // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

  // Entries
  entries: [

    // Quadrant 0

    // Languages
    {
      quadrant: 0,
      ring: 0,
      label: "Java",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Flyway",
      active: true,
      moved: -1,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Liquibase",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Javascript / Typescript",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "RxJS",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Axios",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Python",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Go",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "C#",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Kotlin",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Scala",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "PHP",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Rust",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Solidity",
      active: true,
      moved: 0,
    },

    // Frameworks
    {
      quadrant: 0,
      ring: 0,
      label: "Spring",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Maven",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Gradle",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "npm",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Node",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Angular",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "React",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Vue",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Quarkus",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Symfony",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Svelt",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "SolidJS",
      active: true,
      moved: 0,
    },


    // Quadrant 1

    // Bundler & Locale DevX
    {
      quadrant: 1,
      ring: 0,
      label: "JHipster-Lite",
      active: true,
      description: "The marvellous 'Craftsmanship-friendly' project generator, that gives you a customizable stack preset with hexagonal architecture, DDD concepts, component testing, architecture testing [...]. <a href='https://lite.jhipster.tech/landscape'>With JHipster-Lite, there's no 'technical Sprint #0'.</a>",
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Webpack",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Vite",
      active: true,
      moved: 1,
    },
    {
      quadrant: 1,
      ring: 1,
      label: "ESBuild",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "ESLint",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "prettier",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Husky",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Browserify",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Parcel",
      active: true,
      moved: 0,
    },

    // Quadrant 2

    // Concepts
    {
      quadrant: 2,
      ring: 0,
      label: "DDD",
      active: true,
      description: "Domain-Driven Design is a wide toolbox that MUST ABSOLUTELY be used on your project. Either to understand its strategically patterns to split responsibilities at a higher-level, or its tactical ones to get a well-structured maintainable code.",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "CQRS",
      active: true,
      description: "An architecture that has its complexity and may have synchronization drawbacks depending on your implementation, but a great one to solve specific issues. <a href='https://martinfowler.com/bliki/CQRS.html'>Martin Fowler delivers his insights on his website</a>",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Event Sourcing",
      active: true,
      description: "Not the easiest pattern at all! But you need to understand this one to understand how to compose events rather than inanimate data. <a href='https://martinfowler.com/eaaDev/EventSourcing.html'>Martin Fowler explains it all on his website</a>",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "TDD",
      active: true,
      description: "Test-Driven Development is a very misunderstood practice. Often compared as a testing practice, it can rather be qualified as a design practice to make your functional behavior emerge from scratch, from inside the code itself. <a href='https://blog.ippon.fr/2023/01/18/mon-apprentissage-du-tdd/'>Cédric Magne delivers its learning tips and feedback of TDD on our blog</a>",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "BDD",
      active: true,
      description: "Behavior-Driven Development is not a testing practice. It is an alignment and communication tool to share a business understanding of your product. <a href='https://blog.ippon.fr/2021/02/24/4-idees-recues-sur-le-bdd-behavior-driven-development/'>Grégory Elhaimer warns you about BDD misunderstanding on our blog</a>",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Hexagonal Architecture",
      active: true,
      description: "Want to see an example of implementing hexagonal architecture in a Java/Spring environment? <a href='https://blog.ippon.fr/2021/02/17/spring-boot-hexagone/'>Colin Damon talks about it on our blog</a>",
      moved: 1,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Clean Architecture",
      active: true,
      description: "In the family of the hexagonal architecture, clean architecture is also a way to split responsibility between your business logic and your technologies. <a href='https://alistair.cockburn.us/hexagonal-architecture/'>Alistair Cockburn introduces hexagonal architecture as its underlying principle</a>",
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Clean Code",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Code Smells",
      active: true,
      description: "One of the most important things to understand to deliver a maintainable code: to recognized bad practices, i.e. code smells. We like sharing <a href='https://refactoring.guru/refactoring/smells'>the great imaged library of Refactoring Guru to understand what are our worst nightmares</a>",
      moved: 1,
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Web3",
      active: true,
      moved: 0,
    },

    // Quadrant 3

    // Tests
    {
      quadrant: 3,
      ring: 0,
      label: "Cucumber",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Jest",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Vitest",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Selenium",
      active: true,
      description: "Component and end-to-end testing with <a href='https://www.cypress.io/'>Cypress</a>, for the win! Cypress integrates perfectly with TDD practice when used as a component testing tool (not 'graphical component'), see <a href='https://blog.ippon.fr/2019/07/11/des-tests-de-composants-avec-cypress/'>Anthony Rey's post on our blog</a>",
      moved: -1,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Cypress",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Jasmine",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 3,
      label: "TestNG",
      active: true,
      moved: -1,
      description: "We prefer using JUnit with fluent descriptive annotations from Assertj"
    },
    {
      quadrant: 3,
      ring: 0,
      label: "JUnit",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 3,
      label: "JUnit Jupiter Assertions",
      active: true,
      moved: 0,
      description: "We prefer using JUnit with fluent descriptive annotations from Assertj"
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Assertj",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Mockito",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "ArchUnit",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Awaitility",
      active: true,
      moved: 0,
    },
  ]
}