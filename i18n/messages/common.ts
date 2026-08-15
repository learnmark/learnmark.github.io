import type { Locale } from '../config'

export type CommonMessages = {
  header: {
    globalNavLabel: string
    logoAlt: string
    openMenu: string
    closeMenu: string
    howItWorks: string
    forClients: string
    experts: string
    compliance: string
    aboutUs: string
    startProject: string
    mobileEyebrow: string
    mobilePitch: string
  }
  themeToggleLabel: string
  languageSwitcherLabel: string
  footer: {
    logoAlt: string
    description: string
    startProject: string
    joinExperts: string
    companyLabel: string
    clientServicesLabel: string
    expertNetworkLabel: string
    aboutUs: string
    contactUs: string
    privacyPolicy: string
    forClients: string
    howItWorks: string
    compliance: string
    experts: string
    expertApplication: string
    rightsReserved: string
    closing: string
  }
}

export type HeaderDirectoryMessages = {
  menuLabel: string
  panelLabel: string
  groups: {
    products: { label: string; description: string }
    consulting: { label: string; description: string }
    solutions: { label: string; description: string }
  }
  links: {
    letscrum: { label: string; description: string }
    llmxy: { label: string; description: string }
    sello: { label: string; description: string }
    ai: { label: string; description: string }
    cloud: { label: string; description: string }
    platform: { label: string; description: string }
    microservices: { label: string; description: string }
    gateway: { label: string; description: string }
    agileScrum: { label: string; description: string }
    shopify: { label: string; description: string }
  }
}

const enHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: 'Technology',
  panelLabel: 'Learnmark technology products, advisory, and solutions',
  groups: {
    products: {
      label: 'Products',
      description: 'Managed products with open-source foundations.',
    },
    consulting: {
      label: 'Consulting',
      description: 'Specialist guidance from strategy through delivery.',
    },
    solutions: {
      label: 'Solutions',
      description: 'Focused systems for recurring technology needs.',
    },
  },
  links: {
    letscrum: {
      label: 'LetScrum',
      description: 'Scrum planning, taskboards, and delivery workflows for focused teams.',
    },
    llmxy: {
      label: 'llmxy',
      description: 'An LLM gateway for routing, access control, usage, and billing.',
    },
    sello: {
      label: 'Sello',
      description: 'A multi-store commerce workspace with governed AI assistance.',
    },
    ai: {
      label: 'AI',
      description: 'AI strategy, LLM integration, evaluation, and governance.',
    },
    cloud: {
      label: 'Cloud',
      description: 'Cloud architecture, modernization, reliability, and cost control.',
    },
    platform: {
      label: 'Platform engineering',
      description: 'CI/CD, infrastructure as code, observability, and developer platforms.',
    },
    microservices: {
      label: 'Microservices',
      description: 'Incremental modernization for resilient distributed systems.',
    },
    gateway: {
      label: 'API & AI gateway',
      description: 'Secure routing and governance for API and LLM traffic.',
    },
    agileScrum: {
      label: 'Agile & Scrum',
      description: 'Delivery coaching, planning rhythms, and engineering leadership.',
    },
    shopify: {
      label: 'Shopify custom development',
      description: 'Store architecture, themes, integrations, and launch support.',
    },
  },
}

const zhCNHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: '技术业务',
  panelLabel: 'Learnmark 技术产品、咨询与解决方案',
  groups: {
    products: { label: '产品', description: '以开源基础为核心的托管产品。' },
    consulting: { label: '技术咨询', description: '从战略到交付的专业指导。' },
    solutions: { label: '工程解决方案', description: '面向重复技术需求的聚焦系统。' },
  },
  links: {
    letscrum: { label: 'LetScrum', description: '为专注团队提供 Scrum 规划、任务看板与交付流程。' },
    llmxy: { label: 'llmxy', description: '管理路由、访问控制、用量与计费的 LLM 网关。' },
    sello: { label: 'Sello', description: '具备受控 AI 辅助的多店铺电商工作区。' },
    ai: { label: 'AI', description: 'AI 战略、LLM 集成、评估与治理。' },
    cloud: { label: '云', description: '云架构、现代化、可靠性与成本控制。' },
    platform: { label: '平台工程', description: 'CI/CD、基础设施即代码、可观测性与开发者平台。' },
    microservices: { label: '微服务', description: '面向弹性分布式系统的渐进式现代化。' },
    gateway: { label: 'API 与 AI 网关', description: '为 API 与 LLM 流量提供安全路由和治理。' },
    agileScrum: { label: '敏捷与 Scrum', description: '交付辅导、规划节奏与工程领导力。' },
    shopify: { label: 'Shopify 定制开发', description: '商店架构、主题、集成与上线支持。' },
  },
}

const zhTWHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: '技術業務',
  panelLabel: 'Learnmark 技術產品、顧問服務與解決方案',
  groups: {
    products: { label: '產品', description: '以開源基礎為核心的託管產品。' },
    consulting: { label: '技術顧問服務', description: '從策略到交付的專業指導。' },
    solutions: { label: '工程解決方案', description: '面向重複技術需求的聚焦系統。' },
  },
  links: {
    letscrum: { label: 'LetScrum', description: '為專注團隊提供 Scrum 規劃、工作看板與交付流程。' },
    llmxy: { label: 'llmxy', description: '管理路由、存取控制、用量與計費的 LLM 閘道。' },
    sello: { label: 'Sello', description: '具備受控 AI 輔助的多商店電商工作區。' },
    ai: { label: 'AI', description: 'AI 策略、LLM 整合、評估與治理。' },
    cloud: { label: '雲端', description: '雲端架構、現代化、可靠性與成本控制。' },
    platform: { label: '平台工程', description: 'CI/CD、基礎設施即程式碼、可觀測性與開發者平台。' },
    microservices: { label: '微服務', description: '面向韌性分散式系統的漸進式現代化。' },
    gateway: { label: 'API 與 AI 閘道', description: '為 API 與 LLM 流量提供安全路由與治理。' },
    agileScrum: { label: '敏捷與 Scrum', description: '交付輔導、規劃節奏與工程領導力。' },
    shopify: { label: 'Shopify 客製開發', description: '商店架構、佈景主題、整合與上線支援。' },
  },
}

const jaHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: 'テクノロジー',
  panelLabel: 'Learnmark の製品、技術支援、ソリューション',
  groups: {
    products: { label: '製品', description: 'オープンソースを基盤とするマネージド製品。' },
    consulting: { label: '技術支援', description: '戦略から実施までの専門的な支援。' },
    solutions: { label: 'ソリューション', description: '繰り返し発生する技術課題に焦点を当てたシステム。' },
  },
  links: {
    letscrum: { label: 'LetScrum', description: '集中するチーム向けの Scrum 計画、タスクボード、実施フロー。' },
    llmxy: { label: 'llmxy', description: 'ルーティング、アクセス制御、利用量、請求を管理する LLM ゲートウェイ。' },
    sello: { label: 'Sello', description: '統制された AI 支援を備えた複数店舗向けコマースワークスペース。' },
    ai: { label: 'AI', description: 'AI 戦略、LLM 統合、評価、ガバナンス。' },
    cloud: { label: 'クラウド', description: 'クラウド設計、モダナイゼーション、信頼性、コスト管理。' },
    platform: { label: 'プラットフォームエンジニアリング', description: 'CI/CD、IaC、可観測性、開発者プラットフォーム。' },
    microservices: { label: 'マイクロサービス', description: '回復力のある分散システムへ向けた段階的な刷新。' },
    gateway: { label: 'API・AI ゲートウェイ', description: 'API と LLM トラフィックの安全なルーティングと統制。' },
    agileScrum: { label: 'アジャイル・Scrum', description: 'デリバリー支援、計画リズム、エンジニアリングリーダーシップ。' },
    shopify: { label: 'Shopify カスタム開発', description: 'ストア設計、テーマ、統合、ローンチ支援。' },
  },
}

const frHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: 'Technologie',
  panelLabel: 'Produits, conseil technologique et solutions Learnmark',
  groups: {
    products: { label: 'Produits', description: 'Des produits gérés fondés sur l’open source.' },
    consulting: { label: 'Conseil technologique', description: 'Un accompagnement spécialisé, de la stratégie à la livraison.' },
    solutions: { label: 'Solutions', description: 'Des systèmes ciblés pour les besoins technologiques récurrents.' },
  },
  links: {
    letscrum: { label: 'LetScrum', description: 'Planification Scrum, tableaux de tâches et flux de livraison pour équipes concentrées.' },
    llmxy: { label: 'llmxy', description: 'Une passerelle LLM pour le routage, les accès, l’usage et la facturation.' },
    sello: { label: 'Sello', description: 'Un espace e-commerce multi-boutiques avec assistance IA gouvernée.' },
    ai: { label: 'IA', description: 'Stratégie IA, intégration LLM, évaluation et gouvernance.' },
    cloud: { label: 'Cloud', description: 'Architecture Cloud, modernisation, fiabilité et maîtrise des coûts.' },
    platform: { label: 'Ingénierie de plateforme', description: 'CI/CD, infrastructure as code, observabilité et plateformes développeurs.' },
    microservices: { label: 'Microservices', description: 'Modernisation progressive pour systèmes distribués résilients.' },
    gateway: { label: 'Passerelle API et IA', description: 'Routage sécurisé et gouvernance des trafics API et LLM.' },
    agileScrum: { label: 'Agile et Scrum', description: 'Coaching de livraison, rythmes de planification et leadership d’ingénierie.' },
    shopify: { label: 'Développement Shopify sur mesure', description: 'Architecture de boutique, thèmes, intégrations et lancement.' },
  },
}

const deHeaderDirectoryMessages: HeaderDirectoryMessages = {
  menuLabel: 'Technologie',
  panelLabel: 'Learnmark-Produkte, Technologieberatung und Lösungen',
  groups: {
    products: { label: 'Produkte', description: 'Betreute Produkte mit Open-Source-Grundlage.' },
    consulting: { label: 'Technologieberatung', description: 'Fachliche Begleitung von der Strategie bis zur Umsetzung.' },
    solutions: { label: 'Lösungen', description: 'Fokussierte Systeme für wiederkehrende Technologieanforderungen.' },
  },
  links: {
    letscrum: { label: 'LetScrum', description: 'Scrum-Planung, Aufgabenboards und Lieferabläufe für fokussierte Teams.' },
    llmxy: { label: 'llmxy', description: 'Ein LLM-Gateway für Routing, Zugriffskontrolle, Nutzung und Abrechnung.' },
    sello: { label: 'Sello', description: 'Ein Multi-Store-Commerce-Arbeitsbereich mit kontrollierter KI-Unterstützung.' },
    ai: { label: 'KI', description: 'KI-Strategie, LLM-Integration, Bewertung und Governance.' },
    cloud: { label: 'Cloud', description: 'Cloud-Architektur, Modernisierung, Zuverlässigkeit und Kostenkontrolle.' },
    platform: { label: 'Platform Engineering', description: 'CI/CD, Infrastructure as Code, Beobachtbarkeit und Entwicklerplattformen.' },
    microservices: { label: 'Microservices', description: 'Schrittweise Modernisierung für belastbare verteilte Systeme.' },
    gateway: { label: 'API- und KI-Gateway', description: 'Sicheres Routing und Governance für API- und LLM-Datenverkehr.' },
    agileScrum: { label: 'Agile und Scrum', description: 'Delivery-Coaching, Planungsrhythmen und technische Führung.' },
    shopify: { label: 'Individuelle Shopify-Entwicklung', description: 'Shop-Architektur, Themes, Integrationen und Launch-Unterstützung.' },
  },
}

export const headerDirectoryMessages: Record<Locale, HeaderDirectoryMessages> = {
  en: enHeaderDirectoryMessages,
  'zh-CN': zhCNHeaderDirectoryMessages,
  'zh-TW': zhTWHeaderDirectoryMessages,
  ja: jaHeaderDirectoryMessages,
  fr: frHeaderDirectoryMessages,
  de: deHeaderDirectoryMessages,
}

const en: CommonMessages = {
  header: {
    globalNavLabel: 'Global navigation',
    logoAlt: 'Learnmark',
    openMenu: 'Open main menu',
    closeMenu: 'Close menu',
    howItWorks: 'How it works',
    forClients: 'For clients',
    experts: 'Experts',
    compliance: 'Compliance',
    aboutUs: 'About',
    startProject: 'Discuss a project',
    mobileEyebrow: 'Managed expert consultation',
    mobilePitch: 'Move from a complex question to qualified expertise, controlled delivery, and clear settlement.',
  },
  themeToggleLabel: 'Toggle color theme',
  languageSwitcherLabel: 'Change language',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Managed expert consultation for teams that need clear scope, qualified experience, controlled delivery, and accountable settlement.',
    startProject: 'Discuss a project',
    joinExperts: 'Join our expert network',
    companyLabel: 'Company',
    clientServicesLabel: 'Client services',
    expertNetworkLabel: 'Expert network',
    aboutUs: 'About',
    contactUs: 'Contact',
    privacyPolicy: 'Privacy Policy',
    forClients: 'For clients',
    howItWorks: 'How it works',
    compliance: 'Compliance',
    experts: 'For experts',
    expertApplication: 'Become an expert',
    rightsReserved: 'All Rights Reserved.',
    closing: 'From business question to accountable expert project.',
  },
}

const zhCN: CommonMessages = {
  header: {
    globalNavLabel: '全局导航',
    logoAlt: 'Learnmark',
    openMenu: '打开主菜单',
    closeMenu: '关闭菜单',
    howItWorks: '服务流程',
    forClients: '客户服务',
    experts: '专家网络',
    compliance: '合规保障',
    aboutUs: '关于我们',
    startProject: '讨论项目',
    mobileEyebrow: '托管式专家咨询',
    mobilePitch: '从复杂问题推进到合格专家、受控交付与清晰结算。',
  },
  themeToggleLabel: '切换颜色主题',
  languageSwitcherLabel: '切换语言',
  footer: {
    logoAlt: 'Learnmark',
    description: '为需要清晰范围、合格经验、受控交付和责任结算的团队提供托管式专家咨询。',
    startProject: '讨论项目',
    joinExperts: '加入专家网络',
    companyLabel: '公司',
    clientServicesLabel: '客户服务',
    expertNetworkLabel: '专家网络',
    aboutUs: '关于我们',
    contactUs: '联系我们',
    privacyPolicy: '隐私政策',
    forClients: '客户服务',
    howItWorks: '服务流程',
    compliance: '合规保障',
    experts: '专家须知',
    expertApplication: '申请成为专家',
    rightsReserved: '保留所有权利。',
    closing: '从业务问题到责任清晰的专家项目。',
  },
}

const zhTW: CommonMessages = {
  header: {
    globalNavLabel: '全域導覽',
    logoAlt: 'Learnmark',
    openMenu: '開啟主選單',
    closeMenu: '關閉選單',
    howItWorks: '服務流程',
    forClients: '客戶服務',
    experts: '專家網絡',
    compliance: '合規保障',
    aboutUs: '關於我們',
    startProject: '討論專案',
    mobileEyebrow: '託管式專家顧問服務',
    mobilePitch: '從複雜問題推進到合格專家、受控交付與清楚結算。',
  },
  themeToggleLabel: '切換色彩主題',
  languageSwitcherLabel: '切換語言',
  footer: {
    logoAlt: 'Learnmark',
    description: '為需要清楚範圍、合格經驗、受控交付與責任結算的團隊提供託管式專家顧問服務。',
    startProject: '討論專案',
    joinExperts: '加入專家網絡',
    companyLabel: '公司',
    clientServicesLabel: '客戶服務',
    expertNetworkLabel: '專家網絡',
    aboutUs: '關於我們',
    contactUs: '聯絡我們',
    privacyPolicy: '隱私權政策',
    forClients: '客戶服務',
    howItWorks: '服務流程',
    compliance: '合規保障',
    experts: '專家須知',
    expertApplication: '申請成為專家',
    rightsReserved: '保留所有權利。',
    closing: '從商業問題到責任清楚的專家專案。',
  },
}

const ja: CommonMessages = {
  header: {
    globalNavLabel: 'グローバルナビゲーション',
    logoAlt: 'Learnmark',
    openMenu: 'メインメニューを開く',
    closeMenu: 'メニューを閉じる',
    howItWorks: 'ご利用の流れ',
    forClients: 'クライアント向け',
    experts: '専門家ネットワーク',
    compliance: 'コンプライアンス',
    aboutUs: '会社情報',
    startProject: '案件を相談',
    mobileEyebrow: 'マネージド専門家コンサルテーション',
    mobilePitch: '難しい問いから適格な専門家、管理された実施、明確な精算まで。',
  },
  themeToggleLabel: 'カラーテーマを切り替える',
  languageSwitcherLabel: '言語を変更する',
  footer: {
    logoAlt: 'Learnmark',
    description: '明確なスコープ、適格な経験、管理された実施、責任ある精算を必要とするチーム向けの専門家コンサルテーション。',
    startProject: '案件を相談',
    joinExperts: '専門家ネットワークに参加',
    companyLabel: '会社',
    clientServicesLabel: 'クライアントサービス',
    expertNetworkLabel: '専門家ネットワーク',
    aboutUs: '会社情報',
    contactUs: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    forClients: 'クライアント向け',
    howItWorks: 'ご利用の流れ',
    compliance: 'コンプライアンス',
    experts: '専門家向け',
    expertApplication: '専門家として登録',
    rightsReserved: '無断転載を禁じます。',
    closing: '事業上の問いから、責任の明確な専門家プロジェクトへ。',
  },
}

const fr: CommonMessages = {
  header: {
    globalNavLabel: 'Navigation principale',
    logoAlt: 'Learnmark',
    openMenu: 'Ouvrir le menu principal',
    closeMenu: 'Fermer le menu',
    howItWorks: 'Notre méthode',
    forClients: 'Pour les clients',
    experts: 'Réseau d’experts',
    compliance: 'Conformité',
    aboutUs: 'À propos',
    startProject: 'Discuter d’un projet',
    mobileEyebrow: 'Consultations d’experts pilotées',
    mobilePitch: 'D’une question complexe aux experts qualifiés, à la livraison maîtrisée et au règlement clair.',
  },
  themeToggleLabel: 'Changer le thème de couleur',
  languageSwitcherLabel: 'Changer de langue',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Des consultations pilotées pour les équipes qui exigent un périmètre clair, une expérience qualifiée, une livraison maîtrisée et un règlement responsable.',
    startProject: 'Discuter d’un projet',
    joinExperts: 'Rejoindre notre réseau',
    companyLabel: 'Entreprise',
    clientServicesLabel: 'Services clients',
    expertNetworkLabel: 'Réseau d’experts',
    aboutUs: 'À propos',
    contactUs: 'Contact',
    privacyPolicy: 'Politique de confidentialité',
    forClients: 'Pour les clients',
    howItWorks: 'Notre méthode',
    compliance: 'Conformité',
    experts: 'Pour les experts',
    expertApplication: 'Devenir expert',
    rightsReserved: 'Tous droits réservés.',
    closing: 'De la question métier au projet d’experts responsable.',
  },
}

const de: CommonMessages = {
  header: {
    globalNavLabel: 'Hauptnavigation',
    logoAlt: 'Learnmark',
    openMenu: 'Hauptmenü öffnen',
    closeMenu: 'Menü schließen',
    howItWorks: 'So funktioniert es',
    forClients: 'Für Kunden',
    experts: 'Expertennetzwerk',
    compliance: 'Compliance',
    aboutUs: 'Über uns',
    startProject: 'Projekt besprechen',
    mobileEyebrow: 'Betreute Expertenberatung',
    mobilePitch: 'Von der komplexen Frage zu qualifizierter Erfahrung, kontrollierter Leistung und klarer Abrechnung.',
  },
  themeToggleLabel: 'Farbschema wechseln',
  languageSwitcherLabel: 'Sprache ändern',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Betreute Expertenberatung für Teams, die klaren Umfang, qualifizierte Erfahrung, kontrollierte Leistung und verantwortliche Abrechnung benötigen.',
    startProject: 'Projekt besprechen',
    joinExperts: 'Expertennetzwerk beitreten',
    companyLabel: 'Unternehmen',
    clientServicesLabel: 'Kundenservices',
    expertNetworkLabel: 'Expertennetzwerk',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    forClients: 'Für Kunden',
    howItWorks: 'So funktioniert es',
    compliance: 'Compliance',
    experts: 'Für Experten',
    expertApplication: 'Experte werden',
    rightsReserved: 'Alle Rechte vorbehalten.',
    closing: 'Von der Geschäftsfrage zum verantwortbaren Expertenprojekt.',
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
