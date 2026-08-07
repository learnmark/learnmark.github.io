import type { Locale } from '../../config'

type LetScrumProductMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  breadcrumbHome: string
  eyebrow: string
  heroDescription: string
  badges: string[]
  heroImageAlt: string
  introduction: string
  features: Array<{ name: string; description: string }>
  managedSummary: string
  edition: {
    eyebrow: string
    title: string
    description: string
    features: Array<{ name: string; description: string }>
    compareLabel: string
  }
  screenshotsTitle: string
  screenshotsDescription: string
  screenshots: Array<{ alt: string; title: string; description: string }>
  closingTitle: string
  closingDescription: string
  openSourceCta: string
  contactCta: string
}

export const letscrumProductMessages: Record<Locale, LetScrumProductMessages> = {
  en: {
    seoTitle: 'LetScrum - Managed Scrum Project Delivery',
    seoDescription: 'The managed LetScrum product gives delivery teams a hosted Scrum workspace with onboarding, workflow configuration, migration, upgrades, backups, and operational support.',
    seoKeywords: ['LetScrum', 'managed Scrum software', 'sprint planning software', 'Scrum taskboard', 'agile project management', 'hosted project management'],
    breadcrumbHome: 'Home',
    eyebrow: 'Managed Delivery Workspace',
    heroDescription: 'A hosted Scrum workspace for teams that need practical sprint planning, clear task execution, guided setup, and dependable operations.',
    badges: ['Sprint planning', 'Backlogs', 'Taskboards', 'User management'],
    heroImageAlt: 'LetScrum sprint taskboard',
    introduction: 'LetScrum helps small and focused delivery teams manage Scrum work without turning project management into another project. It keeps sprint scope, task status, user ownership, and team administration in one clear interface.',
    features: [
      { name: 'Sprint planning', description: 'Plan sprint goals, dates, backlog scope, ownership, and delivery commitments without heavyweight process overhead.' },
      { name: 'Team collaboration', description: 'Keep project members, assignees, and work states visible so everyone understands progress and responsibility.' },
      { name: 'Taskboard execution', description: 'Move work from To Do to Done with cards, estimates, issue types, state indicators, and release checklist support.' },
      { name: 'Cloud-ready deployment', description: 'Run LetScrum as a lightweight system that can fit into modern cloud, container, and internal platform environments.' },
      { name: 'Role-aware administration', description: 'Manage user access, roles, and team membership with a straightforward admin experience.' },
    ],
    managedSummary: 'The product is designed for teams that want the focus of LetScrum without taking on application hosting, upgrades, recovery planning, integration work, and operational support themselves.',
    edition: {
      eyebrow: 'Learnmark Product',
      title: 'What the managed LetScrum product adds',
      description: 'The Apache-2.0 repositories provide the core service and interface. The Learnmark product adds a maintained workspace and the implementation work needed to fit LetScrum into a real delivery organization.',
      features: [
        { name: 'Hosted workspace operations', description: 'Run LetScrum in an operated environment with release management, encrypted configuration, backups, recovery procedures, and service monitoring.' },
        { name: 'Team and workflow onboarding', description: 'Set up organizations, projects, roles, sprint conventions, work item structure, and practical delivery workflows with guided implementation.' },
        { name: 'Migration and integration delivery', description: 'Plan imports from existing project tools and connect the API-first platform to selected identity, engineering, reporting, or internal systems.' },
        { name: 'Operational and delivery support', description: 'Get upgrade coordination, issue triage, workflow reviews, and a support path for both platform operation and day-to-day delivery adoption.' },
      ],
      compareLabel: 'Compare with the open-source foundation',
    },
    screenshotsTitle: 'Product Screenshots',
    screenshotsDescription: 'These screenshots show the core LetScrum flow from project planning to sprint execution and user administration.',
    screenshots: [
      { alt: 'LetScrum project sprint overview', title: 'Project sprint overview', description: 'Show current and upcoming sprints with quick entry points, project ownership, and a clean workspace sidebar.' },
      { alt: 'LetScrum sprint taskboard', title: 'Sprint taskboard', description: 'Track work items across To Do, In Progress, and Done columns with status, owners, estimates, bugs, and checklist items.' },
      { alt: 'LetScrum sprint backlog', title: 'Structured sprint backlog', description: 'Manage epics, stories, tasks, remaining effort, ownership, and workflow state in a focused backlog table.' },
      { alt: 'LetScrum user management', title: 'User management', description: 'Administer users, roles, profiles, and permissions from a simple user center built for small delivery teams.' },
    ],
    closingTitle: 'Open source at the core, operated as a product',
    closingDescription: 'Review or self-host the LetScrum repositories, or choose the Learnmark product for a configured workspace, managed releases, migration help, and ongoing support.',
    openSourceCta: 'Explore Open Source',
    contactCta: 'Discuss delivery tools',
  },
  'zh-CN': {
    seoTitle: 'LetScrum - 托管式 Scrum 项目交付',
    seoDescription: '托管式 LetScrum 为交付团队提供托管 Scrum 工作空间，涵盖入门、工作流配置、迁移、升级、备份和运维支持。',
    seoKeywords: ['LetScrum', '托管式 Scrum 软件', '冲刺规划软件', 'Scrum 任务板', '敏捷项目管理', '托管项目管理'],
    breadcrumbHome: '首页',
    eyebrow: '托管式交付工作空间',
    heroDescription: '面向需要务实冲刺规划、清晰任务执行、引导式设置和可靠运维的团队提供托管 Scrum 工作空间。',
    badges: ['冲刺规划', '待办列表', '任务板', '用户管理'],
    heroImageAlt: 'LetScrum 冲刺任务板',
    introduction: 'LetScrum 帮助小型专注的交付团队管理 Scrum 工作，而不会让项目管理本身变成另一个项目。它在一个清晰界面中集中冲刺范围、任务状态、用户责任和团队管理。',
    features: [
      { name: '冲刺规划', description: '规划冲刺目标、日期、待办范围、责任人与交付承诺，无需沉重的流程负担。' },
      { name: '团队协作', description: '清晰呈现项目成员、负责人和工作状态，让每个人了解进度与责任。' },
      { name: '任务板执行', description: '通过卡片、估算、事项类型、状态指示和发布清单支持，将工作从待办推进到完成。' },
      { name: '云就绪部署', description: '将 LetScrum 作为轻量系统运行，适配现代云、容器和内部平台环境。' },
      { name: '角色感知管理', description: '通过直观的管理体验管理用户访问、角色和团队成员关系。' },
    ],
    managedSummary: '该产品面向希望专注使用 LetScrum，而不愿自行承担应用托管、升级、恢复规划、集成工作和运维支持的团队。',
    edition: {
      eyebrow: 'Learnmark 产品',
      title: '托管式 LetScrum 产品增加了什么',
      description: 'Apache-2.0 仓库提供核心服务与界面；Learnmark 产品增加维护式工作空间，以及将 LetScrum 融入真实交付组织所需的实施工作。',
      features: [
        { name: '托管工作空间运维', description: '在受运营环境中运行 LetScrum，提供发布管理、加密配置、备份、恢复流程和服务监控。' },
        { name: '团队与工作流入门', description: '通过引导式实施设置组织、项目、角色、冲刺惯例、工作项结构和务实交付工作流。' },
        { name: '迁移与集成交付', description: '规划从现有项目工具导入，并将 API 优先平台连接到选定的身份、工程、报告或内部系统。' },
        { name: '运维与交付支持', description: '获得升级协调、问题分诊、工作流评审，以及覆盖平台运维和日常交付采用的支持路径。' },
      ],
      compareLabel: '与开源基础版本比较',
    },
    screenshotsTitle: '产品截图',
    screenshotsDescription: '这些截图展示从项目规划、冲刺执行到用户管理的 LetScrum 核心流程。',
    screenshots: [
      { alt: 'LetScrum 项目冲刺概览', title: '项目冲刺概览', description: '展示当前与即将开始的冲刺、快捷入口、项目所有权和清晰的工作空间侧栏。' },
      { alt: 'LetScrum 冲刺任务板', title: '冲刺任务板', description: '在待办、进行中和已完成列间跟踪工作项，包括状态、负责人、估算、缺陷和清单项。' },
      { alt: 'LetScrum 冲刺待办列表', title: '结构化冲刺待办列表', description: '在聚焦的待办表格中管理 Epic、Story、Task、剩余工作量、责任人与工作流状态。' },
      { alt: 'LetScrum 用户管理', title: '用户管理', description: '通过为小型交付团队打造的简洁用户中心管理用户、角色、资料和权限。' },
    ],
    closingTitle: '以开源为核心，以产品方式运营',
    closingDescription: '查看或自行托管 LetScrum 仓库，或选择 Learnmark 产品获得配置好的工作空间、托管发布、迁移帮助和持续支持。',
    openSourceCta: '了解开源版本',
    contactCta: '洽谈交付工具',
  },
  'zh-TW': {
    seoTitle: 'LetScrum - 託管式 Scrum 專案交付',
    seoDescription: '託管式 LetScrum 為交付團隊提供託管 Scrum 工作空間，涵蓋導入、工作流程設定、遷移、升級、備份與維運支援。',
    seoKeywords: ['LetScrum', '託管式 Scrum 軟體', '衝刺規劃軟體', 'Scrum 任務板', '敏捷專案管理', '託管專案管理'],
    breadcrumbHome: '首頁',
    eyebrow: '託管式交付工作空間',
    heroDescription: '為需要務實衝刺規劃、清楚任務執行、引導式設定與可靠維運的團隊提供託管 Scrum 工作空間。',
    badges: ['衝刺規劃', '待辦清單', '任務板', '使用者管理'],
    heroImageAlt: 'LetScrum 衝刺任務板',
    introduction: 'LetScrum 協助小型且專注的交付團隊管理 Scrum 工作，而不會讓專案管理本身成為另一個專案。它在單一清楚介面中集中衝刺範圍、任務狀態、使用者責任與團隊管理。',
    features: [
      { name: '衝刺規劃', description: '規劃衝刺目標、日期、待辦範圍、負責人與交付承諾，無需沉重的流程負擔。' },
      { name: '團隊協作', description: '清楚呈現專案成員、指派人員與工作狀態，讓每個人瞭解進度及責任。' },
      { name: '任務板執行', description: '透過卡片、估算、問題類型、狀態指示與發布清單支援，將工作從待辦推進到完成。' },
      { name: '雲端就緒部署', description: '將 LetScrum 作為輕量系統運行，適合現代雲端、容器與內部平台環境。' },
      { name: '角色感知管理', description: '透過直覺的管理體驗管理使用者存取、角色與團隊成員關係。' },
    ],
    managedSummary: '此產品面向希望專注使用 LetScrum，而不願自行承擔應用程式託管、升級、復原規劃、整合工作與維運支援的團隊。',
    edition: {
      eyebrow: 'Learnmark 產品',
      title: '託管式 LetScrum 產品增加了什麼',
      description: 'Apache-2.0 儲存庫提供核心服務與介面；Learnmark 產品增加維護式工作空間，以及將 LetScrum 融入真實交付組織所需的實作工作。',
      features: [
        { name: '託管工作空間維運', description: '在受營運環境中運行 LetScrum，提供發布管理、加密設定、備份、復原程序與服務監控。' },
        { name: '團隊與工作流程導入', description: '透過引導式實作設定組織、專案、角色、衝刺慣例、工作項目結構與務實交付工作流程。' },
        { name: '遷移與整合交付', description: '規劃從現有專案工具匯入，並將 API 優先平台連接到選定的身分、工程、報告或內部系統。' },
        { name: '維運與交付支援', description: '取得升級協調、問題分類、工作流程檢視，以及涵蓋平台維運與日常交付採用的支援路徑。' },
      ],
      compareLabel: '與開源基礎版本比較',
    },
    screenshotsTitle: '產品截圖',
    screenshotsDescription: '這些截圖呈現從專案規劃、衝刺執行到使用者管理的 LetScrum 核心流程。',
    screenshots: [
      { alt: 'LetScrum 專案衝刺概覽', title: '專案衝刺概覽', description: '呈現目前與即將開始的衝刺、快速進入點、專案所有權與清楚的工作空間側邊欄。' },
      { alt: 'LetScrum 衝刺任務板', title: '衝刺任務板', description: '在待辦、進行中與已完成欄之間追蹤工作項目，包括狀態、負責人、估算、錯誤與清單項目。' },
      { alt: 'LetScrum 衝刺待辦清單', title: '結構化衝刺待辦清單', description: '在聚焦的待辦表格中管理 Epic、Story、Task、剩餘工作量、負責人與工作流程狀態。' },
      { alt: 'LetScrum 使用者管理', title: '使用者管理', description: '透過為小型交付團隊打造的簡潔使用者中心管理使用者、角色、個人資料與權限。' },
    ],
    closingTitle: '以開源為核心，以產品方式營運',
    closingDescription: '檢視或自行架設 LetScrum 儲存庫，或選擇 Learnmark 產品取得設定完成的工作空間、託管發布、遷移協助與持續支援。',
    openSourceCta: '瞭解開源版本',
    contactCta: '洽談交付工具',
  },
  ja: {
    seoTitle: 'LetScrum - マネージド Scrum プロジェクトデリバリー',
    seoDescription: 'マネージド LetScrum は、導入、ワークフロー設定、移行、アップグレード、バックアップ、運用支援を備えたホステッド Scrum ワークスペースを提供します。',
    seoKeywords: ['LetScrum', 'マネージド Scrum ソフトウェア', 'スプリント計画ソフトウェア', 'Scrum タスクボード', 'アジャイルプロジェクト管理', 'ホステッドプロジェクト管理'],
    breadcrumbHome: 'ホーム',
    eyebrow: 'マネージドデリバリーワークスペース',
    heroDescription: '実践的なスプリント計画、明確なタスク実行、ガイド付きセットアップ、信頼できる運用を必要とするチーム向けのホステッド Scrum ワークスペースです。',
    badges: ['スプリント計画', 'バックログ', 'タスクボード', 'ユーザー管理'],
    heroImageAlt: 'LetScrum スプリントタスクボード',
    introduction: 'LetScrum は、小規模で集中したデリバリーチームがプロジェクト管理自体を新たなプロジェクトにせず Scrum 作業を管理できるよう支援します。スプリント範囲、タスク状態、担当者、チーム管理を明快な画面にまとめます。',
    features: [
      { name: 'スプリント計画', description: '重いプロセスを増やさず、スプリント目標、日程、バックログ範囲、担当、デリバリー約束を計画します。' },
      { name: 'チームコラボレーション', description: 'プロジェクトメンバー、担当者、作業状態を可視化し、全員が進捗と責任を把握できます。' },
      { name: 'タスクボード実行', description: 'カード、見積り、課題タイプ、状態表示、リリースチェックリストで作業を To Do から Done へ進めます。' },
      { name: 'クラウド対応展開', description: '最新のクラウド、コンテナ、社内プラットフォーム環境に適合する軽量システムとして LetScrum を運用します。' },
      { name: 'ロール対応管理', description: '分かりやすい管理画面でユーザーアクセス、ロール、チーム所属を管理します。' },
    ],
    managedSummary: 'この製品は、アプリケーションのホスティング、アップグレード、復旧計画、統合作業、運用支援を自社で抱えず LetScrum に集中したいチーム向けです。',
    edition: {
      eyebrow: 'Learnmark 製品',
      title: 'マネージド LetScrum 製品が追加するもの',
      description: 'Apache-2.0 リポジトリがコアサービスと画面を提供し、Learnmark 製品は維持管理されたワークスペースと、実際のデリバリー組織へ LetScrum を適合させる導入作業を追加します。',
      features: [
        { name: 'ホステッドワークスペース運用', description: 'リリース管理、暗号化設定、バックアップ、復旧手順、サービス監視を備えた運用環境で LetScrum を実行します。' },
        { name: 'チームとワークフローの導入', description: 'ガイド付き導入で組織、プロジェクト、ロール、スプリント規約、作業項目構造、実践的なデリバリーワークフローを設定します。' },
        { name: '移行と連携の実装', description: '既存プロジェクトツールからのインポートを計画し、API ファーストの基盤を選択した認証、エンジニアリング、レポート、社内システムへ接続します。' },
        { name: '運用・デリバリー支援', description: 'アップグレード調整、課題の切り分け、ワークフローレビュー、プラットフォーム運用と日常利用の両方を支えるサポートを提供します。' },
      ],
      compareLabel: 'オープンソース基盤と比較する',
    },
    screenshotsTitle: '製品スクリーンショット',
    screenshotsDescription: 'プロジェクト計画からスプリント実行、ユーザー管理までの LetScrum の主要フローを紹介します。',
    screenshots: [
      { alt: 'LetScrum プロジェクトスプリント概要', title: 'プロジェクトスプリント概要', description: '現在と今後のスプリント、クイックアクセス、プロジェクト所有者、整理されたワークスペースサイドバーを表示します。' },
      { alt: 'LetScrum スプリントタスクボード', title: 'スプリントタスクボード', description: '状態、担当者、見積り、バグ、チェック項目とともに To Do、In Progress、Done の列で作業を追跡します。' },
      { alt: 'LetScrum スプリントバックログ', title: '構造化スプリントバックログ', description: '集中した表で Epic、Story、Task、残作業、担当、ワークフロー状態を管理します。' },
      { alt: 'LetScrum ユーザー管理', title: 'ユーザー管理', description: '小規模デリバリーチーム向けのシンプルなユーザーセンターでユーザー、ロール、プロフィール、権限を管理します。' },
    ],
    closingTitle: 'オープンソースを核に、製品として運用',
    closingDescription: 'LetScrum リポジトリを確認・セルフホストするか、設定済みワークスペース、マネージドリリース、移行支援、継続サポートを備えた Learnmark 製品を選択できます。',
    openSourceCta: 'オープンソースを見る',
    contactCta: 'デリバリーツールを相談する',
  },
  fr: {
    seoTitle: 'LetScrum - Livraison de projets Scrum managée',
    seoDescription: 'Le produit managé LetScrum fournit aux équipes un espace Scrum hébergé avec onboarding, configuration des workflows, migration, mises à niveau, sauvegardes et support opérationnel.',
    seoKeywords: ['LetScrum', 'logiciel Scrum managé', 'logiciel de planification de sprint', 'tableau Scrum', 'gestion de projet agile', 'gestion de projet hébergée'],
    breadcrumbHome: 'Accueil',
    eyebrow: 'Espace de livraison managé',
    heroDescription: 'Un espace Scrum hébergé pour les équipes qui ont besoin d’une planification de sprint pragmatique, d’une exécution claire, d’une configuration guidée et d’opérations fiables.',
    badges: ['Planification de sprint', 'Backlogs', 'Tableaux de tâches', 'Gestion des utilisateurs'],
    heroImageAlt: 'Tableau de sprint LetScrum',
    introduction: 'LetScrum aide les petites équipes concentrées à gérer le travail Scrum sans transformer la gestion de projet en projet supplémentaire. Portée du sprint, état des tâches, responsabilités et administration sont réunis dans une interface claire.',
    features: [
      { name: 'Planification de sprint', description: 'Planifiez objectifs, dates, portée du backlog, responsabilités et engagements sans lourdeur de processus.' },
      { name: 'Collaboration d’équipe', description: 'Rendez visibles membres, responsables et états du travail afin que chacun comprenne l’avancement et ses responsabilités.' },
      { name: 'Exécution sur tableau', description: 'Faites progresser le travail de À faire à Terminé avec cartes, estimations, types de problème, états et listes de contrôle de livraison.' },
      { name: 'Déploiement prêt pour le Cloud', description: 'Exploitez LetScrum comme un système léger adapté aux environnements Cloud, conteneurs et plateformes internes modernes.' },
      { name: 'Administration tenant compte des rôles', description: 'Gérez accès, rôles et appartenance aux équipes avec une expérience d’administration simple.' },
    ],
    managedSummary: 'Le produit s’adresse aux équipes qui veulent rester concentrées sur LetScrum sans assumer elles-mêmes l’hébergement, les mises à niveau, la reprise, les intégrations et le support opérationnel.',
    edition: {
      eyebrow: 'Produit Learnmark',
      title: 'Ce que le produit managé LetScrum ajoute',
      description: 'Les dépôts Apache-2.0 fournissent le service et l’interface de base. Le produit Learnmark ajoute un espace maintenu et le travail d’implémentation nécessaire pour intégrer LetScrum à une vraie organisation de livraison.',
      features: [
        { name: 'Opérations de l’espace hébergé', description: 'Exploitez LetScrum dans un environnement géré avec versions, configuration chiffrée, sauvegardes, procédures de reprise et supervision.' },
        { name: 'Onboarding des équipes et workflows', description: 'Configurez organisations, projets, rôles, conventions de sprint, structure des éléments et workflows pratiques avec une implémentation guidée.' },
        { name: 'Livraison des migrations et intégrations', description: 'Planifiez les imports depuis les outils existants et connectez la plateforme API-first aux systèmes d’identité, d’ingénierie, de reporting ou internes retenus.' },
        { name: 'Support opérationnel et de livraison', description: 'Obtenez coordination des mises à niveau, triage, revues de workflows et support pour l’exploitation comme pour l’adoption quotidienne.' },
      ],
      compareLabel: 'Comparer avec la base open source',
    },
    screenshotsTitle: 'Captures du produit',
    screenshotsDescription: 'Ces captures illustrent le flux principal de LetScrum, de la planification du projet à l’exécution du sprint et à l’administration des utilisateurs.',
    screenshots: [
      { alt: 'Vue des sprints du projet LetScrum', title: 'Vue des sprints du projet', description: 'Affichez les sprints actuels et à venir avec accès rapides, responsabilité du projet et barre latérale claire.' },
      { alt: 'Tableau de sprint LetScrum', title: 'Tableau de sprint', description: 'Suivez les éléments entre À faire, En cours et Terminé avec états, responsables, estimations, bugs et listes de contrôle.' },
      { alt: 'Backlog de sprint LetScrum', title: 'Backlog de sprint structuré', description: 'Gérez epics, stories, tâches, effort restant, responsabilités et état du workflow dans un tableau ciblé.' },
      { alt: 'Gestion des utilisateurs LetScrum', title: 'Gestion des utilisateurs', description: 'Administrez utilisateurs, rôles, profils et permissions depuis un centre simple conçu pour les petites équipes.' },
    ],
    closingTitle: 'Open source au cœur, exploité comme un produit',
    closingDescription: 'Consultez ou auto-hébergez les dépôts LetScrum, ou choisissez le produit Learnmark pour un espace configuré, des versions managées, une aide à la migration et un support continu.',
    openSourceCta: 'Découvrir l’open source',
    contactCta: 'Parler des outils de livraison',
  },
  de: {
    seoTitle: 'LetScrum - Managed Scrum-Projektbereitstellung',
    seoDescription: 'Das Managed-Produkt LetScrum bietet Delivery-Teams einen gehosteten Scrum-Arbeitsbereich mit Onboarding, Workflow-Konfiguration, Migration, Upgrades, Backups und Betriebssupport.',
    seoKeywords: ['LetScrum', 'Managed Scrum-Software', 'Sprint-Planungssoftware', 'Scrum-Taskboard', 'agiles Projektmanagement', 'gehostetes Projektmanagement'],
    breadcrumbHome: 'Startseite',
    eyebrow: 'Managed Delivery-Arbeitsbereich',
    heroDescription: 'Ein gehosteter Scrum-Arbeitsbereich für Teams, die praxisnahe Sprint-Planung, klare Aufgabenumsetzung, geführte Einrichtung und zuverlässigen Betrieb benötigen.',
    badges: ['Sprint-Planung', 'Backlogs', 'Taskboards', 'Benutzerverwaltung'],
    heroImageAlt: 'LetScrum-Sprint-Taskboard',
    introduction: 'LetScrum hilft kleinen, fokussierten Delivery-Teams, Scrum-Arbeit zu verwalten, ohne Projektmanagement selbst zum nächsten Projekt zu machen. Sprint-Umfang, Aufgabenstatus, Verantwortlichkeit und Teamverwaltung bleiben in einer klaren Oberfläche.',
    features: [
      { name: 'Sprint-Planung', description: 'Sprint-Ziele, Termine, Backlog-Umfang, Verantwortlichkeiten und Delivery-Zusagen ohne schwerfällige Prozesse planen.' },
      { name: 'Teamzusammenarbeit', description: 'Projektmitglieder, Zuständige und Arbeitsstände sichtbar halten, damit alle Fortschritt und Verantwortung verstehen.' },
      { name: 'Taskboard-Umsetzung', description: 'Arbeit mit Karten, Schätzungen, Vorgangstypen, Statusanzeigen und Release-Checklisten von To Do nach Done bewegen.' },
      { name: 'Cloud-fähige Bereitstellung', description: 'LetScrum als schlankes System betreiben, das in moderne Cloud-, Container- und interne Plattformumgebungen passt.' },
      { name: 'Rollenbezogene Verwaltung', description: 'Benutzerzugriff, Rollen und Teammitgliedschaft über eine unkomplizierte Verwaltungsoberfläche steuern.' },
    ],
    managedSummary: 'Das Produkt richtet sich an Teams, die sich auf LetScrum konzentrieren möchten, ohne Hosting, Upgrades, Wiederherstellungsplanung, Integrationen und Betriebssupport selbst zu übernehmen.',
    edition: {
      eyebrow: 'Learnmark-Produkt',
      title: 'Was das Managed-Produkt LetScrum ergänzt',
      description: 'Die Apache-2.0-Repositories liefern Kerndienst und Oberfläche. Das Learnmark-Produkt ergänzt einen gepflegten Arbeitsbereich und die Implementierung, die LetScrum in eine reale Delivery-Organisation einpasst.',
      features: [
        { name: 'Betrieb des gehosteten Arbeitsbereichs', description: 'LetScrum in einer betriebenen Umgebung mit Release-Management, verschlüsselter Konfiguration, Backups, Wiederherstellungsverfahren und Serviceüberwachung ausführen.' },
        { name: 'Team- und Workflow-Onboarding', description: 'Organisationen, Projekte, Rollen, Sprint-Konventionen, Arbeitselementstrukturen und praktische Delivery-Workflows mit geführter Implementierung einrichten.' },
        { name: 'Migration und Integration', description: 'Importe aus bestehenden Projektwerkzeugen planen und die API-first-Plattform mit ausgewählten Identitäts-, Engineering-, Reporting- oder internen Systemen verbinden.' },
        { name: 'Betriebs- und Delivery-Support', description: 'Upgrade-Koordination, Problemtriage, Workflow-Prüfungen und Support für Plattformbetrieb sowie tägliche Nutzung erhalten.' },
      ],
      compareLabel: 'Mit der Open-Source-Basis vergleichen',
    },
    screenshotsTitle: 'Produkt-Screenshots',
    screenshotsDescription: 'Die Screenshots zeigen den zentralen LetScrum-Ablauf von der Projektplanung über die Sprint-Umsetzung bis zur Benutzerverwaltung.',
    screenshots: [
      { alt: 'LetScrum-Projekt-Sprintübersicht', title: 'Projekt-Sprintübersicht', description: 'Aktuelle und kommende Sprints mit Schnelleinstiegen, Projektverantwortung und übersichtlicher Arbeitsbereichsnavigation anzeigen.' },
      { alt: 'LetScrum-Sprint-Taskboard', title: 'Sprint-Taskboard', description: 'Arbeitselemente mit Status, Zuständigen, Schätzungen, Fehlern und Checklisten über To Do, In Progress und Done verfolgen.' },
      { alt: 'LetScrum-Sprint-Backlog', title: 'Strukturiertes Sprint-Backlog', description: 'Epics, Stories, Tasks, Restaufwand, Verantwortlichkeit und Workflow-Status in einer fokussierten Tabelle verwalten.' },
      { alt: 'LetScrum-Benutzerverwaltung', title: 'Benutzerverwaltung', description: 'Benutzer, Rollen, Profile und Berechtigungen in einem einfachen Benutzerzentrum für kleine Delivery-Teams verwalten.' },
    ],
    closingTitle: 'Open Source im Kern, als Produkt betrieben',
    closingDescription: 'Die LetScrum-Repositories prüfen oder selbst hosten, oder das Learnmark-Produkt für einen konfigurierten Arbeitsbereich, Managed Releases, Migrationshilfe und laufenden Support wählen.',
    openSourceCta: 'Open Source entdecken',
    contactCta: 'Delivery-Werkzeuge besprechen',
  },
}