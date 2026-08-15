import type { Locale } from '../config'

export type HomeMessages = {
  seoTitle: string
  seoDescription: string
  seoCategory: string
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
    seoTitle: 'Managed Expert Consultation Services',
    seoDescription: 'Learnmark turns complex research questions into controlled expert projects, managing scope, sourcing, qualification, delivery, acceptance, and settlement.',
    seoCategory: 'expert research and consultation',
    intro: {
      eyebrow: 'Managed expert consultation',
      title: 'From a difficult question to an accountable expert project.',
      description: 'Learnmark structures the brief, commercial scope, expert search, qualification, compliant delivery, acceptance, and settlement. Your team keeps the decisions; a dedicated project owner keeps every stage moving.',
      primaryCta: 'Start a project',
      secondaryCta: 'Explore the full workflow',
      capabilities: ['Expert calls', 'Written Q&A', 'Material review', 'AI-moderated interviews'],
      modelTitle: 'Controlled consultation workflow',
      modelSubtitle: 'One operating path from scope to settlement',
      live: 'Human-led',
      layers: [
        { name: 'Scope and fund', detail: 'Business question, expert positions, budget, quote, and verified deposit' },
        { name: 'Source and qualify', detail: 'Targeted outreach, questionnaire, terms, disclosure, and conflict review' },
        { name: 'Authorize and deliver', detail: 'Client selection, readiness checks, service execution, and approved outputs' },
        { name: 'Accept and settle', detail: 'Explicit completion, final balance, expert payables, and content release' },
      ],
      signals: [
        { label: 'Project ownership', value: 'Named lead' },
        { label: 'Expert selection', value: 'Client-controlled' },
        { label: 'Risk decisions', value: 'Human-reviewed' },
      ],
    },
    workWith: {
      eyebrow: 'The complete value chain',
      title: 'Every handoff has an owner, a gate, and a record.',
      description: 'Learnmark is not an open expert directory. We coordinate the commercial, research, compliance, delivery, and financial decisions that turn specialist experience into an approved project outcome.',
      links: ['Start a project', 'View client controls', 'Explore every stage'],
      services: [
        { name: 'Define the request', value: '01', description: 'Clarify the decision, knowledge gap, target experience, geography, timing, and prohibited areas.' },
        { name: 'Approve scope and quote', value: '02', description: 'Set expert positions, formats, expected work, budget ceiling, commercial terms, and the funding gate.' },
        { name: 'Lock the execution plan', value: '03', description: 'Specify goals, questions, evidence needs, permitted topics, language, duration, and outputs.' },
        { name: 'Source the right experience', value: '04', description: 'Search a controlled network and conduct targeted outreach without exposing client or expert identities too early.' },
        { name: 'Qualify and review', value: '05', description: 'Complete questionnaire, fit, terms, disclosure, conflict, restriction, availability, and human review gates.' },
        { name: 'Select and authorize', value: '06', description: 'The client locks qualified experts and starts only after readiness is revalidated within the start window.' },
        { name: 'Deliver and accept', value: '07', description: 'Coordinate sessions and approved outputs, then require explicit completion or a specific issue for review.' },
        { name: 'Settle and release', value: '08', description: 'Separate the final client balance, expert payables, financial holds, full content access, and project archive.' },
      ],
    },
    stats: {
      eyebrow: 'Operating principles',
      title: 'Automation supports the process. People make the decisions.',
      description: 'The workflow creates clarity without collapsing distinct responsibilities or turning silence, a score, or a deadline into an unintended business decision.',
      items: [
        { name: 'Scope, budget, selection, start, and acceptance stay with the client', value: 'Client authority' },
        { name: 'Participation, disclosure, boundaries, and the right to stop stay with the expert', value: 'Expert autonomy' },
        { name: 'Sourcing, coordination, review, exceptions, and records have accountable owners', value: 'Platform accountability' },
      ],
    },
  },
  'zh-CN': {
    seoTitle: '托管式专家咨询服务',
    seoDescription: 'Learnmark 将复杂研究问题转化为可控的专家项目，管理范围、寻源、筛选、交付、验收与结算。',
    seoCategory: '专家研究与咨询',
    intro: {
      eyebrow: '托管式专家咨询',
      title: '将复杂问题转化为责任清晰的专家项目。',
      description: 'Learnmark 负责需求简报、商业范围、专家寻源、筛选、合规交付、验收与结算。您的团队保留决策权，专属项目负责人推动每一阶段。',
      primaryCta: '发起项目',
      secondaryCta: '查看完整流程',
      capabilities: ['专家电话访谈', '书面问答', '材料评审', 'AI 主持访谈'],
      modelTitle: '受控专家咨询流程',
      modelSubtitle: '从范围确定到结算的一条完整运营路径',
      live: '人工主导',
      layers: [
        { name: '确定范围并资助', detail: '业务问题、专家席位、预算、报价与经核验首付' },
        { name: '寻源并筛选', detail: '定向邀约、问卷、条件、身份披露与冲突审核' },
        { name: '授权并交付', detail: '客户选人、就绪检查、服务执行与获批成果' },
        { name: '验收并结算', detail: '明确确认、尾款、专家应付与内容开放' },
      ],
      signals: [
        { label: '项目责任', value: '指定负责人' },
        { label: '专家选择', value: '客户控制' },
        { label: '风险决定', value: '人工审核' },
      ],
    },
    workWith: {
      eyebrow: '完整价值链',
      title: '每次交接都有负责人、门槛和记录。',
      description: 'Learnmark 不是开放式专家目录。我们协调商业、研究、合规、交付和财务决定，将专业经验转化为获批的项目成果。',
      links: ['发起项目', '查看客户控制', '探索全部阶段'],
      services: [
        { name: '定义需求', value: '01', description: '明确决策、知识缺口、目标经历、地区、时间与禁止主题。' },
        { name: '审批范围与报价', value: '02', description: '确定专家席位、形式、预计工作量、预算上限、商业条件与资助门槛。' },
        { name: '锁定执行计划', value: '03', description: '明确目标、问题、证据要求、允许主题、语言、时长与成果。' },
        { name: '寻找相关经验', value: '04', description: '搜索受控网络并定向邀约，避免过早暴露客户或专家身份。' },
        { name: '筛选与审核', value: '05', description: '完成问卷、适配、条件、披露、冲突、限制、可用时间及人工审核。' },
        { name: '选择并授权', value: '06', description: '客户锁定合格专家，并在启动期限内复核就绪状态后开始执行。' },
        { name: '交付与验收', value: '07', description: '协调场次与获批成果，要求明确确认完成或提出具体问题。' },
        { name: '结算与开放', value: '08', description: '分别管理客户尾款、专家应付、财务冻结、完整内容访问和项目归档。' },
      ],
    },
    stats: {
      eyebrow: '运营原则',
      title: '自动化支持流程，由人作出决定。',
      description: '流程用于建立清晰边界，而不会让分数、期限或沉默替代原本应由相关人员作出的业务决定。',
      items: [
        { name: '范围、预算、选人、启动和验收由客户决定', value: '客户权限' },
        { name: '参与、披露、边界和停止权由专家掌握', value: '专家自主' },
        { name: '寻源、协调、审核、异常和记录都有明确负责人', value: '平台责任' },
      ],
    },
  },
  'zh-TW': {
    seoTitle: '託管式專家顧問服務',
    seoDescription: 'Learnmark 將複雜研究問題轉化為可控的專家專案，管理範圍、尋源、篩選、交付、驗收與結算。',
    seoCategory: '專家研究與顧問服務',
    intro: {
      eyebrow: '託管式專家顧問服務',
      title: '將複雜問題轉化為責任清楚的專家專案。',
      description: 'Learnmark 負責需求簡報、商業範圍、專家尋源、篩選、合規交付、驗收與結算。您的團隊保留決定權，專屬專案負責人推動每一階段。',
      primaryCta: '啟動專案',
      secondaryCta: '查看完整流程',
      capabilities: ['專家電話訪談', '書面問答', '材料審閱', 'AI 主持訪談'],
      modelTitle: '受控專家顧問流程',
      modelSubtitle: '從範圍確定到結算的一條完整營運路徑',
      live: '人工主導',
      layers: [
        { name: '確定範圍並資助', detail: '商業問題、專家席位、預算、報價與經核驗首付款' },
        { name: '尋源並篩選', detail: '定向邀約、問卷、條件、身分揭露與衝突審核' },
        { name: '授權並交付', detail: '客戶選人、就緒檢查、服務執行與獲准成果' },
        { name: '驗收並結算', detail: '明確確認、尾款、專家應付與內容開放' },
      ],
      signals: [
        { label: '專案責任', value: '指定負責人' },
        { label: '專家選擇', value: '客戶控制' },
        { label: '風險決定', value: '人工審核' },
      ],
    },
    workWith: {
      eyebrow: '完整價值鏈',
      title: '每次交接都有負責人、門檻與紀錄。',
      description: 'Learnmark 不是開放式專家目錄。我們協調商業、研究、合規、交付與財務決定，將專業經驗轉化為獲准的專案成果。',
      links: ['啟動專案', '查看客戶控制', '探索全部階段'],
      services: [
        { name: '定義需求', value: '01', description: '釐清決策、知識缺口、目標經歷、地區、時間與禁止主題。' },
        { name: '核准範圍與報價', value: '02', description: '確定專家席位、形式、預計工作量、預算上限、商業條件與資助門檻。' },
        { name: '鎖定執行計畫', value: '03', description: '明確定義目標、問題、證據需求、允許主題、語言、時長與成果。' },
        { name: '尋找相關經驗', value: '04', description: '搜尋受控網絡並定向邀約，避免過早揭露客戶或專家身分。' },
        { name: '篩選與審核', value: '05', description: '完成問卷、適配、條件、揭露、衝突、限制、可用時間及人工審核。' },
        { name: '選擇並授權', value: '06', description: '客戶鎖定合格專家，並在啟動期限內複核就緒狀態後開始執行。' },
        { name: '交付與驗收', value: '07', description: '協調場次與獲准成果，要求明確確認完成或提出具體問題。' },
        { name: '結算與開放', value: '08', description: '分別管理客戶尾款、專家應付、財務凍結、完整內容存取與專案歸檔。' },
      ],
    },
    stats: {
      eyebrow: '營運原則',
      title: '自動化支援流程，由人做出決定。',
      description: '流程用於建立清楚邊界，而不會讓分數、期限或沉默取代原本應由相關人員做出的商業決定。',
      items: [
        { name: '範圍、預算、選人、啟動與驗收由客戶決定', value: '客戶權限' },
        { name: '參與、揭露、邊界與停止權由專家掌握', value: '專家自主' },
        { name: '尋源、協調、審核、例外與紀錄都有明確負責人', value: '平台責任' },
      ],
    },
  },
  ja: {
    seoTitle: 'マネージド専門家コンサルテーション',
    seoDescription: 'Learnmark は複雑な調査課題を管理可能な専門家プロジェクトへ変換し、スコープ、探索、適格性確認、実施、検収、精算を管理します。',
    seoCategory: '専門家調査とコンサルテーション',
    intro: {
      eyebrow: 'マネージド専門家コンサルテーション',
      title: '難しい問いを、責任の明確な専門家プロジェクトへ。',
      description: 'Learnmark が依頼内容、商業スコープ、専門家探索、適格性確認、コンプライアンスに沿った実施、検収、精算を管理します。判断はお客様に残し、専任責任者が各段階を進めます。',
      primaryCta: 'プロジェクトを開始',
      secondaryCta: '全プロセスを見る',
      capabilities: ['専門家との通話', '書面での質疑応答', '資料レビュー', 'AI モデレーター面談'],
      modelTitle: '管理されたコンサルテーション',
      modelSubtitle: 'スコープから精算までを結ぶ一つの運用経路',
      live: '人が主導',
      layers: [
        { name: 'スコープと資金', detail: '事業課題、専門家ポジション、予算、見積、確認済み前受金' },
        { name: '探索と適格性確認', detail: '個別探索、質問票、条件、本人開示、利益相反審査' },
        { name: '承認と実施', detail: 'クライアント選定、準備確認、サービス実施、承認済み成果' },
        { name: '検収と精算', detail: '明示的な完了、残金、専門家未払金、コンテンツ公開' },
      ],
      signals: [
        { label: 'プロジェクト責任', value: '指名責任者' },
        { label: '専門家選定', value: 'クライアント管理' },
        { label: 'リスク判断', value: '人による審査' },
      ],
    },
    workWith: {
      eyebrow: '完全な価値連鎖',
      title: 'すべての引き継ぎに責任者、ゲート、記録があります。',
      description: 'Learnmark は公開専門家ディレクトリではありません。商取引、調査、コンプライアンス、実施、財務の判断をつなぎ、専門経験を承認済み成果へ変えます。',
      links: ['プロジェクトを開始', 'クライアント統制を見る', '全段階を見る'],
      services: [
        { name: '依頼を定義', value: '01', description: '意思決定、知識不足、対象経験、地域、時期、禁止テーマを明確にします。' },
        { name: 'スコープと見積を承認', value: '02', description: '専門家ポジション、形式、作業量、予算上限、条件、資金ゲートを設定します。' },
        { name: '実行計画を確定', value: '03', description: '目標、質問、必要な根拠、許可テーマ、言語、時間、成果を定義します。' },
        { name: '適切な経験を探索', value: '04', description: '本人情報を早期に公開せず、管理ネットワークと個別探索を活用します。' },
        { name: '適格性確認と審査', value: '05', description: '質問票、適合性、条件、開示、利益相反、制限、対応可能性を審査します。' },
        { name: '選定して承認', value: '06', description: 'クライアントが専門家を確定し、開始期限内の再検証後に実行します。' },
        { name: '実施して検収', value: '07', description: 'セッションと成果を調整し、明示的な完了承認または問題提起を求めます。' },
        { name: '精算して公開', value: '08', description: '残金、専門家未払金、財務保留、全コンテンツ、保管を分けて管理します。' },
      ],
    },
    stats: {
      eyebrow: '運用原則',
      title: '自動化はプロセスを支え、判断は人が行います。',
      description: '点数、期限、無応答が本来必要な事業判断に置き換わることなく、明確さを作るワークフローです。',
      items: [
        { name: 'スコープ、予算、選定、開始、検収はクライアントが決定', value: 'クライアント権限' },
        { name: '参加、開示、境界、中止の権利は専門家が保持', value: '専門家の自律性' },
        { name: '探索、調整、審査、例外、記録には責任者を設定', value: 'プラットフォーム責任' },
      ],
    },
  },
  fr: {
    seoTitle: 'Consultations d’experts entièrement pilotées',
    seoDescription: 'Learnmark transforme les questions complexes en projets d’experts maîtrisés et gère cadrage, sourcing, qualification, livraison, validation et règlement.',
    seoCategory: 'recherche et consultations d’experts',
    intro: {
      eyebrow: 'Consultations d’experts pilotées',
      title: 'D’une question difficile à un projet d’experts responsable.',
      description: 'Learnmark gère le brief, le périmètre commercial, le sourcing, la qualification, la livraison conforme, la validation et le règlement. Votre équipe garde les décisions ; un responsable dédié fait avancer chaque étape.',
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Voir le processus complet',
      capabilities: ['Appels d’experts', 'Questions-réponses écrites', 'Revue de supports', 'Entretiens animés par l’IA'],
      modelTitle: 'Processus de consultation maîtrisé',
      modelSubtitle: 'Un parcours opérationnel du cadrage au règlement',
      live: 'Piloté par l’humain',
      layers: [
        { name: 'Cadrer et financer', detail: 'Question métier, postes, budget, devis et acompte vérifié' },
        { name: 'Identifier et qualifier', detail: 'Prospection ciblée, questionnaire, conditions, divulgation et conflits' },
        { name: 'Autoriser et livrer', detail: 'Sélection client, contrôles, exécution et résultats approuvés' },
        { name: 'Valider et régler', detail: 'Validation explicite, solde, sommes dues et ouverture du contenu' },
      ],
      signals: [
        { label: 'Responsabilité projet', value: 'Responsable nommé' },
        { label: 'Sélection des experts', value: 'Contrôlée par le client' },
        { label: 'Décisions de risque', value: 'Revue humaine' },
      ],
    },
    workWith: {
      eyebrow: 'Chaîne de valeur complète',
      title: 'Chaque transfert possède un responsable, un seuil et une trace.',
      description: 'Learnmark n’est pas un annuaire ouvert. Nous coordonnons les décisions commerciales, de recherche, de conformité, de livraison et de finance pour transformer l’expérience en résultat approuvé.',
      links: ['Démarrer un projet', 'Voir les contrôles client', 'Explorer toutes les étapes'],
      services: [
        { name: 'Définir la demande', value: '01', description: 'Clarifier décision, manque d’information, expérience visée, région, calendrier et sujets interdits.' },
        { name: 'Approuver périmètre et devis', value: '02', description: 'Fixer postes, formats, charge, plafond, conditions commerciales et seuil de financement.' },
        { name: 'Figer le plan d’exécution', value: '03', description: 'Définir objectifs, questions, preuves, thèmes autorisés, langues, durée et livrables.' },
        { name: 'Trouver l’expérience adaptée', value: '04', description: 'Explorer un réseau contrôlé sans exposer trop tôt les identités du client ou de l’expert.' },
        { name: 'Qualifier et examiner', value: '05', description: 'Finaliser questionnaire, adéquation, conditions, divulgation, conflits, limites et disponibilité.' },
        { name: 'Sélectionner et autoriser', value: '06', description: 'Le client verrouille les experts qualifiés et démarre après revérification dans la fenêtre prévue.' },
        { name: 'Livrer et valider', value: '07', description: 'Coordonner les sessions et résultats, puis exiger une validation explicite ou un problème précis.' },
        { name: 'Régler et ouvrir', value: '08', description: 'Séparer solde client, sommes dues, gel financier, accès complet et archivage.' },
      ],
    },
    stats: {
      eyebrow: 'Principes opérationnels',
      title: 'L’automatisation soutient le processus. Les personnes décident.',
      description: 'Le processus crée de la clarté sans transformer un score, une échéance ou un silence en décision métier involontaire.',
      items: [
        { name: 'Périmètre, budget, sélection, démarrage et validation restent au client', value: 'Autorité du client' },
        { name: 'Participation, divulgation, limites et droit d’arrêt restent à l’expert', value: 'Autonomie de l’expert' },
        { name: 'Sourcing, coordination, revue, exceptions et traces ont un responsable', value: 'Responsabilité plateforme' },
      ],
    },
  },
  de: {
    seoTitle: 'Betreute Expertenberatung',
    seoDescription: 'Learnmark macht aus komplexen Fragen kontrollierte Expertenprojekte und steuert Umfang, Suche, Qualifizierung, Leistung, Abnahme und Abrechnung.',
    seoCategory: 'Expertenrecherche und Beratung',
    intro: {
      eyebrow: 'Betreute Expertenberatung',
      title: 'Von einer schwierigen Frage zum verantwortbaren Expertenprojekt.',
      description: 'Learnmark steuert Briefing, Geschäftsumfang, Expertensuche, Qualifizierung, regelkonforme Durchführung, Abnahme und Abrechnung. Ihr Team behält die Entscheidungen; eine feste Projektleitung treibt jede Phase voran.',
      primaryCta: 'Projekt starten',
      secondaryCta: 'Gesamten Ablauf ansehen',
      capabilities: ['Expertengespräche', 'Schriftliche Fragen', 'Unterlagenprüfung', 'KI-moderierte Interviews'],
      modelTitle: 'Kontrollierter Beratungsablauf',
      modelSubtitle: 'Ein Betriebsweg von der Planung bis zur Abrechnung',
      live: 'Menschlich geführt',
      layers: [
        { name: 'Planen und finanzieren', detail: 'Geschäftsfrage, Positionen, Budget, Angebot und bestätigte Anzahlung' },
        { name: 'Finden und qualifizieren', detail: 'Gezielte Ansprache, Fragebogen, Bedingungen, Offenlegung und Konfliktprüfung' },
        { name: 'Genehmigen und leisten', detail: 'Kundenauswahl, Bereitschaftsprüfung, Ausführung und freigegebene Ergebnisse' },
        { name: 'Abnehmen und abrechnen', detail: 'Ausdrücklicher Abschluss, Restbetrag, Expertenverbindlichkeiten und Inhaltszugriff' },
      ],
      signals: [
        { label: 'Projektverantwortung', value: 'Benannte Leitung' },
        { label: 'Expertenauswahl', value: 'Vom Kunden gesteuert' },
        { label: 'Risikoentscheidungen', value: 'Menschlich geprüft' },
      ],
    },
    workWith: {
      eyebrow: 'Vollständige Wertschöpfungskette',
      title: 'Jede Übergabe hat Verantwortliche, Freigaben und Nachweise.',
      description: 'Learnmark ist kein offenes Expertenverzeichnis. Wir verbinden geschäftliche, fachliche, regulatorische, operative und finanzielle Entscheidungen zu einem freigegebenen Projektergebnis.',
      links: ['Projekt starten', 'Kundenkontrollen ansehen', 'Alle Phasen erkunden'],
      services: [
        { name: 'Anfrage definieren', value: '01', description: 'Entscheidung, Wissenslücke, Zielerfahrung, Region, Zeit und verbotene Themen klären.' },
        { name: 'Umfang und Angebot freigeben', value: '02', description: 'Positionen, Formate, Aufwand, Budgetgrenze, Bedingungen und Finanzierung festlegen.' },
        { name: 'Ausführungsplan festlegen', value: '03', description: 'Ziele, Fragen, Nachweise, erlaubte Themen, Sprachen, Dauer und Ergebnisse definieren.' },
        { name: 'Passende Erfahrung finden', value: '04', description: 'Im kontrollierten Netzwerk suchen, ohne Identitäten von Kunde oder Experte früh offenzulegen.' },
        { name: 'Qualifizieren und prüfen', value: '05', description: 'Fragebogen, Eignung, Bedingungen, Offenlegung, Konflikte, Grenzen und Verfügbarkeit prüfen.' },
        { name: 'Auswählen und genehmigen', value: '06', description: 'Der Kunde legt Fachleute fest und startet nach erneuter Prüfung innerhalb des Startfensters.' },
        { name: 'Leisten und abnehmen', value: '07', description: 'Sitzungen und Ergebnisse koordinieren, dann ausdrückliche Abnahme oder ein konkretes Problem verlangen.' },
        { name: 'Abrechnen und freigeben', value: '08', description: 'Restbetrag, Expertenverbindlichkeiten, Finanzsperre, Vollzugriff und Archiv getrennt steuern.' },
      ],
    },
    stats: {
      eyebrow: 'Betriebsgrundsätze',
      title: 'Automatisierung unterstützt den Prozess. Menschen entscheiden.',
      description: 'Der Ablauf schafft Klarheit, ohne Punktzahl, Frist oder Schweigen zu einer unbeabsichtigten Geschäftsentscheidung zu machen.',
      items: [
        { name: 'Umfang, Budget, Auswahl, Start und Abnahme bleiben beim Kunden', value: 'Kundenhoheit' },
        { name: 'Teilnahme, Offenlegung, Grenzen und Abbruch bleiben bei der Fachperson', value: 'Expertenautonomie' },
        { name: 'Suche, Koordination, Prüfung, Ausnahmen und Nachweise haben Verantwortliche', value: 'Plattformverantwortung' },
      ],
    },
  },
}
