import type { Locale } from '../config'

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
  interestOptions: string[]
  timelineOptions: string[]
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
    seoTitle: 'Start an Expert Consultation Project',
    seoDescription: 'Tell Learnmark about your research question, target expert profiles, and timing. Our team will help scope and manage the expert consultation project.',
    seoKeywords: ['start expert consultation', 'expert network project', 'primary research request', 'find industry experts', 'expert interview request'],
    eyebrow: 'Start a project',
    title: 'Tell us what your team needs to understand.',
    description: 'Share an initial research question, the experience you want to reach, and your timing. A Learnmark project team will follow up to refine the brief and plan the expert search.',
    focusAreas: ['Expert calls', 'Market research', 'Due diligence', 'Customer insight', 'Value chains', 'Strategic research'],
    highlights: [
      { name: 'Brief development', description: 'We help turn the business question into target profiles, clear exclusions, and focused screening criteria.' },
      { name: 'Human-led matching', description: 'Our team searches the maintained network and conducts targeted outreach when the project needs new expertise.' },
      { name: 'Managed engagement', description: 'We coordinate screening, conflicts, expert selection, compensation, scheduling, and project follow-through.' },
    ],
    formEyebrow: 'Initial project brief',
    formTitle: 'Start with what you know.',
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Company',
    email: 'Work email',
    interest: 'Research need',
    timeline: 'When do you need the first consultation?',
    interestOptions: ['Expert consultation', 'Market research', 'Commercial due diligence', 'Technical due diligence', 'Customer or channel research', 'Strategic research', 'Other'],
    timelineOptions: ['As soon as possible', 'Within 2 weeks', 'This month', 'Exploring options'],
    messageLabel: 'Project question and target expertise',
    messagePlaceholder: 'Describe the decision or question, relevant industries or companies, target roles, geography, exclusions, and any timing constraints.',
    consentPrefix: 'I understand that Learnmark will use the information submitted to evaluate and respond to this project request. Review our',
    privacyPolicy: 'Privacy Policy',
    consentSuffix: '.',
    submit: 'Submit project brief',
    submitting: 'Submitting...',
    replyTime: 'Our team will review the brief and follow up with next steps.',
    success: 'Thank you. Your initial project brief has been sent successfully.',
    error: 'Something went wrong. Please try again later or email hello@learnmark.com.',
  },
  'zh-CN': {
    seoTitle: '联系我们',
    seoDescription: '联系 Learnmark，洽谈 Shopify 商店开发、自定义主题、AI 咨询、云现代化、平台工程与软件交付需求。',
    seoKeywords: ['联系 Learnmark', 'Shopify 开发咨询', 'AI 咨询联系', '云咨询联系', '软件咨询需求'],
    eyebrow: '联系 Learnmark',
    title: '规划您的下一个 Shopify、AI 或云项目。',
    description: '告诉我们您正在构建的商店、产品或平台。我们将帮助厘清客户体验、技术路径和最合适的下一步沟通。',
    focusAreas: ['Shopify 商店', '自定义主题', 'AI 战略', 'LLM 集成', '云现代化', '平台工程'],
    highlights: [
      { name: '聚焦式探索', description: '我们从商务或产品目标、客户旅程、约束、风险和需求背后的交付背景开始。' },
      { name: '务实回应', description: '您将收到简洁的回复，包含下一步、匹配度，以及产品或平台讨论的合适路径。' },
      { name: '生产思维', description: 'Shopify、AI、云和交付工作始终围绕可用性、可靠性、安全、性能和可维护性展开。' },
    ],
    formEyebrow: '开始对话',
    formTitle: '告诉我们您的需求。',
    firstName: '名字',
    lastName: '姓氏',
    company: '公司',
    email: '工作邮箱',
    interest: '项目重点',
    timeline: '时间计划',
    interestOptions: ['Shopify 商店开发', 'AI 咨询', '云咨询', '平台工程', 'API 与 AI 网关', 'llmxy', 'LetScrum', '其他'],
    timelineOptions: ['本季度', '下季度', '正在了解方案', '紧急支持'],
    messageLabel: '还有哪些信息需要我们了解？',
    messagePlaceholder: '请简要描述店面、产品、平台、团队或架构挑战。',
    consentPrefix: '我同意接收 Learnmark 的通信信息，并可随时退订。请查看我们的',
    privacyPolicy: '隐私政策',
    consentSuffix: '。',
    submit: '发送请求',
    submitting: '提交中...',
    replyTime: '我们通常会在 1 个工作日内回复。',
    success: '谢谢，您的消息已成功发送。',
    error: '出现问题，请稍后重试或发送邮件至 hello@learnmark.com。',
  },
  'zh-TW': {
    seoTitle: '聯絡我們',
    seoDescription: '聯絡 Learnmark，洽談 Shopify 商店開發、自訂佈景主題、AI 顧問服務、雲端現代化、平台工程與軟體交付需求。',
    seoKeywords: ['聯絡 Learnmark', 'Shopify 開發諮詢', 'AI 顧問聯絡', '雲端顧問聯絡', '軟體顧問需求'],
    eyebrow: '聯絡 Learnmark',
    title: '規劃您的下一個 Shopify、AI 或雲端專案。',
    description: '告訴我們您正在打造的商店、產品或平台。我們將協助釐清客戶體驗、技術路徑與最合適的下一步溝通。',
    focusAreas: ['Shopify 商店', '自訂佈景主題', 'AI 策略', 'LLM 整合', '雲端現代化', '平台工程'],
    highlights: [
      { name: '聚焦式探索', description: '我們從商務或產品目標、客戶旅程、限制、風險與需求背後的交付背景開始。' },
      { name: '務實回應', description: '您將收到精簡的回覆，包含下一步、適合度，以及產品或平台討論的合適路徑。' },
      { name: '正式環境思維', description: 'Shopify、AI、雲端與交付工作始終圍繞可用性、可靠性、安全、效能與可維護性展開。' },
    ],
    formEyebrow: '開始對話',
    formTitle: '告訴我們您的需求。',
    firstName: '名字',
    lastName: '姓氏',
    company: '公司',
    email: '工作電子郵件',
    interest: '專案重點',
    timeline: '時間規劃',
    interestOptions: ['Shopify 商店開發', 'AI 顧問服務', '雲端顧問服務', '平台工程', 'API 與 AI 閘道', 'llmxy', 'LetScrum', '其他'],
    timelineOptions: ['本季', '下季', '正在瞭解方案', '緊急支援'],
    messageLabel: '還有哪些資訊需要我們瞭解？',
    messagePlaceholder: '請簡要描述店面、產品、平台、團隊或架構挑戰。',
    consentPrefix: '我同意接收 Learnmark 的通訊資訊，並可隨時取消訂閱。請查看我們的',
    privacyPolicy: '隱私權政策',
    consentSuffix: '。',
    submit: '傳送需求',
    submitting: '提交中...',
    replyTime: '我們通常會在 1 個工作日內回覆。',
    success: '謝謝，您的訊息已成功傳送。',
    error: '發生問題，請稍後再試或寄信至 hello@learnmark.com。',
  },
  ja: {
    seoTitle: 'お問い合わせ',
    seoDescription: 'Shopify ストア開発、カスタムテーマ、AI コンサルティング、クラウドモダナイゼーション、プラットフォームエンジニアリング、ソフトウェアデリバリーについて Learnmark にご相談ください。',
    seoKeywords: ['Learnmark 問い合わせ', 'Shopify 開発相談', 'AI コンサルティング問い合わせ', 'クラウドコンサルティング問い合わせ', 'ソフトウェア相談'],
    eyebrow: 'Learnmark に問い合わせる',
    title: '次の Shopify、AI、クラウド施策を形にしましょう。',
    description: '構築中のストア、製品、プラットフォームについてお聞かせください。顧客体験、技術的な進め方、適切な次の対話を明確にします。',
    focusAreas: ['Shopify ストア', 'カスタムテーマ', 'AI 戦略', 'LLM 統合', 'クラウドモダナイゼーション', 'プラットフォームエンジニアリング'],
    highlights: [
      { name: '焦点を絞った発見', description: 'コマース・製品目標、顧客体験、制約、リスク、依頼の背景となるデリバリー状況から始めます。' },
      { name: '実践的な回答', description: '次のステップ、適合性、製品・プラットフォームを話す適切な道筋を簡潔に返信します。' },
      { name: '本番志向', description: 'Shopify、AI、クラウド、デリバリーを、使いやすさ、信頼性、セキュリティ、性能、保守性を中心に考えます。' },
    ],
    formEyebrow: '相談を始める',
    formTitle: '取り組みについてお聞かせください。',
    firstName: '名',
    lastName: '姓',
    company: '会社名',
    email: '勤務先メールアドレス',
    interest: 'プロジェクトの重点',
    timeline: '時期',
    interestOptions: ['Shopify ストア開発', 'AI コンサルティング', 'クラウドコンサルティング', 'プラットフォームエンジニアリング', 'API & AI ゲートウェイ', 'llmxy', 'LetScrum', 'その他'],
    timelineOptions: ['今四半期', '次四半期', '選択肢を検討中', '緊急サポート'],
    messageLabel: 'ほかに知っておくべきことはありますか？',
    messagePlaceholder: 'ストアフロント、製品、プラットフォーム、チーム、アーキテクチャの課題を簡潔にご記入ください。',
    consentPrefix: 'Learnmark からのご案内を受け取ることに同意します。いつでも配信停止できます。',
    privacyPolicy: 'プライバシーポリシー',
    consentSuffix: 'をご確認ください。',
    submit: '問い合わせを送信',
    submitting: '送信中...',
    replyTime: '通常 1 営業日以内に返信します。',
    success: 'ありがとうございます。メッセージを送信しました。',
    error: '問題が発生しました。後ほど再試行するか、hello@learnmark.com へメールしてください。',
  },
  fr: {
    seoTitle: 'Nous contacter',
    seoDescription: 'Contactez Learnmark pour discuter de boutiques Shopify, thèmes sur mesure, conseil en IA, modernisation Cloud, ingénierie de plateforme et livraison logicielle.',
    seoKeywords: ['contacter Learnmark', 'contact développement Shopify', 'contact conseil IA', 'contact conseil Cloud', 'demande de conseil logiciel'],
    eyebrow: 'Contacter Learnmark',
    title: 'Donnez forme à votre prochaine initiative Shopify, IA ou Cloud.',
    description: 'Parlez-nous de la boutique, du produit ou de la plateforme que vous construisez. Nous vous aiderons à clarifier l’expérience client, le parcours technique et la bonne prochaine conversation.',
    focusAreas: ['Boutiques Shopify', 'Thèmes sur mesure', 'Stratégie IA', 'Intégration LLM', 'Modernisation Cloud', 'Ingénierie de plateforme'],
    highlights: [
      { name: 'Découverte ciblée', description: 'Nous commençons par les objectifs métier ou produit, les parcours clients, les contraintes, les risques et le contexte de livraison.' },
      { name: 'Réponse pragmatique', description: 'Attendez-vous à une réponse concise sur les prochaines étapes, l’adéquation et le bon parcours de discussion.' },
      { name: 'Culture de production', description: 'Shopify, IA, Cloud et livraison sont abordés sous l’angle de l’utilisabilité, la fiabilité, la sécurité, les performances et la maintenabilité.' },
    ],
    formEyebrow: 'Démarrer une conversation',
    formTitle: 'Parlez-nous du projet.',
    firstName: 'Prénom',
    lastName: 'Nom',
    company: 'Entreprise',
    email: 'E-mail professionnel',
    interest: 'Domaine du projet',
    timeline: 'Calendrier',
    interestOptions: ['Développement de boutique Shopify', 'Conseil en IA', 'Conseil Cloud', 'Ingénierie de plateforme', 'Passerelle API et IA', 'llmxy', 'LetScrum', 'Autre'],
    timelineOptions: ['Ce trimestre', 'Trimestre prochain', 'Exploration des options', 'Support urgent'],
    messageLabel: 'Que devons-nous savoir ?',
    messagePlaceholder: 'Décrivez brièvement la boutique, le produit, la plateforme, l’équipe ou le défi d’architecture.',
    consentPrefix: 'J’accepte de recevoir des communications de Learnmark. Je peux me désabonner à tout moment. Consultez notre',
    privacyPolicy: 'Politique de confidentialité',
    consentSuffix: '.',
    submit: 'Envoyer la demande',
    submitting: 'Envoi...',
    replyTime: 'Nous répondons généralement sous 1 jour ouvré.',
    success: 'Merci. Votre message a bien été envoyé.',
    error: 'Un problème est survenu. Réessayez plus tard ou écrivez à hello@learnmark.com.',
  },
  de: {
    seoTitle: 'Kontakt',
    seoDescription: 'Kontaktieren Sie Learnmark zu Shopify-Shop-Entwicklung, individuellen Themes, KI-Beratung, Cloud-Modernisierung, Platform Engineering und Software-Delivery.',
    seoKeywords: ['Learnmark Kontakt', 'Shopify-Entwicklung Kontakt', 'KI-Beratung Kontakt', 'Cloud-Beratung Kontakt', 'Softwareberatung Anfrage'],
    eyebrow: 'Learnmark kontaktieren',
    title: 'Ihre nächste Shopify-, KI- oder Cloud-Initiative gestalten.',
    description: 'Erzählen Sie uns von Shop, Produkt oder Plattform. Wir helfen, Kundenerlebnis, technischen Weg und das richtige nächste Gespräch zu klären.',
    focusAreas: ['Shopify-Shops', 'Individuelle Themes', 'KI-Strategie', 'LLM-Integration', 'Cloud-Modernisierung', 'Platform Engineering'],
    highlights: [
      { name: 'Fokussierte Klärung', description: 'Wir beginnen mit Commerce- oder Produktzielen, Customer Journeys, Einschränkungen, Risiken und dem Delivery-Kontext der Anfrage.' },
      { name: 'Praktische Antwort', description: 'Sie erhalten eine kompakte Antwort zu nächsten Schritten, Passung und dem richtigen Weg für ein Produkt- oder Plattformgespräch.' },
      { name: 'Produktionsdenken', description: 'Shopify-, KI-, Cloud- und Delivery-Arbeit orientiert sich an Nutzbarkeit, Zuverlässigkeit, Sicherheit, Leistung und Wartbarkeit.' },
    ],
    formEyebrow: 'Gespräch starten',
    formTitle: 'Erzählen Sie uns vom Vorhaben.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Unternehmen',
    email: 'Geschäftliche E-Mail',
    interest: 'Projektschwerpunkt',
    timeline: 'Zeitrahmen',
    interestOptions: ['Shopify-Shop-Entwicklung', 'KI-Beratung', 'Cloud-Beratung', 'Platform Engineering', 'API- und KI-Gateway', 'llmxy', 'LetScrum', 'Sonstiges'],
    timelineOptions: ['Dieses Quartal', 'Nächstes Quartal', 'Optionen werden geprüft', 'Dringender Support'],
    messageLabel: 'Was sollten wir wissen?',
    messagePlaceholder: 'Beschreiben Sie kurz Storefront, Produkt, Plattform, Team oder Architekturherausforderung.',
    consentPrefix: 'Ich stimme Mitteilungen von Learnmark zu und kann sie jederzeit abbestellen. Lesen Sie unsere',
    privacyPolicy: 'Datenschutzerklärung',
    consentSuffix: '.',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet...',
    replyTime: 'Wir antworten üblicherweise innerhalb eines Werktags.',
    success: 'Vielen Dank. Ihre Nachricht wurde erfolgreich gesendet.',
    error: 'Etwas ist schiefgelaufen. Versuchen Sie es später erneut oder schreiben Sie an hello@learnmark.com.',
  },
}