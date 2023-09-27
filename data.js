
const dataRadar = {
    // Quadrants
    quadrants: [

        { name: "Data Governance " },
        { name: "Data Engineering" },
        { name: "Data Science & MLOps" },
        { name: "Data Analytics" },
        
    ],

    // Rings : 0=ADOPT ; 1=TRIAL ; 2=ASSESS ; 3=HOLD

    // Entries
    entries: [

         // Quadrant 0 : Data Architeture     ========================


         // 0 - ADOPT
        {
            quadrant: 0,
            ring: 0,
            label: "Startburst",
            active: true,
            moved: 0,
        },
     

        {
            quadrant: 0,
            ring: 2,
            label: "Sifflet",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Monte Carlo",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 0,
            label: "Great Expectations",
            active: true,
            moved: 0,
        },


        
        
         // 1 - TRAIL
         

         // 2 - ASSESS
         
       
        // Datalake
        {
            quadrant: 0,
            ring: 1,
            label: "Castor",
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
            ring: 1,
            label: "Azure Data Fabric",
            active: true,
            moved: 0,
        },
        
        {
            quadrant: 0,
            ring: 1,
            label: "OpenMetadata",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 1,
            label: "Data Galaxy",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Zeenea",
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
            ring: 2,
            label: "Redshift Serverless",
            active: true,
            moved: 0,
        },
        {
            quadrant: 0,
            ring: 2,
            label: "Firebolt",
            active: true,
            moved: 1,
        },
    
       
      
        
        // Dataplatform
        {
            quadrant: 0,
            ring: 0,
            label: "Databriks",
            active: true,
            moved: 0,
        },
           // 3 - HOLD
        {
            quadrant: 0,
            ring: 3,
            label: "Hadoop",
            active: true,
            moved: 1,
        },


     


        // Quadrant 1 : Data Engineering     ========================

        // 0 ADOP 
        {
            quadrant: 1,
            ring: 0,
            label: "Flink",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Spark",
            active: true,
            moved: 0,
        },
      
      
        {
            quadrant: 1,
            ring: 0,
            label: "Amazon Kinesis ",
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
            label: "Google PubSub",
            active: true,
            moved: 0,
        },
        {
            quadrant: 1,
            ring: 0,
            label: "Docker",
            active: true,
            moved: 0,
        },
    
        // 
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
            label: "Airbyte",
            active: true,
            moved: 1,
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
            ring: 1,
            label: "DuckDB",
            active: true,
            moved: 1,
        },
       
        {
            quadrant: 1,
            ring: 1,
            label: "SingleStore",
            active: true,
            moved: 1,
        },

        




        // ASSESS

        {
            quadrant: 1,
            ring: 2,
            label: "Mage",
            active: true,
            moved: 1,
        },
        {
            quadrant: 1,
            ring: 2,
            label: "Kestra",
            active: true,
            moved: 0,
        },

        // ELT
     
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
            ring: 2,
            label: "Elementary",
            active: true,
            moved: 0,
        },
      

        // Catalog
       
        // Quadrant 2 : Data Science & MLOps ========================

         // 0 - ADOPT 
         {
            quadrant: 2,
            ring: 0,
            label: "Amazon Comprehend",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 0,
            label: "AWS Rekognition",
            active: true,
            moved: 0,
        },

        {
            quadrant: 2,
            ring: 0,
            label: "AWS SageMaker",
            active: true,
            moved: 0,
        },

         // 1 - TRIAL
         {
            quadrant: 2,
            ring: 1,
            label: "Kubeflow",
            active: true,
            moved: 0,
        },
        

         // 2 - ASSESS

         // 3 - HOLD 
         {
            quadrant: 2,
            ring: 3,
            label: "CamemBERT",
            active: true,
            moved: 0,
        },


         {
            quadrant: 2,
            ring: 2,
            label: "HuggingFace",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 2,
            label: "WhyLabs",
            active: true,
            moved: 0,
        },

        {
            quadrant: 2,
            ring: 2,
            label: "ChromaDB",
            active: true,
            moved: 0,
        },
     

        {
            quadrant: 2,
            ring: 2,
            label: "OpenAI",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 2,
            label: "Amazon Bedrock",
            active: true,
            moved: 0,
        },
       
      
        {
            quadrant: 2,
            ring: 1,
            label: "Amazon Forecast",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 2,
            label: "LangChain",
            active: true,
            moved: 0,
        },
        {
            quadrant: 2,
            ring: 1,
            label: "Azure ML",
            active: true,
            moved: 0,
        },
        /*
        {
            quadrant: 2,
            ring: 1,
            label: "ML GCP",
            active: true,
            moved: 0,
        },
        */
        // ML Custom
       
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
       // ==== END Quadrant 2 ====================================================================


       // Quadrant3 - Analytics Engineering ======================== 

        // 0 - ADOPT 
      
        {
            quadrant: 3,
            ring: 0,
            label: "dbt",
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
            ring: 0,
            label: "PowerBI",
            active: true,
            moved: 0,
        },
        
        // 1 - TRIAL 
        
        // 0 - ASSESS 
        
        // 0 - HOLD 
        {
            quadrant: 3,
            ring: 3,
            label: "Quicksight",
            active: true,
            moved: 0,
        },

        {
            quadrant: 3,
            ring: 1,
            label: "Superset",
            active: true,
            moved: 0,
        },

        {
            quadrant: 3,
            ring: 1,
            label: "Google dataform",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 1,
            label: "SQLMesh",
            active: true,
            moved: 0,
        },

        {
            quadrant: 3,
            ring: 2,
            label: "Tableau",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 2,
            label: "Thougthspot",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 2,
            label: "Sisense",
            active: true,
            moved: 0,
        },
        {
            quadrant: 3,
            ring: 2,
            label: "Qlik",
            active: true,
            moved: 0,
        },
        

      

 

      
       
        
    ]
}