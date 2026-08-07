import type { Locale } from '../config'

export type HomeMessages = {
  seoTitle: string
  seoDescription: string
  intro: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    capabilities: string[]
    modelTitle: string
    modelSubtitle: string
    live: string
    layers: Array<{ name: string; detail: string }>
    signals: Array<{ label: string; value: string }>
  }
  workWith: {
    eyebrow: string
    title: string
    description: string
    links: string[]
    services: Array<{ name: string; value: string; description: string }>
  }
  stats: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ name: string; value: string }>
  }
  feedback: {
    quote: string
    name: string
    role: string
  }
  subscribe: {
    title: string
    description: string
    emailLabel: string
    emailPlaceholder: string
    submit: string
    submitting: string
    success: string
    error: string
    notesTitle: string
    notesDescription: string
    privacyTitle: string
    privacyDescription: string
  }
}

export const homeMessages: Record<Locale, HomeMessages> = {
  en: {
    seoTitle: 'AI, Cloud, and Shopify Services',
    seoDescription: 'Learnmark helps teams design intelligent products, modernize cloud platforms, build Shopify stores, and ship reliable software systems.',
    intro: {
      eyebrow: 'AI + Cloud Consulting',
      title: 'Build intelligent products on cloud platforms that can scale.',
      description: 'Learnmark helps organizations turn AI opportunities into production systems and modernize cloud platforms for secure, reliable, continuously delivered software.',
      primaryCta: 'Plan an AI or Cloud project',
      secondaryCta: 'Explore cloud consulting',
      capabilities: ['AI product delivery', 'Cloud platforms', 'LLM gateways', 'Reliability engineering'],
      modelTitle: 'AI Cloud Operating Model',
      modelSubtitle: 'Strategy to production loop',
      live: 'Live',
      layers: [
        { name: 'AI Strategy', detail: 'Use cases, prompts, evaluation' },
        { name: 'Cloud Platform', detail: 'Landing zones, IaC, CI/CD' },
        { name: 'Operations', detail: 'Observability, cost, governance' },
      ],
      signals: [
        { label: 'Production readiness', value: 'High' },
        { label: 'Delivery model', value: 'Advisory + build' },
        { label: 'Focus', value: 'AI / Cloud' },
      ],
    },
    workWith: {
      eyebrow: 'Engagement model',
      title: 'Work with AI and Cloud specialists',
      description: 'We partner with engineering and product leaders to assess strategy, design production architecture, and deliver the hard parts of AI-enabled and cloud-native systems.',
      links: ['Start a consulting conversation', 'AI consulting', 'Cloud consulting'],
      services: [
        { name: 'AI strategy and delivery', value: 'AI', description: 'Use-case discovery, LLM integration, evaluation, and governance.' },
        { name: 'Cloud architecture and migration', value: 'Cloud', description: 'Landing zones, modernization roadmaps, and cloud-native architecture.' },
        { name: 'Platform engineering and DevOps', value: 'Ops', description: 'CI/CD, infrastructure as code, observability, and reliability practices.' },
        { name: 'Architecture reviews and coaching', value: 'Advisory', description: 'Technical due diligence, roadmap design, and team delivery coaching.' },
      ],
    },
    stats: {
      eyebrow: 'How we measure value',
      title: 'Focused on AI and Cloud outcomes',
      description: 'We help teams move from strategy to production with practical architecture, implementation support, and delivery coaching.',
      items: [
        { name: 'Focused consulting domains', value: '2' },
        { name: 'Years of software architecture practice', value: '15+' },
        { name: 'From advisory to delivery', value: 'End-to-end' },
      ],
    },
    feedback: {
      quote: '“Learnmark helped us connect AI strategy with a cloud architecture we could actually operate. Their team brought practical engineering depth, clear delivery guidance, and a strong focus on production readiness.”',
      name: 'Sarah Chen',
      role: 'CTO at CloudFlow',
    },
    subscribe: {
      title: 'Subscribe to our AI and Cloud notes',
      description: 'Get practical architecture notes, AI delivery lessons, and cloud modernization ideas from Learnmark.',
      emailLabel: 'Your email address',
      emailPlaceholder: 'Enter your email',
      submit: 'Subscribe',
      submitting: 'Subscribing...',
      success: 'Thanks for subscribing!',
      error: 'Something went wrong. Please try again.',
      notesTitle: 'Practical field notes',
      notesDescription: 'Receive concise resources for AI product delivery, cloud platforms, and engineering leadership.',
      privacyTitle: 'No spam',
      privacyDescription: 'No spam, only useful consulting notes with the option to unsubscribe at any time.',
    },
  },
  'zh-CN': {
    seoTitle: 'AI、云与 Shopify 服务',
    seoDescription: 'Learnmark 帮助团队设计智能产品、现代化云平台、构建 Shopify 商店并交付可靠的软件系统。',
    intro: {
      eyebrow: 'AI + 云咨询',
      title: '在可扩展的云平台上构建智能产品。',
      description: 'Learnmark 帮助组织将 AI 机会转化为生产系统，并现代化云平台，以安全、可靠且持续地交付软件。',
      primaryCta: '规划 AI 或云项目',
      secondaryCta: '了解云咨询',
      capabilities: ['AI 产品交付', '云平台', 'LLM 网关', '可靠性工程'],
      modelTitle: 'AI 云运营模型',
      modelSubtitle: '从战略到生产的闭环',
      live: '运行中',
      layers: [
        { name: 'AI 战略', detail: '用例、提示词、评估' },
        { name: '云平台', detail: '着陆区、IaC、CI/CD' },
        { name: '运维', detail: '可观测性、成本、治理' },
      ],
      signals: [
        { label: '生产就绪度', value: '高' },
        { label: '交付模式', value: '咨询 + 构建' },
        { label: '重点', value: 'AI / 云' },
      ],
    },
    workWith: {
      eyebrow: '合作模式',
      title: '与 AI 和云专家合作',
      description: '我们与工程和产品负责人合作，评估战略、设计生产架构，并交付 AI 驱动与云原生系统中最具挑战的部分。',
      links: ['开始咨询对话', 'AI 咨询', '云咨询'],
      services: [
        { name: 'AI 战略与交付', value: 'AI', description: '用例探索、LLM 集成、评估与治理。' },
        { name: '云架构与迁移', value: '云', description: '着陆区、现代化路线图与云原生架构。' },
        { name: '平台工程与 DevOps', value: '运维', description: 'CI/CD、基础设施即代码、可观测性与可靠性实践。' },
        { name: '架构评审与辅导', value: '咨询', description: '技术尽职调查、路线图设计与团队交付辅导。' },
      ],
    },
    stats: {
      eyebrow: '我们如何衡量价值',
      title: '聚焦 AI 与云成果',
      description: '我们通过务实的架构、实施支持和交付辅导，帮助团队从战略走向生产。',
      items: [
        { name: '专注的咨询领域', value: '2' },
        { name: '软件架构实践年限', value: '15+' },
        { name: '从咨询到交付', value: '端到端' },
      ],
    },
    feedback: {
      quote: '“Learnmark 帮助我们将 AI 战略与真正可运营的云架构连接起来。他们带来了务实的工程深度、清晰的交付指导，并始终聚焦生产就绪。”',
      name: 'Sarah Chen',
      role: 'CloudFlow 技术总监',
    },
    subscribe: {
      title: '订阅我们的 AI 与云笔记',
      description: '获取 Learnmark 的实用架构笔记、AI 交付经验和云现代化观点。',
      emailLabel: '您的电子邮箱',
      emailPlaceholder: '输入电子邮箱',
      submit: '订阅',
      submitting: '订阅中...',
      success: '感谢订阅！',
      error: '出现问题，请重试。',
      notesTitle: '实战笔记',
      notesDescription: '获取关于 AI 产品交付、云平台和工程领导力的精炼内容。',
      privacyTitle: '绝不骚扰',
      privacyDescription: '只发送有用的咨询笔记，您可以随时退订。',
    },
  },
  'zh-TW': {
    seoTitle: 'AI、雲端與 Shopify 服務',
    seoDescription: 'Learnmark 協助團隊設計智慧產品、現代化雲端平台、打造 Shopify 商店並交付可靠的軟體系統。',
    intro: {
      eyebrow: 'AI + 雲端顧問服務',
      title: '在可擴充的雲端平台上打造智慧產品。',
      description: 'Learnmark 協助組織將 AI 機會轉化為正式系統，並現代化雲端平台，以安全、可靠且持續地交付軟體。',
      primaryCta: '規劃 AI 或雲端專案',
      secondaryCta: '瞭解雲端顧問服務',
      capabilities: ['AI 產品交付', '雲端平台', 'LLM 閘道', '可靠性工程'],
      modelTitle: 'AI 雲端營運模型',
      modelSubtitle: '從策略到正式環境的循環',
      live: '運行中',
      layers: [
        { name: 'AI 策略', detail: '使用案例、提示詞、評估' },
        { name: '雲端平台', detail: '登陸區、IaC、CI/CD' },
        { name: '維運', detail: '可觀測性、成本、治理' },
      ],
      signals: [
        { label: '正式環境就緒度', value: '高' },
        { label: '交付模式', value: '顧問 + 建置' },
        { label: '重點', value: 'AI / 雲端' },
      ],
    },
    workWith: {
      eyebrow: '合作模式',
      title: '與 AI 和雲端專家合作',
      description: '我們與工程及產品負責人合作，評估策略、設計正式環境架構，並交付 AI 驅動與雲端原生系統中最具挑戰的部分。',
      links: ['開始顧問對話', 'AI 顧問服務', '雲端顧問服務'],
      services: [
        { name: 'AI 策略與交付', value: 'AI', description: '使用案例探索、LLM 整合、評估與治理。' },
        { name: '雲端架構與遷移', value: '雲端', description: '登陸區、現代化路線圖與雲端原生架構。' },
        { name: '平台工程與 DevOps', value: '維運', description: 'CI/CD、基礎設施即程式碼、可觀測性與可靠性實務。' },
        { name: '架構檢視與輔導', value: '顧問', description: '技術盡職調查、路線圖設計與團隊交付輔導。' },
      ],
    },
    stats: {
      eyebrow: '我們如何衡量價值',
      title: '聚焦 AI 與雲端成果',
      description: '我們透過務實的架構、實作支援與交付輔導，協助團隊從策略走向正式環境。',
      items: [
        { name: '專注的顧問領域', value: '2' },
        { name: '軟體架構實務年資', value: '15+' },
        { name: '從顧問到交付', value: '端到端' },
      ],
    },
    feedback: {
      quote: '“Learnmark 協助我們將 AI 策略與真正可營運的雲端架構連結起來。他們帶來務實的工程深度、清楚的交付指導，並始終聚焦正式環境就緒。”',
      name: 'Sarah Chen',
      role: 'CloudFlow 技術長',
    },
    subscribe: {
      title: '訂閱我們的 AI 與雲端筆記',
      description: '取得 Learnmark 的實用架構筆記、AI 交付經驗與雲端現代化觀點。',
      emailLabel: '您的電子郵件',
      emailPlaceholder: '輸入電子郵件',
      submit: '訂閱',
      submitting: '訂閱中...',
      success: '感謝訂閱！',
      error: '發生問題，請再試一次。',
      notesTitle: '實戰筆記',
      notesDescription: '取得關於 AI 產品交付、雲端平台與工程領導力的精簡內容。',
      privacyTitle: '絕不騷擾',
      privacyDescription: '只傳送有用的顧問筆記，您可隨時取消訂閱。',
    },
  },
  ja: {
    seoTitle: 'AI・クラウド・Shopify サービス',
    seoDescription: 'Learnmark は、インテリジェントな製品設計、クラウドプラットフォームの刷新、Shopify ストア構築、信頼性の高いソフトウェア提供を支援します。',
    intro: {
      eyebrow: 'AI + クラウドコンサルティング',
      title: '拡張可能なクラウドプラットフォームでインテリジェントな製品を構築。',
      description: 'Learnmark は AI の機会を本番システムへ変え、安全で信頼性が高く継続的に提供できるようクラウドプラットフォームを刷新します。',
      primaryCta: 'AI・クラウドプロジェクトを計画する',
      secondaryCta: 'クラウドコンサルティングを見る',
      capabilities: ['AI 製品デリバリー', 'クラウドプラットフォーム', 'LLM ゲートウェイ', '信頼性エンジニアリング'],
      modelTitle: 'AI クラウド運用モデル',
      modelSubtitle: '戦略から本番へのループ',
      live: '稼働中',
      layers: [
        { name: 'AI 戦略', detail: 'ユースケース、プロンプト、評価' },
        { name: 'クラウドプラットフォーム', detail: 'Landing Zone、IaC、CI/CD' },
        { name: '運用', detail: '可観測性、コスト、ガバナンス' },
      ],
      signals: [
        { label: '本番準備度', value: '高' },
        { label: 'デリバリーモデル', value: '助言 + 構築' },
        { label: '重点', value: 'AI / クラウド' },
      ],
    },
    workWith: {
      eyebrow: 'エンゲージメントモデル',
      title: 'AI・クラウドの専門家と取り組む',
      description: 'エンジニアリングと製品のリーダーと連携し、戦略評価、本番アーキテクチャ設計、AI 対応・クラウドネイティブシステムの難しい部分の実装を支援します。',
      links: ['コンサルティングを相談する', 'AI コンサルティング', 'クラウドコンサルティング'],
      services: [
        { name: 'AI 戦略とデリバリー', value: 'AI', description: 'ユースケース探索、LLM 統合、評価、ガバナンス。' },
        { name: 'クラウドアーキテクチャと移行', value: 'クラウド', description: 'Landing Zone、モダナイゼーションロードマップ、クラウドネイティブアーキテクチャ。' },
        { name: 'プラットフォームエンジニアリングと DevOps', value: '運用', description: 'CI/CD、Infrastructure as Code、可観測性、信頼性プラクティス。' },
        { name: 'アーキテクチャレビューとコーチング', value: '助言', description: '技術デューデリジェンス、ロードマップ設計、チームデリバリーコーチング。' },
      ],
    },
    stats: {
      eyebrow: '価値の測り方',
      title: 'AI・クラウドの成果に集中',
      description: '実践的なアーキテクチャ、導入支援、デリバリーコーチングにより、戦略から本番までを支援します。',
      items: [
        { name: '専門コンサルティング領域', value: '2' },
        { name: 'ソフトウェアアーキテクチャの実務年数', value: '15+' },
        { name: '助言からデリバリーまで', value: '一貫対応' },
      ],
    },
    feedback: {
      quote: '「Learnmark は、AI 戦略を実際に運用できるクラウドアーキテクチャへ結び付けてくれました。実践的な技術力、明確なデリバリー指針、本番準備への強い意識がありました。」',
      name: 'Sarah Chen',
      role: 'CloudFlow CTO',
    },
    subscribe: {
      title: 'AI・クラウドノートを購読',
      description: 'Learnmark から実践的なアーキテクチャノート、AI デリバリーの知見、クラウド刷新のアイデアをお届けします。',
      emailLabel: 'メールアドレス',
      emailPlaceholder: 'メールアドレスを入力',
      submit: '購読する',
      submitting: '登録中...',
      success: 'ご登録ありがとうございます。',
      error: '問題が発生しました。もう一度お試しください。',
      notesTitle: '実践的なフィールドノート',
      notesDescription: 'AI 製品デリバリー、クラウドプラットフォーム、エンジニアリングリーダーシップの簡潔な資料をお届けします。',
      privacyTitle: '迷惑メールなし',
      privacyDescription: '役立つコンサルティングノートだけを配信し、いつでも購読解除できます。',
    },
  },
  fr: {
    seoTitle: 'Services IA, Cloud et Shopify',
    seoDescription: 'Learnmark aide les équipes à concevoir des produits intelligents, moderniser les plateformes Cloud, créer des boutiques Shopify et livrer des systèmes logiciels fiables.',
    intro: {
      eyebrow: 'Conseil IA + Cloud',
      title: 'Créez des produits intelligents sur des plateformes Cloud évolutives.',
      description: 'Learnmark aide les organisations à transformer les opportunités IA en systèmes de production et à moderniser leurs plateformes Cloud pour livrer des logiciels sûrs, fiables et continus.',
      primaryCta: 'Planifier un projet IA ou Cloud',
      secondaryCta: 'Découvrir le conseil Cloud',
      capabilities: ['Livraison de produits IA', 'Plateformes Cloud', 'Passerelles LLM', 'Ingénierie de fiabilité'],
      modelTitle: 'Modèle opérationnel IA Cloud',
      modelSubtitle: 'Boucle de la stratégie à la production',
      live: 'Actif',
      layers: [
        { name: 'Stratégie IA', detail: 'Cas d’usage, prompts, évaluation' },
        { name: 'Plateforme Cloud', detail: 'Landing zones, IaC, CI/CD' },
        { name: 'Opérations', detail: 'Observabilité, coûts, gouvernance' },
      ],
      signals: [
        { label: 'Préparation à la production', value: 'Élevée' },
        { label: 'Modèle de livraison', value: 'Conseil + réalisation' },
        { label: 'Priorité', value: 'IA / Cloud' },
      ],
    },
    workWith: {
      eyebrow: 'Mode de collaboration',
      title: 'Travaillez avec des spécialistes IA et Cloud',
      description: 'Nous collaborons avec les responsables produit et ingénierie pour évaluer la stratégie, concevoir l’architecture de production et réaliser les parties difficiles des systèmes IA et cloud native.',
      links: ['Démarrer une conversation', 'Conseil en IA', 'Conseil Cloud'],
      services: [
        { name: 'Stratégie et livraison IA', value: 'IA', description: 'Découverte des cas d’usage, intégration LLM, évaluation et gouvernance.' },
        { name: 'Architecture et migration Cloud', value: 'Cloud', description: 'Landing zones, feuilles de route de modernisation et architecture cloud native.' },
        { name: 'Ingénierie de plateforme et DevOps', value: 'Ops', description: 'CI/CD, infrastructure as code, observabilité et pratiques de fiabilité.' },
        { name: 'Revues d’architecture et coaching', value: 'Conseil', description: 'Due diligence technique, conception de feuilles de route et coaching des équipes.' },
      ],
    },
    stats: {
      eyebrow: 'Notre mesure de la valeur',
      title: 'Centrés sur les résultats IA et Cloud',
      description: 'Nous aidons les équipes à passer de la stratégie à la production avec une architecture pragmatique, un support d’implémentation et du coaching.',
      items: [
        { name: 'Domaines de conseil ciblés', value: '2' },
        { name: 'Années de pratique en architecture logicielle', value: '15+' },
        { name: 'Du conseil à la livraison', value: 'De bout en bout' },
      ],
    },
    feedback: {
      quote: '« Learnmark nous a aidés à relier notre stratégie IA à une architecture Cloud réellement exploitable. Leur équipe a apporté une solide expertise technique, des orientations claires et une attention constante à la préparation à la production. »',
      name: 'Sarah Chen',
      role: 'CTO de CloudFlow',
    },
    subscribe: {
      title: 'Abonnez-vous à nos notes IA et Cloud',
      description: 'Recevez les notes d’architecture, retours sur la livraison IA et idées de modernisation Cloud de Learnmark.',
      emailLabel: 'Votre adresse e-mail',
      emailPlaceholder: 'Saisissez votre e-mail',
      submit: 'S’abonner',
      submitting: 'Inscription...',
      success: 'Merci pour votre inscription !',
      error: 'Un problème est survenu. Veuillez réessayer.',
      notesTitle: 'Notes pratiques de terrain',
      notesDescription: 'Recevez des ressources concises sur les produits IA, les plateformes Cloud et le leadership technique.',
      privacyTitle: 'Aucun spam',
      privacyDescription: 'Uniquement des notes utiles, avec la possibilité de vous désabonner à tout moment.',
    },
  },
  de: {
    seoTitle: 'KI-, Cloud- und Shopify-Services',
    seoDescription: 'Learnmark hilft Teams, intelligente Produkte zu entwickeln, Cloud-Plattformen zu modernisieren, Shopify-Shops aufzubauen und zuverlässige Softwaresysteme bereitzustellen.',
    intro: {
      eyebrow: 'KI- + Cloud-Beratung',
      title: 'Intelligente Produkte auf skalierbaren Cloud-Plattformen entwickeln.',
      description: 'Learnmark hilft Organisationen, KI-Chancen in Produktionssysteme zu überführen und Cloud-Plattformen für sichere, zuverlässige und kontinuierliche Softwarebereitstellung zu modernisieren.',
      primaryCta: 'KI- oder Cloud-Projekt planen',
      secondaryCta: 'Cloud-Beratung entdecken',
      capabilities: ['KI-Produktbereitstellung', 'Cloud-Plattformen', 'LLM-Gateways', 'Reliability Engineering'],
      modelTitle: 'KI-Cloud-Betriebsmodell',
      modelSubtitle: 'Von der Strategie zur Produktion',
      live: 'Aktiv',
      layers: [
        { name: 'KI-Strategie', detail: 'Anwendungsfälle, Prompts, Evaluation' },
        { name: 'Cloud-Plattform', detail: 'Landing Zones, IaC, CI/CD' },
        { name: 'Betrieb', detail: 'Beobachtbarkeit, Kosten, Governance' },
      ],
      signals: [
        { label: 'Produktionsreife', value: 'Hoch' },
        { label: 'Delivery-Modell', value: 'Beratung + Umsetzung' },
        { label: 'Fokus', value: 'KI / Cloud' },
      ],
    },
    workWith: {
      eyebrow: 'Zusammenarbeitsmodell',
      title: 'Mit KI- und Cloud-Spezialisten arbeiten',
      description: 'Wir arbeiten mit Engineering- und Produktverantwortlichen zusammen, um Strategien zu bewerten, Produktionsarchitekturen zu entwerfen und anspruchsvolle Teile KI-gestützter und Cloud-nativer Systeme umzusetzen.',
      links: ['Beratungsgespräch starten', 'KI-Beratung', 'Cloud-Beratung'],
      services: [
        { name: 'KI-Strategie und Bereitstellung', value: 'KI', description: 'Anwendungsfallerkundung, LLM-Integration, Evaluation und Governance.' },
        { name: 'Cloud-Architektur und Migration', value: 'Cloud', description: 'Landing Zones, Modernisierungs-Roadmaps und Cloud-native Architektur.' },
        { name: 'Platform Engineering und DevOps', value: 'Ops', description: 'CI/CD, Infrastructure as Code, Beobachtbarkeit und Zuverlässigkeitspraktiken.' },
        { name: 'Architekturprüfungen und Coaching', value: 'Beratung', description: 'Technische Due Diligence, Roadmap-Design und Delivery-Coaching für Teams.' },
      ],
    },
    stats: {
      eyebrow: 'Wie wir Wert messen',
      title: 'Auf KI- und Cloud-Ergebnisse fokussiert',
      description: 'Wir begleiten Teams mit pragmatischer Architektur, Implementierungssupport und Delivery Coaching von der Strategie bis zur Produktion.',
      items: [
        { name: 'Fokussierte Beratungsfelder', value: '2' },
        { name: 'Jahre Softwarearchitektur-Praxis', value: '15+' },
        { name: 'Von Beratung bis Delivery', value: 'Durchgängig' },
      ],
    },
    feedback: {
      quote: '„Learnmark hat uns geholfen, unsere KI-Strategie mit einer tatsächlich betreibbaren Cloud-Architektur zu verbinden. Das Team brachte praktische technische Tiefe, klare Delivery-Leitlinien und einen starken Fokus auf Produktionsreife ein.“',
      name: 'Sarah Chen',
      role: 'CTO bei CloudFlow',
    },
    subscribe: {
      title: 'Unsere KI- und Cloud-Notizen abonnieren',
      description: 'Praktische Architekturnotizen, Erkenntnisse aus KI-Projekten und Ideen zur Cloud-Modernisierung von Learnmark erhalten.',
      emailLabel: 'Ihre E-Mail-Adresse',
      emailPlaceholder: 'E-Mail-Adresse eingeben',
      submit: 'Abonnieren',
      submitting: 'Wird abonniert...',
      success: 'Vielen Dank für Ihr Abonnement!',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
      notesTitle: 'Praktische Feldnotizen',
      notesDescription: 'Kompakte Ressourcen zu KI-Produktbereitstellung, Cloud-Plattformen und technischer Führung erhalten.',
      privacyTitle: 'Kein Spam',
      privacyDescription: 'Nur nützliche Beratungsnotizen, jederzeit abbestellbar.',
    },
  },
}