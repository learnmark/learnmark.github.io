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
}

export const homeMessages: Record<Locale, HomeMessages> = {
  en: {
    seoTitle: 'Expert Network and Consultation Services',
    seoDescription: 'Learnmark helps business and investment teams define research needs, identify relevant experts, coordinate terms, and manage expert consultations end to end.',
    intro: {
      eyebrow: 'Expert research and consultation',
      title: 'Reach the expertise behind better decisions.',
      description: 'Tell us what you need to understand. A dedicated Learnmark project team will refine the brief, build the screening questionnaire, identify relevant experts, coordinate terms, and support the consultation from start to finish.',
      primaryCta: 'Start a project',
      secondaryCta: 'See how it works',
      capabilities: ['Expert calls', 'Market research', 'Due diligence', 'Strategic insight'],
      modelTitle: 'Managed consultation workflow',
      modelSubtitle: 'One team from brief to completion',
      live: 'Managed',
      layers: [
        { name: 'Define the brief', detail: 'Research goals, target profiles, and screening criteria' },
        { name: 'Find and qualify', detail: 'Expert outreach, questionnaire, fit, and conflicts' },
        { name: 'Consult and follow through', detail: 'Scheduling, terms, consultation, and project support' },
      ],
      signals: [
        { label: 'Your contact', value: 'Dedicated team' },
        { label: 'Expert selection', value: 'Human-led' },
        { label: 'Project support', value: 'End to end' },
      ],
    },
    workWith: {
      eyebrow: 'What we manage',
      title: 'More than an introduction to an expert',
      description: 'Each engagement is actively managed so your team can focus on the decision, not the logistics of finding, qualifying, and coordinating specialist knowledge.',
      links: ['Start a project', 'Services for clients', 'Explore the process'],
      services: [
        { name: 'Project scoping', value: '01', description: 'Clarify the decision, knowledge gaps, target backgrounds, timing, and constraints.' },
        { name: 'Screening design', value: '02', description: 'Turn the brief into precise qualification questions and objective selection criteria.' },
        { name: 'Expert matching', value: '03', description: 'Search our network and targeted sources, then present relevant, screened profiles.' },
        { name: 'Engagement support', value: '04', description: 'Coordinate availability, compensation, compliance, consultation logistics, and follow-up.' },
      ],
    },
    stats: {
      eyebrow: 'Ways to use Learnmark',
      title: 'Expert insight for the questions that do not fit in a database',
      description: 'Use focused conversations to test assumptions, understand operating realities, and add primary insight to your research.',
      items: [
        { name: 'Speak with operators and specialists', value: 'Expert calls' },
        { name: 'Map markets, customers, and value chains', value: 'Market research' },
        { name: 'Test commercial and technical assumptions', value: 'Due diligence' },
      ],
    },
  },
  'zh-CN': {
    seoTitle: '专家网络与咨询服务',
    seoDescription: 'Learnmark 帮助企业与投资团队梳理研究需求、匹配相关专家、协调合作条件，并管理专家咨询全流程。',
    intro: {
      eyebrow: '专家研究与咨询服务',
      title: '连接关键经验，支持更好的决策。',
      description: '告诉我们您希望了解的问题。Learnmark 专属项目团队将协助梳理需求、设计专家筛选问卷、匹配相关专家、协调合作条件，并支持咨询项目从启动到完成。',
      primaryCta: '启动项目',
      secondaryCta: '了解服务流程',
      capabilities: ['专家访谈', '市场研究', '尽职调查', '战略洞察'],
      modelTitle: '全流程咨询项目管理',
      modelSubtitle: '从需求简报到咨询完成，由同一团队负责',
      live: '专人管理',
      layers: [
        { name: '梳理项目需求', detail: '研究目标、专家画像与筛选标准' },
        { name: '寻找并筛选专家', detail: '专家邀约、问卷、匹配度与利益冲突确认' },
        { name: '组织咨询并跟进', detail: '档期、报酬、咨询安排与项目支持' },
      ],
      signals: [
        { label: '项目联系人', value: '专属团队' },
        { label: '专家筛选', value: '人工主导' },
        { label: '项目支持', value: '全流程' },
      ],
    },
    workWith: {
      eyebrow: '我们负责的工作',
      title: '不止是一次专家引荐',
      description: '每个项目都由专人持续管理，让您的团队聚焦决策本身，无需承担寻找、筛选和协调专业知识的繁琐工作。',
      links: ['启动项目', '客户服务', '查看服务流程'],
      services: [
        { name: '需求梳理', value: '01', description: '明确决策问题、知识缺口、目标背景、时间安排与项目约束。' },
        { name: '筛选设计', value: '02', description: '将项目简报转化为精准的资格问题和客观筛选标准。' },
        { name: '专家匹配', value: '03', description: '结合自有专家库与定向寻访，提交经过筛选的相关专家资料。' },
        { name: '项目支持', value: '04', description: '协调档期、报酬、合规、咨询安排和后续跟进。' },
      ],
    },
    stats: {
      eyebrow: '典型使用场景',
      title: '用专家经验回答数据库之外的问题',
      description: '通过聚焦的一对一沟通验证假设、理解真实运营情况，并为研究加入一手洞察。',
      items: [
        { name: '与行业管理者和专业人士交流', value: '专家访谈' },
        { name: '理解市场、客户和价值链', value: '市场研究' },
        { name: '验证商业与技术判断', value: '尽职调查' },
      ],
    },
  },
  'zh-TW': {
    seoTitle: '專家網絡與顧問服務',
    seoDescription: 'Learnmark 協助企業與投資團隊梳理研究需求、配對相關專家、協調合作條件，並管理專家顧問服務全流程。',
    intro: {
      eyebrow: '專家研究與顧問服務',
      title: '連結關鍵經驗，支援更好的決策。',
      description: '告訴我們您希望瞭解的問題。Learnmark 專屬專案團隊將協助梳理需求、設計專家篩選問卷、配對相關專家、協調合作條件，並支援專案從啟動到完成。',
      primaryCta: '啟動專案',
      secondaryCta: '瞭解服務流程',
      capabilities: ['專家訪談', '市場研究', '盡職調查', '策略洞察'],
      modelTitle: '全流程顧問專案管理',
      modelSubtitle: '從需求簡報到顧問服務完成，由同一團隊負責',
      live: '專人管理',
      layers: [
        { name: '梳理專案需求', detail: '研究目標、專家輪廓與篩選標準' },
        { name: '尋找並篩選專家', detail: '專家邀約、問卷、適配度與利益衝突確認' },
        { name: '安排顧問服務並跟進', detail: '檔期、報酬、諮詢安排與專案支援' },
      ],
      signals: [
        { label: '專案聯絡人', value: '專屬團隊' },
        { label: '專家篩選', value: '人工主導' },
        { label: '專案支援', value: '全流程' },
      ],
    },
    workWith: {
      eyebrow: '我們負責的工作',
      title: '不只是一場專家引薦',
      description: '每個專案都由專人持續管理，讓您的團隊專注於決策本身，無須處理尋找、篩選與協調專業知識的繁瑣工作。',
      links: ['啟動專案', '客戶服務', '查看服務流程'],
      services: [
        { name: '需求梳理', value: '01', description: '釐清決策問題、知識缺口、目標背景、時間安排與專案限制。' },
        { name: '篩選設計', value: '02', description: '將專案簡報轉化為精準的資格問題與客觀篩選標準。' },
        { name: '專家配對', value: '03', description: '結合自有專家庫與定向尋訪，提交經過篩選的相關專家資料。' },
        { name: '專案支援', value: '04', description: '協調檔期、報酬、合規、顧問服務安排與後續跟進。' },
      ],
    },
    stats: {
      eyebrow: '典型使用情境',
      title: '用專家經驗回答資料庫以外的問題',
      description: '透過聚焦的一對一交流驗證假設、理解真實營運情況，並為研究加入第一手洞察。',
      items: [
        { name: '與產業管理者及專業人士交流', value: '專家訪談' },
        { name: '理解市場、客戶與價值鏈', value: '市場研究' },
        { name: '驗證商業與技術判斷', value: '盡職調查' },
      ],
    },
  },
  ja: {
    seoTitle: '専門家ネットワークとコンサルテーション',
    seoDescription: 'Learnmark は、企業・投資チームの調査要件整理、専門家選定、条件調整、コンサルテーションの一貫管理を支援します。',
    intro: {
      eyebrow: '専門家リサーチとコンサルテーション',
      title: 'より良い意思決定を支える専門知識へ。',
      description: '知りたいテーマをお聞かせください。専任チームが要件整理、スクリーニング質問票の作成、専門家選定、条件調整、コンサルテーション完了までを一貫して支援します。',
      primaryCta: 'プロジェクトを開始',
      secondaryCta: 'ご利用の流れ',
      capabilities: ['専門家インタビュー', '市場調査', 'デューデリジェンス', '戦略的インサイト'],
      modelTitle: '一貫管理のコンサルテーション',
      modelSubtitle: '要件整理から完了まで一つのチームが担当',
      live: '専任管理',
      layers: [
        { name: '要件を定義', detail: '調査目標、対象プロフィール、選定基準' },
        { name: '探索と適格性確認', detail: '専門家への打診、質問票、適合性、利益相反' },
        { name: '実施とフォロー', detail: '日程、報酬、面談運営、プロジェクト支援' },
      ],
      signals: [
        { label: '窓口', value: '専任チーム' },
        { label: '専門家選定', value: '人による審査' },
        { label: 'プロジェクト支援', value: '一貫対応' },
      ],
    },
    workWith: {
      eyebrow: '私たちが管理すること',
      title: '専門家の紹介だけではありません',
      description: '専門知識の探索、適格性確認、調整を専任チームが管理し、クライアントは意思決定そのものに集中できます。',
      links: ['プロジェクトを開始', 'クライアント向けサービス', 'プロセスを見る'],
      services: [
        { name: '要件整理', value: '01', description: '意思決定、知識ギャップ、対象経歴、時期、制約を明確にします。' },
        { name: '質問票設計', value: '02', description: '要件を正確な適格性質問と客観的な選定基準に落とし込みます。' },
        { name: '専門家選定', value: '03', description: 'ネットワークと個別探索から、審査済みの関連プロフィールを提示します。' },
        { name: '実施支援', value: '04', description: '日程、報酬、コンプライアンス、面談運営、フォローを調整します。' },
      ],
    },
    stats: {
      eyebrow: '活用方法',
      title: 'データベースだけでは答えられない問いに専門家の経験を',
      description: '仮説を検証し、現場の実態を理解し、一次情報を調査に加えるための対話を実現します。',
      items: [
        { name: '実務家や専門職と対話', value: '専門家面談' },
        { name: '市場、顧客、バリューチェーンを把握', value: '市場調査' },
        { name: '事業・技術上の前提を検証', value: 'DD' },
      ],
    },
  },
  fr: {
    seoTitle: 'Réseau d’experts et consultations',
    seoDescription: 'Learnmark aide les entreprises et investisseurs à définir leurs besoins, identifier les experts pertinents, coordonner les conditions et gérer les consultations de bout en bout.',
    intro: {
      eyebrow: 'Recherche d’experts et consultations',
      title: 'Accédez à l’expertise qui éclaire les décisions.',
      description: 'Indiquez-nous ce que vous devez comprendre. Une équipe dédiée précise le brief, conçoit le questionnaire, identifie les experts, coordonne les conditions et accompagne la consultation jusqu’à son terme.',
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Voir notre méthode',
      capabilities: ['Entretiens d’experts', 'Études de marché', 'Due diligence', 'Vision stratégique'],
      modelTitle: 'Consultation entièrement gérée',
      modelSubtitle: 'Une équipe, du brief à la conclusion',
      live: 'Géré',
      layers: [
        { name: 'Définir le brief', detail: 'Objectifs, profils recherchés et critères de sélection' },
        { name: 'Identifier et qualifier', detail: 'Approche, questionnaire, adéquation et conflits' },
        { name: 'Consulter et suivre', detail: 'Agenda, honoraires, entretien et accompagnement' },
      ],
      signals: [
        { label: 'Votre interlocuteur', value: 'Équipe dédiée' },
        { label: 'Sélection', value: 'Pilotée par l’humain' },
        { label: 'Accompagnement', value: 'De bout en bout' },
      ],
    },
    workWith: {
      eyebrow: 'Ce que nous gérons',
      title: 'Bien plus qu’une mise en relation',
      description: 'Chaque mission est activement pilotée pour que votre équipe se concentre sur la décision, sans gérer la recherche, la qualification et la coordination des experts.',
      links: ['Démarrer un projet', 'Services clients', 'Découvrir le processus'],
      services: [
        { name: 'Cadrage', value: '01', description: 'Clarifier la décision, les lacunes, les profils, le calendrier et les contraintes.' },
        { name: 'Questionnaire', value: '02', description: 'Transformer le brief en questions précises et critères de sélection objectifs.' },
        { name: 'Sélection d’experts', value: '03', description: 'Explorer notre réseau et des sources ciblées, puis présenter des profils qualifiés.' },
        { name: 'Suivi de mission', value: '04', description: 'Coordonner disponibilités, honoraires, conformité, logistique et suivi.' },
      ],
    },
    stats: {
      eyebrow: 'Cas d’usage',
      title: 'L’expérience des experts pour les questions hors des bases de données',
      description: 'Testez des hypothèses, comprenez les réalités opérationnelles et enrichissez vos recherches d’informations primaires.',
      items: [
        { name: 'Échanger avec des dirigeants et spécialistes', value: 'Entretiens' },
        { name: 'Cartographier marchés, clients et chaînes de valeur', value: 'Études de marché' },
        { name: 'Tester les hypothèses commerciales et techniques', value: 'Due diligence' },
      ],
    },
  },
  de: {
    seoTitle: 'Expertennetzwerk und Beratungen',
    seoDescription: 'Learnmark hilft Unternehmen und Investmentteams, Recherchebedarf zu definieren, relevante Experten zu finden, Konditionen abzustimmen und Beratungen vollständig zu begleiten.',
    intro: {
      eyebrow: 'Expertenrecherche und Beratung',
      title: 'Zugang zu Erfahrung, die bessere Entscheidungen ermöglicht.',
      description: 'Sagen Sie uns, was Sie verstehen müssen. Ein festes Projektteam präzisiert das Briefing, erstellt den Screening-Fragebogen, findet relevante Fachleute, koordiniert Konditionen und begleitet die Beratung bis zum Abschluss.',
      primaryCta: 'Projekt starten',
      secondaryCta: 'So funktioniert es',
      capabilities: ['Expertengespräche', 'Marktforschung', 'Due Diligence', 'Strategische Einblicke'],
      modelTitle: 'Vollständig betreute Beratung',
      modelSubtitle: 'Ein Team vom Briefing bis zum Abschluss',
      live: 'Betreut',
      layers: [
        { name: 'Briefing definieren', detail: 'Rechercheziele, Zielprofile und Auswahlkriterien' },
        { name: 'Finden und qualifizieren', detail: 'Ansprache, Fragebogen, Eignung und Konflikte' },
        { name: 'Beraten und nachbereiten', detail: 'Termine, Vergütung, Gespräch und Projektbegleitung' },
      ],
      signals: [
        { label: 'Ihr Kontakt', value: 'Festes Team' },
        { label: 'Expertenauswahl', value: 'Persönlich geprüft' },
        { label: 'Projektbegleitung', value: 'Durchgängig' },
      ],
    },
    workWith: {
      eyebrow: 'Was wir übernehmen',
      title: 'Mehr als eine Expertenvermittlung',
      description: 'Jedes Projekt wird aktiv betreut, damit sich Ihr Team auf die Entscheidung konzentrieren kann und nicht auf Suche, Prüfung und Koordination von Fachwissen.',
      links: ['Projekt starten', 'Services für Kunden', 'Ablauf ansehen'],
      services: [
        { name: 'Projektklärung', value: '01', description: 'Entscheidung, Wissenslücken, Zielprofile, Zeitplan und Einschränkungen klären.' },
        { name: 'Screening-Design', value: '02', description: 'Das Briefing in präzise Qualifikationsfragen und objektive Kriterien übersetzen.' },
        { name: 'Expertenauswahl', value: '03', description: 'Netzwerk und gezielte Suche nutzen und geprüfte relevante Profile vorstellen.' },
        { name: 'Projektbegleitung', value: '04', description: 'Verfügbarkeit, Vergütung, Compliance, Gesprächslogistik und Nachbereitung koordinieren.' },
      ],
    },
    stats: {
      eyebrow: 'Anwendungsfälle',
      title: 'Expertenerfahrung für Fragen, die keine Datenbank beantwortet',
      description: 'Annahmen prüfen, operative Realität verstehen und Primärwissen in Ihre Recherche einbringen.',
      items: [
        { name: 'Mit Führungskräften und Fachleuten sprechen', value: 'Expertengespräche' },
        { name: 'Märkte, Kunden und Wertschöpfung verstehen', value: 'Marktforschung' },
        { name: 'Geschäftliche und technische Annahmen testen', value: 'Due Diligence' },
      ],
    },
  },
}
