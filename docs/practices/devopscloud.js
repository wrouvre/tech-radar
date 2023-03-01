
const devopscloudRadar = {  
  // Quadrants
  quadrants: [
    { name: "Run Build Deploy" },
    { name: "Ops" },
    { name: "Cloud" },
    { name: "Archi & Dev" },
  ],

  // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

  // Entries
  entries: [

    // Quadrant 0

    // Run
    {
      quadrant: 0,
      ring: 0,
      label: "K8S",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Docker",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Dapr",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Crossplane",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Falco",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "ACK",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Tanzu",
      active: true,
      moved: 0,
    },

    // Build
    {
      quadrant: 0,
      ring: 0,
      label: "Gitlab CI",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Github Actions",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Code Pipeline",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Dora",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Faros",
      link: "http://faros.ai/",
      active: true,
      moved: 0,
    },

    // Deploy
    {
      quadrant: 0,
      ring: 0,
      label: "CloudFormation",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Terraform",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "CDK",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Ansible",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Flagger",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 0,
      label: "ArgoCD",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 1,
      label: "CDKTF",
      active: true,
      moved: 0,
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Dagger",
      active: true,
      moved: 0,
    },


    // Quadrant 1

    // Monitoring
    {
      quadrant: 1,
      ring: 0,
      label: "Grafana",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Loki",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Tempo",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Datadog",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Cloudwatch",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 3,
      label: "ELK",
      active: true,
      moved: 0,
    },

    // Gouvernance
    {
      quadrant: 1,
      ring: 0,
      label: "ConfigRules",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "OPA",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Kyverno",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Gatekeeper",
      active: true,
      moved: 0,
    },

    // Sécurité
    {
      quadrant: 1,
      ring: 0,
      label: "Snyk",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Trivy",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Falco",
      active: true,
      moved: 0,
    },

    // Test
    {
      quadrant: 1,
      ring: 0,
      label: "Terratest",
      active: true,
      moved: 0,
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Kitchen",
      active: true,
      moved: 0,
    },

    // Quadrant 2

    // Provider
    {
      quadrant: 2,
      ring: 0,
      label: "AWS",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "GCP",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Azure",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Knative",
      active: true,
      moved: 0,
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Scalingo",
      active: true,
      moved: 0,
    },

    // Quadrant 3

    // Archi
    {
      quadrant: 3,
      ring: 0,
      label: "Serverless",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "K8S managé",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "K8S hybride",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Serverless",
      active: true,
      moved: 0,
    },

    // Dev    
    {
      quadrant: 3,
      ring: 0,
      label: "K3S",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "K3D",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 0,
      label: "MicroK8S",
      active: true,
      moved: 0,
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Gitpod",
      active: true,
      moved: 0,
    },
  ]
}