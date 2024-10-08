
const dataRadar = {
    // Quadrants
    quadrants: [

        { name: "Data Engineering" },
        { name: "Data Science & MLOps" },
        { name: "Data Analytics" },
        { name: "Data Quality & Observability" }
        
    ],

    // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

    // Entries
    entries: [
        // Quadrant 0: Data Engineering
        {
            quadrant: 0,
            ring: 0,
            label: "AWS",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Airflow",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Databricks(Spark)",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 0,
            label: "dbt",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Snowflake",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 0,
            label: "IaC(Terraform)",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 1,
            label: "Airbyte",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 1,
            label: "Kafka",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 1,
            label: "GCP",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "DuckDB",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Mage",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Prefect",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "SDF",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Clickhouse",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Azure",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 2,
            label: "dlt",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 0,
            ring: 3,
            label: "Talend",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 0,
            ring: 3,
            label: "Matillion",
            active: true,
            moved: -1,
            description: ""
        },
        {
            quadrant: 0,
            ring: 3,
            label: "Fivetran",
            active: true,
            moved: 0,
            description: ""
        },

        // Quadrant 1: Data Science & MLOps

        {
            quadrant: 1,
            ring: 0,
            label: "AWS",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 1,
            label: "LangChain",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 1,
            label: "LangSmith",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 2,
            label: "GCP",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Azure",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 2,
            label: "MLFlow",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Snowflake",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Databricks",
            active: true,
            moved: 0,
            description: ""
        },

        // Quadrant 2: Data Analytics
        {
            quadrant: 2,
            ring: 0,
            label: "dbt",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Tableau",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 2,
            ring: 1,
            label: "PowerBI",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Qlik",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Metabase",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 2,
            ring: 2,
            label: "Superset",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 2,
            ring: 3,
            label: "Grafana",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 2,
            ring: 3,
            label: "Amazon Quicksight",
            active: true,
            moved: 0,
            description: ""
        },

        // Quadrant 3: Data Quality & Observability

        {
            quadrant: 3,
            ring: 0,
            label: "dbt",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 0,
            label: "Databricks",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 1,
            label: "Elementary",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 1,
            label: "Great Expectations",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 2,
            label: "CastorDoc",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 2,
            label: "Open Metadata",
            active: true,
            moved: 1,
            description: ""
        },
        {
            quadrant: 3,
            ring: 3,
            label: "Talend",
            active: true,
            moved: 0,
            description: ""
        },
        {
            quadrant: 3,
            ring: 3,
            label: "Informatica",
            active: true,
            moved: 0,
            description: ""
        }
        
    ]
}