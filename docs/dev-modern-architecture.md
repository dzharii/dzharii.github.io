# 🏵️ dev-modern-architecture
Date: 2025-11-23



## 2025-11-23 [Modern Architecture 101 for New Engineers & Forgetful Experts - Jerry Nixon - NDC Copenhagen 2025 - YouTube](https://www.youtube.com/watch?v=WRg13Ze_UpY) { www.youtube.com }

> Speaker: Jerry Nixon
>
> ![image-20251122173112292](dev-modern-architecture.assets/image-20251122173112292.png)
> ![image-20251122173206297](dev-modern-architecture.assets/image-20251122173206297.png)
>
> In this talk I walk through how I think as an architect in a world that is absurdly noisy for developers, especially the newer ones. I start by pushing back on the idea of universal “best practices” and reframe architecture as a series of context-heavy tradeoffs: politics, budget, legacy tech, team skills and time all matter more than whatever some big company did on a podcast. From there I define my job as the person who makes the decisions that are the most expensive to change later and, even more importantly, the person who protects the system from unnecessary stuff. Rather than chasing every fad, I care about keeping things as simple as they can reasonably be, knowing that every new box I add to the diagram is one more thing I own when it breaks.
>
> Then I use the big architecture picture as a thinking model, not a prescription. I start with the simplest shape – a client, an API, a database – and show how I decide when to layer in new capabilities: separating reads from writes, adding replicas, splitting into services, introducing a service bus so systems can talk, hanging retries, caching and queues around the database so the user has a smooth experience even when the backend is struggling. I generalize patterns like event hubs and functions for reacting to changes, API gateways for versioning and protection, static hosting and CDNs at the edge, different storage patterns inside the database, data lakes and ML for analytics that feed back into the product, and identity with JWTs for access control. The point is to teach a way of reasoning: for each of these pieces, understand what it gives you, understand its caveats, and then deliberately choose what to leave out and what to postpone, because in the end simple, deferrable decisions usually make the strongest architecture.

---

## A00 Architecture as choices

Architecture is the set of interconnected choices about how a system is built, hosted, delivered, and operated. The following categories list those choices.

## B00 Project and SDLC ecosystem

### Source control management (SCM)

- GitHub
- GitLab
- Bitbucket
- Azure Repos

### Project process

- Scrum
- Kanban
- Agile
- Waterfall

### CI or CD

- GitHub Actions
- Azure Pipelines
- GitLab CI
- Jenkins
- TeamCity

### IDE

- Visual Studio
- VS Code
- Rider

### SDLC or work management

- Jira
- Azure Boards
- GitHub Projects
- GitLab Issues
- Trello
- Monday.com
- Notion
- Shortcut
- Basecamp

## C00 Hosts

### Clouds

- Azure
- AWS
- Google Cloud Platform (GCP)
- Oracle Cloud
- IBM Cloud
- DigitalOcean
- Linode
- Heroku

### Containers

- Kubernetes
- Container Apps
- Container Instances
- AWS Fargate
- Docker Swarm
- HashiCorp Nomad
- OpenShift
- Cloud Run (GCP)
- App Runner (AWS)

### Serverless and PaaS

- Azure Functions
- AWS Lambda
- Cloudflare Workers
- PaaS Hosting
- Azure App Service
- Google App Engine
- Elastic Beanstalk
- Railway
- Vercel

## D00 Core tools

### Language

- C#
- Java
- JavaScript or TypeScript
- Python
- Go
- Rust
- Kotlin
- Swift
- C++

### Frontend frameworks

- React
- Angular
- Vue.js
- Svelte
- Blazor
- Next.js
- Nuxt.js
- Lit
- Alpine.js

### Backend frameworks

- ASP.NET Core
- Spring Boot (Java)
- Express.js (Node.js)
- NestJS (Node.js)
- Django (Python)
- Flask (Python)
- Ruby on Rails
- Laravel (PHP)
- FastAPI (Python)

## E00 Extra supporting technologies

### AI tooling

- ChatGPT
- Copilot
- Claude
- Gemini
- LLaMA
- Mistral
- StarCoder
- XGen
- Zephyr

### Communication tools

- MS Teams
- Slack
- Discord
- Zoom Team
- Google Chat
- Mattermost
- Rocket.Chat
- Zulip
- Twist

### ORM and data access

- Entity Framework
- Dapper
- Hibernate (Java)
- JPA (Java)
- Sequelize (Node)
- Prisma (TypeScript)
- TypeORM (TypeScript)
- Doctrine (PHP)
- SQLAlchemy (Python)

## F00 Product qualities and operations

### UI and layout

- Responsive design
- High DPI support
- Custom themes
- Localization
- Globalization
- Accessibility
- Keyboard support
- Font scaling
- Asset downloads

### Delivery

- Installation
- Download size
- Offline support
- App Store
- Auto update
- Versioning
- Delta patching
- Sensor support
- User settings

### Operation

- Startup performance
- Memory usage
- CPU parallels
- Battery usage
- Authentication
- Secure secrets
- Onboarding
- Backup or restore
- Sandboxing

## G00 Client applications

### Windows clients

- WinForms
- WPF
- WinUI or UWP
- MAUI
- Uno Platform
- Avalonia
- Electron
- React Native
- JavaFX or Swing

### Mobile clients

- MAUI
- Xamarin
- Uno Platform
- Flutter
- React Native
- iOS (SwiftUI)
- Android (Jetpack)
- Cordova
- Ionic

### Web and game clients

- React
- Angular
- Vue.js
- Blazor
- Svelte
- Game (browser based)
- Unity
- Unreal Engine

## H00 Data and storage

### RDBMS

- SQL Server
- PostgreSQL
- MySQL
- Oracle
- SQLite
- MariaDB
- IBM Db2

### NoSQL

- SQL Server (NoSQL capabilities)
- MongoDB
- Couchbase
- Cosmos DB
- RavenDB
- Amazon DocumentDB
- Firebase Firestore

### Graph databases

- Neo4j
- Amazon Neptune

### Search engines

- Elasticsearch
- OpenSearch

### Time series databases

- InfluxDB
- Prometheus

