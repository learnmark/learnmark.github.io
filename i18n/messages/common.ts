import type { Locale } from '../config'

type ItemMessage = {
  name: string
  description: string
}

export type CommonMessages = {
  header: {
    globalNavLabel: string
    logoAlt: string
    openMenu: string
    closeMenu: string
    productsLabel: string
    servicesLabel: string
    solutionsLabel: string
    openSourceLabel: string
    aboutUs: string
    startProject: string
    mobileEyebrow: string
    mobilePitch: string
    products: Record<'llmxy' | 'letscrum' | 'sello', ItemMessage>
    services: Record<'shopify', ItemMessage>
    solutions: Record<'ai' | 'cloud' | 'devops' | 'microservices' | 'gateway', ItemMessage>
    callsToAction: Record<'demo' | 'sales', string>
    openSource: Record<'llmxy' | 'letscrum' | 'sello', ItemMessage>
  }
  themeToggleLabel: string
  languageSwitcherLabel: string
  footer: {
    logoAlt: string
    description: string
    startProject: string
    shopifyDevelopment: string
    companyLabel: string
    servicesLabel: string
    solutionsLabel: string
    productsLabel: string
    openSourceLabel: string
    aboutUs: string
    contactUs: string
    careers: string
    privacyPolicy: string
    shopifyDevelopmentLink: string
    aiConsulting: string
    cloudConsulting: string
    platformEngineering: string
    gateway: string
    microservices: string
    deliveryCoaching: string
    rightsReserved: string
    closing: string
  }
}

const en: CommonMessages = {
  header: {
    globalNavLabel: 'Global',
    logoAlt: 'Learnmark Logo',
    openMenu: 'Open main menu',
    closeMenu: 'Close menu',
    productsLabel: 'Products',
    servicesLabel: 'Services',
    solutionsLabel: 'Solutions',
    openSourceLabel: 'Open Source',
    aboutUs: 'About Us',
    startProject: 'Start a project',
    mobileEyebrow: 'AI + Cloud + Commerce',
    mobilePitch: 'Build intelligent products, reliable platforms, and Shopify stores.',
    products: {
      llmxy: { name: 'llmxy', description: 'Managed LLM gateway deployment, routing operations, and production support.' },
      letscrum: { name: 'LetScrum', description: 'Hosted Scrum workspace with onboarding, migration, and operational support.' },
      sello: { name: 'Sello', description: 'Managed AI commerce workspace for stores, listings, teams, and operations.' },
    },
    services: {
      shopify: { name: 'Shopify Store Development', description: 'Store setup, theme development, commerce integrations, and launch support for Shopify brands.' },
    },
    solutions: {
      ai: { name: 'AI Consulting', description: 'Move from AI ideas to production-ready products and workflows.' },
      cloud: { name: 'Cloud Consulting', description: 'Modernize platforms, architecture, and operations for cloud-native delivery.' },
      devops: { name: 'Platform Engineering', description: 'Build reliable CI/CD, infrastructure as code, and developer platforms.' },
      microservices: { name: 'Microservices Modernization', description: 'Evolve monoliths into scalable, observable distributed systems.' },
      gateway: { name: 'API & AI Gateway', description: 'Secure, route, observe, and govern API and LLM traffic.' },
    },
    callsToAction: { demo: 'Request Demo', sales: 'Contact Sales' },
    openSource: {
      llmxy: { name: 'llmxy', description: 'Self-hosted LLM gateway, consoles, unified API, billing, and optional Envoy relay.' },
      letscrum: { name: 'LetScrum', description: 'Apache-2.0 Scrum service and interface with REST and gRPC APIs.' },
      sello: { name: 'Sello', description: 'Public multi-tenant commerce SaaS foundation under active development.' },
    },
  },
  themeToggleLabel: 'Toggle color theme',
  languageSwitcherLabel: 'Change language',
  footer: {
    logoAlt: 'Learnmark Logo',
    description: 'AI, Cloud, and Shopify services for teams building intelligent products, modern platforms, and trusted commerce experiences.',
    startProject: 'Start a project',
    shopifyDevelopment: 'Shopify development',
    companyLabel: 'Company',
    servicesLabel: 'Services',
    solutionsLabel: 'Solutions',
    productsLabel: 'Products',
    openSourceLabel: 'Open Source',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    careers: 'Careers',
    privacyPolicy: 'Privacy Policy',
    shopifyDevelopmentLink: 'Shopify Development',
    aiConsulting: 'AI Consulting',
    cloudConsulting: 'Cloud Consulting',
    platformEngineering: 'Platform Engineering',
    gateway: 'API & AI Gateway',
    microservices: 'Microservices',
    deliveryCoaching: 'Delivery Coaching',
    rightsReserved: 'All Rights Reserved.',
    closing: 'AI strategy. Cloud architecture. Commerce delivery.',
  },
}

const zhCN: CommonMessages = {
  header: {
    globalNavLabel: '全局导航',
    logoAlt: 'Learnmark 标志',
    openMenu: '打开主菜单',
    closeMenu: '关闭菜单',
    productsLabel: '产品',
    servicesLabel: '服务',
    solutionsLabel: '解决方案',
    openSourceLabel: '开源项目',
    aboutUs: '关于我们',
    startProject: '启动项目',
    mobileEyebrow: 'AI + 云 + 商务',
    mobilePitch: '构建智能产品、可靠平台和 Shopify 商店。',
    products: {
      llmxy: { name: 'llmxy', description: '托管式 LLM 网关部署、路由运维和生产支持。' },
      letscrum: { name: 'LetScrum', description: '托管式 Scrum 工作空间，提供入门、迁移与运维支持。' },
      sello: { name: 'Sello', description: '面向商店、商品、团队与运营的托管式 AI 商务工作空间。' },
    },
    services: {
      shopify: { name: 'Shopify 商店开发', description: '为 Shopify 品牌提供商店搭建、主题开发、商务集成与上线支持。' },
    },
    solutions: {
      ai: { name: 'AI 咨询', description: '将 AI 构想转化为可投入生产的产品和工作流。' },
      cloud: { name: '云咨询', description: '面向云原生交付，现代化平台、架构与运维。' },
      devops: { name: '平台工程', description: '构建可靠的 CI/CD、基础设施即代码和开发者平台。' },
      microservices: { name: '微服务现代化', description: '将单体架构演进为可扩展、可观测的分布式系统。' },
      gateway: { name: 'API 与 AI 网关', description: '安全地路由、观测和治理 API 与 LLM 流量。' },
    },
    callsToAction: { demo: '预约演示', sales: '联系销售' },
    openSource: {
      llmxy: { name: 'llmxy', description: '自托管 LLM 网关，包含控制台、统一 API、计费和可选 Envoy 中继。' },
      letscrum: { name: 'LetScrum', description: '采用 Apache-2.0 许可，提供 REST 和 gRPC API 的 Scrum 服务与界面。' },
      sello: { name: 'Sello', description: '持续开发中的公开多租户商务 SaaS 基础平台。' },
    },
  },
  themeToggleLabel: '切换颜色主题',
  languageSwitcherLabel: '切换语言',
  footer: {
    logoAlt: 'Learnmark 标志',
    description: '为构建智能产品、现代平台和值得信赖的商务体验的团队提供 AI、云和 Shopify 服务。',
    startProject: '启动项目',
    shopifyDevelopment: 'Shopify 开发',
    companyLabel: '公司',
    servicesLabel: '服务',
    solutionsLabel: '解决方案',
    productsLabel: '产品',
    openSourceLabel: '开源项目',
    aboutUs: '关于我们',
    contactUs: '联系我们',
    careers: '加入我们',
    privacyPolicy: '隐私政策',
    shopifyDevelopmentLink: 'Shopify 开发',
    aiConsulting: 'AI 咨询',
    cloudConsulting: '云咨询',
    platformEngineering: '平台工程',
    gateway: 'API 与 AI 网关',
    microservices: '微服务',
    deliveryCoaching: '交付辅导',
    rightsReserved: '保留所有权利。',
    closing: 'AI 战略。云架构。商务交付。',
  },
}

const zhTW: CommonMessages = {
  header: {
    globalNavLabel: '全域導覽',
    logoAlt: 'Learnmark 標誌',
    openMenu: '開啟主選單',
    closeMenu: '關閉選單',
    productsLabel: '產品',
    servicesLabel: '服務',
    solutionsLabel: '解決方案',
    openSourceLabel: '開源專案',
    aboutUs: '關於我們',
    startProject: '啟動專案',
    mobileEyebrow: 'AI + 雲端 + 商務',
    mobilePitch: '打造智慧產品、可靠平台與 Shopify 商店。',
    products: {
      llmxy: { name: 'llmxy', description: '託管式 LLM 閘道部署、路由維運與正式環境支援。' },
      letscrum: { name: 'LetScrum', description: '託管式 Scrum 工作空間，提供導入、遷移與維運支援。' },
      sello: { name: 'Sello', description: '面向商店、商品、團隊與營運的託管式 AI 商務工作空間。' },
    },
    services: {
      shopify: { name: 'Shopify 商店開發', description: '為 Shopify 品牌提供商店建置、佈景主題開發、商務整合與上線支援。' },
    },
    solutions: {
      ai: { name: 'AI 顧問服務', description: '將 AI 構想轉化為可投入正式環境的產品與工作流程。' },
      cloud: { name: '雲端顧問服務', description: '為雲端原生交付現代化平台、架構與維運。' },
      devops: { name: '平台工程', description: '打造可靠的 CI/CD、基礎設施即程式碼與開發者平台。' },
      microservices: { name: '微服務現代化', description: '將單體架構演進為可擴充、可觀測的分散式系統。' },
      gateway: { name: 'API 與 AI 閘道', description: '安全地路由、觀測與治理 API 及 LLM 流量。' },
    },
    callsToAction: { demo: '預約展示', sales: '聯絡業務' },
    openSource: {
      llmxy: { name: 'llmxy', description: '自架 LLM 閘道，包含控制台、統一 API、計費與選用的 Envoy 中繼。' },
      letscrum: { name: 'LetScrum', description: '採用 Apache-2.0 授權，提供 REST 與 gRPC API 的 Scrum 服務及介面。' },
      sello: { name: 'Sello', description: '持續開發中的公開多租戶商務 SaaS 基礎平台。' },
    },
  },
  themeToggleLabel: '切換色彩主題',
  languageSwitcherLabel: '切換語言',
  footer: {
    logoAlt: 'Learnmark 標誌',
    description: '為打造智慧產品、現代平台與可信賴商務體驗的團隊提供 AI、雲端及 Shopify 服務。',
    startProject: '啟動專案',
    shopifyDevelopment: 'Shopify 開發',
    companyLabel: '公司',
    servicesLabel: '服務',
    solutionsLabel: '解決方案',
    productsLabel: '產品',
    openSourceLabel: '開源專案',
    aboutUs: '關於我們',
    contactUs: '聯絡我們',
    careers: '加入我們',
    privacyPolicy: '隱私權政策',
    shopifyDevelopmentLink: 'Shopify 開發',
    aiConsulting: 'AI 顧問服務',
    cloudConsulting: '雲端顧問服務',
    platformEngineering: '平台工程',
    gateway: 'API 與 AI 閘道',
    microservices: '微服務',
    deliveryCoaching: '交付輔導',
    rightsReserved: '保留所有權利。',
    closing: 'AI 策略。雲端架構。商務交付。',
  },
}

const ja: CommonMessages = {
  header: {
    globalNavLabel: 'グローバルナビゲーション',
    logoAlt: 'Learnmark ロゴ',
    openMenu: 'メインメニューを開く',
    closeMenu: 'メニューを閉じる',
    productsLabel: '製品',
    servicesLabel: 'サービス',
    solutionsLabel: 'ソリューション',
    openSourceLabel: 'オープンソース',
    aboutUs: '会社情報',
    startProject: 'プロジェクトを始める',
    mobileEyebrow: 'AI + クラウド + コマース',
    mobilePitch: 'インテリジェントな製品、信頼性の高いプラットフォーム、Shopify ストアを構築します。',
    products: {
      llmxy: { name: 'llmxy', description: 'LLM ゲートウェイのマネージド展開、ルーティング運用、本番サポート。' },
      letscrum: { name: 'LetScrum', description: '導入、移行、運用サポートを備えたホステッド Scrum ワークスペース。' },
      sello: { name: 'Sello', description: '店舗、商品、チーム、運用のためのマネージド AI コマースワークスペース。' },
    },
    services: {
      shopify: { name: 'Shopify ストア開発', description: 'Shopify ブランド向けのストア構築、テーマ開発、コマース連携、ローンチ支援。' },
    },
    solutions: {
      ai: { name: 'AI コンサルティング', description: 'AI のアイデアを本番対応の製品とワークフローへ進化させます。' },
      cloud: { name: 'クラウドコンサルティング', description: 'クラウドネイティブなデリバリーに向けて、プラットフォーム、アーキテクチャ、運用を刷新します。' },
      devops: { name: 'プラットフォームエンジニアリング', description: '信頼性の高い CI/CD、Infrastructure as Code、開発者プラットフォームを構築します。' },
      microservices: { name: 'マイクロサービスのモダナイゼーション', description: 'モノリスを拡張性と可観測性に優れた分散システムへ移行します。' },
      gateway: { name: 'API & AI ゲートウェイ', description: 'API と LLM のトラフィックを安全にルーティング、監視、統制します。' },
    },
    callsToAction: { demo: 'デモを申し込む', sales: '営業に問い合わせる' },
    openSource: {
      llmxy: { name: 'llmxy', description: 'コンソール、統合 API、課金、オプションの Envoy リレーを備えたセルフホスト型 LLM ゲートウェイ。' },
      letscrum: { name: 'LetScrum', description: 'REST と gRPC API を備えた Apache-2.0 の Scrum サービスとインターフェイス。' },
      sello: { name: 'Sello', description: '開発が進行中の公開マルチテナント型コマース SaaS 基盤。' },
    },
  },
  themeToggleLabel: 'カラーテーマを切り替える',
  languageSwitcherLabel: '言語を変更する',
  footer: {
    logoAlt: 'Learnmark ロゴ',
    description: 'インテリジェントな製品、最新のプラットフォーム、信頼できるコマース体験を構築するチームのための AI、クラウド、Shopify サービス。',
    startProject: 'プロジェクトを始める',
    shopifyDevelopment: 'Shopify 開発',
    companyLabel: '会社',
    servicesLabel: 'サービス',
    solutionsLabel: 'ソリューション',
    productsLabel: '製品',
    openSourceLabel: 'オープンソース',
    aboutUs: '会社情報',
    contactUs: 'お問い合わせ',
    careers: '採用情報',
    privacyPolicy: 'プライバシーポリシー',
    shopifyDevelopmentLink: 'Shopify 開発',
    aiConsulting: 'AI コンサルティング',
    cloudConsulting: 'クラウドコンサルティング',
    platformEngineering: 'プラットフォームエンジニアリング',
    gateway: 'API & AI ゲートウェイ',
    microservices: 'マイクロサービス',
    deliveryCoaching: 'デリバリーコーチング',
    rightsReserved: '無断転載を禁じます。',
    closing: 'AI 戦略。クラウドアーキテクチャ。コマースデリバリー。',
  },
}

const fr: CommonMessages = {
  header: {
    globalNavLabel: 'Navigation principale',
    logoAlt: 'Logo Learnmark',
    openMenu: 'Ouvrir le menu principal',
    closeMenu: 'Fermer le menu',
    productsLabel: 'Produits',
    servicesLabel: 'Services',
    solutionsLabel: 'Solutions',
    openSourceLabel: 'Open source',
    aboutUs: 'À propos',
    startProject: 'Démarrer un projet',
    mobileEyebrow: 'IA + Cloud + Commerce',
    mobilePitch: 'Créez des produits intelligents, des plateformes fiables et des boutiques Shopify.',
    products: {
      llmxy: { name: 'llmxy', description: 'Déploiement managé de passerelles LLM, opérations de routage et support en production.' },
      letscrum: { name: 'LetScrum', description: 'Espace Scrum hébergé avec accompagnement à la prise en main, à la migration et aux opérations.' },
      sello: { name: 'Sello', description: 'Espace de commerce IA managé pour les boutiques, catalogues, équipes et opérations.' },
    },
    services: {
      shopify: { name: 'Développement de boutiques Shopify', description: 'Création de boutiques, développement de thèmes, intégrations e-commerce et accompagnement au lancement pour les marques Shopify.' },
    },
    solutions: {
      ai: { name: 'Conseil en IA', description: 'Transformez vos idées d’IA en produits et workflows prêts pour la production.' },
      cloud: { name: 'Conseil Cloud', description: 'Modernisez plateformes, architecture et opérations pour une livraison cloud native.' },
      devops: { name: 'Ingénierie de plateforme', description: 'Créez des CI/CD fiables, une infrastructure as code et des plateformes pour développeurs.' },
      microservices: { name: 'Modernisation des microservices', description: 'Faites évoluer les monolithes vers des systèmes distribués évolutifs et observables.' },
      gateway: { name: 'Passerelle API & IA', description: 'Sécurisez, routez, observez et gouvernez le trafic API et LLM.' },
    },
    callsToAction: { demo: 'Demander une démo', sales: 'Contacter les ventes' },
    openSource: {
      llmxy: { name: 'llmxy', description: 'Passerelle LLM auto-hébergée avec consoles, API unifiée, facturation et relais Envoy en option.' },
      letscrum: { name: 'LetScrum', description: 'Service et interface Scrum sous licence Apache-2.0 avec API REST et gRPC.' },
      sello: { name: 'Sello', description: 'Socle SaaS e-commerce public et multi-tenant en cours de développement.' },
    },
  },
  themeToggleLabel: 'Changer le thème de couleur',
  languageSwitcherLabel: 'Changer de langue',
  footer: {
    logoAlt: 'Logo Learnmark',
    description: 'Services IA, Cloud et Shopify pour les équipes qui créent des produits intelligents, des plateformes modernes et des expériences e-commerce fiables.',
    startProject: 'Démarrer un projet',
    shopifyDevelopment: 'Développement Shopify',
    companyLabel: 'Entreprise',
    servicesLabel: 'Services',
    solutionsLabel: 'Solutions',
    productsLabel: 'Produits',
    openSourceLabel: 'Open source',
    aboutUs: 'À propos',
    contactUs: 'Nous contacter',
    careers: 'Carrières',
    privacyPolicy: 'Politique de confidentialité',
    shopifyDevelopmentLink: 'Développement Shopify',
    aiConsulting: 'Conseil en IA',
    cloudConsulting: 'Conseil Cloud',
    platformEngineering: 'Ingénierie de plateforme',
    gateway: 'Passerelle API & IA',
    microservices: 'Microservices',
    deliveryCoaching: 'Coaching de livraison',
    rightsReserved: 'Tous droits réservés.',
    closing: 'Stratégie IA. Architecture Cloud. Livraison e-commerce.',
  },
}

const de: CommonMessages = {
  header: {
    globalNavLabel: 'Hauptnavigation',
    logoAlt: 'Learnmark-Logo',
    openMenu: 'Hauptmenü öffnen',
    closeMenu: 'Menü schließen',
    productsLabel: 'Produkte',
    servicesLabel: 'Leistungen',
    solutionsLabel: 'Lösungen',
    openSourceLabel: 'Open Source',
    aboutUs: 'Über uns',
    startProject: 'Projekt starten',
    mobileEyebrow: 'KI + Cloud + Commerce',
    mobilePitch: 'Intelligente Produkte, zuverlässige Plattformen und Shopify-Shops entwickeln.',
    products: {
      llmxy: { name: 'llmxy', description: 'Managed Bereitstellung von LLM-Gateways, Routing-Betrieb und Produktionssupport.' },
      letscrum: { name: 'LetScrum', description: 'Gehosteter Scrum-Arbeitsbereich mit Onboarding, Migration und Betriebssupport.' },
      sello: { name: 'Sello', description: 'Managed KI-Commerce-Arbeitsbereich für Shops, Angebote, Teams und Betrieb.' },
    },
    services: {
      shopify: { name: 'Shopify-Shop-Entwicklung', description: 'Shop-Einrichtung, Theme-Entwicklung, Commerce-Integrationen und Launch-Support für Shopify-Marken.' },
    },
    solutions: {
      ai: { name: 'KI-Beratung', description: 'Von KI-Ideen zu produktionsreifen Produkten und Workflows.' },
      cloud: { name: 'Cloud-Beratung', description: 'Plattformen, Architektur und Betrieb für Cloud-native Bereitstellung modernisieren.' },
      devops: { name: 'Platform Engineering', description: 'Zuverlässige CI/CD, Infrastructure as Code und Entwicklerplattformen aufbauen.' },
      microservices: { name: 'Microservices-Modernisierung', description: 'Monolithen zu skalierbaren, beobachtbaren verteilten Systemen weiterentwickeln.' },
      gateway: { name: 'API- & KI-Gateway', description: 'API- und LLM-Datenverkehr absichern, routen, beobachten und steuern.' },
    },
    callsToAction: { demo: 'Demo anfragen', sales: 'Vertrieb kontaktieren' },
    openSource: {
      llmxy: { name: 'llmxy', description: 'Selbst gehostetes LLM-Gateway mit Konsolen, einheitlicher API, Abrechnung und optionalem Envoy-Relay.' },
      letscrum: { name: 'LetScrum', description: 'Scrum-Service und Oberfläche unter Apache-2.0 mit REST- und gRPC-APIs.' },
      sello: { name: 'Sello', description: 'Öffentliche mandantenfähige Commerce-SaaS-Basis in aktiver Entwicklung.' },
    },
  },
  themeToggleLabel: 'Farbschema wechseln',
  languageSwitcherLabel: 'Sprache wechseln',
  footer: {
    logoAlt: 'Learnmark-Logo',
    description: 'KI-, Cloud- und Shopify-Services für Teams, die intelligente Produkte, moderne Plattformen und vertrauenswürdige Commerce-Erlebnisse entwickeln.',
    startProject: 'Projekt starten',
    shopifyDevelopment: 'Shopify-Entwicklung',
    companyLabel: 'Unternehmen',
    servicesLabel: 'Leistungen',
    solutionsLabel: 'Lösungen',
    productsLabel: 'Produkte',
    openSourceLabel: 'Open Source',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    careers: 'Karriere',
    privacyPolicy: 'Datenschutz',
    shopifyDevelopmentLink: 'Shopify-Entwicklung',
    aiConsulting: 'KI-Beratung',
    cloudConsulting: 'Cloud-Beratung',
    platformEngineering: 'Platform Engineering',
    gateway: 'API- & KI-Gateway',
    microservices: 'Microservices',
    deliveryCoaching: 'Delivery Coaching',
    rightsReserved: 'Alle Rechte vorbehalten.',
    closing: 'KI-Strategie. Cloud-Architektur. Commerce-Bereitstellung.',
  },
}

export const commonMessages: Record<Locale, CommonMessages> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  fr,
  de,
}