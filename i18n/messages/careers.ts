import type { Locale } from '../config'

type JobId =
  | 'software-engineer'
  | 'solutions-consultant'
  | 'regional-marketing-manager'
  | 'key-account-manager'
  | 'senior-sales-manager'

type CareerJob = {
  id: JobId
  title: string
  location: string
  employmentType: string
  responsibilities: string[]
  qualifications: string[]
}

type CareersMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  heroTitle: string
  heroDescription: string
  stats: Array<{ name: string; value: string }>
  openRolesTitle: string
  openRolesDescription: string
  responsibilitiesLabel: string
  qualificationsLabel: string
  applyForRole: string
  applyEmailSubjectPrefix: string
  noMatchTitle: string
  noMatchDescription: string
  emailHr: string
  jobs: CareerJob[]
}

export const careersMessages: Record<Locale, CareersMessages> = {
  en: {
    seoTitle: 'Careers',
    seoDescription: 'Join Learnmark and help teams deliver AI products, cloud platforms, and reliable modern software systems.',
    seoKeywords: ['Learnmark careers', 'AI consulting jobs', 'cloud consulting jobs', 'remote software roles'],
    heroTitle: 'Join our team',
    heroDescription:
      'We invite you to embark on an exciting professional journey by working with us. Collaborate with a talented and diverse team, contribute to innovative projects, and develop your skills in a dynamic and supportive environment.',
    stats: [
      { name: 'Roles are hiring', value: '5' },
      { name: 'Locations worldwide', value: '3' },
      { name: 'Work from home', value: 'All time' },
      { name: 'Paid time off', value: 'Unlimited' },
    ],
    openRolesTitle: 'Open Roles',
    openRolesDescription:
      'We are looking for talented individuals to join our team. If you are passionate about technology and want to work on exciting projects, we would love to hear from you.',
    responsibilitiesLabel: 'Responsibilities',
    qualificationsLabel: 'Qualifications',
    applyForRole: 'Apply for this role',
    applyEmailSubjectPrefix: 'Application for',
    noMatchTitle: "Don't see a role that fits?",
    noMatchDescription: "We are always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.",
    emailHr: 'Email HR',
    jobs: [
      {
        id: 'software-engineer',
        title: 'Software Engineer',
        location: 'Remote',
        employmentType: 'Full-time',
        responsibilities: [
          'Design, develop, and maintain software applications and systems',
          'Collaborate with other team members to ensure that software meets customer needs',
          'Write clean, maintainable code that is scalable and secure',
          'Perform code reviews to ensure that software is of high quality',
          'Identify and address technical debt and other areas for improvement',
        ],
        qualifications: [
          'Bachelor\'s degree in Computer Science or related field',
          '2+ years of experience in software development',
          'Proficiency in one or more programming languages, such as Java, Python, or JavaScript',
          'Experience with web development frameworks, such as React or Angular',
          'Strong problem-solving and analytical skills',
        ],
      },
      {
        id: 'solutions-consultant',
        title: 'Solutions Consultant',
        location: 'Remote',
        employmentType: 'Full-time',
        responsibilities: [
          'Work with customers to understand their business needs',
          'Develop solutions that meet customer requirements',
          'Collaborate with sales team to ensure that solutions are aligned with customer needs',
          'Provide technical expertise and guidance to customers',
          'Deliver product demonstrations and presentations to customers',
        ],
        qualifications: [
          'Bachelor\'s degree in Computer Science or related field',
          '2+ years of experience in solutions consulting or related field',
          'Experience working with customers to understand business needs',
          'Strong problem-solving and analytical skills',
          'Excellent communication and presentation skills',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: 'Regional Marketing Manager',
        location: 'Remote',
        employmentType: 'Full-time',
        responsibilities: [
          'Develop and execute marketing strategies to drive growth in your region',
          'Collaborate with sales and product teams to align marketing initiatives with business objectives',
          'Analyze market trends and customer needs to identify opportunities for growth',
          'Manage marketing campaigns and events to generate leads and drive sales',
          'Provide guidance and support to marketing team members',
        ],
        qualifications: [
          'Bachelor\'s degree in Marketing or related field',
          '5+ years of experience in marketing',
          'Experience developing and executing marketing strategies',
          'Strong analytical and problem-solving skills',
          'Excellent communication and leadership skills',
        ],
      },
      {
        id: 'key-account-manager',
        title: 'Key Account Manager',
        location: 'Remote',
        employmentType: 'Full-time',
        responsibilities: [
          'Manage relationships with key customers to drive growth in your accounts',
          'Collaborate with sales and product teams to ensure that customer needs are met',
          'Develop account plans and strategies to achieve business objectives',
          'Identify opportunities for growth and expansion in your accounts',
          'Provide guidance and support to sales team members',
        ],
        qualifications: [
          'Bachelor\'s degree in Business or related field',
          '5+ years of experience in account management',
          'Experience managing relationships with key customers',
          'Strong problem-solving and analytical skills',
          'Excellent communication and negotiation skills',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: 'Senior Sales Manager',
        location: 'Remote',
        employmentType: 'Full-time',
        responsibilities: [
          'Lead sales team to achieve sales objectives',
          'Develop sales strategies to drive growth in your region',
          'Collaborate with marketing and product teams to align sales initiatives with business objectives',
          'Provide guidance and support to sales team members',
          'Analyze sales data and market trends to identify opportunities for growth',
        ],
        qualifications: [
          'Bachelor\'s degree in Business or related field',
          '5+ years of experience in sales management',
          'Experience developing and executing sales strategies',
          'Strong problem-solving and analytical skills',
          'Excellent communication and leadership skills',
        ],
      },
    ],
  },
  'zh-CN': {
    seoTitle: '招聘',
    seoDescription: '加入 Learnmark，与我们一起帮助团队交付 AI 产品、云平台与可靠的现代软件系统。',
    seoKeywords: ['Learnmark 招聘', 'AI 咨询岗位', '云咨询岗位', '远程软件岗位'],
    heroTitle: '加入我们的团队',
    heroDescription:
      '我们诚邀你开启一段令人兴奋的职业旅程。与才华横溢且多元化的团队协作，参与创新项目，并在充满活力与支持的环境中持续成长。',
    stats: [
      { name: '在招岗位', value: '5' },
      { name: '覆盖地区', value: '3' },
      { name: '远程办公', value: '长期支持' },
      { name: '带薪休假', value: '不限额度' },
    ],
    openRolesTitle: '开放岗位',
    openRolesDescription:
      '我们正在寻找优秀人才加入团队。如果你热爱技术并希望参与有挑战的项目，我们非常期待收到你的申请。',
    responsibilitiesLabel: '岗位职责',
    qualificationsLabel: '任职要求',
    applyForRole: '申请该职位',
    applyEmailSubjectPrefix: '应聘职位：',
    noMatchTitle: '没有适合你的岗位？',
    noMatchDescription: '我们始终欢迎优秀人才。发送你的简历给我们，我们会在未来有合适机会时与你联系。',
    emailHr: '联系 HR',
    jobs: [
      {
        id: 'software-engineer',
        title: '软件工程师',
        location: '远程',
        employmentType: '全职',
        responsibilities: [
          '设计、开发并维护软件应用与系统',
          '与团队成员协作，确保软件满足客户需求',
          '编写整洁、可维护、可扩展且安全的代码',
          '执行代码评审，确保软件质量',
          '识别并处理技术债及其他可改进领域',
        ],
        qualifications: [
          '计算机科学或相关专业本科及以上学历',
          '2 年以上软件开发经验',
          '熟练掌握一种或多种编程语言，如 Java、Python 或 JavaScript',
          '有 React、Angular 等 Web 开发框架经验',
          '具备较强的问题分析与解决能力',
        ],
      },
      {
        id: 'solutions-consultant',
        title: '解决方案顾问',
        location: '远程',
        employmentType: '全职',
        responsibilities: [
          '与客户沟通并理解其业务需求',
          '制定满足客户要求的解决方案',
          '与销售团队协作，确保方案与客户需求一致',
          '向客户提供技术专业建议与指导',
          '向客户进行产品演示与方案讲解',
        ],
        qualifications: [
          '计算机科学或相关专业本科及以上学历',
          '2 年以上解决方案咨询或相关工作经验',
          '具备与客户协作并梳理业务需求的经验',
          '具备较强的问题分析与解决能力',
          '具备出色的沟通与演示能力',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: '区域市场经理',
        location: '远程',
        employmentType: '全职',
        responsibilities: [
          '制定并执行区域市场策略，推动业务增长',
          '与销售及产品团队协作，使市场活动与业务目标一致',
          '分析市场趋势与客户需求，识别增长机会',
          '管理市场活动与事件，获取线索并推动销售',
          '为市场团队成员提供指导与支持',
        ],
        qualifications: [
          '市场营销或相关专业本科及以上学历',
          '5 年以上市场营销经验',
          '具备制定并执行市场策略的经验',
          '具备较强的分析能力与问题解决能力',
          '具备优秀的沟通与领导能力',
        ],
      },
      {
        id: 'key-account-manager',
        title: '大客户经理',
        location: '远程',
        employmentType: '全职',
        responsibilities: [
          '维护核心客户关系，推动所负责客户增长',
          '与销售及产品团队协作，确保客户需求得到满足',
          '制定客户计划与策略，实现业务目标',
          '识别客户内增长与拓展机会',
          '为销售团队成员提供指导与支持',
        ],
        qualifications: [
          '商业管理或相关专业本科及以上学历',
          '5 年以上客户管理经验',
          '具备维护核心客户关系的经验',
          '具备较强的问题分析与解决能力',
          '具备优秀的沟通与谈判能力',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: '高级销售经理',
        location: '远程',
        employmentType: '全职',
        responsibilities: [
          '带领销售团队达成销售目标',
          '制定销售策略，推动区域业务增长',
          '与市场及产品团队协作，使销售举措与业务目标一致',
          '为销售团队成员提供指导与支持',
          '分析销售数据与市场趋势，识别增长机会',
        ],
        qualifications: [
          '商业管理或相关专业本科及以上学历',
          '5 年以上销售管理经验',
          '具备制定并执行销售策略的经验',
          '具备较强的问题分析与解决能力',
          '具备优秀的沟通与领导能力',
        ],
      },
    ],
  },
  'zh-TW': {
    seoTitle: '徵才',
    seoDescription: '加入 Learnmark，與我們一起協助團隊交付 AI 產品、雲端平台與可靠的現代軟體系統。',
    seoKeywords: ['Learnmark 徵才', 'AI 顧問職缺', '雲端顧問職缺', '遠端軟體職缺'],
    heroTitle: '加入我們的團隊',
    heroDescription:
      '我們誠摯邀請你展開一段令人期待的職涯旅程。與多元且優秀的團隊合作，參與創新專案，並在充滿活力與支持的環境中持續成長。',
    stats: [
      { name: '招募職缺', value: '5' },
      { name: '全球據點', value: '3' },
      { name: '遠端工作', value: '長期支援' },
      { name: '有薪休假', value: '不設上限' },
    ],
    openRolesTitle: '開放職缺',
    openRolesDescription:
      '我們正在尋找優秀人才加入團隊。如果你熱愛技術並希望參與具挑戰性的專案，我們非常期待你的申請。',
    responsibilitiesLabel: '工作職責',
    qualificationsLabel: '資格條件',
    applyForRole: '應徵此職位',
    applyEmailSubjectPrefix: '應徵職位：',
    noMatchTitle: '沒有看到適合的職位？',
    noMatchDescription: '我們一直在尋找優秀人才。把你的履歷寄給我們，我們會在未來有合適機會時與你聯繫。',
    emailHr: '聯絡 HR',
    jobs: [
      {
        id: 'software-engineer',
        title: '軟體工程師',
        location: '遠端',
        employmentType: '全職',
        responsibilities: [
          '設計、開發與維護軟體應用程式與系統',
          '與團隊成員協作，確保軟體符合客戶需求',
          '撰寫乾淨、可維護、可擴充且安全的程式碼',
          '執行程式碼審查，確保軟體品質',
          '識別並處理技術債與其他可改善項目',
        ],
        qualifications: [
          '資訊工程或相關科系學士以上學歷',
          '2 年以上軟體開發經驗',
          '熟悉一種或多種程式語言，如 Java、Python 或 JavaScript',
          '具備 React、Angular 等 Web 開發框架經驗',
          '具備良好的問題分析與解決能力',
        ],
      },
      {
        id: 'solutions-consultant',
        title: '解決方案顧問',
        location: '遠端',
        employmentType: '全職',
        responsibilities: [
          '與客戶合作，深入了解其商業需求',
          '規劃並提出符合客戶需求的解決方案',
          '與業務團隊協作，確保方案與客戶需求一致',
          '為客戶提供技術專業建議與指導',
          '向客戶進行產品示範與方案簡報',
        ],
        qualifications: [
          '資訊工程或相關科系學士以上學歷',
          '2 年以上解決方案顧問或相關經驗',
          '具備與客戶合作梳理商業需求的經驗',
          '具備良好的問題分析與解決能力',
          '具備優秀的溝通與簡報能力',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: '區域行銷經理',
        location: '遠端',
        employmentType: '全職',
        responsibilities: [
          '制定並執行區域行銷策略，推動成長',
          '與業務與產品團隊協作，使行銷計畫對齊商業目標',
          '分析市場趨勢與客戶需求，找出成長機會',
          '管理行銷活動與事件，創造商機並推動銷售',
          '為行銷團隊成員提供指導與支援',
        ],
        qualifications: [
          '行銷或相關科系學士以上學歷',
          '5 年以上行銷經驗',
          '具備制定與執行行銷策略的經驗',
          '具備良好的分析能力與問題解決能力',
          '具備優秀的溝通與領導能力',
        ],
      },
      {
        id: 'key-account-manager',
        title: '關鍵客戶經理',
        location: '遠端',
        employmentType: '全職',
        responsibilities: [
          '維繫關鍵客戶關係，推動所屬客戶成長',
          '與業務與產品團隊協作，確保客戶需求獲得滿足',
          '制定客戶計畫與策略，達成商業目標',
          '發掘客戶中的成長與擴張機會',
          '為業務團隊成員提供指導與支援',
        ],
        qualifications: [
          '商管或相關科系學士以上學歷',
          '5 年以上客戶管理經驗',
          '具備維繫關鍵客戶關係的實務經驗',
          '具備良好的問題分析與解決能力',
          '具備優秀的溝通與談判能力',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: '資深業務經理',
        location: '遠端',
        employmentType: '全職',
        responsibilities: [
          '帶領業務團隊達成銷售目標',
          '制定銷售策略，推動區域成長',
          '與行銷及產品團隊協作，使銷售行動對齊商業目標',
          '為業務團隊成員提供指導與支援',
          '分析銷售數據與市場趨勢，找出成長機會',
        ],
        qualifications: [
          '商管或相關科系學士以上學歷',
          '5 年以上業務管理經驗',
          '具備制定與執行銷售策略的經驗',
          '具備良好的問題分析與解決能力',
          '具備優秀的溝通與領導能力',
        ],
      },
    ],
  },
  ja: {
    seoTitle: '採用情報',
    seoDescription: 'Learnmark に参加し、AI 製品、クラウドプラットフォーム、信頼性の高いモダンなソフトウェアシステムの提供を一緒に実現しましょう。',
    seoKeywords: ['Learnmark 採用', 'AI コンサルティング 求人', 'クラウドコンサルティング 求人', 'リモート ソフトウェア職'],
    heroTitle: 'チームに参加しませんか',
    heroDescription:
      '私たちと一緒に、刺激的なキャリアを始めましょう。多様で優秀なメンバーと協力し、革新的なプロジェクトに取り組み、活気あるサポート環境でスキルを伸ばせます。',
    stats: [
      { name: '募集中ポジション', value: '5' },
      { name: '対応地域', value: '3' },
      { name: '在宅勤務', value: '常時可能' },
      { name: '有給休暇', value: '上限なし' },
    ],
    openRolesTitle: '募集中の職種',
    openRolesDescription:
      '私たちは優秀な人材を募集しています。テクノロジーに情熱があり、挑戦的なプロジェクトに取り組みたい方からのご応募をお待ちしています。',
    responsibilitiesLabel: '業務内容',
    qualificationsLabel: '応募資格',
    applyForRole: 'この職種に応募する',
    applyEmailSubjectPrefix: '応募職種：',
    noMatchTitle: '希望に合う職種が見つかりませんか？',
    noMatchDescription: '私たちは常に優秀な人材を求めています。履歴書をお送りください。将来の募集でご連絡します。',
    emailHr: 'HR にメール',
    jobs: [
      {
        id: 'software-engineer',
        title: 'ソフトウェアエンジニア',
        location: 'リモート',
        employmentType: '正社員',
        responsibilities: [
          'ソフトウェアアプリケーションとシステムの設計、開発、保守',
          'チームメンバーと連携し、顧客要件を満たすソフトウェアを実現',
          '拡張性とセキュリティを備えた、保守しやすいクリーンなコードを記述',
          'コードレビューを実施し、品質を担保',
          '技術的負債や改善領域を特定して対応',
        ],
        qualifications: [
          'コンピュータサイエンスまたは関連分野の学士号',
          '2 年以上のソフトウェア開発経験',
          'Java、Python、JavaScript など 1 つ以上の言語に精通',
          'React や Angular などの Web 開発フレームワーク経験',
          '高い問題解決力と分析力',
        ],
      },
      {
        id: 'solutions-consultant',
        title: 'ソリューションコンサルタント',
        location: 'リモート',
        employmentType: '正社員',
        responsibilities: [
          '顧客と連携し、ビジネス要件を把握',
          '顧客要件を満たすソリューションを設計',
          '営業チームと協力し、提案内容を顧客ニーズに整合',
          '顧客に技術的な知見とガイダンスを提供',
          '顧客向けに製品デモやプレゼンテーションを実施',
        ],
        qualifications: [
          'コンピュータサイエンスまたは関連分野の学士号',
          '2 年以上のソリューションコンサルティングまたは関連経験',
          '顧客と協働しビジネス要件を定義した経験',
          '高い問題解決力と分析力',
          '優れたコミュニケーション力とプレゼンテーション力',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: 'リージョナルマーケティングマネージャー',
        location: 'リモート',
        employmentType: '正社員',
        responsibilities: [
          '担当地域の成長を促進するマーケティング戦略の策定と実行',
          '営業・プロダクトチームと連携し、施策を事業目標に整合',
          '市場トレンドと顧客ニーズを分析し、成長機会を特定',
          'リード創出と売上拡大に向けたキャンペーンやイベントを運営',
          'マーケティングチームメンバーへの指導と支援',
        ],
        qualifications: [
          'マーケティングまたは関連分野の学士号',
          '5 年以上のマーケティング経験',
          'マーケティング戦略の策定・実行経験',
          '高い分析力と問題解決力',
          '優れたコミュニケーション力とリーダーシップ',
        ],
      },
      {
        id: 'key-account-manager',
        title: 'キーアカウントマネージャー',
        location: 'リモート',
        employmentType: '正社員',
        responsibilities: [
          '主要顧客との関係を構築・維持し、担当アカウントの成長を推進',
          '営業・プロダクトチームと協力し、顧客要件を確実に満たす',
          '事業目標達成に向けたアカウント計画と戦略を策定',
          '担当アカウント内の成長・拡大機会を特定',
          '営業チームメンバーへの指導と支援',
        ],
        qualifications: [
          'ビジネスまたは関連分野の学士号',
          '5 年以上のアカウントマネジメント経験',
          '主要顧客との関係構築・管理経験',
          '高い問題解決力と分析力',
          '優れたコミュニケーション力と交渉力',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: 'シニアセールスマネージャー',
        location: 'リモート',
        employmentType: '正社員',
        responsibilities: [
          '営業チームを率いて売上目標を達成',
          '担当地域の成長を促進する営業戦略を策定',
          'マーケティング・プロダクトチームと連携し施策を事業目標に整合',
          '営業チームメンバーへの指導と支援',
          '売上データと市場動向を分析し、成長機会を特定',
        ],
        qualifications: [
          'ビジネスまたは関連分野の学士号',
          '5 年以上の営業マネジメント経験',
          '営業戦略の策定・実行経験',
          '高い問題解決力と分析力',
          '優れたコミュニケーション力とリーダーシップ',
        ],
      },
    ],
  },
  fr: {
    seoTitle: 'Carrières',
    seoDescription: 'Rejoignez Learnmark et aidez les équipes à livrer des produits IA, des plateformes Cloud et des systèmes logiciels modernes et fiables.',
    seoKeywords: ['carrières Learnmark', 'emplois conseil IA', 'emplois conseil Cloud', 'postes logiciels à distance'],
    heroTitle: 'Rejoignez notre équipe',
    heroDescription:
      'Nous vous invitons à entamer un parcours professionnel stimulant avec nous. Collaborez avec une équipe talentueuse et diverse, contribuez à des projets innovants et développez vos compétences dans un environnement dynamique et bienveillant.',
    stats: [
      { name: 'Postes ouverts', value: '5' },
      { name: 'Zones couvertes', value: '3' },
      { name: 'Télétravail', value: 'En continu' },
      { name: 'Congés payés', value: 'Illimités' },
    ],
    openRolesTitle: 'Postes ouverts',
    openRolesDescription:
      'Nous recherchons des talents pour rejoindre notre équipe. Si vous êtes passionné par la technologie et souhaitez travailler sur des projets stimulants, nous serions ravis de vous connaître.',
    responsibilitiesLabel: 'Responsabilités',
    qualificationsLabel: 'Qualifications',
    applyForRole: 'Postuler à ce poste',
    applyEmailSubjectPrefix: 'Candidature pour :',
    noMatchTitle: 'Vous ne trouvez pas de poste adapté ?',
    noMatchDescription: 'Nous recherchons toujours des profils talentueux. Envoyez-nous votre CV et nous vous recontacterons pour de futures opportunités.',
    emailHr: 'Contacter les RH',
    jobs: [
      {
        id: 'software-engineer',
        title: 'Ingénieur logiciel',
        location: 'À distance',
        employmentType: 'Temps plein',
        responsibilities: [
          'Concevoir, développer et maintenir des applications et systèmes logiciels',
          'Collaborer avec les autres membres de l\'équipe pour répondre aux besoins clients',
          'Écrire un code propre, maintenable, évolutif et sécurisé',
          'Effectuer des revues de code pour garantir la qualité logicielle',
          'Identifier et traiter la dette technique et les axes d\'amélioration',
        ],
        qualifications: [
          'Licence en informatique ou domaine connexe',
          '2+ ans d\'expérience en développement logiciel',
          'Maîtrise d\'un ou plusieurs langages tels que Java, Python ou JavaScript',
          'Expérience avec des frameworks web comme React ou Angular',
          'Solides compétences d\'analyse et de résolution de problèmes',
        ],
      },
      {
        id: 'solutions-consultant',
        title: 'Consultant en solutions',
        location: 'À distance',
        employmentType: 'Temps plein',
        responsibilities: [
          'Travailler avec les clients pour comprendre leurs besoins métier',
          'Concevoir des solutions répondant aux exigences clients',
          'Collaborer avec l\'équipe commerciale pour aligner les solutions sur les besoins clients',
          'Fournir expertise technique et accompagnement aux clients',
          'Réaliser des démonstrations produit et des présentations clients',
        ],
        qualifications: [
          'Licence en informatique ou domaine connexe',
          '2+ ans d\'expérience en conseil en solutions ou domaine proche',
          'Expérience dans l\'analyse des besoins métier avec les clients',
          'Solides compétences d\'analyse et de résolution de problèmes',
          'Excellentes compétences en communication et présentation',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: 'Responsable marketing régional',
        location: 'À distance',
        employmentType: 'Temps plein',
        responsibilities: [
          'Définir et exécuter des stratégies marketing pour stimuler la croissance régionale',
          'Collaborer avec les équipes ventes et produit pour aligner les initiatives marketing',
          'Analyser tendances de marché et besoins clients pour identifier des opportunités',
          'Piloter campagnes et événements marketing pour générer des leads et soutenir les ventes',
          'Accompagner et encadrer les membres de l\'équipe marketing',
        ],
        qualifications: [
          'Licence en marketing ou domaine connexe',
          '5+ ans d\'expérience en marketing',
          'Expérience dans la définition et l\'exécution de stratégies marketing',
          'Solides compétences analytiques et de résolution de problèmes',
          'Excellentes compétences en communication et leadership',
        ],
      },
      {
        id: 'key-account-manager',
        title: 'Responsable grands comptes',
        location: 'À distance',
        employmentType: 'Temps plein',
        responsibilities: [
          'Gérer les relations avec les clients clés pour développer les comptes',
          'Collaborer avec les équipes ventes et produit pour répondre aux besoins clients',
          'Élaborer des plans de compte et des stratégies pour atteindre les objectifs',
          'Identifier les opportunités de croissance et d\'expansion sur les comptes',
          'Accompagner et soutenir les membres de l\'équipe commerciale',
        ],
        qualifications: [
          'Licence en commerce ou domaine connexe',
          '5+ ans d\'expérience en gestion de comptes',
          'Expérience dans la gestion de relations avec des clients stratégiques',
          'Solides compétences d\'analyse et de résolution de problèmes',
          'Excellentes compétences en communication et négociation',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: 'Responsable commercial senior',
        location: 'À distance',
        employmentType: 'Temps plein',
        responsibilities: [
          'Diriger l\'équipe commerciale pour atteindre les objectifs de vente',
          'Définir des stratégies commerciales pour accélérer la croissance régionale',
          'Collaborer avec marketing et produit pour aligner les initiatives commerciales',
          'Accompagner et soutenir les membres de l\'équipe commerciale',
          'Analyser les données de vente et le marché pour identifier des opportunités',
        ],
        qualifications: [
          'Licence en commerce ou domaine connexe',
          '5+ ans d\'expérience en management commercial',
          'Expérience dans la définition et l\'exécution de stratégies de vente',
          'Solides compétences d\'analyse et de résolution de problèmes',
          'Excellentes compétences en communication et leadership',
        ],
      },
    ],
  },
  de: {
    seoTitle: 'Karriere',
    seoDescription: 'Werden Sie Teil von Learnmark und helfen Sie Teams, KI-Produkte, Cloud-Plattformen und zuverlässige moderne Softwaresysteme zu liefern.',
    seoKeywords: ['Learnmark Karriere', 'KI-Beratung Jobs', 'Cloud-Beratung Jobs', 'Remote Software Rollen'],
    heroTitle: 'Werden Sie Teil unseres Teams',
    heroDescription:
      'Wir laden Sie ein, mit uns eine spannende berufliche Reise zu starten. Arbeiten Sie mit einem talentierten, vielfältigen Team zusammen, wirken Sie an innovativen Projekten mit und entwickeln Sie Ihre Fähigkeiten in einem dynamischen, unterstützenden Umfeld weiter.',
    stats: [
      { name: 'Offene Stellen', value: '5' },
      { name: 'Regionen weltweit', value: '3' },
      { name: 'Homeoffice', value: 'Jederzeit' },
      { name: 'Bezahlter Urlaub', value: 'Unbegrenzt' },
    ],
    openRolesTitle: 'Offene Positionen',
    openRolesDescription:
      'Wir suchen talentierte Menschen für unser Team. Wenn Sie Technologie begeistert und Sie an spannenden Projekten arbeiten möchten, freuen wir uns auf Ihre Bewerbung.',
    responsibilitiesLabel: 'Aufgaben',
    qualificationsLabel: 'Qualifikationen',
    applyForRole: 'Auf diese Stelle bewerben',
    applyEmailSubjectPrefix: 'Bewerbung auf:',
    noMatchTitle: 'Keine passende Rolle gefunden?',
    noMatchDescription: 'Wir sind immer auf der Suche nach talentierten Menschen. Senden Sie uns Ihren Lebenslauf, und wir berücksichtigen Sie bei zukünftigen Stellen.',
    emailHr: 'HR kontaktieren',
    jobs: [
      {
        id: 'software-engineer',
        title: 'Softwareentwickler',
        location: 'Remote',
        employmentType: 'Vollzeit',
        responsibilities: [
          'Softwareanwendungen und -systeme entwerfen, entwickeln und warten',
          'Mit Teammitgliedern zusammenarbeiten, um Kundenanforderungen zu erfüllen',
          'Sauberen, wartbaren, skalierbaren und sicheren Code schreiben',
          'Code-Reviews durchführen, um die Softwarequalität sicherzustellen',
          'Technische Schulden und weitere Verbesserungsbereiche identifizieren und adressieren',
        ],
        qualifications: [
          'Bachelorabschluss in Informatik oder einem verwandten Bereich',
          '2+ Jahre Erfahrung in der Softwareentwicklung',
          'Sicherer Umgang mit einer oder mehreren Programmiersprachen wie Java, Python oder JavaScript',
          'Erfahrung mit Web-Frameworks wie React oder Angular',
          'Ausgeprägte analytische Fähigkeiten und Problemlösungskompetenz',
        ],
      },
      {
        id: 'solutions-consultant',
        title: 'Solutions Consultant',
        location: 'Remote',
        employmentType: 'Vollzeit',
        responsibilities: [
          'Mit Kunden arbeiten, um deren geschäftliche Anforderungen zu verstehen',
          'Lösungen entwickeln, die Kundenanforderungen erfüllen',
          'Mit dem Vertriebsteam zusammenarbeiten, damit Lösungen auf Kundenbedürfnisse abgestimmt sind',
          'Technische Expertise und Beratung für Kunden bereitstellen',
          'Produktdemos und Präsentationen für Kunden durchführen',
        ],
        qualifications: [
          'Bachelorabschluss in Informatik oder einem verwandten Bereich',
          '2+ Jahre Erfahrung in der Lösungsberatung oder einem verwandten Bereich',
          'Erfahrung in der Arbeit mit Kunden zur Ermittlung geschäftlicher Anforderungen',
          'Ausgeprägte analytische Fähigkeiten und Problemlösungskompetenz',
          'Hervorragende Kommunikations- und Präsentationsfähigkeiten',
        ],
      },
      {
        id: 'regional-marketing-manager',
        title: 'Regional Marketing Manager',
        location: 'Remote',
        employmentType: 'Vollzeit',
        responsibilities: [
          'Marketingstrategien entwickeln und umsetzen, um das Wachstum in Ihrer Region zu fördern',
          'Mit Vertriebs- und Produktteams zusammenarbeiten, um Marketinginitiativen auf Geschäftsziele auszurichten',
          'Markttrends und Kundenbedürfnisse analysieren, um Wachstumschancen zu identifizieren',
          'Marketingkampagnen und Events steuern, um Leads zu generieren und den Vertrieb zu unterstützen',
          'Marketingteam-Mitglieder anleiten und unterstützen',
        ],
        qualifications: [
          'Bachelorabschluss in Marketing oder einem verwandten Bereich',
          '5+ Jahre Erfahrung im Marketing',
          'Erfahrung in der Entwicklung und Umsetzung von Marketingstrategien',
          'Starke analytische Fähigkeiten und Problemlösungskompetenz',
          'Hervorragende Kommunikations- und Führungskompetenzen',
        ],
      },
      {
        id: 'key-account-manager',
        title: 'Key Account Manager',
        location: 'Remote',
        employmentType: 'Vollzeit',
        responsibilities: [
          'Beziehungen zu Schlüsselkunden pflegen, um das Wachstum Ihrer Accounts zu fördern',
          'Mit Vertriebs- und Produktteams zusammenarbeiten, damit Kundenanforderungen erfüllt werden',
          'Account-Pläne und Strategien entwickeln, um Geschäftsziele zu erreichen',
          'Wachstums- und Erweiterungspotenziale in Ihren Accounts identifizieren',
          'Vertriebsteam-Mitglieder anleiten und unterstützen',
        ],
        qualifications: [
          'Bachelorabschluss in Betriebswirtschaft oder einem verwandten Bereich',
          '5+ Jahre Erfahrung im Account Management',
          'Erfahrung in der Betreuung von Schlüsselkunden',
          'Ausgeprägte analytische Fähigkeiten und Problemlösungskompetenz',
          'Hervorragende Kommunikations- und Verhandlungsfähigkeiten',
        ],
      },
      {
        id: 'senior-sales-manager',
        title: 'Senior Sales Manager',
        location: 'Remote',
        employmentType: 'Vollzeit',
        responsibilities: [
          'Vertriebsteam führen, um Vertriebsziele zu erreichen',
          'Vertriebsstrategien entwickeln, um das Wachstum in Ihrer Region zu fördern',
          'Mit Marketing- und Produktteams zusammenarbeiten, um Vertriebsinitiativen auf Geschäftsziele auszurichten',
          'Vertriebsteam-Mitglieder anleiten und unterstützen',
          'Vertriebsdaten und Markttrends analysieren, um Wachstumschancen zu identifizieren',
        ],
        qualifications: [
          'Bachelorabschluss in Betriebswirtschaft oder einem verwandten Bereich',
          '5+ Jahre Erfahrung im Vertriebsmanagement',
          'Erfahrung in der Entwicklung und Umsetzung von Vertriebsstrategien',
          'Ausgeprägte analytische Fähigkeiten und Problemlösungskompetenz',
          'Hervorragende Kommunikations- und Führungskompetenzen',
        ],
      },
    ],
  },
}