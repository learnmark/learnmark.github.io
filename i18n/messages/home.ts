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
    availabilityNotice: string
    staticAvailabilityNotice: string
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
    seoTitle: 'Global Expert Network and Enterprise Consultation',
    seoDescription: 'Learnmark is building a curated global expert network that helps enterprises access firsthand knowledge for strategy, investment, innovation, and critical decisions.',
    seoCategory: 'global expert network and enterprise consultation',
    intro: {
      eyebrow: 'Global expert network for enterprise decisions',
      title: 'Global expertise for decisions that matter.',
      description: 'Learnmark is building a curated network of experienced operators, executives, and specialists worldwide. A dedicated project team helps enterprises define the question, find the right expertise, and turn firsthand insight into confident action.',
      primaryCta: 'Discuss a project',
      secondaryCta: 'How we help',
      capabilities: ['Expert interviews', 'Market intelligence', 'Due diligence', 'Strategic advisory'],
      availabilityNotice: 'We are continuously building our global network. Expert availability, geography, language, service format, and project requirements are confirmed for each engagement.',
      staticAvailabilityNotice: 'We are continuously building our global network. Expert availability and project requirements are confirmed for each engagement. This static edition is English-only.',
      modelTitle: 'How Learnmark creates value',
      modelSubtitle: 'Global expertise, tailored to each enterprise question',
      live: 'Human-led',
      layers: [
        { name: 'Understand the decision', detail: 'Business context, knowledge gaps, and the questions that matter' },
        { name: 'Find the right expertise', detail: 'Curated network search and targeted global recruitment' },
        { name: 'Engage with confidence', detail: 'Relevant screening, clear boundaries, and managed consultation' },
        { name: 'Turn insight into action', detail: 'Expert perspectives, structured outputs, and project follow-through' },
      ],
      signals: [
        { label: 'Network focus', value: 'Global & cross-sector' },
        { label: 'Client service', value: 'Dedicated team' },
        { label: 'Expert matching', value: 'Human-led' },
      ],
    },
    workWith: {
      eyebrow: 'Premium, project-led service',
      title: 'One partner from business question to expert insight.',
      description: 'Our team combines a growing global network with targeted recruitment and hands-on project support, giving enterprises a direct path to hard-to-reach knowledge without managing the search themselves.',
      links: ['Discuss a project', 'Services for clients', 'See how it works'],
      services: [
        { name: 'Clarify the decision', value: '01', description: 'Define the business question, knowledge gap, target market, and intended outcome.' },
        { name: 'Design the expert brief', value: '02', description: 'Translate the need into relevant roles, industries, geographies, and experience criteria.' },
        { name: 'Search globally', value: '03', description: 'Explore the curated network and recruit beyond it when the project requires niche expertise.' },
        { name: 'Screen for relevance', value: '04', description: 'Assess firsthand experience, availability, conflicts, and fit with the research objective.' },
        { name: 'Review the shortlist', value: '05', description: 'Present clear, relevant expert profiles so the client can choose the right perspectives.' },
        { name: 'Choose the format', value: '06', description: 'Use live interviews, written consultation, material review, or a coordinated multi-expert program.' },
        { name: 'Conduct the consultation', value: '07', description: 'Coordinate experts, scheduling, project boundaries, and the consultation experience end to end.' },
        { name: 'Apply the insight', value: '08', description: 'Organize approved outputs and follow-up so expert knowledge can inform the next decision.' },
      ],
    },
    stats: {
      eyebrow: 'Who we support',
      title: 'Built for enterprise teams making consequential decisions.',
      description: 'Learnmark helps teams add direct industry experience to the information already available inside their organization and in the market.',
      items: [
        { name: 'Validate markets, products, technologies, and growth priorities', value: 'Strategy & innovation' },
        { name: 'Test assumptions, understand risks, and deepen commercial diligence', value: 'Investment & diligence' },
        { name: 'Strengthen recommendations with firsthand operating perspectives', value: 'Consulting & advisory' },
      ],
    },
  },
  'zh-CN': {
    seoTitle: '全球专家网络与企业高端咨询',
    seoDescription: 'Learnmark 正在建设经过筛选的全球专家网络，为企业战略、投资、创新和关键决策提供一手行业经验与专属咨询服务。',
    seoCategory: '全球专家网络与企业咨询',
    intro: {
      eyebrow: '全球专家网络 · 企业高端咨询',
      title: '汇聚全球专业经验，助力企业关键决策。',
      description: 'Learnmark 正在汇聚全球资深经营者、企业高管与专业人士。专属项目团队帮助企业厘清问题、找到匹配专家，并将一手行业经验转化为更有把握的战略与行动。',
      primaryCta: '讨论项目',
      secondaryCta: '了解我们的服务',
      capabilities: ['专家访谈', '市场洞察', '商业尽调', '战略咨询'],
      availabilityNotice: '我们正在持续建设全球专家网络。专家可用性、地区、语言、服务形式和项目要求将按每次合作确认。',
      staticAvailabilityNotice: '我们正在持续建设全球专家网络。专家可用性和项目要求将按每次合作确认；当前静态版本仅提供英文。',
      modelTitle: 'Learnmark 如何创造价值',
      modelSubtitle: '让全球专业经验服务每一个企业问题',
      live: '人工主导',
      layers: [
        { name: '理解企业决策', detail: '业务背景、知识缺口与真正需要回答的问题' },
        { name: '寻找匹配专家', detail: '筛选专家网络，并针对细分需求开展全球定向招募' },
        { name: '安心开展咨询', detail: '相关性筛选、清晰边界与专人管理的咨询体验' },
        { name: '将洞察用于行动', detail: '专家观点、结构化成果与项目后续支持' },
      ],
      signals: [
        { label: '网络方向', value: '全球 · 跨行业' },
        { label: '客户服务', value: '专属项目团队' },
        { label: '专家匹配', value: '人工主导' },
      ],
    },
    workWith: {
      eyebrow: '高端、专属、项目制服务',
      title: '从企业问题到专家洞察，由同一团队全程支持。',
      description: '我们将持续增长的全球专家网络、定向招募能力与专属项目服务结合，让企业无需自行寻找人脉，也能高效获得难以触达的一手专业知识。',
      links: ['讨论项目', '企业客户服务', '查看合作流程'],
      services: [
        { name: '厘清决策问题', value: '01', description: '明确业务问题、知识缺口、目标市场和希望支持的决策。' },
        { name: '定义专家画像', value: '02', description: '将需求转化为相关职位、行业、地区和经验标准。' },
        { name: '全球寻找专家', value: '03', description: '搜索经过筛选的网络，并为细分主题开展项目级定向招募。' },
        { name: '筛选相关经验', value: '04', description: '评估一手经历、可用时间、潜在冲突和研究目标匹配度。' },
        { name: '评审专家名单', value: '05', description: '提供清晰、相关的专家资料，由客户选择最有价值的观点。' },
        { name: '选择咨询形式', value: '06', description: '可采用实时访谈、书面咨询、材料评审或多专家研究计划。' },
        { name: '开展专家咨询', value: '07', description: '协调专家、排期、项目边界和完整咨询体验。' },
        { name: '应用专家洞察', value: '08', description: '整理获批成果并支持后续，让专业知识真正进入下一步决策。' },
      ],
    },
    stats: {
      eyebrow: '我们服务的团队',
      title: '为需要作出重要决策的企业团队而设计。',
      description: 'Learnmark 帮助企业在内部资料和公开信息之外，加入来自真实行业实践的一手经验。',
      items: [
        { name: '验证市场、产品、技术与增长方向', value: '企业战略与创新' },
        { name: '检验假设、识别风险并深化商业尽调', value: '投资与尽职调查' },
        { name: '用一线经营经验强化建议与客户成果', value: '咨询与专业服务' },
      ],
    },
  },
  'zh-TW': {
    seoTitle: '全球專家網絡與企業高端顧問服務',
    seoDescription: 'Learnmark 正在建立經過篩選的全球專家網絡，為企業策略、投資、創新與關鍵決策提供第一手產業經驗及專屬顧問服務。',
    seoCategory: '全球專家網絡與企業顧問服務',
    intro: {
      eyebrow: '全球專家網絡 · 企業高端顧問服務',
      title: '匯聚全球專業經驗，助力企業關鍵決策。',
      description: 'Learnmark 正在匯聚全球資深經營者、企業高階主管與專業人士。專屬專案團隊協助企業釐清問題、找到合適專家，並將第一手產業經驗轉化為更有把握的策略與行動。',
      primaryCta: '討論專案',
      secondaryCta: '瞭解我們的服務',
      capabilities: ['專家訪談', '市場洞察', '商業盡職調查', '策略顧問服務'],
      availabilityNotice: '我們正在持續建立全球專家網絡。專家可用性、地區、語言、服務形式與專案要求將按每次合作確認。',
      staticAvailabilityNotice: '我們正在持續建立全球專家網絡。專家可用性與專案要求將按每次合作確認；目前靜態版本僅提供英文。',
      modelTitle: 'Learnmark 如何創造價值',
      modelSubtitle: '讓全球專業經驗服務每一個企業問題',
      live: '人工主導',
      layers: [
        { name: '理解企業決策', detail: '商業背景、知識缺口與真正需要回答的問題' },
        { name: '尋找合適專家', detail: '篩選專家網絡，並針對細分需求進行全球定向招募' },
        { name: '安心展開顧問服務', detail: '相關性篩選、清楚邊界與專人管理的顧問體驗' },
        { name: '將洞察用於行動', detail: '專家觀點、結構化成果與專案後續支援' },
      ],
      signals: [
        { label: '網絡方向', value: '全球 · 跨產業' },
        { label: '客戶服務', value: '專屬專案團隊' },
        { label: '專家配對', value: '人工主導' },
      ],
    },
    workWith: {
      eyebrow: '高端、專屬、專案制服務',
      title: '從企業問題到專家洞察，由同一團隊全程支援。',
      description: '我們結合持續成長的全球專家網絡、定向招募能力與專屬專案服務，讓企業無須自行尋找人脈，也能有效取得難以觸及的第一手專業知識。',
      links: ['討論專案', '企業客戶服務', '查看合作流程'],
      services: [
        { name: '釐清決策問題', value: '01', description: '明確定義商業問題、知識缺口、目標市場與希望支援的決策。' },
        { name: '定義專家輪廓', value: '02', description: '將需求轉化為相關職位、產業、地區與經驗標準。' },
        { name: '全球尋找專家', value: '03', description: '搜尋經過篩選的網絡，並為細分主題進行專案級定向招募。' },
        { name: '篩選相關經驗', value: '04', description: '評估第一手經歷、可用時間、潛在衝突與研究目標適配度。' },
        { name: '評審專家名單', value: '05', description: '提供清楚、相關的專家資料，由客戶選擇最有價值的觀點。' },
        { name: '選擇顧問形式', value: '06', description: '可採用即時訪談、書面顧問、材料審閱或多專家研究計畫。' },
        { name: '進行專家顧問服務', value: '07', description: '協調專家、排程、專案邊界與完整顧問體驗。' },
        { name: '應用專家洞察', value: '08', description: '整理獲准成果並支援後續，讓專業知識真正進入下一步決策。' },
      ],
    },
    stats: {
      eyebrow: '我們服務的團隊',
      title: '為需要做出重要決策的企業團隊而設計。',
      description: 'Learnmark 協助企業在內部資料與公開資訊之外，加入來自真實產業實務的第一手經驗。',
      items: [
        { name: '驗證市場、產品、技術與成長方向', value: '企業策略與創新' },
        { name: '檢驗假設、辨識風險並深化商業盡職調查', value: '投資與盡職調查' },
        { name: '以第一線經營經驗強化建議與客戶成果', value: '顧問與專業服務' },
      ],
    },
  },
  ja: {
    seoTitle: 'グローバル専門家ネットワークと法人向けコンサルテーション',
    seoDescription: 'Learnmark は厳選されたグローバル専門家ネットワークを構築し、企業の戦略、投資、イノベーション、重要な意思決定に一次的な知見を提供します。',
    seoCategory: 'グローバル専門家ネットワークと法人向けコンサルテーション',
    intro: {
      eyebrow: 'グローバル専門家ネットワーク · 法人向け高度コンサルテーション',
      title: '重要な意思決定に、世界の専門知識を。',
      description: 'Learnmark は世界の経験豊富な実務家、経営幹部、専門職によるネットワークを構築しています。専任チームが企業の問いを明確にし、適切な専門家を見つけ、一次的な知見を自信ある行動へつなげます。',
      primaryCta: '案件を相談',
      secondaryCta: 'サービスを見る',
      capabilities: ['専門家インタビュー', '市場インテリジェンス', 'デューデリジェンス', '戦略アドバイザリー'],
      availabilityNotice: 'グローバルネットワークは継続的に拡充しています。専門家の対応可否、地域、言語、形式、案件要件は案件ごとに確認します。',
      staticAvailabilityNotice: 'グローバルネットワークは継続的に拡充しています。専門家の対応可否と案件要件は個別に確認します。静的版は英語のみです。',
      modelTitle: 'Learnmark が生み出す価値',
      modelSubtitle: '世界の専門知識を企業ごとの問いに合わせて提供',
      live: '人が主導',
      layers: [
        { name: '意思決定を理解', detail: '事業背景、知識ギャップ、本当に答えるべき問い' },
        { name: '適切な専門家を発見', detail: '厳選ネットワークと世界規模の個別リクルーティング' },
        { name: '安心して対話', detail: '関連性の確認、明確な境界、専任チームによる運営' },
        { name: '知見を行動へ', detail: '専門家の視点、構造化された成果、プロジェクト支援' },
      ],
      signals: [
        { label: 'ネットワーク方針', value: 'グローバル・業界横断' },
        { label: 'クライアントサービス', value: '専任チーム' },
        { label: '専門家マッチング', value: '人が主導' },
      ],
    },
    workWith: {
      eyebrow: '高度で専任のプロジェクトサービス',
      title: '事業上の問いから専門家の知見まで、一つのチームが支援。',
      description: '成長するグローバルネットワーク、個別リクルーティング、専任プロジェクト支援を組み合わせ、企業が自ら人脈を探さずに希少な一次知識へアクセスできるようにします。',
      links: ['案件を相談', '法人向けサービス', 'ご利用の流れ'],
      services: [
        { name: '意思決定を明確化', value: '01', description: '事業上の問い、知識ギャップ、対象市場、期待する成果を定義します。' },
        { name: '専門家像を設計', value: '02', description: '必要な役職、業界、地域、経験基準へ依頼を落とし込みます。' },
        { name: '世界から探索', value: '03', description: '厳選ネットワークを検索し、ニッチなテーマでは案件別に採用します。' },
        { name: '関連経験を確認', value: '04', description: '一次経験、対応可能性、潜在的な利害関係、目的との適合性を確認します。' },
        { name: '候補をレビュー', value: '05', description: '明確で関連性の高いプロフィールを提示し、最適な視点を選べるようにします。' },
        { name: '形式を選択', value: '06', description: 'ライブ面談、書面相談、資料レビュー、複数専門家プログラムから選びます。' },
        { name: '相談を実施', value: '07', description: '専門家、日程、案件境界、相談体験を一貫して調整します。' },
        { name: '知見を活用', value: '08', description: '承認済み成果とフォローアップを整理し、次の意思決定へつなげます。' },
      ],
    },
    stats: {
      eyebrow: '支援するチーム',
      title: '重要な意思決定を担う企業チームのために。',
      description: 'Learnmark は社内情報や公開情報に、現場を知る専門家の一次経験を加えます。',
      items: [
        { name: '市場、製品、技術、成長方針を検証', value: '企業戦略・イノベーション' },
        { name: '仮説を検証し、リスクを理解し、商業調査を深化', value: '投資・デューデリジェンス' },
        { name: '現場視点で提言とクライアント成果を強化', value: 'コンサルティング・専門サービス' },
      ],
    },
  },
  fr: {
    seoTitle: 'Réseau mondial d’experts et conseil aux entreprises',
    seoDescription: 'Learnmark développe un réseau mondial d’experts sélectionnés pour apporter aux entreprises une expérience directe au service de la stratégie, de l’investissement, de l’innovation et des décisions critiques.',
    seoCategory: 'réseau mondial d’experts et conseil aux entreprises',
    intro: {
      eyebrow: 'Réseau mondial d’experts · Conseil premium aux entreprises',
      title: 'L’expertise mondiale au service des décisions qui comptent.',
      description: 'Learnmark développe un réseau de dirigeants, d’opérationnels et de spécialistes expérimentés dans le monde entier. Une équipe dédiée aide les entreprises à préciser leur question, trouver la bonne expertise et transformer une expérience directe en action assurée.',
      primaryCta: 'Discuter d’un projet',
      secondaryCta: 'Découvrir nos services',
      capabilities: ['Entretiens d’experts', 'Intelligence de marché', 'Due diligence', 'Conseil stratégique'],
      availabilityNotice: 'Nous développons continuellement notre réseau mondial. La disponibilité, la région, la langue, le format et les exigences sont confirmés pour chaque mission.',
      staticAvailabilityNotice: 'Nous développons continuellement notre réseau mondial. La disponibilité et les exigences sont confirmées pour chaque mission. Cette édition statique est uniquement en anglais.',
      modelTitle: 'Comment Learnmark crée de la valeur',
      modelSubtitle: 'Une expertise mondiale adaptée à chaque question d’entreprise',
      live: 'Piloté par l’humain',
      layers: [
        { name: 'Comprendre la décision', detail: 'Contexte métier, manque d’information et questions essentielles' },
        { name: 'Trouver la bonne expertise', detail: 'Recherche dans le réseau et recrutement mondial ciblé' },
        { name: 'Échanger en confiance', detail: 'Qualification pertinente, limites claires et consultation pilotée' },
        { name: 'Transformer l’insight en action', detail: 'Perspectives d’experts, livrables structurés et suivi de projet' },
      ],
      signals: [
        { label: 'Orientation du réseau', value: 'Mondial et multisectoriel' },
        { label: 'Service client', value: 'Équipe dédiée' },
        { label: 'Sélection des experts', value: 'Pilotée par l’humain' },
      ],
    },
    workWith: {
      eyebrow: 'Un service premium, dédié et piloté par projet',
      title: 'Un partenaire unique, de la question métier à l’insight expert.',
      description: 'Nous associons un réseau mondial en croissance, un recrutement ciblé et un accompagnement dédié afin que les entreprises accèdent à des connaissances difficiles à atteindre sans gérer elles-mêmes la recherche.',
      links: ['Discuter d’un projet', 'Services aux entreprises', 'Voir notre méthode'],
      services: [
        { name: 'Clarifier la décision', value: '01', description: 'Définir la question, le manque d’information, le marché visé et le résultat attendu.' },
        { name: 'Concevoir le profil expert', value: '02', description: 'Traduire le besoin en fonctions, secteurs, régions et critères d’expérience.' },
        { name: 'Rechercher mondialement', value: '03', description: 'Explorer le réseau sélectionné et recruter spécifiquement pour les expertises rares.' },
        { name: 'Qualifier la pertinence', value: '04', description: 'Évaluer expérience directe, disponibilité, conflits potentiels et adéquation avec l’objectif.' },
        { name: 'Examiner la sélection', value: '05', description: 'Présenter des profils clairs et pertinents afin de choisir les meilleures perspectives.' },
        { name: 'Choisir le format', value: '06', description: 'Entretiens en direct, consultation écrite, revue de supports ou programme multi-experts.' },
        { name: 'Mener la consultation', value: '07', description: 'Coordonner experts, calendrier, limites du projet et expérience de consultation.' },
        { name: 'Appliquer les enseignements', value: '08', description: 'Organiser les résultats approuvés et le suivi pour éclairer la prochaine décision.' },
      ],
    },
    stats: {
      eyebrow: 'Équipes accompagnées',
      title: 'Conçu pour les équipes qui prennent des décisions majeures.',
      description: 'Learnmark complète les données internes et publiques par l’expérience directe de professionnels qui connaissent le terrain.',
      items: [
        { name: 'Valider marchés, produits, technologies et priorités de croissance', value: 'Stratégie et innovation' },
        { name: 'Tester les hypothèses, comprendre les risques et approfondir la due diligence', value: 'Investissement et due diligence' },
        { name: 'Renforcer les recommandations par des perspectives opérationnelles directes', value: 'Conseil et services professionnels' },
      ],
    },
  },
  de: {
    seoTitle: 'Globales Expertennetzwerk und Unternehmensberatung',
    seoDescription: 'Learnmark baut ein kuratiertes globales Expertennetzwerk auf, das Unternehmen mit unmittelbarer Erfahrung für Strategie, Investitionen, Innovation und wichtige Entscheidungen unterstützt.',
    seoCategory: 'globales Expertennetzwerk und Unternehmensberatung',
    intro: {
      eyebrow: 'Globales Expertennetzwerk · Hochwertige Unternehmensberatung',
      title: 'Globale Expertise für Entscheidungen, die zählen.',
      description: 'Learnmark baut ein Netzwerk erfahrener Führungskräfte, Praktiker und Spezialisten weltweit auf. Ein festes Projektteam hilft Unternehmen, die Frage zu schärfen, passende Expertise zu finden und unmittelbare Einblicke in sicheres Handeln zu übersetzen.',
      primaryCta: 'Projekt besprechen',
      secondaryCta: 'Unsere Leistungen',
      capabilities: ['Experteninterviews', 'Marktintelligenz', 'Due Diligence', 'Strategische Beratung'],
      availabilityNotice: 'Wir bauen unser globales Netzwerk kontinuierlich aus. Verfügbarkeit, Region, Sprache, Format und Projektanforderungen werden je Auftrag bestätigt.',
      staticAvailabilityNotice: 'Wir bauen unser globales Netzwerk kontinuierlich aus. Verfügbarkeit und Projektanforderungen werden je Auftrag bestätigt. Die statische Ausgabe ist nur englisch.',
      modelTitle: 'So schafft Learnmark Mehrwert',
      modelSubtitle: 'Globale Expertise, zugeschnitten auf jede Unternehmensfrage',
      live: 'Menschlich geführt',
      layers: [
        { name: 'Entscheidung verstehen', detail: 'Geschäftskontext, Wissenslücken und die entscheidenden Fragen' },
        { name: 'Passende Expertise finden', detail: 'Kuratiertes Netzwerk und gezielte weltweite Rekrutierung' },
        { name: 'Vertrauensvoll beraten', detail: 'Relevanzprüfung, klare Grenzen und betreute Beratung' },
        { name: 'Erkenntnisse anwenden', detail: 'Expertenperspektiven, strukturierte Ergebnisse und Projektbegleitung' },
      ],
      signals: [
        { label: 'Netzwerkfokus', value: 'Global und branchenübergreifend' },
        { label: 'Kundenservice', value: 'Festes Projektteam' },
        { label: 'Expertenauswahl', value: 'Menschlich geführt' },
      ],
    },
    workWith: {
      eyebrow: 'Hochwertiger, persönlicher Projektservice',
      title: 'Ein Partner von der Geschäftsfrage bis zur Experteneinsicht.',
      description: 'Wir verbinden ein wachsendes globales Netzwerk, gezielte Rekrutierung und persönliche Projektbegleitung, damit Unternehmen schwer erreichbares Wissen erhalten, ohne die Suche selbst zu steuern.',
      links: ['Projekt besprechen', 'Services für Unternehmen', 'So funktioniert es'],
      services: [
        { name: 'Entscheidung klären', value: '01', description: 'Geschäftsfrage, Wissenslücke, Zielmarkt und gewünschtes Ergebnis definieren.' },
        { name: 'Expertenprofil entwerfen', value: '02', description: 'Den Bedarf in Rollen, Branchen, Regionen und Erfahrungskriterien übersetzen.' },
        { name: 'Weltweit suchen', value: '03', description: 'Das kuratierte Netzwerk durchsuchen und für seltene Expertise gezielt rekrutieren.' },
        { name: 'Relevanz qualifizieren', value: '04', description: 'Unmittelbare Erfahrung, Verfügbarkeit, mögliche Konflikte und Zielpassung bewerten.' },
        { name: 'Auswahl prüfen', value: '05', description: 'Klare, relevante Profile vorlegen, damit die wertvollsten Perspektiven gewählt werden können.' },
        { name: 'Format wählen', value: '06', description: 'Live-Interview, schriftliche Beratung, Unterlagenprüfung oder Multi-Experten-Programm.' },
        { name: 'Beratung durchführen', value: '07', description: 'Fachleute, Termine, Projektgrenzen und Beratungserlebnis durchgängig koordinieren.' },
        { name: 'Erkenntnisse nutzen', value: '08', description: 'Freigegebene Ergebnisse und Folgeschritte für die nächste Entscheidung strukturieren.' },
      ],
    },
    stats: {
      eyebrow: 'Für wen wir arbeiten',
      title: 'Für Unternehmensteams mit wichtigen Entscheidungen.',
      description: 'Learnmark ergänzt interne und öffentliche Informationen um unmittelbare Erfahrung von Menschen, die Märkte und Betriebe aus der Praxis kennen.',
      items: [
        { name: 'Märkte, Produkte, Technologien und Wachstumsprioritäten validieren', value: 'Strategie und Innovation' },
        { name: 'Annahmen testen, Risiken verstehen und kommerzielle Prüfung vertiefen', value: 'Investition und Due Diligence' },
        { name: 'Empfehlungen mit unmittelbarer Betriebserfahrung stärken', value: 'Beratung und Professional Services' },
      ],
    },
  },
}
