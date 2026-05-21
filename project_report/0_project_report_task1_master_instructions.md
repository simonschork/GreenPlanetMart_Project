# Academic Project Report Instructions - Master Level

## Scope

Use **Task 1: GreenPlanetMart - Relational Modeling and Reporting** as the only task basis. The report is a **Master-level academic project report** on the planning, development, implementation, and evaluation of a relational database and BI reporting solution for GreenPlanetMart.

The report is not a generic essay. It must document a practical implementation project and reflect on it using relevant theories, models, methods, and technical concepts.

## Authorial role and writing stance

The task positions the author as a **significantly involved project participant** in an actual planning, development, and implementation project. Write from the perspective of someone who contributed substantially to the database solution, but keep the academic style objective.

Do **not** write informally or as a personal diary. Avoid first person where possible. Use formulations such as:

- "The project team selected..."
- "The implementation focused on..."
- "The database design was evaluated against..."
- "The author contributed to the requirement analysis, data modeling, implementation, and reporting design."

The report should show both technical execution and academic reflection. It must explain what was built, why the selected approach was appropriate, what trade-offs were accepted, what challenges occurred, and how the result supports GreenPlanetMart's business needs.

## Formal expectations

For a Master program, the expected text length is **12-15 pages**, excluding title page, table of contents, lists, references, appendices, and supporting material.

Use a factual, precise, academic style. Use scientific and technical terminology accurately. Avoid colloquial language, storytelling, exaggerated claims, decorative phrasing, and long convoluted sentences.

Use third-person or impersonal academic constructions. Cite all literature, frameworks, models, tools, and technical sources according to the required IU citation standard.

## Core report objective

The project report must demonstrate that the author can apply theoretical and technical knowledge to a practical data management problem. The final project output is a working or clearly documented **relational database and BI reporting solution** for GreenPlanetMart.

The report must cover:

- the initial problem and business context;
- the requirements for GreenPlanetMart's data processing;
- the relational data model and technical architecture;
- the selected DBMS and BI tools;
- data integration from suppliers, warehouses, distribution centers, and retail stores;
- data cleaning, structuring, normalization, indexing, and transformation;
- a denormalized BI/reporting model;
- 3-5 BI reports supporting business decisions;
- project management, resources, risks, milestones, and stakeholders;
- implementation evidence;
- evaluation, ROI/benefits, limitations, and reflection.

## Recommended structure

### 1. Introduction: project objectives and preparation

Target length: approximately **10-15%** of the report.

Include:

- GreenPlanetMart's business problem and initial situation;
- why relational data management is relevant for the company;
- the project objective: transforming data management through a relational database and BI reporting solution;
- the author's/project role and scope of involvement;
- planned procedure and selected methodology;
- relevant theoretical or technical basis, such as relational modeling, normalization, dimensional modeling, ETL, data quality, BI architecture, or project management methods;
- short overview of the report structure.

The introduction must make clear that this is a practical implementation project, not a purely theoretical database discussion.

### 2. Requirement analysis

Identify GreenPlanetMart's data processing requirements across:

- supply chain management;
- business analytics;
- operational efficiency;
- supplier, warehouse, distribution center, and retail store data;
- reporting and decision-support needs.

Translate these requirements into concrete data and system requirements, such as entities, relationships, data quality rules, query needs, reporting KPIs, performance expectations, scalability, reliability, and cost constraints.

State assumptions explicitly where the task lacks detail. Weak reports hide assumptions; strong reports define and justify them.

### 3. Technical architecture and technology selection

Explain the overall architecture of the solution. Include:

- source systems;
- staging or integration layer;
- relational operational database;
- BI or analytical data model;
- ETL/ELT process;
- BI tool connection;
- reporting outputs.

Justify the DBMS choice using criteria such as performance, scalability, reliability, maintainability, tooling, cost, SQL support, indexing options, and BI integration.

Do not merely name a tool. Explain why it fits GreenPlanetMart's requirements better than plausible alternatives.

### 4. Relational data modeling

Document the relational model in enough detail that the design can be understood and evaluated.

Include:

- major entities, attributes, primary keys, and foreign keys;
- relationships and cardinalities;
- normalization decisions;
- integrity constraints;
- indexing strategy;
- handling of data from multiple source types;
- model diagrams or screenshots.

Explain design decisions. For example, justify how suppliers, warehouses, distribution centers, retail stores, products, inventory, orders, shipments, and sales transactions are represented.

### 5. Data integration and preparation

Describe how data is integrated from suppliers, warehouses, distribution centers, and retail stores.

Include:

- source data formats and assumed structures;
- extraction process;
- cleansing and validation rules;
- transformation logic;
- loading process;
- normalization and structuring;
- indexing for efficient querying;
- handling of inconsistent, duplicate, missing, or delayed data.

Provide implementation evidence through screenshots, sample datasets, database metadata, ETL workflows, SQL snippets, or process diagrams.

### 6. BI data model and reporting

Model and implement a suitable BI data model, typically denormalized for reporting. Explain the analytical structure, such as star schema, fact tables, dimension tables, measures, and KPIs.

Create **3-5 reports** that support GreenPlanetMart's decision-making. Suitable report themes include:

- sales performance by store, product, region, or period;
- inventory levels and stock-out risk;
- supplier performance;
- warehouse or distribution efficiency;
- margin or revenue analysis;
- operational bottlenecks;
- demand trends.

For each report, explain:

- purpose;
- target stakeholder;
- data source;
- key metrics;
- business value;
- screenshot or implementation evidence;
- limitations or assumptions.

### 7. Project management and implementation process

Document how the project was planned, steered, and monitored.

Include:

- project phases;
- timeline and milestones;
- responsibilities and roles;
- stakeholder management;
- resource and cost planning;
- risk analysis;
- progress tracking;
- challenges and mitigation strategies.

The report should show a coherent implementation process, not just a finished database model.

### 8. Challenges and strategies

Discuss technical and organizational challenges. Relevant areas include:

- database design trade-offs;
- normalization versus reporting performance;
- indexing and query optimization;
- scalability;
- data quality;
- ETL complexity;
- BI model design;
- stakeholder expectations;
- change management.

For each major challenge, explain the strategy used to address it. Superficial claims such as "performance was optimized" are not enough. Specify what was optimized and how.

### 9. Outcomes, evaluation, and reflection

Evaluate whether the project achieved its objectives.

Cover:

- achieved result compared with the original objective;
- effectiveness of the relational database solution;
- quality and usefulness of the BI reports;
- impact on data management and decision-making;
- ROI or plausible benefit assessment;
- limitations of the solution;
- sustainability and future integration into daily operations;
- lessons learned for future professional practice.

The reflection must connect practical experience with theory and technical concepts. This is a major evaluation factor.

### 10. Conclusion

Target length: approximately **10-15%** of the report.

Summarize:

- the project result;
- the most important findings;
- the value for GreenPlanetMart;
- limitations and improvement potential;
- implications for future academic, personal, and professional development.

Do not introduce major new technical content in the conclusion.

## Required report components

Include the following standard components:

- title page;
- table of contents;
- list of figures and tables, if used;
- list of abbreviations, if used;
- main text with introduction, main body, and conclusion;
- reference list;
- appendix list;
- appendices with implementation evidence.

Appendices may include ER diagrams, SQL scripts, sample data, ETL screenshots, database metadata, BI report screenshots, and supporting calculations.

## Evidence checklist

The report should contain evidence of implementation, not only descriptions. Include selected screenshots or artifacts for:

- relational schema or ER model;
- sample source data;
- normalized relational tables;
- database metadata;
- ETL or data integration process;
- indexing or performance-related configuration where relevant;
- BI model;
- 3-5 BI reports;
- selected SQL queries or transformations;
- project timeline or phase plan.

## Evaluation priorities

Write with the grading criteria in mind:

- **Process:** coherent and suitable project approach;
- **Quality:** depth, clarity, reflection, argumentation, and correct use of theory/concepts;
- **Transfer:** appropriate transfer of theories and models into a practical solution;
- **Creativity:** thoughtful methodology, implementation choices, and conclusions;
- **Resources:** suitable tool selection and efficient resource use;
- **Documentation:** formal correctness, language quality, spelling, punctuation, and adherence to academic requirements.

The highest-risk failure mode is producing a tool tutorial or generic database essay. The report must instead be a structured academic account of a practical implementation project, written from the role of a substantially involved project participant and supported by concrete implementation evidence.
