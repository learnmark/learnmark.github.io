import type { Locale } from '../config'

export const contactInterestValues = ['client-project', 'expert-network', 'institutional-partnership', 'compliance-privacy', 'pilot-eligibility'] as const
export const contactTimelineValues = ['as-soon-as-possible', 'within-two-weeks', 'this-month', 'exploring-options'] as const

export type ContactInterest = (typeof contactInterestValues)[number]
export type ContactTimeline = (typeof contactTimelineValues)[number]

export type ContactMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  eyebrow: string
  title: string
  description: string
  focusAreas: string[]
  highlights: Array<{ name: string; description: string }>
  formEyebrow: string
  formTitle: string
  firstName: string
  lastName: string
  company: string
  email: string
  interest: string
  timeline: string
  interestOptions: Record<ContactInterest, string>
  timelineOptions: Record<ContactTimeline, string>
  messageLabel: string
  messagePlaceholder: string
  consentPrefix: string
  privacyPolicy: string
  consentSuffix: string
  submit: string
  submitting: string
  replyTime: string
  success: string
  error: string
}

export const contactMessages: Record<Locale, ContactMessages> = {
  en: {
    seoTitle: 'Contact Learnmark Expert Consultation Services',
    seoDescription: 'Route a client project, expert network request, institutional partnership, compliance question, or pilot inquiry to the right Learnmark team.',
    seoKeywords: ['start expert consultation', 'join expert network', 'expert research partnership', 'expert network compliance', 'managed consultation pilot'],
    eyebrow: 'Contact Learnmark',
    title: 'Start with the right conversation.',
    description: 'Tell us whether you are bringing a client project, expert background, partnership, compliance question, or pilot inquiry. Keep this first message high-level and do not include confidential, proprietary, or material non-public information.',
    focusAreas: ['Client projects', 'Expert network', 'Institutional partnerships', 'Compliance and privacy', 'Pilot access'],
    highlights: [
      { name: 'Role-based routing', description: 'Client, expert, partner, and compliance requests follow different next steps and information boundaries.' },
      { name: 'Safe initial intake', description: 'A high-level description is enough to assess fit without collecting identity documents, bank details, or restricted project content.' },
      { name: 'Clear next action', description: 'The responsible team will confirm what can be discussed, what information is needed, and how the request should proceed.' },
    ],
    formEyebrow: 'Request routing',
    formTitle: 'Tell us why you are here.',
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Organization or professional profile',
    email: 'Work email',
    interest: 'I am contacting Learnmark about',
    timeline: 'Preferred timing',
    interestOptions: {
      'client-project': 'A client consultation project',
      'expert-network': 'Joining the expert network',
      'institutional-partnership': 'An institutional partnership',
      'compliance-privacy': 'Compliance, privacy, or data processing',
      'pilot-eligibility': 'Pilot eligibility',
    },
    timelineOptions: {
      'as-soon-as-possible': 'As soon as possible',
      'within-two-weeks': 'Within 2 weeks',
      'this-month': 'This month',
      'exploring-options': 'Exploring options',
    },
    messageLabel: 'High-level context',
    messagePlaceholder: 'Describe the request, relevant industry or professional background, geography, and timing. Do not include confidential information, identity documents, bank details, or material non-public information.',
    consentPrefix: 'I understand that Learnmark will use this information to route, evaluate, and respond to my request. Review our',
    privacyPolicy: 'Privacy Policy',
    consentSuffix: '.',
    submit: 'Send request',
    submitting: 'Submitting...',
    replyTime: 'We will review the request and identify the appropriate next step.',
    success: 'Thank you. Your request has been routed to the Learnmark team.',
    error: 'Something went wrong. Please try again later or email hello@learnmark.com.',
  },
  'zh-CN': {
    seoTitle: '联系 Learnmark 专家咨询服务',
    seoDescription: '将客户项目、专家网络申请、机构合作、合规问题或试点咨询转交给合适的 Learnmark 团队。',
    seoKeywords: ['发起专家咨询', '加入专家网络', '专家研究合作', '专家网络合规', '托管咨询试点'],
    eyebrow: '联系 Learnmark',
    title: '从合适的对话开始。',
    description: '请说明您要讨论的是客户项目、专家经历、机构合作、合规问题还是试点申请。首次留言请保持高层概述，不要包含机密、专有或重大非公开信息。',
    focusAreas: ['客户项目', '专家网络', '机构合作', '合规与隐私', '试点资格'],
    highlights: [
      { name: '按角色分流', description: '客户、专家、合作伙伴及合规请求采用不同的下一步和信息边界。' },
      { name: '安全初步受理', description: '高层描述足以判断适配度，无需收集身份证件、银行资料或受限项目内容。' },
      { name: '明确下一步', description: '负责团队会确认可讨论范围、所需信息及请求应如何继续。' },
    ],
    formEyebrow: '请求分流',
    formTitle: '请说明您的来意。',
    firstName: '名字',
    lastName: '姓氏',
    company: '组织或专业档案',
    email: '工作邮箱',
    interest: '我想联系 Learnmark 讨论',
    timeline: '期望时间',
    interestOptions: {
      'client-project': '客户专家咨询项目',
      'expert-network': '加入专家网络',
      'institutional-partnership': '机构合作',
      'compliance-privacy': '合规、隐私或数据处理',
      'pilot-eligibility': '试点资格',
    },
    timelineOptions: {
      'as-soon-as-possible': '尽快',
      'within-two-weeks': '两周内',
      'this-month': '本月',
      'exploring-options': '正在了解方案',
    },
    messageLabel: '高层背景',
    messagePlaceholder: '请说明请求、相关行业或专业背景、地区与时间。不要包含机密信息、身份证件、银行资料或重大非公开信息。',
    consentPrefix: '我理解 Learnmark 将使用这些信息分流、评估并回复我的请求。请查看我们的',
    privacyPolicy: '隐私政策',
    consentSuffix: '。',
    submit: '提交请求',
    submitting: '提交中...',
    replyTime: '我们会审核请求并确认合适的下一步。',
    success: '谢谢，您的请求已转交给 Learnmark 负责团队。',
    error: '出现问题，请稍后重试或发送邮件至 hello@learnmark.com。',
  },
  'zh-TW': {
    seoTitle: '聯絡 Learnmark 專家顧問服務',
    seoDescription: '將客戶專案、專家網絡申請、機構合作、合規問題或試點諮詢轉交給合適的 Learnmark 團隊。',
    seoKeywords: ['啟動專家顧問專案', '加入專家網絡', '專家研究合作', '專家網絡合規', '託管顧問試點'],
    eyebrow: '聯絡 Learnmark',
    title: '從合適的對話開始。',
    description: '請說明您要討論的是客戶專案、專家經歷、機構合作、合規問題或試點申請。首次留言請保持高層概述，不要包含機密、專有或重大非公開資訊。',
    focusAreas: ['客戶專案', '專家網絡', '機構合作', '合規與隱私', '試點資格'],
    highlights: [
      { name: '按角色分流', description: '客戶、專家、合作夥伴與合規請求採用不同的下一步與資訊邊界。' },
      { name: '安全初步受理', description: '高層描述足以判斷適配度，無須收集身分證件、銀行資料或受限專案內容。' },
      { name: '明確下一步', description: '負責團隊會確認可討論範圍、所需資訊與請求應如何繼續。' },
    ],
    formEyebrow: '請求分流',
    formTitle: '請說明您的來意。',
    firstName: '名字',
    lastName: '姓氏',
    company: '組織或專業檔案',
    email: '工作電子郵件',
    interest: '我想聯絡 Learnmark 討論',
    timeline: '期望時間',
    interestOptions: {
      'client-project': '客戶專家顧問專案',
      'expert-network': '加入專家網絡',
      'institutional-partnership': '機構合作',
      'compliance-privacy': '合規、隱私或資料處理',
      'pilot-eligibility': '試點資格',
    },
    timelineOptions: {
      'as-soon-as-possible': '儘快',
      'within-two-weeks': '兩週內',
      'this-month': '本月',
      'exploring-options': '正在瞭解方案',
    },
    messageLabel: '高層背景',
    messagePlaceholder: '請說明請求、相關產業或專業背景、地區與時間。不要包含機密資訊、身分證件、銀行資料或重大非公開資訊。',
    consentPrefix: '我瞭解 Learnmark 將使用這些資訊分流、評估並回覆我的請求。請查看我們的',
    privacyPolicy: '隱私權政策',
    consentSuffix: '。',
    submit: '提交請求',
    submitting: '提交中...',
    replyTime: '我們會審核請求並確認合適的下一步。',
    success: '謝謝，您的請求已轉交給 Learnmark 負責團隊。',
    error: '發生問題，請稍後再試或寄信至 hello@learnmark.com。',
  },
  ja: {
    seoTitle: 'Learnmark 専門家コンサルテーションへのお問い合わせ',
    seoDescription: 'クライアント案件、専門家ネットワーク、法人提携、コンプライアンス、パイロット利用について適切な Learnmark チームへお問い合わせいただけます。',
    seoKeywords: ['専門家コンサルテーション開始', '専門家ネットワーク参加', '専門家調査パートナーシップ', '専門家ネットワークのコンプライアンス', 'マネージド相談パイロット'],
    eyebrow: 'Learnmark へのお問い合わせ',
    title: '適切な対話から始めましょう。',
    description: 'クライアント案件、専門家としての経歴、提携、コンプライアンス、パイロット利用のいずれに関するご相談かをお知らせください。最初のご連絡には機密、専有、重要な未公開情報を含めないでください。',
    focusAreas: ['クライアント案件', '専門家ネットワーク', '法人・機関提携', 'コンプライアンスとプライバシー', 'パイロット利用'],
    highlights: [
      { name: '役割別の振り分け', description: 'クライアント、専門家、提携、コンプライアンスの依頼には、それぞれ異なる次の手順と情報境界があります。' },
      { name: '安全な初期受付', description: '本人確認書類、銀行情報、制限された案件内容を収集せず、概要だけで適合性を確認します。' },
      { name: '明確な次の行動', description: '担当チームが、相談可能な範囲、必要な情報、今後の進め方を確認します。' },
    ],
    formEyebrow: 'お問い合わせの振り分け',
    formTitle: 'お問い合わせの目的をお知らせください。',
    firstName: '名',
    lastName: '姓',
    company: '組織名または専門プロフィール',
    email: '勤務先メールアドレス',
    interest: 'お問い合わせ内容',
    timeline: '希望時期',
    interestOptions: {
      'client-project': 'クライアント向け専門家プロジェクト',
      'expert-network': '専門家ネットワークへの参加',
      'institutional-partnership': '法人・機関パートナーシップ',
      'compliance-privacy': 'コンプライアンス、プライバシー、データ処理',
      'pilot-eligibility': 'パイロット利用資格',
    },
    timelineOptions: {
      'as-soon-as-possible': 'できるだけ早く',
      'within-two-weeks': '2 週間以内',
      'this-month': '今月中',
      'exploring-options': '情報収集中',
    },
    messageLabel: '概要',
    messagePlaceholder: '依頼内容、関連業界または職歴、地域、時期をご記入ください。機密情報、本人確認書類、銀行情報、重要な未公開情報は含めないでください。',
    consentPrefix: 'Learnmark がこの情報を振り分け、評価し、回答するために利用することを理解しました。',
    privacyPolicy: 'プライバシーポリシー',
    consentSuffix: 'をご覧ください。',
    submit: '依頼を送信',
    submitting: '送信中...',
    replyTime: '内容を確認し、適切な次の手順をご案内します。',
    success: 'ありがとうございます。お問い合わせを Learnmark の担当チームへ振り分けました。',
    error: '問題が発生しました。後ほど再試行するか、hello@learnmark.com へメールしてください。',
  },
  fr: {
    seoTitle: 'Contacter les services de consultation Learnmark',
    seoDescription: 'Orientez un projet client, une candidature expert, un partenariat, une question de conformité ou une demande pilote vers la bonne équipe Learnmark.',
    seoKeywords: ['démarrer une consultation d’experts', 'rejoindre un réseau d’experts', 'partenariat de recherche', 'conformité réseau d’experts', 'pilote de consultation'],
    eyebrow: 'Contacter Learnmark',
    title: 'Commencez par la bonne conversation.',
    description: 'Indiquez si votre demande concerne un projet client, un parcours d’expert, un partenariat, la conformité ou un pilote. Restez général et ne transmettez aucune information confidentielle, propriétaire ou importante non publique.',
    focusAreas: ['Projets clients', 'Réseau d’experts', 'Partenariats institutionnels', 'Conformité et confidentialité', 'Accès pilote'],
    highlights: [
      { name: 'Orientation par rôle', description: 'Les demandes client, expert, partenaire et conformité suivent des étapes et des limites d’information différentes.' },
      { name: 'Premier contact sûr', description: 'Un aperçu suffit pour évaluer l’adéquation sans pièce d’identité, coordonnées bancaires ni contenu restreint.' },
      { name: 'Prochaine action claire', description: 'L’équipe responsable précisera ce qui peut être discuté, les informations nécessaires et la suite adaptée.' },
    ],
    formEyebrow: 'Orientation de la demande',
    formTitle: 'Dites-nous pourquoi vous nous contactez.',
    firstName: 'Prénom',
    lastName: 'Nom',
    company: 'Organisation ou profil professionnel',
    email: 'E-mail professionnel',
    interest: 'Je contacte Learnmark au sujet de',
    timeline: 'Échéance souhaitée',
    interestOptions: {
      'client-project': 'Un projet client de consultation',
      'expert-network': 'Rejoindre le réseau d’experts',
      'institutional-partnership': 'Un partenariat institutionnel',
      'compliance-privacy': 'Conformité, confidentialité ou traitement des données',
      'pilot-eligibility': 'Éligibilité au pilote',
    },
    timelineOptions: {
      'as-soon-as-possible': 'Dès que possible',
      'within-two-weeks': 'Sous deux semaines',
      'this-month': 'Ce mois-ci',
      'exploring-options': 'Exploration des options',
    },
    messageLabel: 'Contexte général',
    messagePlaceholder: 'Décrivez la demande, le secteur ou parcours pertinent, la zone géographique et le calendrier. N’incluez aucune information confidentielle, pièce d’identité, donnée bancaire ou information importante non publique.',
    consentPrefix: 'Je comprends que Learnmark utilisera ces informations pour orienter, évaluer et traiter ma demande. Consultez notre',
    privacyPolicy: 'Politique de confidentialité',
    consentSuffix: '.',
    submit: 'Transmettre la demande',
    submitting: 'Envoi...',
    replyTime: 'Nous examinerons la demande et identifierons la prochaine étape adaptée.',
    success: 'Merci. Votre demande a été orientée vers l’équipe Learnmark compétente.',
    error: 'Un problème est survenu. Réessayez plus tard ou écrivez à hello@learnmark.com.',
  },
  de: {
    seoTitle: 'Learnmark Expertenberatung kontaktieren',
    seoDescription: 'Leiten Sie Kundenprojekte, Expertenanfragen, institutionelle Partnerschaften, Compliance-Fragen oder Pilotanfragen an das passende Learnmark-Team.',
    seoKeywords: ['Expertenberatung starten', 'Expertennetzwerk beitreten', 'Forschungspartnerschaft', 'Compliance Expertennetzwerk', 'Pilotprogramm Expertenberatung'],
    eyebrow: 'Learnmark kontaktieren',
    title: 'Beginnen Sie mit dem richtigen Gespräch.',
    description: 'Sagen Sie uns, ob es um ein Kundenprojekt, Ihre Expertenlaufbahn, eine Partnerschaft, Compliance oder ein Pilotprogramm geht. Teilen Sie zunächst nur einen Überblick ohne vertrauliche, geschützte oder wesentliche nicht öffentliche Informationen.',
    focusAreas: ['Kundenprojekte', 'Expertennetzwerk', 'Institutionelle Partnerschaften', 'Compliance und Datenschutz', 'Pilotzugang'],
    highlights: [
      { name: 'Rollenbasierte Zuordnung', description: 'Kunden-, Experten-, Partner- und Compliance-Anfragen haben unterschiedliche nächste Schritte und Informationsgrenzen.' },
      { name: 'Sichere Erstaufnahme', description: 'Ein Überblick genügt zur Einordnung, ohne Ausweis, Bankdaten oder eingeschränkte Projektinhalte zu erfassen.' },
      { name: 'Klarer nächster Schritt', description: 'Das zuständige Team klärt den Gesprächsrahmen, benötigte Informationen und den passenden weiteren Weg.' },
    ],
    formEyebrow: 'Anfragezuordnung',
    formTitle: 'Worum geht es bei Ihrer Anfrage?',
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Organisation oder berufliches Profil',
    email: 'Geschäftliche E-Mail',
    interest: 'Ich kontaktiere Learnmark wegen',
    timeline: 'Gewünschter Zeitrahmen',
    interestOptions: {
      'client-project': 'Ein Kundenprojekt zur Expertenberatung',
      'expert-network': 'Dem Expertennetzwerk beitreten',
      'institutional-partnership': 'Eine institutionelle Partnerschaft',
      'compliance-privacy': 'Compliance, Datenschutz oder Datenverarbeitung',
      'pilot-eligibility': 'Eignung für das Pilotprogramm',
    },
    timelineOptions: {
      'as-soon-as-possible': 'So bald wie möglich',
      'within-two-weeks': 'Innerhalb von zwei Wochen',
      'this-month': 'Diesen Monat',
      'exploring-options': 'Optionen werden geprüft',
    },
    messageLabel: 'Allgemeiner Kontext',
    messagePlaceholder: 'Beschreiben Sie Anfrage, relevante Branche oder Berufserfahrung, Region und Zeitrahmen. Keine vertraulichen Informationen, Ausweise, Bankdaten oder wesentlichen nicht öffentlichen Informationen.',
    consentPrefix: 'Ich verstehe, dass Learnmark diese Angaben zur Zuordnung, Bewertung und Beantwortung meiner Anfrage verwendet. Lesen Sie unsere',
    privacyPolicy: 'Datenschutzerklärung',
    consentSuffix: '.',
    submit: 'Anfrage übermitteln',
    submitting: 'Wird gesendet...',
    replyTime: 'Wir prüfen die Anfrage und bestimmen den passenden nächsten Schritt.',
    success: 'Vielen Dank. Ihre Anfrage wurde dem zuständigen Learnmark-Team zugeordnet.',
    error: 'Etwas ist schiefgelaufen. Versuchen Sie es später erneut oder schreiben Sie an hello@learnmark.com.',
  },
}