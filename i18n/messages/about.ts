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
  operatingBadge: string
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
    operatingBadge: 'Expert operations',
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
    leadershipTitle: 'Experience across research operations, risk, and technology',
    leadershipDescription: 'Our leadership team combines project operations, compliance-aware product design, financial workflows, and reliable platform engineering.',
    people: [
      { role: 'Founder / Platform and Solutions Lead', bio: 'Focuses on responsible expert research, client outcomes, and the operating model connecting them.' },
      { role: 'Co-Founder / Operations and Architecture Lead', bio: 'Designs auditable workflows, reliable systems, and clear ownership across project states.' },
      { role: 'Co-Founder / Product and Experience Lead', bio: 'Shapes client, expert, and operations experiences around explicit decisions and safe information boundaries.' },
    ],
  },
  'zh-CN': {
    seoTitle: '关于我们',
    seoDescription: '了解 Learnmark 如何将专家咨询作为一套受控流程运营，覆盖客户范围、专家筛选、交付、验收与结算。',
    seoKeywords: ['Learnmark 专家网络', '托管式专家研究公司', '一手研究机构', '专家咨询运营'],
    eyebrow: '关于 Learnmark',
    title: '我们让专家咨询在运营上责任清晰。',
    description: 'Learnmark 为组织提供一条托管路径，将复杂问题转化为范围明确的专家项目，并把客户决定、专家同意、人工审核、受控交付和财务结算连接为统一运营模型。',
    workCta: '与我们合作',
    aiCta: '查看服务流程',
    operatingTitle: '运营模型',
    operatingSubtitle: '责任如何从业务问题推进到获批成果',
    operatingBadge: '专家项目运营',
    operatingModel: [
      { name: '结构化', description: '将决策转化为商业范围、专家席位、研究目标、约束、预算与执行计划。' },
      { name: '筛选', description: '寻找相关经验，完成问卷、条件、披露、冲突、限制及就绪检查。' },
      { name: '交付', description: '协调入选专家、服务约定、场次、获批成果、进度、异常及明确验收。' },
      { name: '结算', description: '分别管理客户应收、专家应付、内容访问、财务冻结与项目关闭。' },
    ],
    missionEyebrow: '我们的使命',
    missionTitle: '让一手经验产生价值，同时不失去流程控制。',
    missionDescription: '关键决定往往依赖公开数据中不存在的背景。我们以负责任的方式连接相关经营者与专业人士，同时保护参与者选择、信息边界及每项业务决定的责任归属。',
    capabilities: [
      { name: '客户项目控制', description: '客户审批范围、预算、报价、专家选择、启动、重大变化、验收及恢复方案。' },
      { name: '专家参与控制', description: '专家选择每次机会，确认项目条件与身份披露，声明限制并可停止不当讨论。' },
      { name: '平台责任', description: '指定负责人协调寻源、审核、时限、交付、异常、结算记录及下一步行动。' },
    ],
    principlesEyebrow: '工作原则',
    principlesTitle: '流程需要守住的核心原则',
    principlesDescription: '技术用于支持一致执行，但每项决定仍由应当负责的参与者或审核人作出。',
    principles: [
      { name: '明确决定', description: '分数、期限、付款、场次完成或沉默都不能替代所需批准。' },
      { name: '渐进披露', description: '信息只在下一阶段确有需要、允许且获得同意时才会披露。' },
      { name: '人工升级', description: '风险信号、硬性禁止、争议及特殊商业行动由明确负责人审核。' },
      { name: '财务分离', description: '客户资金、专家报酬、退款、损失、访问权与付款状态保持独立。' },
    ],
    leadershipEyebrow: '运营团队',
    leadershipTitle: '融合研究运营、风险与技术经验',
    leadershipDescription: '团队结合项目运营、合规意识产品设计、财务流程及可靠平台工程经验。',
    people: [
      { role: '创始人 / 平台与解决方案负责人', bio: '专注于负责任的专家研究、客户成果及连接两者的运营模型。' },
      { role: '联合创始人 / 运营与架构负责人', bio: '设计可审计流程、可靠系统及跨项目状态的清晰责任。' },
      { role: '联合创始人 / 产品与体验负责人', bio: '围绕明确决定和安全信息边界设计客户、专家及运营体验。' },
    ],
  },
  'zh-TW': {
    seoTitle: '關於我們',
    seoDescription: '瞭解 Learnmark 如何將專家顧問服務作為受控流程營運，涵蓋客戶範圍、專家篩選、交付、驗收與結算。',
    seoKeywords: ['Learnmark 專家網絡', '託管式專家研究公司', '第一手研究機構', '專家顧問營運'],
    eyebrow: '關於 Learnmark',
    title: '我們讓專家顧問服務在營運上責任清楚。',
    description: 'Learnmark 為組織提供一條託管路徑，將複雜問題轉化為範圍明確的專家專案，並把客戶決定、專家同意、人工審核、受控交付與財務結算連結為統一營運模型。',
    workCta: '與我們合作',
    aiCta: '查看服務流程',
    operatingTitle: '營運模型',
    operatingSubtitle: '責任如何從商業問題推進到獲准成果',
    operatingBadge: '專家專案營運',
    operatingModel: [
      { name: '結構化', description: '將決策轉化為商業範圍、專家席位、研究目標、限制、預算與執行計畫。' },
      { name: '篩選', description: '尋找相關經驗，完成問卷、條件、揭露、衝突、限制與就緒檢查。' },
      { name: '交付', description: '協調入選專家、服務約定、場次、獲准成果、進度、例外與明確驗收。' },
      { name: '結算', description: '分別管理客戶應收、專家應付、內容存取、財務凍結與專案關閉。' },
    ],
    missionEyebrow: '我們的使命',
    missionTitle: '讓第一手經驗產生價值，同時不失去流程控制。',
    missionDescription: '關鍵決定往往依賴公開資料中不存在的背景。我們以負責任的方式連結相關經營者與專業人士，同時保護參與者選擇、資訊邊界與每項商業決定的責任歸屬。',
    capabilities: [
      { name: '客戶專案控制', description: '客戶核准範圍、預算、報價、專家選擇、啟動、重大變更、驗收與恢復方案。' },
      { name: '專家參與控制', description: '專家選擇每次機會、確認專案條件與身分揭露、聲明限制並可停止不當討論。' },
      { name: '平台責任', description: '指定負責人協調尋源、審核、時限、交付、例外、結算紀錄與下一步行動。' },
    ],
    principlesEyebrow: '工作原則',
    principlesTitle: '流程需要守住的核心原則',
    principlesDescription: '技術用於支援一致執行，但每項決定仍由應當負責的參與者或審核人做出。',
    principles: [
      { name: '明確決定', description: '分數、期限、付款、場次完成或沉默都不能取代所需核准。' },
      { name: '漸進揭露', description: '資訊只在下一階段確有需要、允許且獲得同意時才會揭露。' },
      { name: '人工升級', description: '風險訊號、硬性禁止、爭議與特殊商業行動由明確負責人審核。' },
      { name: '財務分離', description: '客戶資金、專家報酬、退款、損失、存取權與付款狀態保持獨立。' },
    ],
    leadershipEyebrow: '營運團隊',
    leadershipTitle: '融合研究營運、風險與技術經驗',
    leadershipDescription: '團隊結合專案營運、合規意識產品設計、財務流程與可靠平台工程經驗。',
    people: [
      { role: '創辦人 / 平台與解決方案負責人', bio: '專注於負責任的專家研究、客戶成果與連結兩者的營運模型。' },
      { role: '共同創辦人 / 營運與架構負責人', bio: '設計可稽核流程、可靠系統與跨專案狀態的清楚責任。' },
      { role: '共同創辦人 / 產品與體驗負責人', bio: '圍繞明確決定與安全資訊邊界設計客戶、專家與營運體驗。' },
    ],
  },
  ja: {
    seoTitle: '会社情報',
    seoDescription: 'Learnmark が専門家コンサルテーションを、クライアントのスコープ、適格性確認、実施、検収、精算を結ぶ管理プロセスとして運用する方法をご紹介します。',
    seoKeywords: ['Learnmark 専門家ネットワーク', 'マネージド専門家調査', '一次調査会社', '専門家プロジェクト運用'],
    eyebrow: 'Learnmark について',
    title: '専門家コンサルテーションに、運用上の責任を与えます。',
    description: 'Learnmark は難しい問いを明確な専門家プロジェクトへ変換します。クライアント判断、専門家の同意、人による審査、管理された実施、財務精算を一つの運用モデルで結びます。',
    workCta: '相談する',
    aiCta: 'ご利用の流れ',
    operatingTitle: '運用モデル',
    operatingSubtitle: '問いから承認済み成果まで責任をつなぐ方法',
    operatingBadge: '専門家プロジェクト運用',
    operatingModel: [
      { name: '構造化', description: '意思決定を商業スコープ、専門家ポジション、調査目標、制約、予算、実行計画へ変換します。' },
      { name: '適格性確認', description: '関連経験を探索し、質問票、条件、開示、利益相反、制限、準備状況を確認します。' },
      { name: '実施', description: '選定済み専門家、契約、セッション、承認済み成果、進捗、例外、明示的検収を調整します。' },
      { name: '精算', description: 'クライアント債権、専門家債務、コンテンツアクセス、財務保留、案件終了を分けて管理します。' },
    ],
    missionEyebrow: '私たちの使命',
    missionTitle: '一次経験を、統制を失わずに有用なものへ。',
    missionDescription: '重要な判断には公開データにない背景が必要です。参加者の選択、情報境界、各事業判断の責任を守りながら、適切な実務家と専門職への責任ある経路を提供します。',
    capabilities: [
      { name: 'クライアント管理', description: 'スコープ、予算、見積、専門家選定、開始、重要変更、検収、復旧方針をクライアントが承認します。' },
      { name: '専門家の自己決定', description: '専門家は案件を選び、条件と開示を確認し、制限を申告し、不適切な議論を停止できます。' },
      { name: 'プラットフォーム責任', description: '指名責任者が探索、審査、期限、実施、例外、精算記録、次の行動を調整します。' },
    ],
    principlesEyebrow: '仕事の原則',
    principlesTitle: 'ワークフローが守るべきもの',
    principlesDescription: '技術は一貫した実行を支えますが、判断権は責任を持つ参加者または審査者に残ります。',
    principles: [
      { name: '明示的な判断', description: '点数、期限、支払、セッション完了、無応答は必要な承認の代わりになりません。' },
      { name: '段階的開示', description: '情報は次の段階で必要かつ許可され、同意された場合にのみ開示します。' },
      { name: '人によるエスカレーション', description: 'リスク、強制禁止、異議、例外的な商業対応は責任者が審査します。' },
      { name: '財務の分離', description: '顧客資金、専門家報酬、返金、損失、アクセス権、支払状態を別々に扱います。' },
    ],
    leadershipEyebrow: '運用チーム',
    leadershipTitle: '調査運用、リスク、技術の経験',
    leadershipDescription: 'プロジェクト運用、コンプライアンスを意識した製品設計、財務ワークフロー、信頼できるプラットフォーム工学を組み合わせます。',
    people: [
      { role: '創業者 / プラットフォーム・ソリューション責任者', bio: '責任ある専門家調査、クライアント成果、両者をつなぐ運用モデルを担当します。' },
      { role: '共同創業者 / 運用・アーキテクチャ責任者', bio: '監査可能なワークフロー、信頼できるシステム、明確な状態責任を設計します。' },
      { role: '共同創業者 / プロダクト・体験責任者', bio: '明示的な判断と安全な情報境界を中心に、クライアント、専門家、運用体験を設計します。' },
    ],
  },
  fr: {
    seoTitle: 'À propos',
    seoDescription: 'Découvrez comment Learnmark gère la consultation d’experts comme un processus maîtrisé reliant cadrage client, qualification, livraison, validation et règlement.',
    seoKeywords: ['réseau d’experts Learnmark', 'recherche d’experts pilotée', 'cabinet de recherche primaire', 'opérations de consultation'],
    eyebrow: 'À propos de Learnmark',
    title: 'Nous rendons la consultation d’experts responsable sur le plan opérationnel.',
    description: 'Learnmark offre un parcours piloté pour transformer les questions difficiles en projets d’experts cadrés. Nous relions décisions client, consentement expert, revue humaine, livraison maîtrisée et règlement financier dans un même modèle.',
    workCta: 'Travailler avec nous',
    aiCta: 'Voir notre méthode',
    operatingTitle: 'Modèle opérationnel',
    operatingSubtitle: 'Comment la responsabilité progresse de la question au résultat approuvé',
    operatingBadge: 'Opérations d’experts',
    operatingModel: [
      { name: 'Structurer', description: 'Traduire la décision en périmètre commercial, postes, objectifs, contraintes, budget et plan d’exécution.' },
      { name: 'Qualifier', description: 'Trouver l’expérience adaptée et finaliser questionnaire, conditions, divulgation, conflits et contrôles.' },
      { name: 'Livrer', description: 'Coordonner experts retenus, accords, sessions, résultats approuvés, avancement, exceptions et validation.' },
      { name: 'Régler', description: 'Séparer créances client, sommes dues aux experts, accès au contenu, gels financiers et clôture.' },
    ],
    missionEyebrow: 'Notre mission',
    missionTitle: 'Rendre l’expérience directe utile sans perdre la maîtrise du processus.',
    missionDescription: 'Les décisions importantes dépendent souvent d’un contexte absent des données publiées. Nous créons un accès responsable aux professionnels pertinents tout en protégeant choix, limites d’information et responsabilité de chaque décision.',
    capabilities: [
      { name: 'Contrôle du projet client', description: 'Le client approuve périmètre, budget, devis, sélection, démarrage, changements importants, validation et reprise.' },
      { name: 'Contrôle de la participation', description: 'L’expert choisit chaque mission, confirme conditions et divulgation, déclare ses limites et peut arrêter un échange.' },
      { name: 'Responsabilité plateforme', description: 'Des responsables nommés coordonnent sourcing, revue, délais, livraison, exceptions, règlement et prochaine action.' },
    ],
    principlesEyebrow: 'Principes de travail',
    principlesTitle: 'Ce que le processus doit préserver',
    principlesDescription: 'La technologie soutient une exécution cohérente, mais l’autorité reste auprès du participant ou du responsable de chaque décision.',
    principles: [
      { name: 'Décisions explicites', description: 'Score, échéance, paiement, session terminée ou silence ne remplacent jamais l’approbation requise.' },
      { name: 'Divulgation progressive', description: 'L’information n’est révélée que si elle est nécessaire, permise et consentie pour l’étape suivante.' },
      { name: 'Escalade humaine', description: 'Risques, interdictions fermes, litiges et actions commerciales exceptionnelles sont examinés par une personne responsable.' },
      { name: 'Séparation financière', description: 'Fonds client, rémunération expert, remboursements, pertes, accès et statut de paiement restent distincts.' },
    ],
    leadershipEyebrow: 'Équipe opérationnelle',
    leadershipTitle: 'Une expérience de la recherche, du risque et de la technologie',
    leadershipDescription: 'L’équipe réunit opérations projet, conception attentive à la conformité, processus financiers et ingénierie de plateforme fiable.',
    people: [
      { role: 'Fondateur / Responsable plateforme et solutions', bio: 'Se concentre sur la recherche responsable, les résultats client et le modèle opérationnel qui les relie.' },
      { role: 'Co-fondateur / Responsable opérations et architecture', bio: 'Conçoit des processus auditables, des systèmes fiables et une responsabilité claire entre les états projet.' },
      { role: 'Co-fondateur / Responsable produit et expérience', bio: 'Conçoit les expériences client, expert et opérations autour de décisions explicites et de limites sûres.' },
    ],
  },
  de: {
    seoTitle: 'Über uns',
    seoDescription: 'Erfahren Sie, wie Learnmark Expertenberatung als kontrollierten Prozess von Kundenplanung und Qualifizierung bis Leistung, Abnahme und Abrechnung betreibt.',
    seoKeywords: ['Learnmark Expertennetzwerk', 'betreute Expertenrecherche', 'Primärforschungsunternehmen', 'Expertenprojekt-Betrieb'],
    eyebrow: 'Über Learnmark',
    title: 'Wir machen Expertenberatung operativ verantwortlich.',
    description: 'Learnmark bietet einen betreuten Weg von schwierigen Fragen zu klar abgegrenzten Expertenprojekten. Kundenentscheidungen, Experteneinwilligung, menschliche Prüfung, kontrollierte Leistung und Finanzabrechnung bilden ein Betriebsmodell.',
    workCta: 'Mit uns arbeiten',
    aiCta: 'Ablauf ansehen',
    operatingTitle: 'Betriebsmodell',
    operatingSubtitle: 'Wie Verantwortung von der Frage zum freigegebenen Ergebnis führt',
    operatingBadge: 'Expertenprojekte',
    operatingModel: [
      { name: 'Strukturieren', description: 'Entscheidung in Geschäftsumfang, Positionen, Ziele, Grenzen, Budget und Ausführungsplan übersetzen.' },
      { name: 'Qualifizieren', description: 'Passende Erfahrung finden und Fragebogen, Bedingungen, Offenlegung, Konflikte und Bereitschaft prüfen.' },
      { name: 'Leisten', description: 'Ausgewählte Fachleute, Vereinbarungen, Sitzungen, Ergebnisse, Fortschritt, Ausnahmen und Abnahme koordinieren.' },
      { name: 'Abrechnen', description: 'Kundenforderungen, Expertenverbindlichkeiten, Inhaltszugriff, Finanzsperren und Projektabschluss trennen.' },
    ],
    missionEyebrow: 'Unsere Mission',
    missionTitle: 'Unmittelbare Erfahrung nutzbar machen, ohne Kontrolle zu verlieren.',
    missionDescription: 'Wichtige Entscheidungen brauchen oft Kontext außerhalb veröffentlichter Daten. Wir schaffen einen verantwortlichen Zugang zu relevanten Fachleuten und schützen Wahlfreiheit, Informationsgrenzen und Verantwortlichkeit jeder Entscheidung.',
    capabilities: [
      { name: 'Kundenkontrolle', description: 'Kunden genehmigen Umfang, Budget, Angebot, Auswahl, Start, wichtige Änderungen, Abnahme und Wiederherstellung.' },
      { name: 'Expertenkontrolle', description: 'Fachleute wählen jede Anfrage, bestätigen Bedingungen und Offenlegung, nennen Grenzen und können Gespräche stoppen.' },
      { name: 'Plattformverantwortung', description: 'Benannte Verantwortliche koordinieren Suche, Prüfung, Fristen, Leistung, Ausnahmen, Abrechnung und nächste Schritte.' },
    ],
    principlesEyebrow: 'Arbeitsprinzipien',
    principlesTitle: 'Was der Prozess bewahren muss',
    principlesDescription: 'Technologie unterstützt eine einheitliche Ausführung, doch die Entscheidungsgewalt bleibt bei der jeweils verantwortlichen Person.',
    principles: [
      { name: 'Ausdrückliche Entscheidungen', description: 'Punktzahl, Frist, Zahlung, Sitzung oder Schweigen ersetzen nie die erforderliche Genehmigung.' },
      { name: 'Stufenweise Offenlegung', description: 'Informationen werden nur offengelegt, wenn sie für den nächsten Schritt nötig, erlaubt und freigegeben sind.' },
      { name: 'Menschliche Eskalation', description: 'Risiken, zwingende Verbote, Streitfälle und besondere Geschäftsmaßnahmen werden verantwortlich geprüft.' },
      { name: 'Finanzielle Trennung', description: 'Kundengelder, Vergütung, Rückerstattung, Verluste, Zugriff und Zahlungsstatus bleiben getrennte Tatsachen.' },
    ],
    leadershipEyebrow: 'Betriebsteam',
    leadershipTitle: 'Erfahrung in Recherchebetrieb, Risiko und Technologie',
    leadershipDescription: 'Das Team verbindet Projektbetrieb, compliancebewusste Produktgestaltung, Finanzprozesse und zuverlässige Plattformtechnik.',
    people: [
      { role: 'Gründer / Leitung Plattform und Lösungen', bio: 'Verantwortet verantwortliche Expertenrecherche, Kundenergebnisse und das verbindende Betriebsmodell.' },
      { role: 'Mitgründer / Leitung Betrieb und Architektur', bio: 'Entwirft prüfbare Abläufe, zuverlässige Systeme und klare Verantwortung über Projektzustände.' },
      { role: 'Mitgründer / Leitung Produkt und Erlebnis', bio: 'Gestaltet Kunden-, Experten- und Betriebserlebnisse rund um klare Entscheidungen und sichere Informationsgrenzen.' },
    ],
  },
}