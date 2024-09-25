---
id: database
title: Database
sidebar_position: 3
---

# Database

Rust provides an impressive ecosystem of database integration crates, 
from full-fledged ORM libraries to lightweight SQL query builders. One of the most popular ORMs is **SeaORM**, 
which comes with a rich set of features and *fantastic documentation* to help you get started [here](https://www.sea-ql.org/SeaORM/docs/). 
Since the official documentation already does an excellent job, we'll focus more on **SQLx** in this section.

We’ll also explore other crates that fit different needs, from performance to flexibility, depending on your project requirements.

| **Crate**     | **When to Use**                                                                                 | **Link**                                            |
|---------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **SeaORM**    | Best for feature-rich, full ORM solutions with async capabilities and strong documentation.     | [SeaORM Docs](https://www.sea-ql.org/SeaORM/docs/)  |
| **SQLx**      | For async, compile-time checked SQL queries across multiple databases. Highly performant.       | [SQLx Repo](https://github.com/launchbadge/sqlx)    |
| **Diesel**    | When you need synchronous, schema-first queries and powerful query DSL support.                 | [Diesel Repo](https://github.com/diesel-rs/diesel)  |
| **Tiberius**  | For Microsoft SQL Server integrations, async support, and feature completeness.                 | [Tiberius Repo](https://github.com/prisma/tiberius) |
| **SurrealDB** | An advanced distributed database, ideal for handling structured and unstructured data at scale. | [SurrealDB](https://github.com/surrealdb/surrealdb) |


