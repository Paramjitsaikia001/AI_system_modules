# Submitted By

Name: Paramjit Saikia  
Email: paramjitsaikia@gmail.com

---

# Rayeva AI Systems Assignment

## Overview

This project implements two AI-powered backend modules for sustainable commerce using **Node.js, TypeScript, LangChain, and the Gemini API**. The system demonstrates how AI can be integrated with real business logic to automate product catalog management and sustainability impact reporting.

Implemented Modules:

1. **Module 1 : AI Auto‑Category & Tag Generator**
2. **Module 3 : AI Impact Reporting Generator**

The system follows a clean architecture separating **AI logic, business logic, and API layers**, and produces **structured JSON outputs** that are stored in MongoDB.

---

# Tech Stack

Backend
- Node.js
- Express
- TypeScript

AI
- LangChain
- Google Gemini API

Database
- MongoDB
- Mongoose

Tools
- Postman (API testing)

---

# Project Architecture

```
src
 ├── config
 │   ├── db.ts
 │   └── geminiConfig.ts
 │
 ├── controllers
 │   ├── categoryController.ts
 │   └── impactController.ts
 │
 ├── services
 │   ├── categoryService.ts
 │   └── impactService.ts
 │
 ├── chains
 │   ├── categoryChain.ts
 │   └── impactChain.ts
 │
 ├── prompts
 │   ├── categoryPrompt.ts
 │   └── impactPrompt.ts
 │
 ├── utils
 │   └── impactCalculator.ts
 │
 ├── models
 │   ├── Product.ts
 │   └── ImpactReport.ts
 │
 ├── routes
 │   ├── categoryRoutes.ts
 │   └── impactRoutes.ts
 │
 ├── app.ts
 └── server.ts
```

### Architecture Flow

Client → Route → Controller → Service → LangChain Chain → Gemini API → Structured JSON → Database

This design ensures:

- Separation of AI and business logic
- Scalable backend structure
- Clean maintainable code

---

# Module 1: AI Auto‑Category & Tag Generator

## Purpose

Automatically categorize sustainable products and generate SEO metadata to reduce manual catalog management.

## Features

- Auto‑assign **primary category from predefined category list**
- Suggest **sub‑category**
- Generate **5–10 SEO tags**
- Suggest **sustainability filters** (plastic‑free, compostable, vegan, etc.)
- Return **structured JSON output**
- Store generated result in **MongoDB**

## Example Input

```
{
  "description": "Eco‑friendly bamboo toothbrush with biodegradable handle"
}
```

## Example Output

```
{
  "primary_category": "Health & Beauty",
  "sub_category": "Oral Care",
  "seo_tags": [
    "bamboo toothbrush",
    "eco friendly toothbrush",
    "biodegradable toothbrush",
    "plastic free toothbrush"
  ],
  "sustainability_filters": [
    "plastic‑free",
    "biodegradable",
    "vegan"
  ]
}
```

---

# Module 3: AI Impact Reporting Generator

## Purpose

Generate sustainability impact reports for orders using **logic‑based environmental calculations combined with AI explanations**.

## Features

- Calculate **plastic saved (logic‑based)**
- Estimate **carbon emissions avoided**
- Generate **local sourcing sustainability summary**
- Produce **human‑readable impact statement**
- Store report in database

## Example Input

```
{
  "product": "Compostable bagasse food container",
  "quantity": 500
}
```

## Example Output

```
{
  "plastic_saved_grams": 6000,
  "carbon_avoided_kg": 25,
  "local_sourcing_impact": "Using compostable packaging supports sustainable supply chains.",
  "impact_statement": "This order prevented approximately 6 kg of plastic waste and avoided 25 kg of carbon emissions."
}
```

---

# AI Prompt Design

Prompts are designed to produce **structured JSON outputs** suitable for backend processing.

Key prompt strategies:

1. Explicit JSON schema instructions
2. Clear role definition for the AI model
3. Restricting outputs to valid JSON only
4. Providing structured environmental data as inputs

Example prompt pattern:

```
You are a sustainability impact analyst.

Return ONLY valid JSON.

Environmental Data:
Plastic saved: {plastic_saved_grams}
Carbon avoided: {carbon_avoided_kg}
```

This ensures consistent outputs that can be safely parsed and stored.

---

# Database Design

Two main collections are used.

## Products

Stores categorized product data.

Fields:

- description
- primary_category
- sub_category
- seo_tags
- sustainability_filters

## ImpactReports

Stores sustainability reports.

Fields:

- product
- quantity
- plastic_saved_grams
- carbon_avoided_kg
- local_sourcing_impact
- impact_statement

---

# API Endpoints

## Generate Category

POST

```
/api/v1/category/generate
```

## Generate Impact Report

POST

```
/api/v1/impact/generate
```

---

# Test Cases (Postman)

Below are example requests used to test the APIs using Postman.

## Test Case 1 – Category Generator

Request

POST

```
/api/v1/category/generate
```

Body

```
{
  "description": "Eco-friendly bamboo toothbrush made with biodegradable bamboo handle and BPA-free soft bristles. Plastic-free packaging and suitable for vegan lifestyle."
}
```

Example Response

```
{
    "success": true,
    "data": {
        "description": "Eco-friendly bamboo toothbrush made with biodegradable bamboo handle and BPA-free soft bristles. Plastic-free packaging and suitable for vegan lifestyle.",
        "primary_category": "Personal Care",
        "sub_category": "Oral Care",
        "seo_tags": [
            "bamboo toothbrush",
            "eco-friendly toothbrush",
            "biodegradable toothbrush",
            "plastic-free toothbrush",
            "vegan toothbrush",
            "sustainable oral care",
            "natural toothbrush"
        ],
        "sustainability_filters": [
            "plastic-free",
            "biodegradable",
            "vegan"
        ],
        "_id": "..............263ff12",
        "createdAt": "2026-03-09T07:21:12.935Z",
        "__v": 0
    }
}
```

---


## Test Case 2 – Impact Report Generator

Request

```
POST /api/v1/impact/generate
```

Body

```
{
  "product": "Compostable bagasse food container",
  "quantity": 500
}
```

Example Response

```
{
    "success": true,
    "data": {
        "product": "Compostable bagasse food container",
        "quantity": 500,
        "plastic_saved_grams": 6000,
        "carbon_avoided_kg": 25,
        "local_sourcing_impact": "The use of compostable bagasse food containers suggests a potential for local agricultural sourcing, which can reduce transportation emissions and support local economies. Further data on the origin of the bagasse would be needed for a more precise impact assessment.",
        "impact_statement": "By utilizing 500 compostable bagasse food containers, a significant amount of plastic waste has been diverted from landfills, amounting to 6000 grams saved. This shift has also resulted in the avoidance of 25 kg of carbon emissions. The adoption of bagasse as a material offers a more sustainable alternative to traditional plastic, contributing to a circular economy and reducing the environmental footprint of food service.",
        "_id": ".............e263ff14",
        "createdAt": "2026-03-09T07:23:30.480Z",
        "__v": 0
    }
}
```

These tests demonstrate that the system produces structured AI outputs and integrates logic-based sustainability calculations.

---

# Setup Instructions

### 1 Install dependencies

```
npm install
```

### 2 Configure environment variables

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection
GOOGLE_API_KEY=your_gemini_api_key
```

### 3 Run the server

```
npm run dev
```

---

# Demo Video

Demo video (3–5 minutes) explaining:

1. System architecture
2. AI modules
3. API demonstration using Postman
4. Database storage of results

Link: *Add demo video link here*

---

# Key Highlights

- AI integrated with real backend logic
- Structured AI outputs
- Clean modular architecture
- Sustainable commerce use case
- Production‑style backend design

---

# Author

Paramjit Saikia | paramjitsaikia@gmail.com

