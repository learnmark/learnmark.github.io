import type { Locale } from '../config'

type PrivacyMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  legalLabel: string
  title: string
  effectiveDateLabel: string
  effectiveDateValue: string
  introduction: string
  tableOfContentsTitle: string
  tableOfContents: {
    informationWeCollect: string
    howWeUseYourInformation: string
    informationSharing: string
    security: string
    changesToThisPrivacyStatement: string
    contactUs: string
  }
  informationWeCollectTitle: string
  informationWeCollectIntro: string
  collectedInformationItems: Array<{ name: string; description: string }>
  howWeUseYourInformationTitle: string
  howWeUseYourInformationBody: string
  informationSharingTitle: string
  informationSharingBody: string
  informationSharingItems: string[]
  securityTitle: string
  securityBody: string
  changesTitle: string
  changesBody: string
  contactUsTitle: string
  contactUsPrefix: string
}

export const privacyMessages: Record<Locale, PrivacyMessages> = {
  en: {
    seoTitle: 'Privacy Policy',
    seoDescription: 'Read how Learnmark collects, uses, shares, and protects information related to our website and expert consultation services.',
    seoKeywords: ['Learnmark privacy policy', 'expert network privacy', 'consultation data protection'],
    legalLabel: 'Legal',
    title: 'Privacy Policy',
    effectiveDateLabel: 'Effective Date',
    effectiveDateValue: 'August 13, 2026',
    introduction:
      'Learnmark is committed to protecting your privacy. This Privacy Statement describes how we treat personal information collected through our website, client project requests, expert network activities, screening, consultation coordination, and related support. It applies to Learnmark services that do not provide a separate privacy notice.',
    tableOfContentsTitle: 'Table of Contents',
    tableOfContents: {
      informationWeCollect: 'Information We Collect',
      howWeUseYourInformation: 'How We Use Your Information',
      informationSharing: 'Information Sharing',
      security: 'Security',
      changesToThisPrivacyStatement: 'Changes to this Privacy Statement',
      contactUs: 'Contact Us',
    },
    informationWeCollectTitle: 'Information We Collect',
    informationWeCollectIntro:
      'Learnmark collects information when you visit our website, submit a project, express interest in joining our expert network, respond to screening, or participate in a consultation. This information may include:',
    collectedInformationItems: [
      {
        name: 'Contact Information.',
        description: 'Your name, work email, company, professional contact details, and communication preferences.',
      },
      {
        name: 'Project and Consultation Information.',
        description: 'Client project briefs, research topics, target profiles, screening responses, availability, agreed terms, scheduling details, and engagement records.',
      },
      {
        name: 'Professional Profile Information.',
        description: 'For experts, information such as employment history, roles, industries, markets, languages, expertise, qualifications, and disclosed restrictions or conflicts.',
      },
      {
        name: 'Usage Data.',
        description: 'Information about how you use our products and services, including feature usage and interaction data.',
      },
      {
        name: 'Device Information.',
        description: 'Information about your device, such as IP address, browser type, operating system, and device identifiers.',
      },
    ],
    howWeUseYourInformationTitle: 'How We Use Your Information',
    howWeUseYourInformationBody:
      'Learnmark uses the information we collect to evaluate and scope client projects; identify, screen, and present relevant experts; assess potential conflicts and restrictions; coordinate consultation terms, scheduling, support, and payment; maintain and improve our services; communicate with participants; prevent misuse; and comply with legal obligations. We do not use project or expert information to request disclosure of confidential, proprietary, or material non-public information.',
    informationSharingTitle: 'Information Sharing',
    informationSharingBody:
      'Learnmark does not sell, rent, or share your personal information with third parties, except as described in this Privacy Statement. We may share your personal information with third parties in the following circumstances:',
    informationSharingItems: [
      'With your consent.',
      'Between clients and prospective experts when needed to evaluate fit, coordinate an approved engagement, or provide the requested service.',
      'To comply with legal obligations or respond to lawful requests.',
      'To protect the rights and safety of Learnmark, our users, and others.',
      'With service providers who perform services on our behalf, such as form processing, hosting, analytics, communications, scheduling, and payment support.',
    ],
    securityTitle: 'Security',
    securityBody:
      'Learnmark takes reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.',
    changesTitle: 'Changes to this Privacy Statement',
    changesBody:
      'Learnmark may update this Privacy Statement from time to time. We will notify you of any changes by posting the new Privacy Statement on this page. You are advised to review this Privacy Statement periodically for any changes.',
    contactUsTitle: 'Contact Us',
    contactUsPrefix: 'If you have any questions about this Privacy Statement, please contact us at',
  },
  'zh-CN': {
    seoTitle: '隐私政策',
    seoDescription: '阅读我们的隐私政策，了解我们如何收集、使用并保护您的数据。',
    seoKeywords: ['Learnmark 隐私政策', '隐私声明', '数据保护'],
    legalLabel: '法律声明',
    title: '隐私政策',
    effectiveDateLabel: '生效日期',
    effectiveDateValue: '2024年8月7日',
    introduction:
      'Learnmark 致力于保护您的隐私。本隐私声明说明了 Learnmark 的隐私实践，以及当您使用我们的产品和服务（包括我们的网站）时，我们如何处理向您收集的个人信息。本隐私声明适用于 Learnmark 提供的所有服务（包括我们的网站），但不适用于拥有单独隐私声明且未纳入本隐私声明的服务。',
    tableOfContentsTitle: '目录',
    tableOfContents: {
      informationWeCollect: '我们收集的信息',
      howWeUseYourInformation: '我们如何使用您的信息',
      informationSharing: '信息共享',
      security: '安全',
      changesToThisPrivacyStatement: '本隐私声明的变更',
      contactUs: '联系我们',
    },
    informationWeCollectTitle: '我们收集的信息',
    informationWeCollectIntro:
      '当您使用我们的产品和服务（包括我们的网站）时，Learnmark 会收集与您相关的信息。这些信息可能包括：',
    collectedInformationItems: [
      {
        name: '联系信息。',
        description: '当您注册或联系我们时提供的姓名、电子邮件地址及其他联系方式。',
      },
      {
        name: '使用数据。',
        description: '关于您如何使用我们产品和服务的信息，包括功能使用情况和交互数据。',
      },
      {
        name: '设备信息。',
        description: '关于您设备的信息，例如 IP 地址、浏览器类型、操作系统和设备标识符。',
      },
    ],
    howWeUseYourInformationTitle: '我们如何使用您的信息',
    howWeUseYourInformationBody:
      'Learnmark 使用我们收集的信息来提供、维护、保护和改进我们的产品与服务，并保护 Learnmark 及其用户。我们还可能使用这些信息向您提供有关我们产品和服务的信息，并就更新、安全警报和支持消息与您沟通。',
    informationSharingTitle: '信息共享',
    informationSharingBody:
      '除本隐私声明所述情形外，Learnmark 不会向第三方出售、出租或共享您的个人信息。在以下情况下，我们可能会与第三方共享您的个人信息：',
    informationSharingItems: [
      '在获得您的同意后。',
      '为遵守法律义务或回应合法请求。',
      '为保护 Learnmark、我们的用户及其他人的权利与安全。',
      '与代表我们提供服务的服务提供商共享（例如托管、分析）。',
    ],
    securityTitle: '安全',
    securityBody:
      'Learnmark 采取合理措施，防止您的个人信息被未经授权地访问、使用或披露。然而，互联网传输方式或电子存储方式都无法做到 100% 安全。因此，我们无法保证其绝对安全。',
    changesTitle: '本隐私声明的变更',
    changesBody:
      'Learnmark 可能会不时更新本隐私声明。我们将通过在本页面发布新的隐私声明来通知您任何变更。建议您定期查看本隐私声明，以了解任何变更。',
    contactUsTitle: '联系我们',
    contactUsPrefix: '如果您对本隐私声明有任何疑问，请通过以下方式联系我们：',
  },
  'zh-TW': {
    seoTitle: '隱私權政策',
    seoDescription: '閱讀我們的隱私權政策，了解我們如何蒐集、使用並保護您的資料。',
    seoKeywords: ['Learnmark 隱私權政策', '隱私權聲明', '資料保護'],
    legalLabel: '法律聲明',
    title: '隱私權政策',
    effectiveDateLabel: '生效日期',
    effectiveDateValue: '2024年8月7日',
    introduction:
      'Learnmark 致力於保護您的隱私。本隱私權聲明說明 Learnmark 的隱私實務，以及當您使用我們的產品與服務（包括我們的網站）時，我們如何處理向您蒐集的個人資訊。本隱私權聲明適用於 Learnmark 提供的所有服務（包括我們的網站），但不包含具有獨立隱私權聲明且未納入本隱私權聲明的服務。',
    tableOfContentsTitle: '目錄',
    tableOfContents: {
      informationWeCollect: '我們蒐集的資訊',
      howWeUseYourInformation: '我們如何使用您的資訊',
      informationSharing: '資訊分享',
      security: '安全性',
      changesToThisPrivacyStatement: '本隱私權聲明的變更',
      contactUs: '聯絡我們',
    },
    informationWeCollectTitle: '我們蒐集的資訊',
    informationWeCollectIntro:
      '當您使用我們的產品與服務（包括我們的網站）時，Learnmark 會蒐集與您相關的資訊。這些資訊可能包括：',
    collectedInformationItems: [
      {
        name: '聯絡資訊。',
        description: '當您註冊或聯絡我們時所提供的姓名、電子郵件地址及其他聯絡資料。',
      },
      {
        name: '使用資料。',
        description: '有關您如何使用我們產品與服務的資訊，包括功能使用情形與互動資料。',
      },
      {
        name: '裝置資訊。',
        description: '有關您裝置的資訊，例如 IP 位址、瀏覽器類型、作業系統與裝置識別碼。',
      },
    ],
    howWeUseYourInformationTitle: '我們如何使用您的資訊',
    howWeUseYourInformationBody:
      'Learnmark 使用我們蒐集的資訊來提供、維護、保護與改進我們的產品和服務，並保護 Learnmark 及其使用者。我們也可能使用這些資訊向您提供我們產品與服務的資訊，並就更新、安全警示與支援訊息與您聯繫。',
    informationSharingTitle: '資訊分享',
    informationSharingBody:
      '除本隱私權聲明所述情況外，Learnmark 不會向第三方出售、出租或分享您的個人資訊。在下列情況下，我們可能會與第三方分享您的個人資訊：',
    informationSharingItems: [
      '在取得您的同意後。',
      '為遵守法律義務或回應合法要求。',
      '為保護 Learnmark、我們的使用者及其他人的權利與安全。',
      '與代表我們提供服務的服務供應商分享（例如託管、分析）。',
    ],
    securityTitle: '安全性',
    securityBody:
      'Learnmark 採取合理措施，以保護您的個人資訊免於未經授權的存取、使用或揭露。然而，網際網路傳輸方式或電子儲存方式都無法達到 100% 安全。因此，我們無法保證其絕對安全。',
    changesTitle: '本隱私權聲明的變更',
    changesBody:
      'Learnmark 可能會不時更新本隱私權聲明。我們將透過在本頁面發布新的隱私權聲明來通知您任何變更。建議您定期檢視本隱私權聲明，以了解任何變更。',
    contactUsTitle: '聯絡我們',
    contactUsPrefix: '如果您對本隱私權聲明有任何疑問，請透過以下方式聯絡我們：',
  },
  ja: {
    seoTitle: 'プライバシーポリシー',
    seoDescription: '当社がどのようにお客様のデータを収集、利用、保護するかについて、プライバシーポリシーをご確認ください。',
    seoKeywords: ['Learnmark プライバシーポリシー', 'プライバシーに関する声明', 'データ保護'],
    legalLabel: '法的情報',
    title: 'プライバシーポリシー',
    effectiveDateLabel: '発効日',
    effectiveDateValue: '2024年8月7日',
    introduction:
      'Learnmark はお客様のプライバシー保護に取り組んでいます。本プライバシーに関する声明は、Learnmark のプライバシー慣行と、当社ウェブサイトを含む当社の製品およびサービスをご利用になる際に収集する個人情報の取扱いについて説明するものです。本プライバシーに関する声明は、当社ウェブサイトを含む Learnmark が提供するすべてのサービスに適用されますが、本声明を組み込まない個別のプライバシー声明があるサービスには適用されません。',
    tableOfContentsTitle: '目次',
    tableOfContents: {
      informationWeCollect: '当社が収集する情報',
      howWeUseYourInformation: '情報の利用方法',
      informationSharing: '情報共有',
      security: 'セキュリティ',
      changesToThisPrivacyStatement: '本プライバシーに関する声明の変更',
      contactUs: 'お問い合わせ',
    },
    informationWeCollectTitle: '当社が収集する情報',
    informationWeCollectIntro:
      'Learnmark は、当社ウェブサイトを含む製品およびサービスのご利用時にお客様に関する情報を収集します。これには次の情報が含まれる場合があります。',
    collectedInformationItems: [
      {
        name: '連絡先情報。',
        description: '登録またはお問い合わせ時に提供される氏名、メールアドレス、その他の連絡先情報。',
      },
      {
        name: '利用データ。',
        description: '機能の利用状況や操作データを含む、製品およびサービスの利用方法に関する情報。',
      },
      {
        name: 'デバイス情報。',
        description: 'IP アドレス、ブラウザの種類、オペレーティングシステム、デバイス識別子などの情報。',
      },
    ],
    howWeUseYourInformationTitle: '情報の利用方法',
    howWeUseYourInformationBody:
      'Learnmark は、収集した情報を当社の製品およびサービスの提供、維持、保護、改善、ならびに Learnmark とユーザーの保護のために利用します。また、当社の製品およびサービスに関する情報提供、更新情報、セキュリティ警告、サポートメッセージに関する連絡にも利用する場合があります。',
    informationSharingTitle: '情報共有',
    informationSharingBody:
      '本プライバシーに関する声明に記載する場合を除き、Learnmark はお客様の個人情報を第三者に販売、賃貸、または共有しません。以下の場合に限り、第三者と個人情報を共有することがあります。',
    informationSharingItems: [
      'お客様の同意がある場合。',
      '法的義務の遵守または適法な要請への対応が必要な場合。',
      'Learnmark、当社ユーザー、その他の権利と安全を保護するために必要な場合。',
      '当社に代わってサービスを提供する事業者（例: ホスティング、分析）と共有する場合。',
    ],
    securityTitle: 'セキュリティ',
    securityBody:
      'Learnmark は、個人情報への不正アクセス、利用、開示を防ぐために合理的な対策を講じています。ただし、インターネット上の送信方法または電子的な保存方法に 100% 安全なものはありません。したがって、その絶対的な安全性を保証することはできません。',
    changesTitle: '本プライバシーに関する声明の変更',
    changesBody:
      'Learnmark は本プライバシーに関する声明を随時更新することがあります。変更がある場合は、このページに新しいプライバシーに関する声明を掲載してお知らせします。変更の有無を定期的にご確認いただくことをお勧めします。',
    contactUsTitle: 'お問い合わせ',
    contactUsPrefix: '本プライバシーに関する声明についてご質問がある場合は、以下までご連絡ください。',
  },
  fr: {
    seoTitle: 'Politique de confidentialité',
    seoDescription: 'Consultez notre politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos données.',
    seoKeywords: ['politique de confidentialité Learnmark', 'déclaration de confidentialité', 'protection des données'],
    legalLabel: 'Mentions légales',
    title: 'Politique de confidentialité',
    effectiveDateLabel: 'Date d\'entrée en vigueur',
    effectiveDateValue: '7 août 2024',
    introduction:
      'Learnmark s\'engage à protéger votre vie privée. La présente Déclaration de confidentialité décrit les pratiques de confidentialité de Learnmark et la manière dont nous traitons les informations personnelles que nous recueillons lorsque vous utilisez nos produits et services, y compris notre site web. Cette Déclaration de confidentialité s\'applique à l\'ensemble des services proposés par Learnmark, y compris notre site web, à l\'exception des services disposant de déclarations de confidentialité distinctes qui n\'intègrent pas la présente Déclaration de confidentialité.',
    tableOfContentsTitle: 'Table des matières',
    tableOfContents: {
      informationWeCollect: 'Informations que nous collectons',
      howWeUseYourInformation: 'Comment nous utilisons vos informations',
      informationSharing: 'Partage d\'informations',
      security: 'Sécurité',
      changesToThisPrivacyStatement: 'Modifications de la présente Déclaration de confidentialité',
      contactUs: 'Nous contacter',
    },
    informationWeCollectTitle: 'Informations que nous collectons',
    informationWeCollectIntro:
      'Learnmark collecte des informations vous concernant lorsque vous utilisez nos produits et services, y compris notre site web. Ces informations peuvent inclure :',
    collectedInformationItems: [
      {
        name: 'Informations de contact.',
        description: 'Votre nom, votre adresse e-mail et d\'autres coordonnées fournies lors de votre inscription ou de votre prise de contact.',
      },
      {
        name: 'Données d\'utilisation.',
        description: 'Des informations sur la façon dont vous utilisez nos produits et services, y compris l\'utilisation des fonctionnalités et les données d\'interaction.',
      },
      {
        name: 'Informations sur l\'appareil.',
        description: 'Des informations sur votre appareil, telles que l\'adresse IP, le type de navigateur, le système d\'exploitation et les identifiants de l\'appareil.',
      },
    ],
    howWeUseYourInformationTitle: 'Comment nous utilisons vos informations',
    howWeUseYourInformationBody:
      'Learnmark utilise les informations que nous collectons pour fournir, maintenir, protéger et améliorer nos produits et services, ainsi que pour protéger Learnmark et ses utilisateurs. Nous pouvons également utiliser ces informations pour vous communiquer des informations sur nos produits et services, ainsi que des mises à jour, alertes de sécurité et messages d\'assistance.',
    informationSharingTitle: 'Partage d\'informations',
    informationSharingBody:
      'Learnmark ne vend, ne loue et ne partage pas vos informations personnelles avec des tiers, sauf dans les cas décrits dans la présente Déclaration de confidentialité. Nous pouvons partager vos informations personnelles avec des tiers dans les circonstances suivantes :',
    informationSharingItems: [
      'Avec votre consentement.',
      'Pour respecter des obligations légales ou répondre à des demandes légitimes.',
      'Pour protéger les droits et la sécurité de Learnmark, de nos utilisateurs et d\'autrui.',
      'Avec des prestataires de services agissant pour notre compte (par exemple, hébergement, analyses).',
    ],
    securityTitle: 'Sécurité',
    securityBody:
      'Learnmark prend des mesures raisonnables pour protéger vos informations personnelles contre l\'accès, l\'utilisation ou la divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet ni aucune méthode de stockage électronique n\'est sûre à 100 %. Par conséquent, nous ne pouvons pas en garantir la sécurité absolue.',
    changesTitle: 'Modifications de la présente Déclaration de confidentialité',
    changesBody:
      'Learnmark peut mettre à jour la présente Déclaration de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle Déclaration de confidentialité sur cette page. Il vous est conseillé de consulter régulièrement la présente Déclaration de confidentialité pour prendre connaissance d\'éventuelles modifications.',
    contactUsTitle: 'Nous contacter',
    contactUsPrefix: 'Si vous avez des questions concernant la présente Déclaration de confidentialité, veuillez nous contacter à',
  },
  de: {
    seoTitle: 'Datenschutzerklärung',
    seoDescription: 'Lesen Sie unsere Datenschutzerklärung, um zu verstehen, wie wir Ihre Daten erfassen, verwenden und schützen.',
    seoKeywords: ['Learnmark Datenschutzerklärung', 'Datenschutzstatement', 'Datenschutz'],
    legalLabel: 'Rechtliches',
    title: 'Datenschutzerklärung',
    effectiveDateLabel: 'Gültig ab',
    effectiveDateValue: '7. August 2024',
    introduction:
      'Learnmark verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung beschreibt die Datenschutzpraktiken von Learnmark und wie wir mit den personenbezogenen Informationen umgehen, die wir von Ihnen erfassen, wenn Sie unsere Produkte und Dienstleistungen einschließlich unserer Website nutzen. Diese Datenschutzerklärung gilt für alle von Learnmark angebotenen Dienste einschließlich unserer Website, ausgenommen Dienste mit separaten Datenschutzerklärungen, die diese Datenschutzerklärung nicht einbeziehen.',
    tableOfContentsTitle: 'Inhaltsverzeichnis',
    tableOfContents: {
      informationWeCollect: 'Welche Informationen wir erfassen',
      howWeUseYourInformation: 'Wie wir Ihre Informationen verwenden',
      informationSharing: 'Weitergabe von Informationen',
      security: 'Sicherheit',
      changesToThisPrivacyStatement: 'Änderungen dieser Datenschutzerklärung',
      contactUs: 'Kontakt',
    },
    informationWeCollectTitle: 'Welche Informationen wir erfassen',
    informationWeCollectIntro:
      'Learnmark erfasst Informationen von Ihnen, wenn Sie unsere Produkte und Dienstleistungen einschließlich unserer Website nutzen. Diese Informationen können Folgendes umfassen:',
    collectedInformationItems: [
      {
        name: 'Kontaktinformationen.',
        description: 'Ihr Name, Ihre E-Mail-Adresse und weitere Kontaktdaten, die Sie bei der Registrierung oder Kontaktaufnahme angeben.',
      },
      {
        name: 'Nutzungsdaten.',
        description: 'Informationen darüber, wie Sie unsere Produkte und Dienstleistungen nutzen, einschließlich Funktionsnutzung und Interaktionsdaten.',
      },
      {
        name: 'Geräteinformationen.',
        description: 'Informationen zu Ihrem Gerät, etwa IP-Adresse, Browsertyp, Betriebssystem und Gerätekennungen.',
      },
    ],
    howWeUseYourInformationTitle: 'Wie wir Ihre Informationen verwenden',
    howWeUseYourInformationBody:
      'Learnmark nutzt die von uns erfassten Informationen, um unsere Produkte und Dienstleistungen bereitzustellen, zu betreiben, zu schützen und zu verbessern sowie Learnmark und unsere Nutzer zu schützen. Wir können diese Informationen auch nutzen, um Ihnen Informationen zu unseren Produkten und Dienstleistungen bereitzustellen und mit Ihnen über Aktualisierungen, Sicherheitswarnungen und Support-Nachrichten zu kommunizieren.',
    informationSharingTitle: 'Weitergabe von Informationen',
    informationSharingBody:
      'Learnmark verkauft, vermietet oder teilt Ihre personenbezogenen Informationen nicht mit Dritten, außer wie in dieser Datenschutzerklärung beschrieben. Wir können Ihre personenbezogenen Informationen in folgenden Fällen an Dritte weitergeben:',
    informationSharingItems: [
      'Mit Ihrer Zustimmung.',
      'Zur Erfüllung gesetzlicher Verpflichtungen oder zur Beantwortung rechtmäßiger Anfragen.',
      'Zum Schutz der Rechte und Sicherheit von Learnmark, unseren Nutzern und anderen.',
      'An Dienstleister, die in unserem Auftrag Leistungen erbringen (z. B. Hosting, Analysen).',
    ],
    securityTitle: 'Sicherheit',
    securityBody:
      'Learnmark ergreift angemessene Maßnahmen, um Ihre personenbezogenen Informationen vor unbefugtem Zugriff, unbefugter Nutzung oder Offenlegung zu schützen. Allerdings ist keine Übertragungsmethode über das Internet und keine Methode der elektronischen Speicherung zu 100 % sicher. Daher können wir keine absolute Sicherheit garantieren.',
    changesTitle: 'Änderungen dieser Datenschutzerklärung',
    changesBody:
      'Learnmark kann diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir informieren Sie über Änderungen, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen. Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig auf Änderungen zu überprüfen.',
    contactUsTitle: 'Kontakt',
    contactUsPrefix: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter',
  },
}