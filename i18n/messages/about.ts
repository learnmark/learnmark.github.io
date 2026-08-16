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
}

export const aboutMessages: Record<Locale, AboutMessages> = {
  en: {
    seoTitle: 'About Learnmark',
    seoDescription: 'Learn how Learnmark connects enterprises with global operators and specialists for high-value consultation while creating flexible income opportunities for experts.',
    seoKeywords: ['Learnmark global expert network', 'enterprise expert consultation', 'primary research company', 'industry experts'],
    eyebrow: 'About Learnmark',
    title: 'We connect important business decisions with people who have lived them.',
    description: 'Learnmark is building a global expert network for enterprises seeking firsthand insight. We combine targeted sourcing, rigorous matching, and dedicated project support while giving experienced professionals flexible opportunities to earn from their expertise.',
    workCta: 'Work with us',
    aiCta: 'See how it works',
    operatingTitle: 'A network built for both sides',
    operatingSubtitle: 'Enterprise questions become relevant, well-supported expert opportunities',
    operatingBadge: 'Global expert network',
    operatingModel: [
      { name: 'Enterprise need', description: 'Teams bring strategic, investment, market, technology, and operational questions where direct experience can change the decision.' },
      { name: 'Expert matching', description: 'We search the network and recruit specialists with relevant roles, markets, languages, and firsthand experience.' },
      { name: 'Consultation', description: 'A dedicated team coordinates the format, questions, timing, and clear participation boundaries for each engagement.' },
      { name: 'Shared value', description: 'Enterprises gain decision-ready insight, while experts create flexible additional income from experience they can responsibly share.' },
    ],
    missionEyebrow: 'Our mission',
    missionTitle: 'Make the world’s practical experience easier to reach and more valuable to share.',
    missionDescription: 'Published information rarely explains how a market, technology, or organization works in practice. We connect enterprise teams with people who hold that context and give experts a trusted way to contribute on their own terms.',
    capabilities: [
      { name: 'Enterprise access', description: 'Clients reach operators and specialists selected for the exact decision, market, function, or technology in question.' },
      { name: 'Expert opportunity', description: 'Experts receive relevant paid consultation opportunities and choose when, where, and how they participate.' },
      { name: 'Dedicated service', description: 'Named project teams manage sourcing, qualification, communication, scheduling, research formats, and follow-up.' },
    ],
    principlesEyebrow: 'Working principles',
    principlesTitle: 'What makes the network useful and trusted',
    principlesDescription: 'Technology helps us search and coordinate, while people retain control of every meaningful decision.',
    principles: [
      { name: 'Relevance first', description: 'Matching begins with direct experience and the business question, not a generic directory or opaque ranking.' },
      { name: 'Participant choice', description: 'Clients choose the perspectives they need, and experts independently choose every opportunity.' },
      { name: 'Clear boundaries', description: 'Identity, conflicts, permitted topics, and information sharing are reviewed for each project.' },
      { name: 'Human accountability', description: 'Dedicated people oversee quality, sensitive decisions, communication, and exceptions from brief to outcome.' },
    ],
  },
  'zh-CN': {
    seoTitle: '关于我们',
    seoDescription: '了解 Learnmark 如何通过全球专家网络为企业提供高端咨询，并为专家创造灵活的额外收入机会。',
    seoKeywords: ['Learnmark 全球专家网络', '企业专家咨询', '一手研究公司', '行业专家'],
    eyebrow: '关于 Learnmark',
    title: '让重要商业决策连接真正经历过的人。',
    description: 'Learnmark 正在为需要一手洞察的企业搭建全球专家网络。我们结合定向寻源、严谨匹配与专属项目支持，同时让资深专业人士以灵活方式凭借自身经验获得额外收入。',
    workCta: '与我们合作',
    aiCta: '查看服务流程',
    operatingTitle: '为企业与专家共同创造价值',
    operatingSubtitle: '将企业问题转化为相关且服务完善的专家机会',
    operatingBadge: '全球专家网络',
    operatingModel: [
      { name: '企业需求', description: '企业提出战略、投资、市场、技术或运营问题，寻找能够改变决策的一手经验。' },
      { name: '专家匹配', description: '我们从网络中寻找并定向招募具备相关角色、市场、语言与实战经验的专家。' },
      { name: '咨询服务', description: '专属团队为每个项目协调形式、问题、时间与清晰的参与边界。' },
      { name: '双边价值', description: '企业获得可用于决策的洞察，专家则通过可负责任分享的经验创造灵活的额外收入。' },
    ],
    missionEyebrow: '我们的使命',
    missionTitle: '让全球实战经验更容易被找到，也更值得被分享。',
    missionDescription: '公开信息很少能解释市场、技术或组织在现实中如何运转。我们让企业团队连接掌握这些背景的人，也让专家能够按照自己的选择，在可信环境中贡献经验。',
    capabilities: [
      { name: '企业专家资源', description: '围绕具体决策、市场、职能或技术，为客户连接真正相关的经营者与专业人士。' },
      { name: '专家收入机会', description: '专家获得相关的付费咨询机会，并可自主决定何时、何地以及以何种方式参与。' },
      { name: '专属项目服务', description: '指定团队负责寻源、筛选、沟通、排期、研究形式与后续支持。' },
    ],
    principlesEyebrow: '工作原则',
    principlesTitle: '让专家网络真正有用且值得信任',
    principlesDescription: '技术帮助我们寻找与协调专家，但每项重要决定仍由人作出。',
    principles: [
      { name: '相关性优先', description: '匹配从一手经验和业务问题出发，而不是依赖通用目录或不透明排名。' },
      { name: '参与者自主', description: '客户选择所需视角，专家独立决定是否参与每次机会。' },
      { name: '清晰边界', description: '每个项目都会核查身份、利益冲突、允许讨论的主题与信息分享边界。' },
      { name: '人工负责', description: '专属团队从需求到成果持续负责质量、敏感决定、沟通与异常处理。' },
    ],
  },
  'zh-TW': {
    seoTitle: '關於我們',
    seoDescription: '瞭解 Learnmark 如何透過全球專家網絡為企業提供高端顧問服務，並為專家創造靈活的額外收入機會。',
    seoKeywords: ['Learnmark 全球專家網絡', '企業專家顧問服務', '第一手研究公司', '產業專家'],
    eyebrow: '關於 Learnmark',
    title: '讓重要商業決策連結真正經歷過的人。',
    description: 'Learnmark 正在為需要第一手洞察的企業建構全球專家網絡。我們結合定向尋源、嚴謹配對與專屬專案支援，同時讓資深專業人士以靈活方式憑自身經驗獲得額外收入。',
    workCta: '與我們合作',
    aiCta: '查看服務流程',
    operatingTitle: '為企業與專家共同創造價值',
    operatingSubtitle: '將企業問題轉化為相關且服務完善的專家機會',
    operatingBadge: '全球專家網絡',
    operatingModel: [
      { name: '企業需求', description: '企業提出策略、投資、市場、技術或營運問題，尋找能改變決策的第一手經驗。' },
      { name: '專家配對', description: '我們從網絡中尋找並定向招募具備相關職位、市場、語言與實務經驗的專家。' },
      { name: '顧問服務', description: '專屬團隊為每個專案協調形式、問題、時間與清楚的參與邊界。' },
      { name: '雙邊價值', description: '企業獲得可用於決策的洞察，專家則透過可負責任分享的經驗創造靈活的額外收入。' },
    ],
    missionEyebrow: '我們的使命',
    missionTitle: '讓全球實務經驗更容易被找到，也更值得被分享。',
    missionDescription: '公開資訊很少能解釋市場、技術或組織在現實中如何運作。我們讓企業團隊連結掌握這些背景的人，也讓專家能依照自己的選擇，在可信環境中貢獻經驗。',
    capabilities: [
      { name: '企業專家資源', description: '圍繞具體決策、市場、職能或技術，為客戶連結真正相關的經營者與專業人士。' },
      { name: '專家收入機會', description: '專家獲得相關的付費顧問機會，並可自主決定何時、何地以及以何種方式參與。' },
      { name: '專屬專案服務', description: '指定團隊負責尋源、篩選、溝通、排程、研究形式與後續支援。' },
    ],
    principlesEyebrow: '工作原則',
    principlesTitle: '讓專家網絡真正有用且值得信任',
    principlesDescription: '技術協助我們尋找與協調專家，但每項重要決定仍由人做出。',
    principles: [
      { name: '相關性優先', description: '配對從第一手經驗與商業問題出發，而非依賴通用目錄或不透明排名。' },
      { name: '參與者自主', description: '客戶選擇所需觀點，專家獨立決定是否參與每次機會。' },
      { name: '清楚邊界', description: '每個專案都會核查身分、利益衝突、允許討論的主題與資訊分享邊界。' },
      { name: '人工負責', description: '專屬團隊從需求到成果持續負責品質、敏感決定、溝通與例外處理。' },
    ],
  },
  ja: {
    seoTitle: '会社情報',
    seoDescription: 'Learnmark がグローバル専門家ネットワークを通じて企業に高度なコンサルテーションを提供し、専門家に柔軟な副収入の機会を生み出す仕組みをご紹介します。',
    seoKeywords: ['Learnmark グローバル専門家ネットワーク', '法人向け専門家コンサルテーション', '一次調査会社', '業界専門家'],
    eyebrow: 'Learnmark について',
    title: '重要な事業判断を、実際に経験した人へつなぎます。',
    description: 'Learnmark は一次的な知見を求める企業のために、グローバル専門家ネットワークを構築しています。個別探索、厳格なマッチング、専任支援を組み合わせ、経験豊富な専門家には知識を活かした柔軟な副収入の機会を提供します。',
    workCta: '相談する',
    aiCta: 'ご利用の流れ',
    operatingTitle: '企業と専門家の双方に価値を生むネットワーク',
    operatingSubtitle: '企業の問いを、関連性が高く支援の整った専門家機会へ',
    operatingBadge: 'グローバル専門家ネットワーク',
    operatingModel: [
      { name: '企業ニーズ', description: '戦略、投資、市場、技術、運営上の問いに対し、意思決定を変える一次経験を求めます。' },
      { name: '専門家マッチング', description: '関連する役職、市場、言語、実務経験を持つ人材をネットワークから探し、個別に採用します。' },
      { name: 'コンサルテーション', description: '専任チームが各案件の形式、質問、日程、明確な参加境界を調整します。' },
      { name: '双方の価値', description: '企業は意思決定に使える知見を得て、専門家は責任を持って共有できる経験から柔軟な副収入を得られます。' },
    ],
    missionEyebrow: '私たちの使命',
    missionTitle: '世界の実務経験を、より見つけやすく、共有する価値の高いものへ。',
    missionDescription: '公開情報だけでは、市場、技術、組織が実際にどう動くかは分かりません。私たちはその背景を持つ人と企業をつなぎ、専門家が自らの判断で貢献できる信頼ある環境を提供します。',
    capabilities: [
      { name: '企業の専門家アクセス', description: '具体的な判断、市場、職能、技術に合う実務家と専門職へつなぎます。' },
      { name: '専門家の収入機会', description: '専門家は関連する有償相談を受け、いつ、どこで、どのように参加するかを自ら選べます。' },
      { name: '専任プロジェクト支援', description: '担当チームが探索、確認、連絡、日程、調査形式、フォローを管理します。' },
    ],
    principlesEyebrow: '仕事の原則',
    principlesTitle: '有用で信頼されるネットワークのために',
    principlesDescription: '技術は探索と調整を支えますが、重要な判断は常に人が行います。',
    principles: [
      { name: '関連性を優先', description: '一般的な名簿や不透明な順位ではなく、一次経験と事業上の問いからマッチングします。' },
      { name: '参加者の選択', description: '企業は必要な視点を選び、専門家は各機会への参加を独立して決めます。' },
      { name: '明確な境界', description: '本人情報、利益相反、許可されたテーマ、情報共有範囲を案件ごとに確認します。' },
      { name: '人による責任', description: '専任チームが依頼から成果まで、品質、機微な判断、連絡、例外を監督します。' },
    ],
  },
  fr: {
    seoTitle: 'À propos',
    seoDescription: 'Découvrez comment Learnmark relie les entreprises à des professionnels du monde entier pour des consultations à forte valeur et crée des revenus complémentaires flexibles pour les experts.',
    seoKeywords: ['réseau mondial d’experts Learnmark', 'consultation d’experts entreprise', 'société de recherche primaire', 'experts sectoriels'],
    eyebrow: 'À propos de Learnmark',
    title: 'Nous relions les décisions importantes à ceux qui les ont vécues.',
    description: 'Learnmark construit un réseau mondial d’experts pour les entreprises en quête d’insights de terrain. Nous associons sourcing ciblé, matching rigoureux et accompagnement dédié, tout en offrant aux professionnels expérimentés des opportunités flexibles de valoriser leur expertise.',
    workCta: 'Travailler avec nous',
    aiCta: 'Voir notre méthode',
    operatingTitle: 'Un réseau conçu pour les deux parties',
    operatingSubtitle: 'Les questions d’entreprise deviennent des opportunités expertes pertinentes et accompagnées',
    operatingBadge: 'Réseau mondial d’experts',
    operatingModel: [
      { name: 'Besoin de l’entreprise', description: 'Les équipes apportent des questions de stratégie, investissement, marché, technologie ou opérations où l’expérience directe compte.' },
      { name: 'Matching expert', description: 'Nous explorons le réseau et recrutons des spécialistes selon leurs fonctions, marchés, langues et expérience directe.' },
      { name: 'Consultation', description: 'Une équipe dédiée coordonne format, questions, calendrier et limites claires de participation.' },
      { name: 'Valeur partagée', description: 'Les entreprises obtiennent des insights utiles à la décision ; les experts créent un revenu complémentaire flexible grâce à leur expérience partageable.' },
    ],
    missionEyebrow: 'Notre mission',
    missionTitle: 'Rendre l’expérience pratique mondiale plus accessible et plus précieuse à partager.',
    missionDescription: 'L’information publiée explique rarement comment un marché, une technologie ou une organisation fonctionne réellement. Nous relions les entreprises à ceux qui possèdent ce contexte et offrons aux experts un cadre de confiance pour contribuer selon leurs choix.',
    capabilities: [
      { name: 'Accès pour les entreprises', description: 'Les clients accèdent aux professionnels choisis pour la décision, le marché, la fonction ou la technologie concernés.' },
      { name: 'Opportunités pour les experts', description: 'Les experts reçoivent des consultations rémunérées pertinentes et choisissent quand, où et comment participer.' },
      { name: 'Service dédié', description: 'Des équipes nommées gèrent sourcing, qualification, communication, calendrier, formats de recherche et suivi.' },
    ],
    principlesEyebrow: 'Principes de travail',
    principlesTitle: 'Ce qui rend le réseau utile et digne de confiance',
    principlesDescription: 'La technologie facilite recherche et coordination, mais chaque décision importante reste humaine.',
    principles: [
      { name: 'Pertinence d’abord', description: 'Le matching part de l’expérience directe et de la question métier, pas d’un annuaire générique ou d’un classement opaque.' },
      { name: 'Choix des participants', description: 'Les clients choisissent les perspectives nécessaires et chaque expert choisit librement chaque opportunité.' },
      { name: 'Limites claires', description: 'Identité, conflits, thèmes autorisés et partage d’information sont examinés pour chaque projet.' },
      { name: 'Responsabilité humaine', description: 'Des équipes dédiées supervisent qualité, décisions sensibles, communication et exceptions du brief au résultat.' },
    ],
  },
  de: {
    seoTitle: 'Über uns',
    seoDescription: 'Erfahren Sie, wie Learnmark Unternehmen mit globalen Praktikern und Spezialisten verbindet und Experten flexible Chancen für Zusatzeinkommen eröffnet.',
    seoKeywords: ['Learnmark globales Expertennetzwerk', 'Expertenberatung für Unternehmen', 'Primärforschungsunternehmen', 'Branchenexperten'],
    eyebrow: 'Über Learnmark',
    title: 'Wir verbinden wichtige Geschäftsentscheidungen mit Menschen, die sie erlebt haben.',
    description: 'Learnmark baut ein globales Expertennetzwerk für Unternehmen auf, die Erkenntnisse aus erster Hand suchen. Wir verbinden gezielte Suche, sorgfältiges Matching und dedizierte Projektunterstützung und eröffnen erfahrenen Fachleuten flexible Chancen, mit ihrer Expertise zusätzliches Einkommen zu erzielen.',
    workCta: 'Mit uns arbeiten',
    aiCta: 'Ablauf ansehen',
    operatingTitle: 'Ein Netzwerk für beide Seiten',
    operatingSubtitle: 'Unternehmensfragen werden zu relevanten, gut begleiteten Expertenchancen',
    operatingBadge: 'Globales Expertennetzwerk',
    operatingModel: [
      { name: 'Unternehmensbedarf', description: 'Teams bringen Strategie-, Investment-, Markt-, Technologie- und Operations-Fragen ein, bei denen direkte Erfahrung zählt.' },
      { name: 'Experten-Matching', description: 'Wir durchsuchen das Netzwerk und rekrutieren Fachleute nach Rollen, Märkten, Sprachen und Praxiserfahrung.' },
      { name: 'Beratung', description: 'Ein dediziertes Team koordiniert Format, Fragen, Zeitplan und klare Teilnahmegrenzen.' },
      { name: 'Gemeinsamer Mehrwert', description: 'Unternehmen gewinnen entscheidungsreife Erkenntnisse; Experten schaffen flexibles Zusatzeinkommen mit verantwortungsvoll teilbarer Erfahrung.' },
    ],
    missionEyebrow: 'Unsere Mission',
    missionTitle: 'Die praktische Erfahrung der Welt leichter erreichbar und wertvoller teilbar machen.',
    missionDescription: 'Veröffentlichte Informationen erklären selten, wie Märkte, Technologien oder Organisationen tatsächlich funktionieren. Wir verbinden Unternehmen mit Menschen, die diesen Kontext kennen, und geben Experten einen vertrauenswürdigen Weg, zu eigenen Bedingungen beizutragen.',
    capabilities: [
      { name: 'Zugang für Unternehmen', description: 'Kunden erreichen Praktiker und Spezialisten passend zur konkreten Entscheidung, zum Markt, zur Funktion oder Technologie.' },
      { name: 'Chancen für Experten', description: 'Experten erhalten passende bezahlte Beratungsanfragen und entscheiden, wann, wo und wie sie teilnehmen.' },
      { name: 'Dedizierter Service', description: 'Benannte Teams steuern Suche, Qualifizierung, Kommunikation, Terminplanung, Research-Formate und Follow-up.' },
    ],
    principlesEyebrow: 'Arbeitsprinzipien',
    principlesTitle: 'Was das Netzwerk nützlich und vertrauenswürdig macht',
    principlesDescription: 'Technologie unterstützt Suche und Koordination, doch jede wichtige Entscheidung bleibt beim Menschen.',
    principles: [
      { name: 'Relevanz zuerst', description: 'Matching beginnt mit direkter Erfahrung und der Geschäftsfrage, nicht mit einem allgemeinen Verzeichnis oder intransparentem Ranking.' },
      { name: 'Wahl der Beteiligten', description: 'Kunden wählen die benötigten Perspektiven; Experten entscheiden unabhängig über jede Gelegenheit.' },
      { name: 'Klare Grenzen', description: 'Identität, Konflikte, erlaubte Themen und Informationsaustausch werden für jedes Projekt geprüft.' },
      { name: 'Menschliche Verantwortung', description: 'Dedizierte Teams überwachen Qualität, sensible Entscheidungen, Kommunikation und Ausnahmen vom Briefing bis zum Ergebnis.' },
    ],
  },
}