import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import SimpleList from '../../components/SimpleList';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

const Capabilities = () => {
  return (
    <>
      <Hero
        heroTextImage
        secondaryHero
        className="factsheet-hero"
        headline={<>Need product help?<span className="headline-emphasis"></span></>}
        subhead="We're here for you. Check out our capabilities below."
      />
      <div className="factsheet-description">
        <Grid container className="description-text">
          <Grid item md={4} className="text-header">Overview</Grid>
          <Grid item md={8} className="text-body">We're a small digital agency with a big focus on impact. We want to work with you in order to build stronger movements, more impactful products, with leaner product strategies and thinking. Heres what we do and what we use to do it.</Grid>
        </Grid>
      </div>
      <SimpleList listData={CAPABILITIES} />
      <WorkTogether headline="Let's Work Together"/>
      <Footer/>
    </>
  )
}

export default Capabilities;

const CAPABILITIES = [
  {
    "Name": "Accelerator Services",
    "Notes": "",
    "Details": ["Product Strategy","MVP Development","Customer Development","Scaling Your Product","Scaling Your Team"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Design",
    "Notes": "",
    "Details": ["User Experience","User Interface","Design Research","Rapid Prototyping","Design System Management","Human Centered Design"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Frontend Development",
    "Notes": "Javascript, React, High performance animation,",
    "Details": ["Javascript","React","High performance animation"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Frontend Scaling",
    "Notes": "Javascript performance analysis",
    "Details": ["Javascript performance analysis"],
    "Why": "We can find the performance bottlenecks in your frontend application that prevent a seamless 60fps experience.",
    "Attachments": ""
  },
  {
    "Name": "Backend Development",
    "Notes": "Node, Python, graphql, apollo, express, flask, django, swagger, API Documentation",
    "Details": ["Node","Python","Graphql","Apollo","Express","Flask","Django","Swagger","API Documentation"],
    "Why": "We build high performance, horizontally scalable backends for web backends.  We can also build customer facing REST or graphql apis, and write easy to understand documentation.",
    "Attachments": ""
  },
  {
    "Name": "Integrations",
    "Notes": "VAN, NationBuilder, Salesforce, Mobilize America, Reach, Action Network",
    "Details": ["VAN","NationBuilder","Salesforce","Mobilize America","Reach","Action Network"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Voter Files",
    "Notes": "Voter file acquisition, processing, and cleaning.",
    "Details": ["Voterfile Acquisition","Processing","Cleaning and Matching"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Backend Scaling",
    "Notes": "Database optimization, performance analysis, load testing",
    "Details": ["Database optimization","Performance analysis","Load Testing"],
    "Why": "We can audit code and do load testing to find future scaling issues.  We can ensure your database is properly configured for your workload, including query plan analysis and configuration parameter tuning.",
    "Attachments": ""
  },
  {
    "Name": "Data Vizualization",
    "Notes": "Interactive data vizualizations",
    "Details": ["Interactive data vizualizations"],
    "Why": "",
    "Attachments": ""
  },
  {
    "Name": "Data Engineering",
    "Notes": "Apache Spark, Databricks, Airflow, ETL, Feature Engineering, Model productionization, web scraping, data standardization and normalization, data automation, productionization.",
    "Details": ["Apache Spark","Databricks","Airflow","ETL","Feature Engineering","Model Productionization","Web Scraping","Data Standardization and Normalization","Data Automation","Productionization"],
    "Why": "The most important part of a successful Data Analysis or Machine Learning project is ensuring that the data are clean and consistent, and that important features of the data are present in a way that your models can extract the most insight.   We can handle ingestion of structured or unstructured data, productionizing and automating the entire process.",
    "Attachments": ""
  },
  {
    "Name": "SQL Analytics",
    "Notes": "High performance data analytics SQL, Column store databases, Microsoft SQL Server, Redshift, spark SQL",
    "Details": ["High Performance Data Analytics SQL","Column Store Databases","Microsoft SQL Server","Redshift","Spark SQL"],
    "Why": "SQL for data analytics is very different from SQL for a typical web application.  We can optimize analytics queries to aggregate millions of rows in under a second.  Using either scale up solutions like MS SQL Server, to scale out solutions like redshift or spark SQL.",
    "Attachments": ""
  },
  {
    "Name": "Cloud Infrastructure",
    "Notes": "AWS, Azure, GCloud, terraform, ansible, docker, CircleCI codeship",
    "Details": ["AWS","Azure","GCloud","Terraform","Ansible","Docker","CircleCI Codeship"],
    "Why": "We can fully automate your cloud deployment process.  On a single cloud, or as a multi-cloud process.  Integrating with CI services to completely automate the deployment process.",
    "Attachments": ""
  },
  {
    "Name": "Communication Tools",
    "Notes": "Twilio, SMS, Auto-Dialers, Facebook Messenger, Signal, Whatsapp, Custom Chatbots",
    "Details": ["Twilio","SMS","Auto-Dialers","Facebook Messenger","Signal","Whatsapp","Custom Chatbots"],
    "Why": "",
    "Attachments": ""
  }
]
