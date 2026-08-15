import type { Locale } from '../config'

type AboutMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  eyebrow: string
  title: string
  description: string
  workCta: string
  aiCta: string
  operatingTitle: string
  operatingSubtitle: string
  operatingModel: Array<{ name: string; description: string }>
  missionEyebrow: string
  missionTitle: string
  missionDescription: string
  capabilities: Array<{ name: string; description: string }>
  principlesEyebrow: string
  principlesTitle: string
  principlesDescription: string
  principles: Array<{ name: string; description: string }>
  leadershipEyebrow: string
  leadershipTitle: string
  leadershipDescription: string
  people: Array<{ role: string; bio: string }>
}

export const aboutMessages: Record<Locale, AboutMessages> = {
  en: {
    seoTitle: 'About Us',
    seoDescription: 'Learn how Learnmark manages expert consultation as a controlled process spanning client scope, expert qualification, delivery, acceptance, and settlement.',
    seoKeywords: ['Learnmark expert network', 'managed expert research company', 'primary research firm', 'expert consultation operations'],
    eyebrow: 'About Learnmark',
    title: 'We make expert consultation operationally accountable.',
    description: 'Learnmark gives organizations a managed way to turn difficult questions into scoped expert projects. We connect client decisions, expert consent, human review, controlled delivery, and financial settlement in one coherent operating model.',
    workCta: 'Work with us',
    aiCta: 'See how it works',
    operatingTitle: 'Operating model',
    operatingSubtitle: 'How responsibility moves from question to approved outcome',
    operatingModel: [
      { name: 'Structure', description: 'Translate the decision into commercial scope, expert positions, research goals, constraints, budget, and an execution plan.' },
      { name: 'Qualify', description: 'Source relevant experience and complete questionnaire, terms, disclosure, conflict, restriction, and readiness checks.' },
      { name: 'Deliver', description: 'Coordinate selected experts, service agreements, sessions, approved outputs, progress, exceptions, and explicit acceptance.' },
      { name: 'Settle', description: 'Keep client receivables, expert payables, content access, financial holds, and project closure distinct and traceable.' },
    ],
    missionEyebrow: 'Our mission',
    missionTitle: 'Make firsthand experience useful without losing control of the process.',
    missionDescription: 'Important decisions depend on context that is absent from published data. We create a responsible path to relevant operators and specialists while protecting participant choice, information boundaries, and accountability for every business decision.',
    capabilities: [
      { name: 'Client project control', description: 'Clients approve scope, budget, quote, expert selection, start, material changes, acceptance, and recovery decisions.' },
      { name: 'Expert participation control', description: 'Experts choose each opportunity, confirm project terms and disclosure, declare restrictions, and may stop inappropriate discussion.' },
      { name: 'Platform accountability', description: 'Named owners coordinate sourcing, review, deadlines, delivery, exceptions, settlement records, and the next required action.' },
    ],
    principlesEyebrow: 'Working principles',
    principlesTitle: 'What the workflow is designed to preserve',
    principlesDescription: 'Technology supports consistent execution, but authority remains with the participant or reviewer responsible for each decision.',
    principles: [
      { name: 'Explicit decisions', description: 'A score, deadline, payment, completed session, or period of silence never substitutes for the required approval.' },
      { name: 'Progressive disclosure', description: 'Information is revealed only when needed, allowed, and consented to for the next stage of the project.' },
      { name: 'Human escalation', description: 'Risk signals, hard prohibitions, disputes, and exceptional commercial actions are reviewed by accountable people.' },
      { name: 'Financial separation', description: 'Customer funds, expert compensation, refunds, losses, access rights, and payment status remain separate facts.' },
    ],
    leadershipEyebrow: 'Leadership',
    leadershipTitle: 'Experienced across AI, Cloud, and product engineering',
    leadershipDescription: 'Our leadership team brings deep experience across AI delivery, cloud-native architecture, distributed systems, and product engineering.',
    people: [
      { role: 'Founder / Chief Solution Consultant', bio: 'Expert in AI-enabled product architecture, cloud-native systems, and enterprise technology modernization.' },
      { role: 'Co-Founder / Chief Architect', bio: 'Specializes in distributed systems, platform engineering, microservices, and cloud reliability.' },
      { role: 'Co-Founder / Chief Product Specialist', bio: 'Passionate about AI product strategy, user experience, and practical delivery management.' },
    ],
  },
  'zh-CN': {
    seoTitle: '关于我们',
    seoDescription: '了解 Learnmark，一家帮助团队构建智能产品和现代云平台的 AI 与云咨询公司。',
    seoKeywords: ['Learnmark 公司', 'AI 咨询公司', '云咨询公司', '技术咨询团队'],
    eyebrow: '关于 Learnmark',
    title: '面向需要真正交付的团队，提供务实的 AI 与云咨询。',
    description: 'Learnmark 帮助组织应对 AI 采用和云现代化，将复杂的技术决策转化为安全、可扩展且易维护的软件系统。',
    workCta: '与我们合作',
    aiCta: '了解 AI 咨询',
    operatingTitle: '运营模型',
    operatingSubtitle: '我们如何从战略走向生产',
    operatingModel: [
      { name: '评估', description: '明确目标、约束、架构风险和业务背景。' },
      { name: '设计', description: '将 AI 与云架构转化为可实施的路线图。' },
      { name: '交付', description: '构建基础、辅导团队并推动生产系统前进。' },
    ],
    missionEyebrow: '我们的使命',
    missionTitle: '让每个应用都更智能、可靠且云就绪。',
    missionDescription: '我们将资深工程判断与亲手交付支持相结合，帮助团队做出清晰的技术决策并构建持久系统。',
    capabilities: [
      { name: 'AI 产品交付', description: '从机会探索到 LLM 集成、评估、治理和生产上线。' },
      { name: '云现代化', description: '云架构、着陆区、迁移规划、平台工程和运维就绪。' },
      { name: '架构咨询', description: '系统评审、技术路线图、工程辅导和务实的现代化决策。' },
    ],
    principlesEyebrow: '工作原则',
    principlesTitle: '指导我们咨询工作的原则',
    principlesDescription: '我们聚焦那些让 AI 与云系统在上线后真正有用的决策、平台和交付习惯。',
    principles: [
      { name: '生产优先于原型', description: '我们从一开始就关注可靠性、安全、成本、可观测性和可维护性。' },
      { name: '架构与交付并重', description: '我们将战略连接到可执行增量，让团队在现代化过程中持续交付。' },
      { name: '清晰的技术判断', description: '我们帮助领导者在平台、模型、团队和运营约束之间做出取舍。' },
      { name: '与团队并肩合作', description: '我们与产品和工程团队共同工作，而不是只交付抽象的演示文稿。' },
    ],
    leadershipEyebrow: '领导团队',
    leadershipTitle: '深耕 AI、云与产品工程',
    leadershipDescription: '我们的领导团队在 AI 交付、云原生架构、分布式系统和产品工程方面拥有深厚经验。',
    people: [
      { role: '创始人 / 首席解决方案顾问', bio: '专长于 AI 驱动的产品架构、云原生系统和企业技术现代化。' },
      { role: '联合创始人 / 首席架构师', bio: '专长于分布式系统、平台工程、微服务和云可靠性。' },
      { role: '联合创始人 / 首席产品专家', bio: '专注于 AI 产品战略、用户体验和务实的交付管理。' },
    ],
  },
  'zh-TW': {
    seoTitle: '關於我們',
    seoDescription: '瞭解 Learnmark，一家協助團隊打造智慧產品與現代雲端平台的 AI 及雲端顧問公司。',
    seoKeywords: ['Learnmark 公司', 'AI 顧問公司', '雲端顧問公司', '技術顧問團隊'],
    eyebrow: '關於 Learnmark',
    title: '為需要真正交付的團隊提供務實的 AI 與雲端顧問服務。',
    description: 'Learnmark 協助組織因應 AI 導入與雲端現代化，將複雜的技術決策轉化為安全、可擴充且易於維護的軟體系統。',
    workCta: '與我們合作',
    aiCta: '瞭解 AI 顧問服務',
    operatingTitle: '營運模型',
    operatingSubtitle: '我們如何從策略走向正式環境',
    operatingModel: [
      { name: '評估', description: '釐清目標、限制、架構風險與商業背景。' },
      { name: '設計', description: '將 AI 與雲端架構轉化為可實作的路線圖。' },
      { name: '交付', description: '打造基礎、輔導團隊並推動正式系統前進。' },
    ],
    missionEyebrow: '我們的使命',
    missionTitle: '讓每個應用程式都更智慧、可靠且雲端就緒。',
    missionDescription: '我們將資深工程判斷與親手交付支援相結合，協助團隊做出清楚的技術決策並打造耐久系統。',
    capabilities: [
      { name: 'AI 產品交付', description: '從機會探索到 LLM 整合、評估、治理與正式上線。' },
      { name: '雲端現代化', description: '雲端架構、登陸區、遷移規劃、平台工程與維運就緒。' },
      { name: '架構顧問服務', description: '系統檢視、技術路線圖、工程輔導與務實的現代化決策。' },
    ],
    principlesEyebrow: '工作原則',
    principlesTitle: '指引我們顧問工作的原則',
    principlesDescription: '我們聚焦那些讓 AI 與雲端系統在上線後真正有用的決策、平台與交付習慣。',
    principles: [
      { name: '正式環境優先於原型', description: '我們從一開始就關注可靠性、安全、成本、可觀測性與可維護性。' },
      { name: '架構與交付並重', description: '我們將策略連結到可執行增量，讓團隊在現代化過程中持續交付。' },
      { name: '清楚的技術判斷', description: '我們協助領導者在平台、模型、團隊與營運限制之間做出取捨。' },
      { name: '與團隊並肩合作', description: '我們與產品及工程團隊共同工作，而不是只交付抽象的簡報。' },
    ],
    leadershipEyebrow: '領導團隊',
    leadershipTitle: '深耕 AI、雲端與產品工程',
    leadershipDescription: '我們的領導團隊在 AI 交付、雲端原生架構、分散式系統與產品工程方面擁有深厚經驗。',
    people: [
      { role: '創辦人 / 首席解決方案顧問', bio: '專長於 AI 驅動的產品架構、雲端原生系統與企業技術現代化。' },
      { role: '共同創辦人 / 首席架構師', bio: '專長於分散式系統、平台工程、微服務與雲端可靠性。' },
      { role: '共同創辦人 / 首席產品專家', bio: '專注於 AI 產品策略、使用者體驗與務實的交付管理。' },
    ],
  },
  ja: {
    seoTitle: '会社情報',
    seoDescription: 'インテリジェントな製品と最新クラウドプラットフォームの構築を支援する AI・クラウドコンサルティング会社 Learnmark についてご紹介します。',
    seoKeywords: ['Learnmark 会社', 'AI コンサルティング会社', 'クラウドコンサルティング会社', '技術コンサルティングチーム'],
    eyebrow: 'Learnmark について',
    title: '提供までやり切るチームのための実践的な AI・クラウドコンサルティング。',
    description: 'Learnmark は AI 導入とクラウドモダナイゼーションを支援し、複雑な技術判断を安全で拡張性が高く保守しやすいソフトウェアシステムへ変えます。',
    workCta: '相談する',
    aiCta: 'AI コンサルティングを見る',
    operatingTitle: '運用モデル',
    operatingSubtitle: '戦略から本番へ進む方法',
    operatingModel: [
      { name: '評価', description: '目標、制約、アーキテクチャリスク、ビジネス背景を明確にします。' },
      { name: '設計', description: 'AI・クラウドアーキテクチャを実装可能なロードマップへ落とし込みます。' },
      { name: 'デリバリー', description: '基盤を構築し、チームを支援し、本番システムを前進させます。' },
    ],
    missionEyebrow: '私たちの使命',
    missionTitle: 'すべてのアプリケーションを賢く、信頼でき、クラウド対応に。',
    missionDescription: '上級エンジニアの判断力と実践的なデリバリー支援を組み合わせ、明確な技術判断と長く使えるシステム構築を支援します。',
    capabilities: [
      { name: 'AI 製品デリバリー', description: '機会探索から LLM 統合、評価、ガバナンス、本番展開まで。' },
      { name: 'クラウドモダナイゼーション', description: 'クラウドアーキテクチャ、Landing Zone、移行計画、プラットフォームエンジニアリング、運用準備。' },
      { name: 'アーキテクチャアドバイザリー', description: 'システムレビュー、技術ロードマップ、エンジニアリングコーチング、現実的な刷新判断。' },
    ],
    principlesEyebrow: '仕事の原則',
    principlesTitle: 'コンサルティングを導くもの',
    principlesDescription: 'AI・クラウドシステムを公開後も役立つものにする判断、プラットフォーム、デリバリー習慣に集中します。',
    principles: [
      { name: 'プロトタイプより本番', description: '信頼性、セキュリティ、コスト、可観測性、保守性を最初から重視します。' },
      { name: 'アーキテクチャとデリバリー', description: '戦略を実行可能な増分へつなぎ、刷新しながら提供できるようにします。' },
      { name: '明確な技術判断', description: 'プラットフォーム、モデル、チーム、運用制約の間で適切な選択を支援します。' },
      { name: 'チームとのパートナーシップ', description: '抽象的な資料を渡すだけでなく、製品・エンジニアリングチームと並走します。' },
    ],
    leadershipEyebrow: 'リーダーシップ',
    leadershipTitle: 'AI、クラウド、製品エンジニアリングの経験',
    leadershipDescription: 'リーダーチームは AI デリバリー、クラウドネイティブアーキテクチャ、分散システム、製品エンジニアリングの深い経験を持ちます。',
    people: [
      { role: '創業者 / チーフソリューションコンサルタント', bio: 'AI 対応製品アーキテクチャ、クラウドネイティブシステム、企業技術モダナイゼーションの専門家。' },
      { role: '共同創業者 / チーフアーキテクト', bio: '分散システム、プラットフォームエンジニアリング、マイクロサービス、クラウド信頼性を専門とします。' },
      { role: '共同創業者 / チーフプロダクトスペシャリスト', bio: 'AI 製品戦略、ユーザー体験、実践的なデリバリー管理に注力しています。' },
    ],
  },
  fr: {
    seoTitle: 'À propos',
    seoDescription: 'Découvrez Learnmark, cabinet de conseil en IA et Cloud qui aide les équipes à créer des produits intelligents et des plateformes Cloud modernes.',
    seoKeywords: ['entreprise Learnmark', 'cabinet de conseil en IA', 'cabinet de conseil Cloud', 'équipe de conseil technologique'],
    eyebrow: 'À propos de Learnmark',
    title: 'Un conseil IA et Cloud pragmatique pour les équipes qui doivent livrer.',
    description: 'Learnmark aide les organisations à adopter l’IA et moderniser le Cloud, transformant les décisions technologiques complexes en systèmes sûrs, évolutifs et maintenables.',
    workCta: 'Travailler avec nous',
    aiCta: 'Découvrir le conseil en IA',
    operatingTitle: 'Modèle opérationnel',
    operatingSubtitle: 'Notre passage de la stratégie à la production',
    operatingModel: [
      { name: 'Évaluer', description: 'Clarifier les objectifs, contraintes, risques d’architecture et le contexte métier.' },
      { name: 'Concevoir', description: 'Transformer l’architecture IA et Cloud en feuille de route prête à réaliser.' },
      { name: 'Livrer', description: 'Construire les fondations, accompagner les équipes et faire avancer les systèmes de production.' },
    ],
    missionEyebrow: 'Notre mission',
    missionTitle: 'Rendre chaque application intelligente, fiable et prête pour le Cloud.',
    missionDescription: 'Nous associons le jugement d’ingénieurs expérimentés à un support concret pour aider les équipes à décider clairement et construire des systèmes durables.',
    capabilities: [
      { name: 'Livraison de produits IA', description: 'De l’identification des opportunités à l’intégration LLM, l’évaluation, la gouvernance et la mise en production.' },
      { name: 'Modernisation Cloud', description: 'Architecture Cloud, landing zones, planification de migration, ingénierie de plateforme et préparation opérationnelle.' },
      { name: 'Conseil en architecture', description: 'Revues de systèmes, feuilles de route techniques, coaching et décisions pragmatiques de modernisation.' },
    ],
    principlesEyebrow: 'Principes de travail',
    principlesTitle: 'Ce qui guide notre conseil',
    principlesDescription: 'Nous nous concentrons sur les décisions, plateformes et habitudes qui rendent les systèmes IA et Cloud utiles après le lancement.',
    principles: [
      { name: 'La production avant les prototypes', description: 'Fiabilité, sécurité, coûts, observabilité et maintenabilité comptent dès le départ.' },
      { name: 'Architecture et livraison', description: 'Nous relions la stratégie à des incréments exécutables pour livrer tout en modernisant.' },
      { name: 'Un jugement technique clair', description: 'Nous aidons les responsables à arbitrer entre plateformes, modèles, équipes et contraintes opérationnelles.' },
      { name: 'Partenariat avec les équipes', description: 'Nous travaillons avec les équipes produit et ingénierie plutôt que de remettre des présentations abstraites.' },
    ],
    leadershipEyebrow: 'Direction',
    leadershipTitle: 'Une expérience de l’IA, du Cloud et de l’ingénierie produit',
    leadershipDescription: 'Notre équipe de direction possède une solide expérience en livraison IA, architecture cloud native, systèmes distribués et ingénierie produit.',
    people: [
      { role: 'Fondateur / Consultant en solutions principal', bio: 'Expert en architecture de produits IA, systèmes cloud native et modernisation technologique des entreprises.' },
      { role: 'Co-fondateur / Architecte en chef', bio: 'Spécialiste des systèmes distribués, de l’ingénierie de plateforme, des microservices et de la fiabilité Cloud.' },
      { role: 'Co-fondateur / Spécialiste produit principal', bio: 'Passionné par la stratégie produit IA, l’expérience utilisateur et la gestion pragmatique de la livraison.' },
    ],
  },
  de: {
    seoTitle: 'Über uns',
    seoDescription: 'Erfahren Sie mehr über Learnmark, ein KI- und Cloud-Beratungsunternehmen, das Teams beim Aufbau intelligenter Produkte und moderner Cloud-Plattformen unterstützt.',
    seoKeywords: ['Learnmark Unternehmen', 'KI-Beratungsunternehmen', 'Cloud-Beratungsunternehmen', 'Technologieberatungsteam'],
    eyebrow: 'Über Learnmark',
    title: 'Pragmatische KI- und Cloud-Beratung für Teams, die liefern müssen.',
    description: 'Learnmark begleitet Organisationen bei KI-Einführung und Cloud-Modernisierung und macht aus komplexen Technologieentscheidungen sichere, skalierbare und wartbare Softwaresysteme.',
    workCta: 'Mit uns arbeiten',
    aiCta: 'KI-Beratung entdecken',
    operatingTitle: 'Betriebsmodell',
    operatingSubtitle: 'Wie wir von der Strategie zur Produktion gelangen',
    operatingModel: [
      { name: 'Bewerten', description: 'Ziele, Einschränkungen, Architekturrisiken und Geschäftskontext klären.' },
      { name: 'Gestalten', description: 'KI- und Cloud-Architektur in eine umsetzungsreife Roadmap überführen.' },
      { name: 'Liefern', description: 'Grundlagen schaffen, Teams begleiten und Produktionssysteme voranbringen.' },
    ],
    missionEyebrow: 'Unsere Mission',
    missionTitle: 'Jede Anwendung intelligent, zuverlässig und Cloud-fähig machen.',
    missionDescription: 'Wir verbinden erfahrenes Engineering-Urteil mit praktischer Delivery-Unterstützung, damit Teams klare Entscheidungen treffen und langlebige Systeme bauen.',
    capabilities: [
      { name: 'KI-Produktbereitstellung', description: 'Von der Chancenerkennung über LLM-Integration, Evaluation und Governance bis zum Produktionsrollout.' },
      { name: 'Cloud-Modernisierung', description: 'Cloud-Architektur, Landing Zones, Migrationsplanung, Platform Engineering und Betriebsbereitschaft.' },
      { name: 'Architekturberatung', description: 'Systemprüfungen, technische Roadmaps, Engineering-Coaching und pragmatische Modernisierungsentscheidungen.' },
    ],
    principlesEyebrow: 'Arbeitsprinzipien',
    principlesTitle: 'Was unsere Beratung leitet',
    principlesDescription: 'Wir konzentrieren uns auf Entscheidungen, Plattformen und Delivery-Gewohnheiten, die KI- und Cloud-Systeme nach dem Launch nützlich machen.',
    principles: [
      { name: 'Produktion vor Prototypen', description: 'Zuverlässigkeit, Sicherheit, Kosten, Beobachtbarkeit und Wartbarkeit zählen von Anfang an.' },
      { name: 'Architektur mit Delivery', description: 'Wir verbinden Strategie mit ausführbaren Schritten, damit Teams während der Modernisierung liefern können.' },
      { name: 'Klares technisches Urteil', description: 'Wir helfen Verantwortlichen, zwischen Plattformen, Modellen, Teams und Betriebsgrenzen abzuwägen.' },
      { name: 'Partnerschaft mit Teams', description: 'Wir arbeiten neben Produkt- und Engineering-Gruppen, statt abstrakte Foliensätze zu übergeben.' },
    ],
    leadershipEyebrow: 'Führungsteam',
    leadershipTitle: 'Erfahrung in KI, Cloud und Produktentwicklung',
    leadershipDescription: 'Unser Führungsteam bringt umfassende Erfahrung in KI-Delivery, Cloud-nativer Architektur, verteilten Systemen und Produktentwicklung mit.',
    people: [
      { role: 'Gründer / Chief Solution Consultant', bio: 'Experte für KI-gestützte Produktarchitektur, Cloud-native Systeme und technologische Unternehmensmodernisierung.' },
      { role: 'Mitgründer / Chief Architect', bio: 'Spezialist für verteilte Systeme, Platform Engineering, Microservices und Cloud-Zuverlässigkeit.' },
      { role: 'Mitgründer / Chief Product Specialist', bio: 'Begeistert von KI-Produktstrategie, Nutzererlebnis und pragmatischem Delivery-Management.' },
    ],
  },
}