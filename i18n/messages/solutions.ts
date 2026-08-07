import type { Locale } from '../config'

export type SolutionKey = 'ai' | 'cloud' | 'devops' | 'gateway' | 'microservices' | 'delivery'

export type SolutionMessages = {
  seo: {
    title: string
    description: string
    keywords: string[]
    serviceType: string
  }
  breadcrumbHome: string
  eyebrow: string
  title: string
  description: string
  capabilities: Array<{
    name: string
    description: string
  }>
  primaryCta: string
  secondaryCta: string
}

type SolutionMessagesByKey = Record<SolutionKey, SolutionMessages>

const en: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'AI Consulting',
      description: 'AI consulting for strategy, product delivery, LLM integration, AI gateways, evaluation, governance, and production readiness.',
      keywords: ['AI consulting services', 'LLM integration consulting', 'AI product strategy', 'AI governance', 'AI evaluation'],
      serviceType: 'AI consulting',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'AI Consulting',
    title: 'Build AI products that survive production',
    description: 'We help teams identify high-value AI use cases, design LLM-enabled workflows, integrate model providers, and put evaluation, observability, and governance around the systems they ship.',
    capabilities: [
      { name: 'AI Strategy & Roadmaps', description: 'Prioritize use cases, assess feasibility, and define an adoption plan grounded in business value and engineering constraints.' },
      { name: 'LLM Integration & Gateways', description: 'Integrate model providers, route traffic, manage prompts, and centralize usage, policy, and cost visibility.' },
      { name: 'Evaluation & Governance', description: 'Design quality checks, safety policies, observability, and operational controls for production AI workflows.' },
    ],
    primaryCta: 'Discuss an AI project',
    secondaryCta: 'Explore API & AI gateways',
  },
  cloud: {
    seo: {
      title: 'Cloud Consulting',
      description: 'Cloud consulting for platform modernization, cloud-native architecture, migration, DevOps, reliability, and cost optimization.',
      keywords: ['cloud consulting services', 'cloud modernization', 'cloud-native architecture', 'cloud migration', 'FinOps'],
      serviceType: 'Cloud consulting',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'Cloud Consulting',
    title: 'Modern cloud platforms for reliable delivery',
    description: 'Learnmark helps teams modernize infrastructure, applications, and delivery workflows so cloud adoption becomes a business capability rather than another operating burden.',
    capabilities: [
      { name: 'Cloud Strategy & Architecture', description: 'Assess your application portfolio, define a pragmatic cloud roadmap, and design secure landing zones and target architectures.' },
      { name: 'Migration & Modernization', description: 'Move legacy workloads safely with phased migration plans, containerization, service decomposition, and operational readiness checks.' },
      { name: 'Platform Engineering', description: 'Build developer platforms with infrastructure as code, CI/CD, observability, security guardrails, and self-service workflows.' },
      { name: 'Reliability & Cost Optimization', description: 'Improve availability, incident response, performance, and cloud spend through measurable reliability and FinOps practices.' },
    ],
    primaryCta: 'Discuss a cloud project',
    secondaryCta: 'Explore platform engineering',
  },
  devops: {
    seo: {
      title: 'Platform Engineering',
      description: 'Platform engineering and cloud operations consulting for CI/CD, infrastructure as code, observability, security, and reliable delivery.',
      keywords: ['platform engineering consulting', 'DevOps consulting', 'CI/CD automation', 'infrastructure as code', 'cloud operations'],
      serviceType: 'Platform engineering consulting',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'Platform Engineering',
    title: 'Platform Engineering & Cloud Operations',
    description: 'Streamline development and operations with secure developer platforms, repeatable infrastructure, and delivery pipelines that make cloud software easier to ship and operate.',
    capabilities: [
      { name: 'CI/CD Automation', description: 'Build robust continuous integration and deployment pipelines with quality, security, and rollback controls.' },
      { name: 'Infrastructure as Code', description: 'Manage cloud infrastructure with reusable modules, environment standards, and policy guardrails.' },
      { name: 'Observability & Reliability', description: 'Improve telemetry, incident response, service-level objectives, and operational confidence.' },
    ],
    primaryCta: 'Discuss platform engineering',
    secondaryCta: 'Explore cloud consulting',
  },
  gateway: {
    seo: {
      title: 'API and AI Gateway Consulting',
      description: 'Gateway consulting for API and LLM traffic, authentication, rate limiting, routing, observability, and governance.',
      keywords: ['API gateway consulting', 'AI gateway consulting', 'LLM traffic routing', 'API governance', 'gateway observability'],
      serviceType: 'API and AI gateway consulting',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'AI and Cloud Consulting',
    title: 'API & AI Gateway Consulting',
    description: 'Secure, route, observe, and govern traffic across APIs, microservices, and LLM providers with gateway patterns built for production operations.',
    capabilities: [
      { name: 'Security & Policy', description: 'Centralize authentication, authorization, key management, and policy enforcement.' },
      { name: 'Traffic Management', description: 'Implement rate limiting, load balancing, failover, routing, and provider-level traffic controls.' },
      { name: 'Observability & Governance', description: 'Track usage, latency, cost, errors, and compliance signals across API and AI workloads.' },
    ],
    primaryCta: 'Discuss a gateway project',
    secondaryCta: 'Explore llmxy',
  },
  microservices: {
    seo: {
      title: 'Microservices Modernization',
      description: 'Microservices modernization consulting for cloud-native architecture, incremental migration, observability, and resilient distributed systems.',
      keywords: ['microservices consulting', 'microservices modernization', 'cloud-native architecture', 'distributed systems', 'service decomposition'],
      serviceType: 'Microservices modernization consulting',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'Cloud Consulting',
    title: 'Microservices Modernization',
    description: 'Modernize monolithic applications into cloud-ready services with clear boundaries, resilient integration patterns, and observability from day one.',
    capabilities: [
      { name: 'Architecture Design', description: 'Design service boundaries, contracts, data ownership, and integration patterns for scalable cloud systems.' },
      { name: 'Migration Strategy', description: 'Create safe, incremental migration plans from legacy monoliths without freezing product delivery.' },
      { name: 'Service Mesh & Observability', description: 'Implement tracing, metrics, service mesh, and reliability practices for distributed systems.' },
    ],
    primaryCta: 'Discuss modernization',
    secondaryCta: 'Explore cloud consulting',
  },
  delivery: {
    seo: {
      title: 'Delivery Coaching',
      description: 'Delivery coaching for AI and cloud teams, including agile practices, product discovery, technical planning, and execution rhythm.',
      keywords: ['delivery coaching', 'agile coaching', 'Scrum consulting', 'AI delivery planning', 'cloud delivery coaching'],
      serviceType: 'Delivery coaching',
    },
    breadcrumbHome: 'Home',
    eyebrow: 'Delivery Coaching',
    title: 'Delivery Coaching for AI and Cloud Teams',
    description: 'Accelerate complex AI and cloud initiatives with practical delivery coaching, product discovery, technical planning, and engineering leadership support.',
    capabilities: [
      { name: 'Delivery Operating Model', description: 'Shape team structure, planning cadence, decision paths, and delivery metrics around real outcomes.' },
      { name: 'Product & Technical Planning', description: 'Turn AI and cloud goals into scoped increments, architecture decisions, and measurable release plans.' },
      { name: 'Execution Coaching', description: 'Coach engineering managers, product owners, and teams through delivery risks and operating friction.' },
    ],
    primaryCta: 'Discuss delivery coaching',
    secondaryCta: 'Explore LetScrum',
  },
}

const zhCN: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'AI 咨询',
      description: '涵盖战略、产品交付、LLM 集成、AI 网关、评估、治理与生产就绪的 AI 咨询服务。',
      keywords: ['AI 咨询服务', 'LLM 集成咨询', 'AI 产品战略', 'AI 治理', 'AI 评估'],
      serviceType: 'AI 咨询',
    },
    breadcrumbHome: '首页',
    eyebrow: 'AI 咨询',
    title: '打造经得起生产环境考验的 AI 产品',
    description: '我们帮助团队识别高价值 AI 用例、设计 LLM 驱动的工作流、集成模型提供商，并为交付的系统建立评估、可观测性和治理机制。',
    capabilities: [
      { name: 'AI 战略与路线图', description: '确定用例优先级、评估可行性，并依据业务价值和工程约束制定采用计划。' },
      { name: 'LLM 集成与网关', description: '集成模型提供商、路由流量、管理提示词，并集中呈现用量、策略与成本。' },
      { name: '评估与治理', description: '为生产级 AI 工作流设计质量检查、安全策略、可观测性与运维控制。' },
    ],
    primaryCta: '洽谈 AI 项目',
    secondaryCta: '了解 API 与 AI 网关',
  },
  cloud: {
    seo: {
      title: '云咨询',
      description: '涵盖平台现代化、云原生架构、迁移、DevOps、可靠性与成本优化的云咨询服务。',
      keywords: ['云咨询服务', '云现代化', '云原生架构', '云迁移', 'FinOps'],
      serviceType: '云咨询',
    },
    breadcrumbHome: '首页',
    eyebrow: '云咨询',
    title: '打造支持可靠交付的现代云平台',
    description: 'Learnmark 帮助团队现代化基础设施、应用和交付工作流，让云采用成为业务能力，而不是新的运维负担。',
    capabilities: [
      { name: '云战略与架构', description: '评估应用组合，制定务实的云路线图，并设计安全的着陆区和目标架构。' },
      { name: '迁移与现代化', description: '通过分阶段迁移计划、容器化、服务拆分和运维就绪检查，安全迁移旧有工作负载。' },
      { name: '平台工程', description: '使用基础设施即代码、CI/CD、可观测性、安全护栏和自助工作流构建开发者平台。' },
      { name: '可靠性与成本优化', description: '通过可衡量的可靠性和 FinOps 实践，提升可用性、事件响应和性能，并优化云支出。' },
    ],
    primaryCta: '洽谈云项目',
    secondaryCta: '了解平台工程',
  },
  devops: {
    seo: {
      title: '平台工程',
      description: '面向 CI/CD、基础设施即代码、可观测性、安全与可靠交付的平台工程和云运维咨询。',
      keywords: ['平台工程咨询', 'DevOps 咨询', 'CI/CD 自动化', '基础设施即代码', '云运维'],
      serviceType: '平台工程咨询',
    },
    breadcrumbHome: '首页',
    eyebrow: '平台工程',
    title: '平台工程与云运维',
    description: '通过安全的开发者平台、可重复的基础设施和交付流水线简化开发与运维，让云软件更易交付和运行。',
    capabilities: [
      { name: 'CI/CD 自动化', description: '构建具备质量、安全和回滚控制的稳健持续集成与部署流水线。' },
      { name: '基础设施即代码', description: '通过可复用模块、环境标准和策略护栏管理云基础设施。' },
      { name: '可观测性与可靠性', description: '改善遥测、事件响应、服务级别目标和运维信心。' },
    ],
    primaryCta: '洽谈平台工程',
    secondaryCta: '了解云咨询',
  },
  gateway: {
    seo: {
      title: 'API 与 AI 网关咨询',
      description: '面向 API 与 LLM 流量、身份验证、限流、路由、可观测性和治理的网关咨询。',
      keywords: ['API 网关咨询', 'AI 网关咨询', 'LLM 流量路由', 'API 治理', '网关可观测性'],
      serviceType: 'API 与 AI 网关咨询',
    },
    breadcrumbHome: '首页',
    eyebrow: 'AI 与云咨询',
    title: 'API 与 AI 网关咨询',
    description: '使用面向生产运维构建的网关模式，安全地路由、观测和治理 API、微服务与 LLM 提供商之间的流量。',
    capabilities: [
      { name: '安全与策略', description: '集中管理身份验证、授权、密钥和策略执行。' },
      { name: '流量管理', description: '实施限流、负载均衡、故障转移、路由和提供商级流量控制。' },
      { name: '可观测性与治理', description: '跟踪 API 和 AI 工作负载的用量、延迟、成本、错误与合规信号。' },
    ],
    primaryCta: '洽谈网关项目',
    secondaryCta: '了解 llmxy',
  },
  microservices: {
    seo: {
      title: '微服务现代化',
      description: '面向云原生架构、渐进式迁移、可观测性和弹性分布式系统的微服务现代化咨询。',
      keywords: ['微服务咨询', '微服务现代化', '云原生架构', '分布式系统', '服务拆分'],
      serviceType: '微服务现代化咨询',
    },
    breadcrumbHome: '首页',
    eyebrow: '云咨询',
    title: '微服务现代化',
    description: '将单体应用现代化为边界清晰、集成模式弹性可靠且从第一天就具备可观测性的云就绪服务。',
    capabilities: [
      { name: '架构设计', description: '为可扩展云系统设计服务边界、契约、数据所有权和集成模式。' },
      { name: '迁移战略', description: '制定安全、渐进的旧有单体迁移计划，同时保持产品持续交付。' },
      { name: '服务网格与可观测性', description: '为分布式系统实施追踪、指标、服务网格和可靠性实践。' },
    ],
    primaryCta: '洽谈现代化项目',
    secondaryCta: '了解云咨询',
  },
  delivery: {
    seo: {
      title: '交付辅导',
      description: '面向 AI 与云团队的交付辅导，涵盖敏捷实践、产品探索、技术规划和执行节奏。',
      keywords: ['交付辅导', '敏捷辅导', 'Scrum 咨询', 'AI 交付规划', '云交付辅导'],
      serviceType: '交付辅导',
    },
    breadcrumbHome: '首页',
    eyebrow: '交付辅导',
    title: '面向 AI 与云团队的交付辅导',
    description: '通过务实的交付辅导、产品探索、技术规划和工程领导力支持，加速复杂的 AI 与云计划。',
    capabilities: [
      { name: '交付运营模型', description: '围绕真实成果设计团队结构、规划节奏、决策路径和交付指标。' },
      { name: '产品与技术规划', description: '将 AI 与云目标转化为明确范围的增量、架构决策和可衡量的发布计划。' },
      { name: '执行辅导', description: '辅导工程经理、产品负责人和团队应对交付风险与运营摩擦。' },
    ],
    primaryCta: '洽谈交付辅导',
    secondaryCta: '了解 LetScrum',
  },
}

const zhTW: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'AI 顧問服務',
      description: '涵蓋策略、產品交付、LLM 整合、AI 閘道、評估、治理與正式環境就緒的 AI 顧問服務。',
      keywords: ['AI 顧問服務', 'LLM 整合顧問', 'AI 產品策略', 'AI 治理', 'AI 評估'],
      serviceType: 'AI 顧問服務',
    },
    breadcrumbHome: '首頁',
    eyebrow: 'AI 顧問服務',
    title: '打造經得起正式環境考驗的 AI 產品',
    description: '我們協助團隊辨識高價值 AI 使用案例、設計 LLM 驅動的工作流程、整合模型供應商，並為交付的系統建立評估、可觀測性與治理機制。',
    capabilities: [
      { name: 'AI 策略與路線圖', description: '排定使用案例優先順序、評估可行性，並依據商業價值與工程限制制定導入計畫。' },
      { name: 'LLM 整合與閘道', description: '整合模型供應商、路由流量、管理提示詞，並集中呈現用量、政策與成本。' },
      { name: '評估與治理', description: '為正式環境 AI 工作流程設計品質檢查、安全政策、可觀測性與維運控制。' },
    ],
    primaryCta: '洽談 AI 專案',
    secondaryCta: '瞭解 API 與 AI 閘道',
  },
  cloud: {
    seo: {
      title: '雲端顧問服務',
      description: '涵蓋平台現代化、雲端原生架構、遷移、DevOps、可靠性與成本最佳化的雲端顧問服務。',
      keywords: ['雲端顧問服務', '雲端現代化', '雲端原生架構', '雲端遷移', 'FinOps'],
      serviceType: '雲端顧問服務',
    },
    breadcrumbHome: '首頁',
    eyebrow: '雲端顧問服務',
    title: '打造支援可靠交付的現代雲端平台',
    description: 'Learnmark 協助團隊現代化基礎設施、應用程式與交付工作流程，讓雲端導入成為商業能力，而不是新的維運負擔。',
    capabilities: [
      { name: '雲端策略與架構', description: '評估應用程式組合、制定務實的雲端路線圖，並設計安全的登陸區與目標架構。' },
      { name: '遷移與現代化', description: '透過分階段遷移計畫、容器化、服務拆分與維運就緒檢查，安全移轉舊有工作負載。' },
      { name: '平台工程', description: '使用基礎設施即程式碼、CI/CD、可觀測性、安全護欄與自助工作流程打造開發者平台。' },
      { name: '可靠性與成本最佳化', description: '透過可衡量的可靠性與 FinOps 實務，提升可用性、事件回應和效能，並最佳化雲端支出。' },
    ],
    primaryCta: '洽談雲端專案',
    secondaryCta: '瞭解平台工程',
  },
  devops: {
    seo: {
      title: '平台工程',
      description: '面向 CI/CD、基礎設施即程式碼、可觀測性、安全與可靠交付的平台工程及雲端維運顧問服務。',
      keywords: ['平台工程顧問', 'DevOps 顧問', 'CI/CD 自動化', '基礎設施即程式碼', '雲端維運'],
      serviceType: '平台工程顧問服務',
    },
    breadcrumbHome: '首頁',
    eyebrow: '平台工程',
    title: '平台工程與雲端維運',
    description: '透過安全的開發者平台、可重複的基礎設施與交付管線簡化開發及維運，讓雲端軟體更容易交付與運行。',
    capabilities: [
      { name: 'CI/CD 自動化', description: '打造具備品質、安全與回復控制的穩健持續整合及部署管線。' },
      { name: '基礎設施即程式碼', description: '透過可重複使用的模組、環境標準與政策護欄管理雲端基礎設施。' },
      { name: '可觀測性與可靠性', description: '改善遙測、事件回應、服務等級目標與維運信心。' },
    ],
    primaryCta: '洽談平台工程',
    secondaryCta: '瞭解雲端顧問服務',
  },
  gateway: {
    seo: {
      title: 'API 與 AI 閘道顧問服務',
      description: '面向 API 與 LLM 流量、驗證、限流、路由、可觀測性和治理的閘道顧問服務。',
      keywords: ['API 閘道顧問', 'AI 閘道顧問', 'LLM 流量路由', 'API 治理', '閘道可觀測性'],
      serviceType: 'API 與 AI 閘道顧問服務',
    },
    breadcrumbHome: '首頁',
    eyebrow: 'AI 與雲端顧問服務',
    title: 'API 與 AI 閘道顧問服務',
    description: '使用為正式環境維運打造的閘道模式，安全地路由、觀測與治理 API、微服務及 LLM 供應商之間的流量。',
    capabilities: [
      { name: '安全與政策', description: '集中管理驗證、授權、金鑰與政策執行。' },
      { name: '流量管理', description: '實作限流、負載平衡、容錯移轉、路由與供應商層級的流量控制。' },
      { name: '可觀測性與治理', description: '追蹤 API 與 AI 工作負載的用量、延遲、成本、錯誤及合規訊號。' },
    ],
    primaryCta: '洽談閘道專案',
    secondaryCta: '瞭解 llmxy',
  },
  microservices: {
    seo: {
      title: '微服務現代化',
      description: '面向雲端原生架構、漸進式遷移、可觀測性與彈性分散式系統的微服務現代化顧問服務。',
      keywords: ['微服務顧問', '微服務現代化', '雲端原生架構', '分散式系統', '服務拆分'],
      serviceType: '微服務現代化顧問服務',
    },
    breadcrumbHome: '首頁',
    eyebrow: '雲端顧問服務',
    title: '微服務現代化',
    description: '將單體應用程式現代化為邊界清楚、整合模式具韌性，且從第一天起就擁有可觀測性的雲端就緒服務。',
    capabilities: [
      { name: '架構設計', description: '為可擴充的雲端系統設計服務邊界、合約、資料擁有權與整合模式。' },
      { name: '遷移策略', description: '制定安全、漸進的舊有單體遷移計畫，同時維持產品持續交付。' },
      { name: '服務網格與可觀測性', description: '為分散式系統實作追蹤、指標、服務網格與可靠性實務。' },
    ],
    primaryCta: '洽談現代化專案',
    secondaryCta: '瞭解雲端顧問服務',
  },
  delivery: {
    seo: {
      title: '交付輔導',
      description: '面向 AI 與雲端團隊的交付輔導，涵蓋敏捷實務、產品探索、技術規劃與執行節奏。',
      keywords: ['交付輔導', '敏捷輔導', 'Scrum 顧問', 'AI 交付規劃', '雲端交付輔導'],
      serviceType: '交付輔導',
    },
    breadcrumbHome: '首頁',
    eyebrow: '交付輔導',
    title: '面向 AI 與雲端團隊的交付輔導',
    description: '透過務實的交付輔導、產品探索、技術規劃與工程領導支援，加速複雜的 AI 及雲端計畫。',
    capabilities: [
      { name: '交付營運模式', description: '圍繞真實成果設計團隊結構、規劃節奏、決策路徑與交付指標。' },
      { name: '產品與技術規劃', description: '將 AI 與雲端目標轉化為範圍明確的增量、架構決策與可衡量的發布計畫。' },
      { name: '執行輔導', description: '輔導工程經理、產品負責人與團隊處理交付風險及營運摩擦。' },
    ],
    primaryCta: '洽談交付輔導',
    secondaryCta: '瞭解 LetScrum',
  },
}

const ja: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'AI コンサルティング',
      description: '戦略、製品開発、LLM 統合、AI ゲートウェイ、評価、ガバナンス、本番対応を支援する AI コンサルティング。',
      keywords: ['AI コンサルティングサービス', 'LLM 統合コンサルティング', 'AI 製品戦略', 'AI ガバナンス', 'AI 評価'],
      serviceType: 'AI コンサルティング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'AI コンサルティング',
    title: '本番環境で価値を発揮する AI 製品を構築',
    description: '価値の高い AI ユースケースの特定、LLM 対応ワークフローの設計、モデルプロバイダーの統合を支援し、提供するシステムに評価、可観測性、ガバナンスを組み込みます。',
    capabilities: [
      { name: 'AI 戦略とロードマップ', description: 'ユースケースに優先順位を付け、実現可能性を評価し、ビジネス価値とエンジニアリング上の制約に基づく導入計画を策定します。' },
      { name: 'LLM 統合とゲートウェイ', description: 'モデルプロバイダーの統合、トラフィックのルーティング、プロンプト管理を行い、利用状況、ポリシー、コストを一元的に可視化します。' },
      { name: '評価とガバナンス', description: '本番 AI ワークフローの品質チェック、安全ポリシー、可観測性、運用管理を設計します。' },
    ],
    primaryCta: 'AI プロジェクトを相談する',
    secondaryCta: 'API & AI ゲートウェイを見る',
  },
  cloud: {
    seo: {
      title: 'クラウドコンサルティング',
      description: 'プラットフォームのモダナイゼーション、クラウドネイティブアーキテクチャ、移行、DevOps、信頼性、コスト最適化を支援するクラウドコンサルティング。',
      keywords: ['クラウドコンサルティングサービス', 'クラウドモダナイゼーション', 'クラウドネイティブアーキテクチャ', 'クラウド移行', 'FinOps'],
      serviceType: 'クラウドコンサルティング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'クラウドコンサルティング',
    title: '確実なデリバリーを支える最新クラウドプラットフォーム',
    description: 'Learnmark はインフラ、アプリケーション、デリバリーワークフローを刷新し、クラウド活用を新たな運用負担ではなくビジネス能力へと変える支援をします。',
    capabilities: [
      { name: 'クラウド戦略とアーキテクチャ', description: 'アプリケーションポートフォリオを評価し、現実的なクラウドロードマップを策定して、安全なランディングゾーンと目標アーキテクチャを設計します。' },
      { name: '移行とモダナイゼーション', description: '段階的な移行計画、コンテナ化、サービス分割、運用準備チェックによってレガシーワークロードを安全に移行します。' },
      { name: 'プラットフォームエンジニアリング', description: 'Infrastructure as Code、CI/CD、可観測性、セキュリティガードレール、セルフサービスワークフローを備えた開発者プラットフォームを構築します。' },
      { name: '信頼性とコスト最適化', description: '測定可能な信頼性と FinOps の実践により、可用性、インシデント対応、性能を向上させ、クラウド支出を最適化します。' },
    ],
    primaryCta: 'クラウドプロジェクトを相談する',
    secondaryCta: 'プラットフォームエンジニアリングを見る',
  },
  devops: {
    seo: {
      title: 'プラットフォームエンジニアリング',
      description: 'CI/CD、Infrastructure as Code、可観測性、セキュリティ、確実なデリバリーのためのプラットフォームエンジニアリングとクラウド運用コンサルティング。',
      keywords: ['プラットフォームエンジニアリングコンサルティング', 'DevOps コンサルティング', 'CI/CD 自動化', 'Infrastructure as Code', 'クラウド運用'],
      serviceType: 'プラットフォームエンジニアリングコンサルティング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'プラットフォームエンジニアリング',
    title: 'プラットフォームエンジニアリングとクラウド運用',
    description: '安全な開発者プラットフォーム、再現可能なインフラ、デリバリーパイプラインによって開発と運用を効率化し、クラウドソフトウェアをより容易に提供・運用できるようにします。',
    capabilities: [
      { name: 'CI/CD 自動化', description: '品質、セキュリティ、ロールバック制御を備えた堅牢な継続的インテグレーションとデプロイのパイプラインを構築します。' },
      { name: 'Infrastructure as Code', description: '再利用可能なモジュール、環境標準、ポリシーガードレールでクラウドインフラを管理します。' },
      { name: '可観測性と信頼性', description: 'テレメトリ、インシデント対応、サービスレベル目標、運用への信頼を改善します。' },
    ],
    primaryCta: 'プラットフォームエンジニアリングを相談する',
    secondaryCta: 'クラウドコンサルティングを見る',
  },
  gateway: {
    seo: {
      title: 'API & AI ゲートウェイコンサルティング',
      description: 'API と LLM のトラフィック、認証、レート制限、ルーティング、可観測性、ガバナンスを支援するゲートウェイコンサルティング。',
      keywords: ['API ゲートウェイコンサルティング', 'AI ゲートウェイコンサルティング', 'LLM トラフィックルーティング', 'API ガバナンス', 'ゲートウェイ可観測性'],
      serviceType: 'API & AI ゲートウェイコンサルティング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'AI とクラウドのコンサルティング',
    title: 'API & AI ゲートウェイコンサルティング',
    description: '本番運用向けに設計されたゲートウェイパターンで、API、マイクロサービス、LLM プロバイダー間のトラフィックを安全にルーティング、監視、統制します。',
    capabilities: [
      { name: 'セキュリティとポリシー', description: '認証、認可、キー管理、ポリシー適用を一元化します。' },
      { name: 'トラフィック管理', description: 'レート制限、負荷分散、フェイルオーバー、ルーティング、プロバイダーレベルのトラフィック制御を実装します。' },
      { name: '可観測性とガバナンス', description: 'API と AI ワークロード全体の利用状況、レイテンシ、コスト、エラー、コンプライアンスシグナルを追跡します。' },
    ],
    primaryCta: 'ゲートウェイプロジェクトを相談する',
    secondaryCta: 'llmxy を見る',
  },
  microservices: {
    seo: {
      title: 'マイクロサービスのモダナイゼーション',
      description: 'クラウドネイティブアーキテクチャ、段階的移行、可観測性、耐障害性の高い分散システムを支援するマイクロサービスモダナイゼーション。',
      keywords: ['マイクロサービスコンサルティング', 'マイクロサービスモダナイゼーション', 'クラウドネイティブアーキテクチャ', '分散システム', 'サービス分割'],
      serviceType: 'マイクロサービスモダナイゼーションコンサルティング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'クラウドコンサルティング',
    title: 'マイクロサービスのモダナイゼーション',
    description: 'モノリシックアプリケーションを、明確な境界、耐障害性のある統合パターン、初日からの可観測性を備えたクラウド対応サービスへ刷新します。',
    capabilities: [
      { name: 'アーキテクチャ設計', description: 'スケーラブルなクラウドシステムに向けて、サービス境界、契約、データ所有権、統合パターンを設計します。' },
      { name: '移行戦略', description: '製品開発を止めることなく、レガシーモノリスから安全かつ段階的に移行する計画を策定します。' },
      { name: 'サービスメッシュと可観測性', description: '分散システムにトレーシング、メトリクス、サービスメッシュ、信頼性プラクティスを導入します。' },
    ],
    primaryCta: 'モダナイゼーションを相談する',
    secondaryCta: 'クラウドコンサルティングを見る',
  },
  delivery: {
    seo: {
      title: 'デリバリーコーチング',
      description: 'アジャイルプラクティス、製品ディスカバリー、技術計画、実行リズムを含む AI・クラウドチーム向けデリバリーコーチング。',
      keywords: ['デリバリーコーチング', 'アジャイルコーチング', 'Scrum コンサルティング', 'AI デリバリー計画', 'クラウドデリバリーコーチング'],
      serviceType: 'デリバリーコーチング',
    },
    breadcrumbHome: 'ホーム',
    eyebrow: 'デリバリーコーチング',
    title: 'AI・クラウドチームのためのデリバリーコーチング',
    description: '実践的なデリバリーコーチング、製品ディスカバリー、技術計画、エンジニアリングリーダーシップ支援によって、複雑な AI・クラウド施策を加速します。',
    capabilities: [
      { name: 'デリバリー運用モデル', description: '実際の成果を軸に、チーム構成、計画サイクル、意思決定経路、デリバリー指標を整えます。' },
      { name: '製品・技術計画', description: 'AI とクラウドの目標を、範囲を定めた増分、アーキテクチャ判断、測定可能なリリース計画へ変換します。' },
      { name: '実行コーチング', description: 'エンジニアリングマネージャー、プロダクトオーナー、チームがデリバリーリスクや運用上の摩擦を乗り越えられるよう支援します。' },
    ],
    primaryCta: 'デリバリーコーチングを相談する',
    secondaryCta: 'LetScrum を見る',
  },
}

const fr: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'Conseil en IA',
      description: 'Conseil en IA pour la stratégie, la livraison de produits, l’intégration de LLM, les passerelles IA, l’évaluation, la gouvernance et la préparation à la production.',
      keywords: ['services de conseil en IA', 'conseil en intégration LLM', 'stratégie produit IA', 'gouvernance IA', 'évaluation IA'],
      serviceType: 'Conseil en IA',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Conseil en IA',
    title: 'Créez des produits IA qui résistent à la production',
    description: 'Nous aidons les équipes à identifier les cas d’usage IA à forte valeur, concevoir des workflows basés sur les LLM, intégrer les fournisseurs de modèles et encadrer leurs systèmes avec l’évaluation, l’observabilité et la gouvernance.',
    capabilities: [
      { name: 'Stratégie IA et feuilles de route', description: 'Priorisez les cas d’usage, évaluez leur faisabilité et définissez un plan d’adoption fondé sur la valeur métier et les contraintes techniques.' },
      { name: 'Intégration LLM et passerelles', description: 'Intégrez les fournisseurs de modèles, routez le trafic, gérez les prompts et centralisez la visibilité sur l’usage, les politiques et les coûts.' },
      { name: 'Évaluation et gouvernance', description: 'Concevez les contrôles qualité, politiques de sécurité, outils d’observabilité et contrôles opérationnels des workflows IA en production.' },
    ],
    primaryCta: 'Parler d’un projet IA',
    secondaryCta: 'Découvrir les passerelles API & IA',
  },
  cloud: {
    seo: {
      title: 'Conseil Cloud',
      description: 'Conseil Cloud pour la modernisation des plateformes, l’architecture cloud native, la migration, le DevOps, la fiabilité et l’optimisation des coûts.',
      keywords: ['services de conseil Cloud', 'modernisation Cloud', 'architecture cloud native', 'migration Cloud', 'FinOps'],
      serviceType: 'Conseil Cloud',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Conseil Cloud',
    title: 'Des plateformes Cloud modernes pour une livraison fiable',
    description: 'Learnmark aide les équipes à moderniser leur infrastructure, leurs applications et leurs workflows de livraison afin que l’adoption du Cloud devienne une capacité métier, et non une charge opérationnelle supplémentaire.',
    capabilities: [
      { name: 'Stratégie et architecture Cloud', description: 'Évaluez votre portefeuille applicatif, définissez une feuille de route pragmatique et concevez des zones d’atterrissage sécurisées ainsi que les architectures cibles.' },
      { name: 'Migration et modernisation', description: 'Migrez les charges historiques en toute sécurité grâce à des plans progressifs, la conteneurisation, la décomposition des services et des contrôles de préparation opérationnelle.' },
      { name: 'Ingénierie de plateforme', description: 'Créez des plateformes développeur avec infrastructure as code, CI/CD, observabilité, garde-fous de sécurité et workflows en libre-service.' },
      { name: 'Fiabilité et optimisation des coûts', description: 'Améliorez la disponibilité, la réponse aux incidents, les performances et les dépenses Cloud grâce à des pratiques mesurables de fiabilité et de FinOps.' },
    ],
    primaryCta: 'Parler d’un projet Cloud',
    secondaryCta: 'Découvrir l’ingénierie de plateforme',
  },
  devops: {
    seo: {
      title: 'Ingénierie de plateforme',
      description: 'Conseil en ingénierie de plateforme et opérations Cloud pour le CI/CD, l’infrastructure as code, l’observabilité, la sécurité et une livraison fiable.',
      keywords: ['conseil en ingénierie de plateforme', 'conseil DevOps', 'automatisation CI/CD', 'infrastructure as code', 'opérations Cloud'],
      serviceType: 'Conseil en ingénierie de plateforme',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Ingénierie de plateforme',
    title: 'Ingénierie de plateforme et opérations Cloud',
    description: 'Simplifiez le développement et les opérations avec des plateformes sécurisées, une infrastructure reproductible et des pipelines qui facilitent la livraison et l’exploitation des logiciels Cloud.',
    capabilities: [
      { name: 'Automatisation CI/CD', description: 'Créez des pipelines robustes d’intégration et de déploiement continus avec des contrôles de qualité, de sécurité et de retour arrière.' },
      { name: 'Infrastructure as Code', description: 'Gérez l’infrastructure Cloud avec des modules réutilisables, des standards d’environnement et des garde-fous de politique.' },
      { name: 'Observabilité et fiabilité', description: 'Améliorez la télémétrie, la réponse aux incidents, les objectifs de niveau de service et la confiance opérationnelle.' },
    ],
    primaryCta: 'Parler d’ingénierie de plateforme',
    secondaryCta: 'Découvrir le conseil Cloud',
  },
  gateway: {
    seo: {
      title: 'Conseil en passerelles API et IA',
      description: 'Conseil en passerelles pour le trafic API et LLM, l’authentification, la limitation de débit, le routage, l’observabilité et la gouvernance.',
      keywords: ['conseil en passerelle API', 'conseil en passerelle IA', 'routage du trafic LLM', 'gouvernance API', 'observabilité des passerelles'],
      serviceType: 'Conseil en passerelles API et IA',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Conseil en IA et Cloud',
    title: 'Conseil en passerelles API & IA',
    description: 'Sécurisez, routez, observez et gouvernez le trafic entre API, microservices et fournisseurs de LLM grâce à des modèles de passerelle conçus pour les opérations en production.',
    capabilities: [
      { name: 'Sécurité et politiques', description: 'Centralisez l’authentification, les autorisations, la gestion des clés et l’application des politiques.' },
      { name: 'Gestion du trafic', description: 'Mettez en œuvre la limitation de débit, la répartition de charge, le basculement, le routage et les contrôles de trafic par fournisseur.' },
      { name: 'Observabilité et gouvernance', description: 'Suivez l’usage, la latence, les coûts, les erreurs et les signaux de conformité sur les charges API et IA.' },
    ],
    primaryCta: 'Parler d’un projet de passerelle',
    secondaryCta: 'Découvrir llmxy',
  },
  microservices: {
    seo: {
      title: 'Modernisation des microservices',
      description: 'Conseil en modernisation des microservices pour l’architecture cloud native, la migration progressive, l’observabilité et les systèmes distribués résilients.',
      keywords: ['conseil en microservices', 'modernisation des microservices', 'architecture cloud native', 'systèmes distribués', 'décomposition des services'],
      serviceType: 'Conseil en modernisation des microservices',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Conseil Cloud',
    title: 'Modernisation des microservices',
    description: 'Modernisez les applications monolithiques en services prêts pour le Cloud, avec des frontières claires, des modèles d’intégration résilients et une observabilité dès le premier jour.',
    capabilities: [
      { name: 'Conception d’architecture', description: 'Concevez les frontières de service, les contrats, la propriété des données et les modèles d’intégration de systèmes Cloud évolutifs.' },
      { name: 'Stratégie de migration', description: 'Créez des plans de migration sûrs et progressifs depuis les monolithes historiques sans interrompre la livraison produit.' },
      { name: 'Service mesh et observabilité', description: 'Mettez en place le traçage, les métriques, le service mesh et les pratiques de fiabilité pour les systèmes distribués.' },
    ],
    primaryCta: 'Parler de modernisation',
    secondaryCta: 'Découvrir le conseil Cloud',
  },
  delivery: {
    seo: {
      title: 'Coaching de livraison',
      description: 'Coaching de livraison pour les équipes IA et Cloud, incluant pratiques agiles, découverte produit, planification technique et rythme d’exécution.',
      keywords: ['coaching de livraison', 'coaching agile', 'conseil Scrum', 'planification de livraison IA', 'coaching de livraison Cloud'],
      serviceType: 'Coaching de livraison',
    },
    breadcrumbHome: 'Accueil',
    eyebrow: 'Coaching de livraison',
    title: 'Coaching de livraison pour les équipes IA et Cloud',
    description: 'Accélérez les initiatives complexes d’IA et de Cloud avec un coaching pragmatique, la découverte produit, la planification technique et un soutien au leadership technique.',
    capabilities: [
      { name: 'Modèle opérationnel de livraison', description: 'Structurez les équipes, le rythme de planification, les circuits de décision et les indicateurs de livraison autour de résultats réels.' },
      { name: 'Planification produit et technique', description: 'Transformez les objectifs IA et Cloud en incréments cadrés, décisions d’architecture et plans de livraison mesurables.' },
      { name: 'Coaching d’exécution', description: 'Accompagnez les responsables techniques, product owners et équipes face aux risques de livraison et aux frictions opérationnelles.' },
    ],
    primaryCta: 'Parler de coaching de livraison',
    secondaryCta: 'Découvrir LetScrum',
  },
}

const de: SolutionMessagesByKey = {
  ai: {
    seo: {
      title: 'KI-Beratung',
      description: 'KI-Beratung für Strategie, Produktentwicklung, LLM-Integration, KI-Gateways, Evaluation, Governance und Produktionsreife.',
      keywords: ['KI-Beratungsleistungen', 'LLM-Integrationsberatung', 'KI-Produktstrategie', 'KI-Governance', 'KI-Evaluation'],
      serviceType: 'KI-Beratung',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'KI-Beratung',
    title: 'KI-Produkte entwickeln, die sich im Betrieb bewähren',
    description: 'Wir helfen Teams, wertvolle KI-Anwendungsfälle zu identifizieren, LLM-gestützte Workflows zu entwerfen, Modellanbieter zu integrieren und ihre Systeme mit Evaluation, Beobachtbarkeit und Governance abzusichern.',
    capabilities: [
      { name: 'KI-Strategie und Roadmaps', description: 'Anwendungsfälle priorisieren, Machbarkeit bewerten und einen Einführungsplan entwickeln, der auf Geschäftswert und technischen Rahmenbedingungen beruht.' },
      { name: 'LLM-Integration und Gateways', description: 'Modellanbieter integrieren, Datenverkehr routen, Prompts verwalten und Transparenz über Nutzung, Richtlinien und Kosten zentralisieren.' },
      { name: 'Evaluation und Governance', description: 'Qualitätsprüfungen, Sicherheitsrichtlinien, Beobachtbarkeit und betriebliche Kontrollen für produktive KI-Workflows entwickeln.' },
    ],
    primaryCta: 'KI-Projekt besprechen',
    secondaryCta: 'API- & KI-Gateways entdecken',
  },
  cloud: {
    seo: {
      title: 'Cloud-Beratung',
      description: 'Cloud-Beratung für Plattformmodernisierung, Cloud-native Architektur, Migration, DevOps, Zuverlässigkeit und Kostenoptimierung.',
      keywords: ['Cloud-Beratungsleistungen', 'Cloud-Modernisierung', 'Cloud-native Architektur', 'Cloud-Migration', 'FinOps'],
      serviceType: 'Cloud-Beratung',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'Cloud-Beratung',
    title: 'Moderne Cloud-Plattformen für zuverlässige Bereitstellung',
    description: 'Learnmark hilft Teams, Infrastruktur, Anwendungen und Bereitstellungsabläufe zu modernisieren, damit die Cloud-Nutzung zu einer Geschäftsfähigkeit statt zu einer zusätzlichen Betriebslast wird.',
    capabilities: [
      { name: 'Cloud-Strategie und Architektur', description: 'Anwendungsportfolio bewerten, eine pragmatische Cloud-Roadmap entwickeln und sichere Landing Zones sowie Zielarchitekturen entwerfen.' },
      { name: 'Migration und Modernisierung', description: 'Legacy-Workloads mit schrittweisen Migrationsplänen, Containerisierung, Service-Zerlegung und Prüfungen der Betriebsbereitschaft sicher verlagern.' },
      { name: 'Platform Engineering', description: 'Entwicklerplattformen mit Infrastructure as Code, CI/CD, Beobachtbarkeit, Sicherheitsleitplanken und Self-Service-Workflows aufbauen.' },
      { name: 'Zuverlässigkeit und Kostenoptimierung', description: 'Verfügbarkeit, Störungsreaktion und Leistung verbessern sowie Cloud-Ausgaben durch messbare Zuverlässigkeits- und FinOps-Praktiken optimieren.' },
    ],
    primaryCta: 'Cloud-Projekt besprechen',
    secondaryCta: 'Platform Engineering entdecken',
  },
  devops: {
    seo: {
      title: 'Platform Engineering',
      description: 'Beratung zu Platform Engineering und Cloud-Betrieb für CI/CD, Infrastructure as Code, Beobachtbarkeit, Sicherheit und zuverlässige Bereitstellung.',
      keywords: ['Platform-Engineering-Beratung', 'DevOps-Beratung', 'CI/CD-Automatisierung', 'Infrastructure as Code', 'Cloud-Betrieb'],
      serviceType: 'Platform-Engineering-Beratung',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'Platform Engineering',
    title: 'Platform Engineering und Cloud-Betrieb',
    description: 'Entwicklung und Betrieb mit sicheren Entwicklerplattformen, reproduzierbarer Infrastruktur und Bereitstellungspipelines optimieren, damit Cloud-Software einfacher ausgeliefert und betrieben werden kann.',
    capabilities: [
      { name: 'CI/CD-Automatisierung', description: 'Robuste Pipelines für kontinuierliche Integration und Bereitstellung mit Qualitäts-, Sicherheits- und Rollback-Kontrollen aufbauen.' },
      { name: 'Infrastructure as Code', description: 'Cloud-Infrastruktur mit wiederverwendbaren Modulen, Umgebungsstandards und Richtlinienleitplanken verwalten.' },
      { name: 'Beobachtbarkeit und Zuverlässigkeit', description: 'Telemetrie, Störungsreaktion, Service-Level-Ziele und betriebliche Sicherheit verbessern.' },
    ],
    primaryCta: 'Platform Engineering besprechen',
    secondaryCta: 'Cloud-Beratung entdecken',
  },
  gateway: {
    seo: {
      title: 'API- und KI-Gateway-Beratung',
      description: 'Gateway-Beratung für API- und LLM-Datenverkehr, Authentifizierung, Ratenbegrenzung, Routing, Beobachtbarkeit und Governance.',
      keywords: ['API-Gateway-Beratung', 'KI-Gateway-Beratung', 'LLM-Datenverkehrsrouting', 'API-Governance', 'Gateway-Beobachtbarkeit'],
      serviceType: 'API- und KI-Gateway-Beratung',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'KI- und Cloud-Beratung',
    title: 'API- & KI-Gateway-Beratung',
    description: 'Datenverkehr zwischen APIs, Microservices und LLM-Anbietern mit Gateway-Mustern für den Produktionsbetrieb absichern, routen, beobachten und steuern.',
    capabilities: [
      { name: 'Sicherheit und Richtlinien', description: 'Authentifizierung, Autorisierung, Schlüsselverwaltung und Richtliniendurchsetzung zentralisieren.' },
      { name: 'Datenverkehrsmanagement', description: 'Ratenbegrenzung, Lastverteilung, Failover, Routing und anbieterspezifische Datenverkehrskontrollen implementieren.' },
      { name: 'Beobachtbarkeit und Governance', description: 'Nutzung, Latenz, Kosten, Fehler und Compliance-Signale für API- und KI-Workloads verfolgen.' },
    ],
    primaryCta: 'Gateway-Projekt besprechen',
    secondaryCta: 'llmxy entdecken',
  },
  microservices: {
    seo: {
      title: 'Microservices-Modernisierung',
      description: 'Beratung zur Microservices-Modernisierung für Cloud-native Architektur, schrittweise Migration, Beobachtbarkeit und widerstandsfähige verteilte Systeme.',
      keywords: ['Microservices-Beratung', 'Microservices-Modernisierung', 'Cloud-native Architektur', 'verteilte Systeme', 'Service-Zerlegung'],
      serviceType: 'Beratung zur Microservices-Modernisierung',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'Cloud-Beratung',
    title: 'Microservices-Modernisierung',
    description: 'Monolithische Anwendungen zu Cloud-fähigen Services mit klaren Grenzen, widerstandsfähigen Integrationsmustern und Beobachtbarkeit ab dem ersten Tag modernisieren.',
    capabilities: [
      { name: 'Architekturdesign', description: 'Service-Grenzen, Verträge, Datenverantwortung und Integrationsmuster für skalierbare Cloud-Systeme entwerfen.' },
      { name: 'Migrationsstrategie', description: 'Sichere, schrittweise Migrationspläne von Legacy-Monolithen erstellen, ohne die Produktbereitstellung anzuhalten.' },
      { name: 'Service Mesh und Beobachtbarkeit', description: 'Tracing, Metriken, Service Mesh und Zuverlässigkeitspraktiken für verteilte Systeme implementieren.' },
    ],
    primaryCta: 'Modernisierung besprechen',
    secondaryCta: 'Cloud-Beratung entdecken',
  },
  delivery: {
    seo: {
      title: 'Delivery Coaching',
      description: 'Delivery Coaching für KI- und Cloud-Teams mit agilen Praktiken, Produktfindung, technischer Planung und Ausführungsrhythmus.',
      keywords: ['Delivery Coaching', 'Agile Coaching', 'Scrum-Beratung', 'KI-Delivery-Planung', 'Cloud-Delivery-Coaching'],
      serviceType: 'Delivery Coaching',
    },
    breadcrumbHome: 'Startseite',
    eyebrow: 'Delivery Coaching',
    title: 'Delivery Coaching für KI- und Cloud-Teams',
    description: 'Komplexe KI- und Cloud-Initiativen mit praxisnahem Delivery Coaching, Produktfindung, technischer Planung und Unterstützung der technischen Führung beschleunigen.',
    capabilities: [
      { name: 'Delivery-Betriebsmodell', description: 'Teamstruktur, Planungsrhythmus, Entscheidungswege und Delivery-Kennzahlen an echten Ergebnissen ausrichten.' },
      { name: 'Produkt- und technische Planung', description: 'KI- und Cloud-Ziele in klar abgegrenzte Schritte, Architekturentscheidungen und messbare Release-Pläne übersetzen.' },
      { name: 'Umsetzungscoaching', description: 'Engineering Manager, Product Owner und Teams beim Umgang mit Delivery-Risiken und betrieblichen Reibungen begleiten.' },
    ],
    primaryCta: 'Delivery Coaching besprechen',
    secondaryCta: 'LetScrum entdecken',
  },
}

export const solutionMessages: Record<Locale, SolutionMessagesByKey> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  fr,
  de,
}