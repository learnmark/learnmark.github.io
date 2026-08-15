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
    websiteProcessing: string
    dataLifecycle: string
    serviceBoundary: string
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
  websiteProcessingTitle: string
  websiteProcessingBody: string
  dataLifecycleTitle: string
  dataLifecycleBody: string
  serviceBoundaryTitle: string
  serviceBoundaryBody: string
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
    effectiveDateValue: 'August 15, 2026',
    introduction:
      'Learnmark is committed to protecting your privacy. This Privacy Statement describes how we treat personal information collected through our website, client project requests, expert network activities, screening, consultation coordination, and related support. It applies to Learnmark services that do not provide a separate privacy notice.',
    tableOfContentsTitle: 'Table of Contents',
    tableOfContents: {
      informationWeCollect: 'Information We Collect',
      howWeUseYourInformation: 'How We Use Your Information',
      informationSharing: 'Information Sharing',
      websiteProcessing: 'Website Forms and Analytics',
      dataLifecycle: 'Cross-Border Processing, Retention, and Rights',
      serviceBoundary: 'Public Website and Service Boundary',
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
    websiteProcessingTitle: 'Website Forms and Analytics',
    websiteProcessingBody:
      'The public contact form sends the fields you enter, request type, timing, message, and consent status to Formspree for form delivery. This website uses Google Analytics to measure visits and interactions; it may process device, browser, IP-derived, cookie, and usage data under Google’s terms. Do not use the public form for identity documents, bank details, confidential project content, or material non-public information.',
    dataLifecycleTitle: 'Cross-Border Processing, Retention, and Your Rights',
    dataLifecycleBody:
      'Website and service providers may process information outside your country. Learnmark keeps information only as reasonably needed to route and answer an inquiry, protect the website, comply with obligations, and resolve disputes. Depending on applicable law, you may request access, correction, deletion, restriction, or withdrawal of consent by contacting privacy@learnmark.com. Controller and processor roles, processing regions, and retention periods for an accepted project will be stated in the applicable contract or privacy notice.',
    serviceBoundaryTitle: 'Public Website and Service Boundary',
    serviceBoundaryBody:
      'This website collects inquiries and explains Learnmark’s operating model. A submission does not create an account, accept a project, invite an expert, approve compliance, or form a contract. Identity verification, sanctions screening, AI audio or transcription, project delivery, and payment processing are not performed through the public contact form and require separate terms and notices before use.',
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
    seoDescription: '了解 Learnmark 如何收集、使用、共享并保护与网站和专家咨询服务相关的信息。',
    seoKeywords: ['Learnmark 隐私政策', '专家网络隐私', '咨询数据保护'],
    legalLabel: '法律声明',
    title: '隐私政策',
    effectiveDateLabel: '生效日期',
    effectiveDateValue: '2026年8月15日',
    introduction:
      'Learnmark 致力于保护您的隐私。本隐私声明说明我们如何处理通过网站、客户项目请求、专家网络活动、筛选、咨询协调及相关支持收集的个人信息。本声明适用于未另行提供独立隐私通知的 Learnmark 服务。',
    tableOfContentsTitle: '目录',
    tableOfContents: {
      informationWeCollect: '我们收集的信息',
      howWeUseYourInformation: '我们如何使用您的信息',
      informationSharing: '信息共享',
      websiteProcessing: '网站表单与分析',
      dataLifecycle: '跨境处理、保留与您的权利',
      serviceBoundary: '公开网站与服务边界',
      security: '安全',
      changesToThisPrivacyStatement: '本隐私声明的变更',
      contactUs: '联系我们',
    },
    informationWeCollectTitle: '我们收集的信息',
    informationWeCollectIntro:
      '当您访问网站、提交项目、表达加入专家网络的意向、参与筛选或咨询时，Learnmark 会收集相关信息。这些信息可能包括：',
    collectedInformationItems: [
      {
        name: '联系信息。',
        description: '您的姓名、工作邮箱、公司、专业联系方式及通信偏好。',
      },
      {
        name: '项目与咨询信息。',
        description: '客户项目简报、研究主题、目标画像、筛选答复、可用时间、约定条件、排期及合作记录。',
      },
      {
        name: '专业档案信息。',
        description: '对于专家，包括任职经历、职位、行业、市场、语言、专业能力、资质及披露的限制或冲突。',
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
      'Learnmark 使用所收集的信息评估和确定客户项目范围；识别、筛选并展示相关专家；评估潜在冲突与限制；协调咨询条件、排期、支持与付款；维护和改进服务；与参与者沟通；防止滥用；并遵守法律义务。我们不会利用项目或专家信息要求披露机密、专有或重大非公开信息。',
    informationSharingTitle: '信息共享',
    informationSharingBody:
      '除本隐私声明所述情形外，Learnmark 不会向第三方出售、出租或共享您的个人信息。在以下情况下，我们可能会与第三方共享您的个人信息：',
    informationSharingItems: [
      '在获得您的同意后。',
      '在评估适配度、协调获批合作或提供所需服务时，在客户与候选专家之间进行必要共享。',
      '为遵守法律义务或回应合法请求。',
      '为保护 Learnmark、我们的用户及其他人的权利与安全。',
      '与代表我们提供服务的供应商共享，例如表单处理、托管、分析、通信、排期及付款支持。',
    ],
    websiteProcessingTitle: '网站表单与分析',
    websiteProcessingBody:
      '公开联系表单会将您填写的字段、请求类型、期望时间、留言和同意状态发送至 Formspree 以完成表单投递。本网站使用 Google Analytics 衡量访问与互动；Google 可能依据其条款处理设备、浏览器、IP 衍生信息、Cookie 和使用数据。请勿通过公开表单提交身份证件、银行资料、机密项目内容或重大非公开信息。',
    dataLifecycleTitle: '跨境处理、保留与您的权利',
    dataLifecycleBody:
      '网站及服务供应商可能在您所在国家或地区之外处理信息。Learnmark 仅在合理必要期限内保留信息，用于分流和回复咨询、保护网站、履行义务及解决争议。根据适用法律，您可通过 privacy@learnmark.com 请求访问、更正、删除、限制处理或撤回同意。已接受项目的控制者与处理者角色、处理地区和保留期限将在适用合同或隐私通知中说明。',
    serviceBoundaryTitle: '公开网站与服务边界',
    serviceBoundaryBody:
      '本网站用于收集咨询线索并说明 Learnmark 的运营模型。提交信息不会创建账号、接受项目、邀请专家、批准合规或形成合同。身份核验、制裁筛查、AI 音频或转写、项目交付及付款处理不会通过公开联系表单执行，使用前须适用独立条款与通知。',
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
    seoDescription: '瞭解 Learnmark 如何蒐集、使用、分享並保護與網站及專家顧問服務相關的資訊。',
    seoKeywords: ['Learnmark 隱私權政策', '專家網絡隱私', '顧問資料保護'],
    legalLabel: '法律聲明',
    title: '隱私權政策',
    effectiveDateLabel: '生效日期',
    effectiveDateValue: '2026年8月15日',
    introduction:
      'Learnmark 致力於保護您的隱私。本隱私權聲明說明我們如何處理透過網站、客戶專案請求、專家網絡活動、篩選、顧問服務協調與相關支援所蒐集的個人資訊。本聲明適用於未另行提供獨立隱私通知的 Learnmark 服務。',
    tableOfContentsTitle: '目錄',
    tableOfContents: {
      informationWeCollect: '我們蒐集的資訊',
      howWeUseYourInformation: '我們如何使用您的資訊',
      informationSharing: '資訊分享',
      websiteProcessing: '網站表單與分析',
      dataLifecycle: '跨境處理、保留與您的權利',
      serviceBoundary: '公開網站與服務邊界',
      security: '安全性',
      changesToThisPrivacyStatement: '本隱私權聲明的變更',
      contactUs: '聯絡我們',
    },
    informationWeCollectTitle: '我們蒐集的資訊',
    informationWeCollectIntro:
      '當您瀏覽網站、提交專案、表達加入專家網絡的意願、參與篩選或顧問服務時，Learnmark 會蒐集相關資訊。這些資訊可能包括：',
    collectedInformationItems: [
      {
        name: '聯絡資訊。',
        description: '您的姓名、工作電子郵件、公司、專業聯絡方式與通訊偏好。',
      },
      {
        name: '專案與顧問服務資訊。',
        description: '客戶專案簡報、研究主題、目標輪廓、篩選答覆、可用時間、約定條件、排程與合作紀錄。',
      },
      {
        name: '專業檔案資訊。',
        description: '對於專家，包括任職經歷、職位、產業、市場、語言、專業能力、資格及揭露的限制或衝突。',
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
      'Learnmark 使用所蒐集的資訊評估並確定客戶專案範圍；識別、篩選並呈現相關專家；評估潛在衝突與限制；協調顧問服務條件、排程、支援與付款；維護與改進服務；與參與者溝通；防止濫用；並遵守法律義務。我們不會利用專案或專家資訊要求揭露機密、專有或重大非公開資訊。',
    informationSharingTitle: '資訊分享',
    informationSharingBody:
      '除本隱私權聲明所述情況外，Learnmark 不會向第三方出售、出租或分享您的個人資訊。在下列情況下，我們可能會與第三方分享您的個人資訊：',
    informationSharingItems: [
      '在取得您的同意後。',
      '在評估適配度、協調獲准合作或提供所需服務時，於客戶與候選專家之間進行必要分享。',
      '為遵守法律義務或回應合法要求。',
      '為保護 Learnmark、我們的使用者及其他人的權利與安全。',
      '與代表我們提供服務的供應商分享，例如表單處理、託管、分析、通訊、排程與付款支援。',
    ],
    websiteProcessingTitle: '網站表單與分析',
    websiteProcessingBody:
      '公開聯絡表單會將您填寫的欄位、請求類型、期望時間、留言與同意狀態傳送至 Formspree 以完成表單投遞。本網站使用 Google Analytics 衡量造訪與互動；Google 可能依其條款處理裝置、瀏覽器、IP 衍生資訊、Cookie 與使用資料。請勿透過公開表單提交身分證件、銀行資料、機密專案內容或重大非公開資訊。',
    dataLifecycleTitle: '跨境處理、保留與您的權利',
    dataLifecycleBody:
      '網站及服務供應商可能在您所在國家或地區之外處理資訊。Learnmark 僅在合理必要期間內保留資訊，用於分流與回覆諮詢、保護網站、履行義務及解決爭議。依適用法律，您可透過 privacy@learnmark.com 請求存取、更正、刪除、限制處理或撤回同意。已接受專案的控制者與處理者角色、處理地區及保留期限將於適用合約或隱私通知中說明。',
    serviceBoundaryTitle: '公開網站與服務邊界',
    serviceBoundaryBody:
      '本網站用於蒐集諮詢線索並說明 Learnmark 的營運模型。提交資訊不會建立帳號、接受專案、邀請專家、核准合規或形成合約。身分核驗、制裁篩查、AI 音訊或轉寫、專案交付與付款處理不會透過公開聯絡表單執行，使用前須適用獨立條款與通知。',
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
    seoDescription: 'Learnmark がウェブサイトと専門家コンサルテーションに関する情報を収集、利用、共有、保護する方法をご確認ください。',
    seoKeywords: ['Learnmark プライバシーポリシー', '専門家ネットワークのプライバシー', 'コンサルテーションデータ保護'],
    legalLabel: '法的情報',
    title: 'プライバシーポリシー',
    effectiveDateLabel: '発効日',
    effectiveDateValue: '2026年8月15日',
    introduction:
      'Learnmark はお客様のプライバシー保護に取り組んでいます。本声明は、ウェブサイト、クライアント案件の依頼、専門家ネットワーク活動、適格性確認、コンサルテーションの調整、関連サポートを通じて収集する個人情報の取扱いを説明します。個別のプライバシー通知がない Learnmark サービスに適用されます。',
    tableOfContentsTitle: '目次',
    tableOfContents: {
      informationWeCollect: '当社が収集する情報',
      howWeUseYourInformation: '情報の利用方法',
      informationSharing: '情報共有',
      websiteProcessing: 'ウェブフォームとアクセス解析',
      dataLifecycle: '国外処理、保持、利用者の権利',
      serviceBoundary: '公開サイトとサービスの境界',
      security: 'セキュリティ',
      changesToThisPrivacyStatement: '本プライバシーに関する声明の変更',
      contactUs: 'お問い合わせ',
    },
    informationWeCollectTitle: '当社が収集する情報',
    informationWeCollectIntro:
      'Learnmark は、ウェブサイトの閲覧、案件の送信、専門家ネットワークへの参加意向、適格性確認、コンサルテーションへの参加時に情報を収集します。これには次の情報が含まれる場合があります。',
    collectedInformationItems: [
      {
        name: '連絡先情報。',
        description: '氏名、勤務先メール、会社、職業上の連絡先、コミュニケーション設定。',
      },
      {
        name: '案件・コンサルテーション情報。',
        description: '案件概要、調査テーマ、対象プロフィール、質問票回答、対応可能性、合意条件、日程、実施記録。',
      },
      {
        name: '専門プロフィール情報。',
        description: '専門家の職歴、役職、業界、市場、言語、専門分野、資格、申告された制限や利益相反。',
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
      'Learnmark は、案件の評価とスコープ設定、専門家の特定・適格性確認・提示、利益相反と制限の評価、条件・日程・サポート・支払の調整、サービス改善、参加者との連絡、不正防止、法的義務の履行に情報を利用します。機密、専有、重要な未公開情報の開示を求めるためには利用しません。',
    informationSharingTitle: '情報共有',
    informationSharingBody:
      '本プライバシーに関する声明に記載する場合を除き、Learnmark はお客様の個人情報を第三者に販売、賃貸、または共有しません。以下の場合に限り、第三者と個人情報を共有することがあります。',
    informationSharingItems: [
      'お客様の同意がある場合。',
      '適合性の評価、承認済み案件の調整、依頼されたサービスの提供に必要な範囲で、クライアントと候補専門家の間で共有する場合。',
      '法的義務の遵守または適法な要請への対応が必要な場合。',
      'Learnmark、当社ユーザー、その他の権利と安全を保護するために必要な場合。',
      'フォーム処理、ホスティング、分析、通信、日程調整、支払支援など、当社に代わってサービスを提供する事業者と共有する場合。',
    ],
    websiteProcessingTitle: 'ウェブフォームとアクセス解析',
    websiteProcessingBody:
      '公開お問い合わせフォームは、入力項目、依頼種別、希望時期、メッセージ、同意状態を Formspree へ送信します。本サイトは訪問と操作の計測に Google Analytics を使用し、Google の規約に基づいて端末、ブラウザ、IP 由来情報、Cookie、利用データが処理される場合があります。本人確認書類、銀行情報、機密の案件内容、重要な未公開情報を送信しないでください。',
    dataLifecycleTitle: '国外処理、保持、利用者の権利',
    dataLifecycleBody:
      'ウェブサイトやサービスの事業者は、お客様の国以外で情報を処理する場合があります。Learnmark は、問い合わせの振り分けと回答、サイト保護、義務履行、紛争解決に合理的に必要な期間のみ保持します。適用法に応じて、privacy@learnmark.com へアクセス、訂正、削除、処理制限、同意撤回を請求できます。受諾された案件の管理者・処理者の役割、処理地域、保持期間は契約または個別通知で示します。',
    serviceBoundaryTitle: '公開サイトとサービスの境界',
    serviceBoundaryBody:
      '本サイトは問い合わせを受け付け、Learnmark の運用モデルを説明します。送信によってアカウント、案件受諾、専門家招待、コンプライアンス承認、契約は成立しません。本人確認、制裁確認、AI 音声・文字起こし、案件実施、支払処理は公開フォームでは行わず、利用前に別途の条件と通知が適用されます。',
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
    seoDescription: 'Découvrez comment Learnmark collecte, utilise, partage et protège les informations liées au site et aux consultations d’experts.',
    seoKeywords: ['politique de confidentialité Learnmark', 'confidentialité réseau d’experts', 'protection des données de consultation'],
    legalLabel: 'Mentions légales',
    title: 'Politique de confidentialité',
    effectiveDateLabel: 'Date d\'entrée en vigueur',
    effectiveDateValue: '15 août 2026',
    introduction:
      'Learnmark s\'engage à protéger votre vie privée. La présente déclaration décrit le traitement des informations personnelles recueillies via notre site, les demandes de projets clients, les activités du réseau d’experts, la qualification, la coordination des consultations et l’assistance associée. Elle s’applique aux services Learnmark sans avis de confidentialité distinct.',
    tableOfContentsTitle: 'Table des matières',
    tableOfContents: {
      informationWeCollect: 'Informations que nous collectons',
      howWeUseYourInformation: 'Comment nous utilisons vos informations',
      informationSharing: 'Partage d\'informations',
      websiteProcessing: 'Formulaires et mesure d’audience',
      dataLifecycle: 'Transferts, conservation et droits',
      serviceBoundary: 'Limite entre site public et services',
      security: 'Sécurité',
      changesToThisPrivacyStatement: 'Modifications de la présente Déclaration de confidentialité',
      contactUs: 'Nous contacter',
    },
    informationWeCollectTitle: 'Informations que nous collectons',
    informationWeCollectIntro:
      'Learnmark collecte des informations lorsque vous visitez le site, soumettez un projet, exprimez votre intérêt pour le réseau, répondez à une qualification ou participez à une consultation. Elles peuvent inclure :',
    collectedInformationItems: [
      {
        name: 'Informations de contact.',
        description: 'Votre nom, e-mail professionnel, entreprise, coordonnées professionnelles et préférences de communication.',
      },
      {
        name: 'Informations de projet et de consultation.',
        description: 'Briefs clients, thèmes, profils visés, réponses, disponibilité, conditions convenues, calendrier et traces de mission.',
      },
      {
        name: 'Informations de profil professionnel.',
        description: 'Pour les experts : emplois, fonctions, secteurs, marchés, langues, expertise, qualifications, restrictions et conflits déclarés.',
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
      'Learnmark utilise ces informations pour évaluer et cadrer les projets ; identifier, qualifier et présenter les experts ; évaluer conflits et restrictions ; coordonner conditions, calendrier, assistance et paiement ; maintenir et améliorer les services ; communiquer ; prévenir les abus ; et respecter ses obligations légales. Nous ne les utilisons pas pour demander des informations confidentielles, propriétaires ou importantes non publiques.',
    informationSharingTitle: 'Partage d\'informations',
    informationSharingBody:
      'Learnmark ne vend, ne loue et ne partage pas vos informations personnelles avec des tiers, sauf dans les cas décrits dans la présente Déclaration de confidentialité. Nous pouvons partager vos informations personnelles avec des tiers dans les circonstances suivantes :',
    informationSharingItems: [
      'Avec votre consentement.',
      'Entre clients et experts potentiels lorsque cela est nécessaire pour évaluer l’adéquation, coordonner une mission approuvée ou fournir le service demandé.',
      'Pour respecter des obligations légales ou répondre à des demandes légitimes.',
      'Pour protéger les droits et la sécurité de Learnmark, de nos utilisateurs et d\'autrui.',
      'Avec des prestataires agissant pour notre compte, notamment pour les formulaires, l’hébergement, l’analyse, les communications, la planification et les paiements.',
    ],
    websiteProcessingTitle: 'Formulaires et mesure d’audience',
    websiteProcessingBody:
      'Le formulaire public transmet à Formspree les champs saisis, le type de demande, le calendrier, le message et l’état du consentement. Le site utilise Google Analytics pour mesurer les visites et interactions ; Google peut traiter des données d’appareil, de navigateur, dérivées de l’IP, de cookies et d’usage selon ses conditions. Ne transmettez ni pièce d’identité, ni coordonnées bancaires, ni contenu confidentiel, ni information importante non publique.',
    dataLifecycleTitle: 'Transferts internationaux, conservation et vos droits',
    dataLifecycleBody:
      'Les prestataires du site et des services peuvent traiter les informations hors de votre pays. Learnmark les conserve uniquement pendant la durée raisonnablement nécessaire pour orienter et répondre, protéger le site, respecter ses obligations et résoudre les litiges. Selon la loi applicable, vous pouvez demander accès, rectification, suppression, limitation ou retrait du consentement à privacy@learnmark.com. Les rôles, régions de traitement et durées d’un projet accepté seront précisés dans le contrat ou l’avis applicable.',
    serviceBoundaryTitle: 'Limite entre site public et services',
    serviceBoundaryBody:
      'Ce site recueille des demandes et présente le modèle opérationnel Learnmark. Un envoi ne crée ni compte, ni acceptation de projet, ni invitation expert, ni approbation de conformité, ni contrat. Vérification d’identité, sanctions, audio ou transcription IA, livraison et paiements ne sont pas exécutés via le formulaire public et nécessitent des conditions et avis distincts.',
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
    seoDescription: 'Erfahren Sie, wie Learnmark Informationen zu Website und Expertenberatung erfasst, verwendet, weitergibt und schützt.',
    seoKeywords: ['Learnmark Datenschutzerklärung', 'Datenschutz Expertennetzwerk', 'Datenschutz Beratungsdaten'],
    legalLabel: 'Rechtliches',
    title: 'Datenschutzerklärung',
    effectiveDateLabel: 'Gültig ab',
    effectiveDateValue: '15. August 2026',
    introduction:
      'Learnmark verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Erklärung beschreibt den Umgang mit personenbezogenen Daten aus unserer Website, Kundenprojektanfragen, Aktivitäten im Expertennetzwerk, Qualifizierung, Koordination von Beratungen und zugehörigem Support. Sie gilt für Learnmark-Dienste ohne gesonderten Datenschutzhinweis.',
    tableOfContentsTitle: 'Inhaltsverzeichnis',
    tableOfContents: {
      informationWeCollect: 'Welche Informationen wir erfassen',
      howWeUseYourInformation: 'Wie wir Ihre Informationen verwenden',
      informationSharing: 'Weitergabe von Informationen',
      websiteProcessing: 'Webformulare und Nutzungsanalyse',
      dataLifecycle: 'Grenzüberschreitende Verarbeitung, Aufbewahrung und Rechte',
      serviceBoundary: 'Abgrenzung von Website und Services',
      security: 'Sicherheit',
      changesToThisPrivacyStatement: 'Änderungen dieser Datenschutzerklärung',
      contactUs: 'Kontakt',
    },
    informationWeCollectTitle: 'Welche Informationen wir erfassen',
    informationWeCollectIntro:
      'Learnmark erfasst Informationen, wenn Sie unsere Website besuchen, ein Projekt einreichen, Interesse am Expertennetzwerk zeigen, an einer Qualifizierung oder Beratung teilnehmen. Dazu können gehören:',
    collectedInformationItems: [
      {
        name: 'Kontaktinformationen.',
        description: 'Name, geschäftliche E-Mail-Adresse, Unternehmen, berufliche Kontaktdaten und Kommunikationseinstellungen.',
      },
      {
        name: 'Projekt- und Beratungsinformationen.',
        description: 'Kundenbriefings, Themen, Zielprofile, Antworten, Verfügbarkeit, vereinbarte Bedingungen, Termine und Leistungsnachweise.',
      },
      {
        name: 'Berufliche Profilinformationen.',
        description: 'Für Fachleute etwa Beschäftigung, Rollen, Branchen, Märkte, Sprachen, Fachwissen, Qualifikationen und gemeldete Einschränkungen oder Konflikte.',
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
      'Learnmark verwendet Informationen zur Bewertung und Planung von Projekten, Identifizierung und Qualifizierung von Fachleuten, Prüfung von Konflikten und Einschränkungen, Koordination von Bedingungen, Terminen, Support und Zahlungen, Verbesserung der Dienste, Kommunikation, Missbrauchsprävention und Erfüllung gesetzlicher Pflichten. Wir nutzen sie nicht, um vertrauliche, geschützte oder wesentliche nicht öffentliche Informationen anzufordern.',
    informationSharingTitle: 'Weitergabe von Informationen',
    informationSharingBody:
      'Learnmark verkauft, vermietet oder teilt Ihre personenbezogenen Informationen nicht mit Dritten, außer wie in dieser Datenschutzerklärung beschrieben. Wir können Ihre personenbezogenen Informationen in folgenden Fällen an Dritte weitergeben:',
    informationSharingItems: [
      'Mit Ihrer Zustimmung.',
      'Zwischen Kunden und möglichen Fachleuten, soweit dies zur Eignungsprüfung, Koordination eines genehmigten Auftrags oder Leistungserbringung erforderlich ist.',
      'Zur Erfüllung gesetzlicher Verpflichtungen oder zur Beantwortung rechtmäßiger Anfragen.',
      'Zum Schutz der Rechte und Sicherheit von Learnmark, unseren Nutzern und anderen.',
      'An Dienstleister für Formularverarbeitung, Hosting, Analysen, Kommunikation, Terminplanung und Zahlungsunterstützung.',
    ],
    websiteProcessingTitle: 'Webformulare und Nutzungsanalyse',
    websiteProcessingBody:
      'Das öffentliche Kontaktformular sendet Eingabefelder, Anfrageart, Zeitrahmen, Nachricht und Einwilligungsstatus zur Zustellung an Formspree. Diese Website verwendet Google Analytics zur Messung von Besuchen und Interaktionen; Google kann nach eigenen Bedingungen Geräte-, Browser-, IP-abgeleitete, Cookie- und Nutzungsdaten verarbeiten. Senden Sie keine Ausweise, Bankdaten, vertraulichen Projektinhalte oder wesentlichen nicht öffentlichen Informationen.',
    dataLifecycleTitle: 'Grenzüberschreitende Verarbeitung, Aufbewahrung und Ihre Rechte',
    dataLifecycleBody:
      'Website- und Servicedienstleister können Informationen außerhalb Ihres Landes verarbeiten. Learnmark bewahrt sie nur so lange auf, wie es zur Zuordnung und Beantwortung, zum Schutz der Website, zur Pflichterfüllung und Streitbeilegung vernünftigerweise nötig ist. Je nach Recht können Sie unter privacy@learnmark.com Auskunft, Berichtigung, Löschung, Einschränkung oder Widerruf verlangen. Rollen, Verarbeitungsregionen und Fristen eines angenommenen Projekts stehen im Vertrag oder Datenschutzhinweis.',
    serviceBoundaryTitle: 'Abgrenzung von Website und Services',
    serviceBoundaryBody:
      'Diese Website sammelt Anfragen und erläutert das Learnmark-Betriebsmodell. Eine Übermittlung erstellt weder Konto noch Projektannahme, Experteneinladung, Compliance-Freigabe oder Vertrag. Identitäts- und Sanktionsprüfung, KI-Audio oder Transkription, Projektleistung und Zahlungsabwicklung erfolgen nicht über das öffentliche Formular und benötigen eigene Bedingungen und Hinweise.',
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