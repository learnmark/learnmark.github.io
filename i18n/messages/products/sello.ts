import type { Locale } from '../../config'

type SelloProductMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  breadcrumbHome: string
  eyebrow: string
  heroSummary: string
  heroDescription: string
  discussCta: string
  openSourceCta: string
  surfacesEyebrow: string
  surfaces: Array<{ name: string; detail: string }>
  capabilitiesEyebrow: string
  capabilitiesTitle: string
  capabilitiesDescription: string
  capabilities: Array<{ name: string; description: string }>
  edition: {
    eyebrow: string
    title: string
    description: string
    features: Array<{ name: string; description: string }>
    compareLabel: string
  }
  screenshotsEyebrow: string
  screenshotsTitle: string
  screenshotsDescription: string
  screenshotCoverage: Array<{ name: string; detail: string }>
  closingEyebrow: string
  closingTitle: string
  closingCta: string
}

export const selloProductMessages: Record<Locale, SelloProductMessages> = {
  en: {
    seoTitle: 'Sello - Managed AI Commerce Workspace',
    seoDescription: 'The managed Sello product gives e-commerce teams an operated workspace for store connections, unified listings, AI-assisted content, customer replies, tenant controls, and production support.',
    seoKeywords: ['Sello', 'managed e-commerce SaaS', 'AI commerce assistant', 'multi-store commerce platform', 'product listing optimization', 'e-commerce operations'],
    breadcrumbHome: 'Home',
    eyebrow: 'Managed Commerce Operations',
    heroSummary: 'An operated workspace for e-commerce teams that need connected stores, consistent product information, and useful AI assistance without giving up human control.',
    heroDescription: 'Learnmark turns the public Sello foundation into a customer-ready product through connector delivery, tenant onboarding, governed AI configuration, monitored data flows, and production support.',
    discussCta: 'Discuss Sello',
    openSourceCta: 'Explore open source',
    surfacesEyebrow: 'One platform, four surfaces',
    surfaces: [
      { name: 'Website', detail: 'Public product information and entry points' },
      { name: 'Portal', detail: 'Seller workspace for teams, stores, listings, and AI tools' },
      { name: 'Admin', detail: 'Platform operations for tenants, users, subscriptions, and audits' },
      { name: 'API', detail: 'Shared FastAPI service for identity, tenancy, data, and integrations' },
    ],
    capabilitiesEyebrow: 'Product capabilities',
    capabilitiesTitle: 'A practical operating layer for commerce teams',
    capabilitiesDescription: 'The product is organized around the daily work of sellers, operators, support teams, tenant owners, and platform administrators rather than isolated AI features.',
    capabilities: [
      { name: 'Connected store operations', description: 'Manage store authorization, synchronization state, errors, and operational context from one tenant-aware workspace.' },
      { name: 'Unified product workspace', description: 'Review listings from different commerce platforms through a consistent product model while retaining source-platform context.' },
      { name: 'AI-assisted optimization', description: 'Generate reviewable title and description suggestions using managed AI or an approved tenant-controlled provider.' },
      { name: 'Customer reply assistance', description: 'Turn a customer question and selected product context into an editable reply draft that support staff review before sending.' },
      { name: 'Team and tenant controls', description: 'Separate customer workspaces from platform administration with member roles, scoped permissions, and account lifecycle controls.' },
      { name: 'Human-controlled workflows', description: 'Keep AI-generated listing improvements, reply drafts, and operational actions visible, editable, and subject to user confirmation.' },
    ],
    edition: {
      eyebrow: 'Learnmark Product',
      title: 'What the managed Sello product adds',
      description: 'The public repository establishes the multi-tenant application foundation. The Learnmark product adds the connector implementation, onboarding, governance, and operational ownership needed for real commerce workloads.',
      features: [
        { name: 'Marketplace connector delivery', description: 'Implement and validate selected store connections, credential lifecycles, field mappings, synchronization schedules, retries, and platform-specific error handling.' },
        { name: 'Tenant onboarding and controls', description: 'Provision customer tenants, establish owner and team roles, configure environment boundaries, and apply operational policies for each organization.' },
        { name: 'AI provider governance', description: 'Configure managed or customer-owned model providers, approved models, feature access, usage visibility, and review requirements for generated content.' },
        { name: 'Managed data and operations', description: 'Operate releases, backups, monitored synchronization jobs, incident triage, data repair procedures, and ongoing platform support.' },
      ],
      compareLabel: 'Compare with the open-source foundation',
    },
    screenshotsEyebrow: 'Product screenshots',
    screenshotsTitle: 'The workflows the first screenshot set will cover',
    screenshotsDescription: 'Real product screenshots will be added after the current seller portal and administration interfaces are ready for publication.',
    screenshotCoverage: [
      { name: 'Seller workspace', detail: 'Dashboard, tenant context, team access, and operational priorities' },
      { name: 'Stores and listings', detail: 'Connections, synchronization state, normalized products, and content review' },
      { name: 'AI and administration', detail: 'Provider settings, generated drafts, usage controls, tenants, and platform operations' },
    ],
    closingEyebrow: 'Plan the product around your channels',
    closingTitle: 'Start with the stores, workflows, and AI controls your team actually needs.',
    closingCta: 'Plan a Sello deployment',
  },
  'zh-CN': {
    seoTitle: 'Sello - 托管式 AI 商务工作空间',
    seoDescription: '托管式 Sello 为电商团队提供受运营的工作空间，覆盖商店连接、统一商品列表、AI 辅助内容、客户回复、租户控制和生产支持。',
    seoKeywords: ['Sello', '托管式电商 SaaS', 'AI 商务助手', '多商店商务平台', '商品列表优化', '电商运营'],
    breadcrumbHome: '首页',
    eyebrow: '托管式商务运营',
    heroSummary: '面向需要连接商店、一致商品信息和实用 AI 辅助，同时不放弃人工控制的电商团队提供受运营工作空间。',
    heroDescription: 'Learnmark 通过连接器交付、租户入门、受治理的 AI 配置、受监控数据流和生产支持，将公开的 Sello 基础转化为客户可用的产品。',
    discussCta: '洽谈 Sello',
    openSourceCta: '了解开源版本',
    surfacesEyebrow: '一个平台，四个界面',
    surfaces: [
      { name: '网站', detail: '公开产品信息与入口' },
      { name: '门户', detail: '面向团队、商店、商品列表和 AI 工具的卖家工作空间' },
      { name: '管理端', detail: '面向租户、用户、订阅和审计的平台运营' },
      { name: 'API', detail: '面向身份、租户、数据和集成的共享 FastAPI 服务' },
    ],
    capabilitiesEyebrow: '产品能力',
    capabilitiesTitle: '面向商务团队的实用运营层',
    capabilitiesDescription: '产品围绕卖家、运营人员、支持团队、租户所有者和平台管理员的日常工作组织，而不是孤立的 AI 功能。',
    capabilities: [
      { name: '连接商店运营', description: '在一个租户感知工作空间中管理商店授权、同步状态、错误和运营上下文。' },
      { name: '统一商品工作空间', description: '通过一致的商品模型查看不同商务平台的商品列表，同时保留来源平台上下文。' },
      { name: 'AI 辅助优化', description: '使用托管 AI 或获批的租户控制提供商，生成可审核的标题和描述建议。' },
      { name: '客户回复辅助', description: '将客户问题和选定商品上下文转化为可编辑回复草稿，由支持人员审核后发送。' },
      { name: '团队与租户控制', description: '通过成员角色、范围权限和账户生命周期控制，将客户工作空间与平台管理分离。' },
      { name: '人工控制工作流', description: '让 AI 生成的商品改进、回复草稿和运营操作保持可见、可编辑，并需用户确认。' },
    ],
    edition: {
      eyebrow: 'Learnmark 产品',
      title: '托管式 Sello 产品增加了什么',
      description: '公开仓库建立多租户应用基础；Learnmark 产品增加真实商务工作负载所需的连接器实施、入门、治理和运维责任。',
      features: [
        { name: '市场连接器交付', description: '实施并验证选定商店连接、凭据生命周期、字段映射、同步计划、重试和平台专属错误处理。' },
        { name: '租户入门与控制', description: '配置客户租户，建立所有者和团队角色，设置环境边界，并为每个组织应用运营策略。' },
        { name: 'AI 提供商治理', description: '配置托管或客户自有模型提供商、获批模型、功能访问、用量可视化和生成内容审核要求。' },
        { name: '托管数据与运维', description: '运营发布、备份、受监控同步任务、事件分诊、数据修复流程和持续平台支持。' },
      ],
      compareLabel: '与开源基础版本比较',
    },
    screenshotsEyebrow: '产品截图',
    screenshotsTitle: '首批截图将覆盖的工作流',
    screenshotsDescription: '当前卖家门户和管理界面可公开发布后，将添加真实产品截图。',
    screenshotCoverage: [
      { name: '卖家工作空间', detail: '仪表板、租户上下文、团队访问和运营优先事项' },
      { name: '商店与商品列表', detail: '连接、同步状态、标准化商品和内容审核' },
      { name: 'AI 与管理', detail: '提供商设置、生成草稿、用量控制、租户与平台运营' },
    ],
    closingEyebrow: '围绕您的渠道规划产品',
    closingTitle: '从团队真正需要的商店、工作流和 AI 控制开始。',
    closingCta: '规划 Sello 部署',
  },
  'zh-TW': {
    seoTitle: 'Sello - 託管式 AI 商務工作空間',
    seoDescription: '託管式 Sello 為電商團隊提供受營運的工作空間，涵蓋商店連線、統一商品清單、AI 輔助內容、客戶回覆、租戶控制與正式環境支援。',
    seoKeywords: ['Sello', '託管式電商 SaaS', 'AI 商務助理', '多商店商務平台', '商品清單最佳化', '電商營運'],
    breadcrumbHome: '首頁',
    eyebrow: '託管式商務營運',
    heroSummary: '為需要連接商店、一致商品資訊與實用 AI 輔助，同時不放棄人工控制的電商團隊提供受營運工作空間。',
    heroDescription: 'Learnmark 透過連接器交付、租戶導入、受治理的 AI 設定、受監控資料流與正式環境支援，將公開的 Sello 基礎轉化為客戶可用產品。',
    discussCta: '洽談 Sello',
    openSourceCta: '瞭解開源版本',
    surfacesEyebrow: '一個平台，四個介面',
    surfaces: [
      { name: '網站', detail: '公開產品資訊與進入點' },
      { name: '入口網站', detail: '面向團隊、商店、商品清單與 AI 工具的賣家工作空間' },
      { name: '管理端', detail: '面向租戶、使用者、訂閱與稽核的平台營運' },
      { name: 'API', detail: '面向身分、租戶、資料與整合的共享 FastAPI 服務' },
    ],
    capabilitiesEyebrow: '產品功能',
    capabilitiesTitle: '面向商務團隊的實用營運層',
    capabilitiesDescription: '產品圍繞賣家、營運人員、支援團隊、租戶擁有者與平台管理員的日常工作組織，而不是孤立的 AI 功能。',
    capabilities: [
      { name: '連接商店營運', description: '在單一租戶感知工作空間中管理商店授權、同步狀態、錯誤與營運內容。' },
      { name: '統一商品工作空間', description: '透過一致的商品模型檢視不同商務平台的商品清單，同時保留來源平台內容。' },
      { name: 'AI 輔助最佳化', description: '使用託管 AI 或核准的租戶控制供應商，產生可審核的標題與描述建議。' },
      { name: '客戶回覆輔助', description: '將客戶問題與選定商品內容轉化為可編輯回覆草稿，由支援人員審核後傳送。' },
      { name: '團隊與租戶控制', description: '透過成員角色、範圍權限與帳戶生命週期控制，將客戶工作空間與平台管理分離。' },
      { name: '人工控制工作流程', description: '讓 AI 產生的商品改進、回覆草稿與營運操作保持可見、可編輯，並需使用者確認。' },
    ],
    edition: {
      eyebrow: 'Learnmark 產品',
      title: '託管式 Sello 產品增加了什麼',
      description: '公開儲存庫建立多租戶應用程式基礎；Learnmark 產品增加真實商務工作負載所需的連接器實作、導入、治理與維運責任。',
      features: [
        { name: '市場連接器交付', description: '實作並驗證選定商店連線、憑證生命週期、欄位對應、同步排程、重試與平台專屬錯誤處理。' },
        { name: '租戶導入與控制', description: '配置客戶租戶，建立擁有者與團隊角色，設定環境邊界，並為每個組織套用營運政策。' },
        { name: 'AI 供應商治理', description: '設定託管或客戶自有模型供應商、核准模型、功能存取、用量可視化與產生內容審核要求。' },
        { name: '託管資料與維運', description: '營運發布、備份、受監控同步工作、事件分類、資料修復程序與持續平台支援。' },
      ],
      compareLabel: '與開源基礎版本比較',
    },
    screenshotsEyebrow: '產品截圖',
    screenshotsTitle: '首批截圖將涵蓋的工作流程',
    screenshotsDescription: '目前賣家入口網站與管理介面可公開發布後，將加入真實產品截圖。',
    screenshotCoverage: [
      { name: '賣家工作空間', detail: '儀表板、租戶內容、團隊存取與營運優先事項' },
      { name: '商店與商品清單', detail: '連線、同步狀態、標準化商品與內容審核' },
      { name: 'AI 與管理', detail: '供應商設定、產生草稿、用量控制、租戶與平台營運' },
    ],
    closingEyebrow: '圍繞您的管道規劃產品',
    closingTitle: '從團隊真正需要的商店、工作流程與 AI 控制開始。',
    closingCta: '規劃 Sello 部署',
  },
  ja: {
    seoTitle: 'Sello - マネージド AI コマースワークスペース',
    seoDescription: 'マネージド Sello は、ストア接続、統合商品リスト、AI 支援コンテンツ、顧客返信、テナント制御、本番支援のための運用済みワークスペースを提供します。',
    seoKeywords: ['Sello', 'マネージド E コマース SaaS', 'AI コマースアシスタント', 'マルチストアコマースプラットフォーム', '商品リスト最適化', 'E コマース運用'],
    breadcrumbHome: 'ホーム',
    eyebrow: 'マネージドコマース運用',
    heroSummary: 'ストア接続、一貫した商品情報、実用的な AI 支援を必要としつつ、人による制御を維持したい E コマースチーム向けの運用済みワークスペースです。',
    heroDescription: 'Learnmark はコネクター実装、テナント導入、統制された AI 設定、監視付きデータフロー、本番支援を通じて、公開 Sello 基盤を顧客向け製品へ変えます。',
    discussCta: 'Sello を相談する',
    openSourceCta: 'オープンソースを見る',
    surfacesEyebrow: '1 つのプラットフォーム、4 つの画面',
    surfaces: [
      { name: 'Web サイト', detail: '公開製品情報とエントリーポイント' },
      { name: 'ポータル', detail: 'チーム、ストア、商品リスト、AI ツールのための販売者ワークスペース' },
      { name: '管理', detail: 'テナント、ユーザー、サブスクリプション、監査のプラットフォーム運用' },
      { name: 'API', detail: 'ID、テナント、データ、連携のための共有 FastAPI サービス' },
    ],
    capabilitiesEyebrow: '製品機能',
    capabilitiesTitle: 'コマースチームのための実践的な運用レイヤー',
    capabilitiesDescription: '製品は孤立した AI 機能ではなく、販売者、運用者、サポートチーム、テナント所有者、プラットフォーム管理者の日常業務を中心に構成されています。',
    capabilities: [
      { name: '接続ストア運用', description: 'テナント対応ワークスペースでストア認可、同期状態、エラー、運用コンテキストを管理します。' },
      { name: '統合商品ワークスペース', description: '供給元プラットフォームの文脈を保持しながら、一貫した商品モデルで複数コマースプラットフォームの商品を確認します。' },
      { name: 'AI 支援最適化', description: 'マネージド AI または承認済みのテナント管理プロバイダーを使用し、レビュー可能なタイトルと説明案を生成します。' },
      { name: '顧客返信支援', description: '顧客の質問と選択した商品情報から編集可能な返信案を作成し、サポート担当者が送信前に確認します。' },
      { name: 'チームとテナント制御', description: 'メンバーロール、範囲付き権限、アカウントライフサイクル制御で顧客ワークスペースとプラットフォーム管理を分離します。' },
      { name: '人が制御するワークフロー', description: 'AI 生成の商品改善、返信案、運用操作を可視・編集可能にし、ユーザー確認の対象とします。' },
    ],
    edition: {
      eyebrow: 'Learnmark 製品',
      title: 'マネージド Sello 製品が追加するもの',
      description: '公開リポジトリがマルチテナントアプリケーション基盤を確立し、Learnmark 製品は実際のコマース業務に必要なコネクター実装、導入、ガバナンス、運用責任を追加します。',
      features: [
        { name: 'マーケットプレイスコネクター実装', description: '選択したストア接続、認証情報のライフサイクル、フィールドマッピング、同期スケジュール、再試行、プラットフォーム固有のエラー処理を実装・検証します。' },
        { name: 'テナント導入と制御', description: '顧客テナントを構築し、所有者とチームのロール、環境境界、組織ごとの運用ポリシーを設定します。' },
        { name: 'AI プロバイダーガバナンス', description: 'マネージドまたは顧客所有のモデルプロバイダー、承認済みモデル、機能アクセス、利用状況、生成コンテンツのレビュー要件を設定します。' },
        { name: 'マネージドデータと運用', description: 'リリース、バックアップ、監視付き同期ジョブ、インシデント切り分け、データ修復手順、継続的なプラットフォーム支援を運用します。' },
      ],
      compareLabel: 'オープンソース基盤と比較する',
    },
    screenshotsEyebrow: '製品スクリーンショット',
    screenshotsTitle: '最初のスクリーンショットで紹介するワークフロー',
    screenshotsDescription: '現在の販売者ポータルと管理画面が公開可能になり次第、実際の製品スクリーンショットを追加します。',
    screenshotCoverage: [
      { name: '販売者ワークスペース', detail: 'ダッシュボード、テナントコンテキスト、チームアクセス、運用優先事項' },
      { name: 'ストアと商品リスト', detail: '接続、同期状態、正規化された商品、コンテンツレビュー' },
      { name: 'AI と管理', detail: 'プロバイダー設定、生成案、利用制御、テナント、プラットフォーム運用' },
    ],
    closingEyebrow: 'チャネルに合わせて製品を計画',
    closingTitle: 'チームが本当に必要とするストア、ワークフロー、AI 制御から始めましょう。',
    closingCta: 'Sello の展開を計画する',
  },
  fr: {
    seoTitle: 'Sello - Espace e-commerce IA managé',
    seoDescription: 'Le produit managé Sello offre aux équipes e-commerce un espace exploité pour les connexions aux boutiques, les catalogues unifiés, le contenu assisté par IA, les réponses clients, les contrôles de tenant et le support en production.',
    seoKeywords: ['Sello', 'SaaS e-commerce managé', 'assistant e-commerce IA', 'plateforme e-commerce multi-boutiques', 'optimisation des catalogues', 'opérations e-commerce'],
    breadcrumbHome: 'Accueil',
    eyebrow: 'Opérations e-commerce managées',
    heroSummary: 'Un espace exploité pour les équipes e-commerce qui ont besoin de boutiques connectées, d’informations produit cohérentes et d’une IA utile tout en conservant le contrôle humain.',
    heroDescription: 'Learnmark transforme la base publique Sello en produit prêt pour les clients grâce à la livraison des connecteurs, l’onboarding des tenants, une configuration IA gouvernée, des flux de données surveillés et le support en production.',
    discussCta: 'Parler de Sello',
    openSourceCta: 'Découvrir l’open source',
    surfacesEyebrow: 'Une plateforme, quatre interfaces',
    surfaces: [
      { name: 'Site Web', detail: 'Informations produit publiques et points d’entrée' },
      { name: 'Portail', detail: 'Espace vendeur pour les équipes, boutiques, catalogues et outils IA' },
      { name: 'Administration', detail: 'Opérations de plateforme pour les tenants, utilisateurs, abonnements et audits' },
      { name: 'API', detail: 'Service FastAPI partagé pour l’identité, les tenants, les données et les intégrations' },
    ],
    capabilitiesEyebrow: 'Fonctionnalités du produit',
    capabilitiesTitle: 'Une couche opérationnelle pratique pour les équipes e-commerce',
    capabilitiesDescription: 'Le produit est organisé autour du travail quotidien des vendeurs, opérateurs, équipes support, propriétaires de tenants et administrateurs plutôt qu’autour de fonctions IA isolées.',
    capabilities: [
      { name: 'Opérations des boutiques connectées', description: 'Gérez autorisation, synchronisation, erreurs et contexte opérationnel depuis un espace tenant-aware.' },
      { name: 'Espace produit unifié', description: 'Consultez les catalogues de différentes plateformes via un modèle cohérent tout en conservant le contexte de la source.' },
      { name: 'Optimisation assistée par IA', description: 'Générez des suggestions de titres et descriptions vérifiables avec une IA managée ou un fournisseur approuvé par le tenant.' },
      { name: 'Assistance aux réponses clients', description: 'Transformez une question client et le contexte produit en brouillon modifiable, vérifié par le support avant envoi.' },
      { name: 'Contrôles d’équipe et de tenant', description: 'Séparez les espaces clients de l’administration avec rôles, permissions ciblées et contrôles du cycle de vie des comptes.' },
      { name: 'Workflows contrôlés par l’humain', description: 'Gardez les améliorations, brouillons et actions générés par IA visibles, modifiables et soumis à confirmation.' },
    ],
    edition: {
      eyebrow: 'Produit Learnmark',
      title: 'Ce que le produit managé Sello ajoute',
      description: 'Le dépôt public établit la base multi-tenant. Le produit Learnmark ajoute l’implémentation des connecteurs, l’onboarding, la gouvernance et la responsabilité opérationnelle nécessaires aux vraies charges e-commerce.',
      features: [
        { name: 'Livraison des connecteurs marketplace', description: 'Implémentez et validez connexions, cycle de vie des identifiants, mappages, calendriers de synchronisation, tentatives et gestion des erreurs propres aux plateformes.' },
        { name: 'Onboarding et contrôles des tenants', description: 'Provisionnez les tenants, établissez les rôles propriétaires et équipes, configurez les frontières d’environnement et appliquez les politiques opérationnelles.' },
        { name: 'Gouvernance des fournisseurs IA', description: 'Configurez fournisseurs gérés ou détenus par le client, modèles approuvés, accès aux fonctions, visibilité sur l’usage et exigences de revue.' },
        { name: 'Données et opérations managées', description: 'Exploitez versions, sauvegardes, tâches de synchronisation surveillées, triage, réparation des données et support continu.' },
      ],
      compareLabel: 'Comparer avec la base open source',
    },
    screenshotsEyebrow: 'Captures du produit',
    screenshotsTitle: 'Les workflows couverts par les premières captures',
    screenshotsDescription: 'De vraies captures seront ajoutées lorsque le portail vendeur et les interfaces d’administration actuels seront prêts à être publiés.',
    screenshotCoverage: [
      { name: 'Espace vendeur', detail: 'Tableau de bord, contexte du tenant, accès de l’équipe et priorités opérationnelles' },
      { name: 'Boutiques et catalogues', detail: 'Connexions, synchronisation, produits normalisés et revue du contenu' },
      { name: 'IA et administration', detail: 'Réglages fournisseurs, brouillons générés, contrôles d’usage, tenants et opérations' },
    ],
    closingEyebrow: 'Planifiez le produit autour de vos canaux',
    closingTitle: 'Commencez par les boutiques, workflows et contrôles IA dont votre équipe a réellement besoin.',
    closingCta: 'Planifier un déploiement Sello',
  },
  de: {
    seoTitle: 'Sello - Managed KI-Commerce-Arbeitsbereich',
    seoDescription: 'Das Managed-Produkt Sello bietet E-Commerce-Teams einen betriebenen Arbeitsbereich für Shop-Verbindungen, einheitliche Angebote, KI-gestützte Inhalte, Kundenantworten, Mandantenkontrollen und Produktionssupport.',
    seoKeywords: ['Sello', 'Managed E-Commerce-SaaS', 'KI-Commerce-Assistent', 'Multi-Shop-Commerce-Plattform', 'Optimierung von Produktangeboten', 'E-Commerce-Betrieb'],
    breadcrumbHome: 'Startseite',
    eyebrow: 'Managed Commerce-Betrieb',
    heroSummary: 'Ein betriebener Arbeitsbereich für E-Commerce-Teams, die verbundene Shops, konsistente Produktinformationen und hilfreiche KI-Unterstützung benötigen, ohne die menschliche Kontrolle aufzugeben.',
    heroDescription: 'Learnmark macht die öffentliche Sello-Basis durch Connector-Implementierung, Mandanten-Onboarding, gesteuerte KI-Konfiguration, überwachte Datenflüsse und Produktionssupport zu einem einsatzbereiten Produkt.',
    discussCta: 'Sello besprechen',
    openSourceCta: 'Open Source entdecken',
    surfacesEyebrow: 'Eine Plattform, vier Oberflächen',
    surfaces: [
      { name: 'Website', detail: 'Öffentliche Produktinformationen und Einstiegspunkte' },
      { name: 'Portal', detail: 'Verkäuferarbeitsbereich für Teams, Shops, Angebote und KI-Werkzeuge' },
      { name: 'Verwaltung', detail: 'Plattformbetrieb für Mandanten, Benutzer, Abonnements und Audits' },
      { name: 'API', detail: 'Gemeinsamer FastAPI-Dienst für Identität, Mandanten, Daten und Integrationen' },
    ],
    capabilitiesEyebrow: 'Produktfunktionen',
    capabilitiesTitle: 'Eine praktische Betriebsschicht für Commerce-Teams',
    capabilitiesDescription: 'Das Produkt orientiert sich an der täglichen Arbeit von Verkäufern, Betreibern, Supportteams, Mandantenverantwortlichen und Plattformadministratoren statt an isolierten KI-Funktionen.',
    capabilities: [
      { name: 'Betrieb verbundener Shops', description: 'Shop-Autorisierung, Synchronisierungsstatus, Fehler und Betriebskontext in einem mandantenbezogenen Arbeitsbereich verwalten.' },
      { name: 'Einheitlicher Produktarbeitsbereich', description: 'Angebote verschiedener Commerce-Plattformen über ein konsistentes Produktmodell prüfen und den Quellkontext bewahren.' },
      { name: 'KI-gestützte Optimierung', description: 'Prüfbare Titel- und Beschreibungsvorschläge mit Managed KI oder einem freigegebenen, mandantengesteuerten Anbieter erzeugen.' },
      { name: 'Unterstützung bei Kundenantworten', description: 'Kundenfrage und Produktkontext in einen bearbeitbaren Antwortentwurf überführen, den der Support vor dem Versand prüft.' },
      { name: 'Team- und Mandantenkontrollen', description: 'Kundenarbeitsbereiche mit Mitgliederrollen, begrenzten Berechtigungen und Kontolebenszyklus vom Plattformbetrieb trennen.' },
      { name: 'Menschlich kontrollierte Workflows', description: 'KI-generierte Verbesserungen, Antwortentwürfe und Aktionen sichtbar, bearbeitbar und bestätigungspflichtig halten.' },
    ],
    edition: {
      eyebrow: 'Learnmark-Produkt',
      title: 'Was das Managed-Produkt Sello ergänzt',
      description: 'Das öffentliche Repository legt die mandantenfähige Anwendungsbasis. Das Learnmark-Produkt ergänzt Connector-Implementierung, Onboarding, Governance und Betriebsverantwortung für reale Commerce-Workloads.',
      features: [
        { name: 'Marketplace-Connector-Implementierung', description: 'Ausgewählte Shop-Verbindungen, Zugangsdatenlebenszyklen, Feldzuordnungen, Synchronisierungspläne, Wiederholungen und plattformspezifische Fehlerbehandlung umsetzen und prüfen.' },
        { name: 'Mandanten-Onboarding und Kontrollen', description: 'Kundenmandanten bereitstellen, Eigentümer- und Teamrollen festlegen, Umgebungsgrenzen konfigurieren und Betriebsrichtlinien anwenden.' },
        { name: 'Governance für KI-Anbieter', description: 'Managed oder kundeneigene Modellanbieter, freigegebene Modelle, Funktionszugriff, Nutzungstransparenz und Prüfanforderungen konfigurieren.' },
        { name: 'Managed Daten und Betrieb', description: 'Releases, Backups, überwachte Synchronisierungsjobs, Incident-Triage, Datenreparatur und laufenden Plattformsupport betreiben.' },
      ],
      compareLabel: 'Mit der Open-Source-Basis vergleichen',
    },
    screenshotsEyebrow: 'Produkt-Screenshots',
    screenshotsTitle: 'Workflows der ersten Screenshot-Serie',
    screenshotsDescription: 'Echte Produkt-Screenshots werden ergänzt, sobald das aktuelle Verkäuferportal und die Verwaltungsoberflächen veröffentlichungsreif sind.',
    screenshotCoverage: [
      { name: 'Verkäuferarbeitsbereich', detail: 'Dashboard, Mandantenkontext, Teamzugriff und betriebliche Prioritäten' },
      { name: 'Shops und Angebote', detail: 'Verbindungen, Synchronisierungsstatus, normalisierte Produkte und Inhaltsprüfung' },
      { name: 'KI und Verwaltung', detail: 'Anbietereinstellungen, generierte Entwürfe, Nutzungskontrollen, Mandanten und Plattformbetrieb' },
    ],
    closingEyebrow: 'Das Produkt an Ihren Kanälen ausrichten',
    closingTitle: 'Mit den Shops, Workflows und KI-Kontrollen beginnen, die Ihr Team wirklich braucht.',
    closingCta: 'Sello-Bereitstellung planen',
  },
}