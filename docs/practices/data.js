
const dataRadar = {
    // Quadrants
    quadrants: [
        { name: "Storage" },
        { name: "Compute" },
        { name: "Scientist" },
        { name: "Analytics" },
    ],

    // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

    // Entries
    entries: [

        // Quadrant 0

        // Datalake
        {
            quadrant: 0,
            ring: 0,
            label: "S3",
            active: true,
            link: "https://aws.amazon.com/fr/s3/",
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Athena",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Big Query",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Google Cloud Storage",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 1,
            label: "Synapse",
            active: true,
            moved: 0,
        },
        
        // Datawarehouse
        {
            quadrant: 0,
            ring: 0,
            label: "Snowflake",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Redshift",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Firebolt",
            active: true,
            moved: 0,
        },

        // Dataplatform
        {
            quadrant: 0,
            ring: 0,
            label: "Databriks",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 3,
            label: "Hadoop",
            active: true,
            moved: 0,
        },

        // Quadrant 1

        // Streaming
        {
            quadrant: 1,
            ring: 0,
            label: "Kinesis",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "MSK",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Kafka",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "PubSbub",
            active: true,
            moved: 0,
        },

        // Compute
        {
            quadrant: 1,
            ring: 0,
            label: "Serverless",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "ECS",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "EMR",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Glue",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Cloud Function",
            active: true,
            moved: 0,
        },

        // Orchestrateur
        {
            quadrant: 1,
            ring: 0,
            label: "Airflow",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Step Function",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 1,
            label: "Google Cloud Workflow",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Kestra",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Dagster",
            active: true,
            moved: 0,
        },

        // ELT
        {
            quadrant: 1,
            ring: 0,
            label: "DBT",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Airbyte",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 3,
            label: "Matillion",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 3,
            label: "Fivetran",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 3,
            label: "Talend",
            active: true,
            moved: 0,
        },

        // DRE
        {
            quadrant: 1,
            ring: 0,
            label: "Great Expectation",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Sifflet",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Elementary",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Monte Carlo",
            active: true,
            moved: 0,
        },

        // Catalog
        {
            quadrant: 1,
            ring: 3,
            label: "Castor",
            active: true,
            moved: 0,
        },

        // Quadrant 2

        // ML Managé
        {
            quadrant: 2,
            ring: 0,
            label: "Rekognition",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 0,
            label: "Comprehend",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Forecast",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "ML Azure",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "ML GCP",
            active: true,
            moved: 0,
        },

        // ML Custom
        {
            quadrant: 2,
            ring: 0,
            label: "Sagemaker (training, pipeline & deploy)",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "SageMaker (feature store, model monitor, clarify)",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Vertex AI",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "MLFlow",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Kubeflow",
            active: true,
            moved: 0,
        },

        // Quadrant 3
        {
            quadrant: 3,
            ring: 0,
            label: "Quicksight",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 0,
            label: "Metabase",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 3,
            label: "PowerBI",
            active: true,
            moved: 0,
        },
    ]
}