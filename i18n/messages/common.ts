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

export const headerDirectoryMessages: HeaderDirectoryMessages = {
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
    startProject: 'Start a project',
    mobileEyebrow: 'Managed expert consultation',
    mobilePitch: 'Move from a complex question to qualified expertise, controlled delivery, and clear settlement.',
  },
  themeToggleLabel: 'Toggle color theme',
  languageSwitcherLabel: 'Change language',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Managed expert consultation for teams that need clear scope, qualified experience, controlled delivery, and accountable settlement.',
    startProject: 'Start a project',
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
    startProject: '启动项目',
    mobileEyebrow: '专家洞察，全流程管理',
    mobilePitch: '由专属项目团队为您匹配合适专家并管理咨询全流程。',
  },
  themeToggleLabel: '切换颜色主题',
  languageSwitcherLabel: '切换语言',
  footer: {
    logoAlt: 'Learnmark',
    description: '为企业与投资团队提供专家研究及咨询服务，支持关键业务与投资决策。',
    startProject: '启动项目',
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
    closing: '匹配合适专家，管理每一步咨询。',
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
    startProject: '啟動專案',
    mobileEyebrow: '專家洞察，全流程管理',
    mobilePitch: '由專屬專案團隊為您配對合適專家並管理顧問服務全流程。',
  },
  themeToggleLabel: '切換色彩主題',
  languageSwitcherLabel: '切換語言',
  footer: {
    logoAlt: 'Learnmark',
    description: '為企業與投資團隊提供專家研究及顧問服務，支援關鍵商業與投資決策。',
    startProject: '啟動專案',
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
    closing: '配對合適專家，管理每一步顧問服務。',
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
    startProject: 'プロジェクトを開始',
    mobileEyebrow: '専門知識を、最初から最後まで管理',
    mobilePitch: '専任チームが適切な専門家を選定し、コンサルテーションの全工程を支援します。',
  },
  themeToggleLabel: 'カラーテーマを切り替える',
  languageSwitcherLabel: '言語を変更する',
  footer: {
    logoAlt: 'Learnmark',
    description: '重要な事業・投資判断を行うチームのための専門家リサーチとコンサルテーションサービス。',
    startProject: 'プロジェクトを開始',
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
    closing: '適切な専門知識。全面的に管理されたプロジェクト。',
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
    startProject: 'Démarrer un projet',
    mobileEyebrow: 'L’expertise, gérée de bout en bout',
    mobilePitch: 'Une équipe dédiée identifie les bons experts et gère chaque étape de la consultation.',
  },
  themeToggleLabel: 'Changer le thème de couleur',
  languageSwitcherLabel: 'Changer de langue',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Recherche d’experts et consultations pour les équipes qui prennent des décisions stratégiques et d’investissement majeures.',
    startProject: 'Démarrer un projet',
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
    closing: 'La bonne expertise. Une mission entièrement gérée.',
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
    startProject: 'Projekt starten',
    mobileEyebrow: 'Expertenwissen, vollständig betreut',
    mobilePitch: 'Ein festes Projektteam findet passende Fachleute und begleitet jeden Schritt der Beratung.',
  },
  themeToggleLabel: 'Farbschema wechseln',
  languageSwitcherLabel: 'Sprache ändern',
  footer: {
    logoAlt: 'Learnmark',
    description: 'Expertenrecherche und Beratung für Teams, die wichtige Geschäfts- und Investitionsentscheidungen treffen.',
    startProject: 'Projekt starten',
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
    closing: 'Passendes Expertenwissen. Eine vollständig betreute Beratung.',
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
