import type { Locale } from '../../config'

type LlmxyProductMessages = {
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  breadcrumbHome: string
  eyebrow: string
  heroDescription: string
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
  salesCta: string
}

export const llmxyProductMessages: Record<Locale, LlmxyProductMessages> = {
  en: {
    seoTitle: 'llmxy - Managed LLM Gateway Operations',
    seoDescription: 'The managed llmxy product helps teams operate a production LLM gateway with provider routing, access controls, usage billing, monitored deployment, and implementation support.',
    seoKeywords: ['llmxy', 'managed LLM gateway', 'LLM routing', 'multi-provider LLM API', 'AI billing analytics', 'LLM gateway operations'],
    breadcrumbHome: 'Home',
    eyebrow: 'Managed AI Infrastructure',
    heroDescription: 'Operate one production gateway for multiple model providers with controlled routing, OpenAI-compatible APIs, usage visibility, and a managed path from deployment to day-two operations.',
    heroImageAlt: 'llmxy smart routing dashboard',
    introduction: 'llmxy sits between your applications and model providers as a unified control plane. Teams keep a stable client protocol while operators configure upstream channels, models, route policies, quotas, and billing from one place.',
    features: [
      { name: 'Operator-controlled routing', description: 'Configure upstream channels, model mappings, route policies, and weights without changing application clients.' },
      { name: 'Gateway enforcement', description: 'Apply authentication, balance and quota checks, rate limiting, usage recording, and billing consistently at the gateway.' },
      { name: 'Multi-provider access', description: 'Use an OpenAI-compatible protocol in front of OpenAI, Anthropic, Gemini, and translated upstream responses.' },
      { name: 'Usage Analytics', description: 'Track token consumption, cost, and latency per model, key, and tenant with real-time dashboards.' },
      { name: 'Two relay paths', description: 'Start with the direct FastAPI relay or add the optional Envoy path for higher-throughput traffic and asynchronous usage reporting.' },
    ],
    managedSummary: 'The Learnmark product turns that open-source foundation into an operated gateway environment, with deployment engineering, provider onboarding, production controls, and an accountable support path.',
    edition: {
      eyebrow: 'Learnmark Product',
      title: 'What the managed llmxy product adds',
      description: 'The repository provides the gateway software. The Learnmark product adds the engineering and operational layer required to introduce it into a production platform and keep it healthy over time.',
      features: [
        { name: 'Managed private deployment', description: 'Provision llmxy in a dedicated Learnmark-managed or customer-controlled environment with repeatable releases, encrypted configuration, backups, and rollback procedures.' },
        { name: 'Provider and routing onboarding', description: 'Connect approved model providers, map model names, define route weights and policies, and validate failover behavior against your applications before rollout.' },
        { name: 'Production observability', description: 'Add environment-level metrics, alerting, capacity reviews, usage reconciliation, and operational runbooks around the gateway and its data services.' },
        { name: 'Upgrade and incident support', description: 'Receive coordinated upgrades, change reviews, troubleshooting, and a clear escalation path instead of operating the open-source stack alone.' },
      ],
      compareLabel: 'Compare with the open-source foundation',
    },
    screenshotsTitle: 'Product Screenshots',
    screenshotsDescription: 'The llmxy interface combines a self-service user console with an admin workspace for routing, monitoring, and billing operations.',
    screenshots: [
      { alt: 'llmxy user overview dashboard', title: 'User overview', description: 'Account balance, subscriptions, and quick-start API examples give users a clear path from signup to first request.' },
      { alt: 'llmxy available models and API examples', title: 'Models and API snippets', description: 'Expose available models with protocol tags and copy-ready curl, JavaScript, and Python request examples.' },
      { alt: 'llmxy admin smart routing configuration', title: 'Smart routing rules', description: 'Configure weighted, fallback, and prompt-aware routes across upstream providers from the admin console.' },
      { alt: 'llmxy admin usage and billing logs', title: 'Usage and billing logs', description: 'Filter usage by user, key, model, status, and label while tracking cost, latency, and token consumption.' },
    ],
    closingTitle: 'An open foundation with an operated product path',
    closingDescription: 'Inspect and self-host the llmxy source code, or use the Learnmark product when your team needs implementation, environment ownership, controlled upgrades, and production support.',
    openSourceCta: 'Explore Open Source',
    salesCta: 'Contact Sales',
  },
  'zh-CN': {
    seoTitle: 'llmxy - 托管式 LLM 网关运维',
    seoDescription: '托管式 llmxy 产品帮助团队运行生产级 LLM 网关，提供模型提供商路由、访问控制、用量计费、受监控部署和实施支持。',
    seoKeywords: ['llmxy', '托管式 LLM 网关', 'LLM 路由', '多提供商 LLM API', 'AI 计费分析', 'LLM 网关运维'],
    breadcrumbHome: '首页',
    eyebrow: '托管式 AI 基础设施',
    heroDescription: '通过受控路由、OpenAI 兼容 API、用量可视化，以及从部署到日常运维的托管路径，为多个模型提供商运行一个生产级网关。',
    heroImageAlt: 'llmxy 智能路由仪表板',
    introduction: 'llmxy 作为统一控制平面位于应用与模型提供商之间。团队保持稳定的客户端协议，运维人员则可在一处配置上游渠道、模型、路由策略、配额和计费。',
    features: [
      { name: '运维人员控制的路由', description: '无需更改应用客户端，即可配置上游渠道、模型映射、路由策略和权重。' },
      { name: '网关执行', description: '在网关一致执行身份验证、余额与配额检查、限流、用量记录和计费。' },
      { name: '多提供商访问', description: '在 OpenAI、Anthropic、Gemini 和经过转换的上游响应之前使用 OpenAI 兼容协议。' },
      { name: '用量分析', description: '通过实时仪表板按模型、密钥和租户跟踪 Token 用量、成本与延迟。' },
      { name: '两条中继路径', description: '从直接 FastAPI 中继起步，或为更高吞吐量和异步用量报告添加可选 Envoy 路径。' },
    ],
    managedSummary: 'Learnmark 产品将该开源基础转化为受运营的网关环境，涵盖部署工程、提供商接入、生产控制和责任明确的支持路径。',
    edition: {
      eyebrow: 'Learnmark 产品',
      title: '托管式 llmxy 产品增加了什么',
      description: '仓库提供网关软件；Learnmark 产品增加将其引入生产平台并长期保持健康所需的工程与运维层。',
      features: [
        { name: '托管式私有部署', description: '在 Learnmark 专属托管或客户控制的环境中配置 llmxy，提供可重复发布、加密配置、备份和回滚流程。' },
        { name: '提供商与路由接入', description: '连接获批模型提供商、映射模型名称、定义路由权重和策略，并在上线前针对应用验证故障转移。' },
        { name: '生产可观测性', description: '围绕网关及其数据服务增加环境级指标、告警、容量评审、用量核对和运维手册。' },
        { name: '升级与事件支持', description: '获得协调升级、变更评审、故障排查和清晰升级路径，无需独自运营开源技术栈。' },
      ],
      compareLabel: '与开源基础版本比较',
    },
    screenshotsTitle: '产品截图',
    screenshotsDescription: 'llmxy 界面将自助式用户控制台与用于路由、监控和计费运维的管理工作空间结合起来。',
    screenshots: [
      { alt: 'llmxy 用户概览仪表板', title: '用户概览', description: '账户余额、订阅和快速入门 API 示例，为用户提供从注册到首次请求的清晰路径。' },
      { alt: 'llmxy 可用模型与 API 示例', title: '模型与 API 代码片段', description: '展示带协议标签的可用模型，以及可直接复制的 curl、JavaScript 和 Python 请求示例。' },
      { alt: 'llmxy 管理端智能路由配置', title: '智能路由规则', description: '从管理控制台为多个上游提供商配置加权、回退和提示词感知路由。' },
      { alt: 'llmxy 管理端用量与计费日志', title: '用量与计费日志', description: '按用户、密钥、模型、状态和标签筛选用量，同时跟踪成本、延迟和 Token 消耗。' },
    ],
    closingTitle: '开放基础与托管产品路径',
    closingDescription: '检查并自行托管 llmxy 源码；当团队需要实施、环境所有权、受控升级和生产支持时，也可使用 Learnmark 产品。',
    openSourceCta: '了解开源版本',
    salesCta: '联系销售',
  },
  'zh-TW': {
    seoTitle: 'llmxy - 託管式 LLM 閘道維運',
    seoDescription: '託管式 llmxy 產品協助團隊運行正式環境 LLM 閘道，提供模型供應商路由、存取控制、用量計費、受監控部署與實作支援。',
    seoKeywords: ['llmxy', '託管式 LLM 閘道', 'LLM 路由', '多供應商 LLM API', 'AI 計費分析', 'LLM 閘道維運'],
    breadcrumbHome: '首頁',
    eyebrow: '託管式 AI 基礎設施',
    heroDescription: '透過受控路由、OpenAI 相容 API、用量可視化，以及從部署到日常維運的託管路徑，為多個模型供應商運行單一正式環境閘道。',
    heroImageAlt: 'llmxy 智慧路由儀表板',
    introduction: 'llmxy 作為統一控制平面位於應用程式與模型供應商之間。團隊維持穩定的用戶端協定，維運人員則可在一處設定上游管道、模型、路由政策、配額與計費。',
    features: [
      { name: '維運人員控制的路由', description: '無需變更應用程式用戶端，即可設定上游管道、模型對應、路由政策與權重。' },
      { name: '閘道執行', description: '在閘道一致執行驗證、餘額與配額檢查、限流、用量記錄及計費。' },
      { name: '多供應商存取', description: '在 OpenAI、Anthropic、Gemini 與經過轉換的上游回應之前使用 OpenAI 相容協定。' },
      { name: '用量分析', description: '透過即時儀表板依模型、金鑰與租戶追蹤 Token 用量、成本和延遲。' },
      { name: '兩條中繼路徑', description: '從直接 FastAPI 中繼開始，或為更高吞吐量與非同步用量報告加入可選 Envoy 路徑。' },
    ],
    managedSummary: 'Learnmark 產品將此開源基礎轉化為受營運的閘道環境，涵蓋部署工程、供應商導入、正式環境控制與責任明確的支援路徑。',
    edition: {
      eyebrow: 'Learnmark 產品',
      title: '託管式 llmxy 產品增加了什麼',
      description: '儲存庫提供閘道軟體；Learnmark 產品增加將其導入正式平台並長期維持健康所需的工程與維運層。',
      features: [
        { name: '託管式私有部署', description: '在 Learnmark 專屬託管或客戶控制的環境中配置 llmxy，提供可重複發布、加密設定、備份與回復程序。' },
        { name: '供應商與路由導入', description: '連接核准的模型供應商、對應模型名稱、定義路由權重與政策，並在上線前針對應用程式驗證容錯移轉。' },
        { name: '正式環境可觀測性', description: '圍繞閘道及其資料服務增加環境層級指標、警示、容量檢視、用量核對與維運手冊。' },
        { name: '升級與事件支援', description: '取得協調升級、變更檢視、疑難排解與清楚的升級路徑，無需獨自營運開源技術堆疊。' },
      ],
      compareLabel: '與開源基礎版本比較',
    },
    screenshotsTitle: '產品截圖',
    screenshotsDescription: 'llmxy 介面將自助式使用者控制台與用於路由、監控及計費維運的管理工作空間結合。',
    screenshots: [
      { alt: 'llmxy 使用者概覽儀表板', title: '使用者概覽', description: '帳戶餘額、訂閱與快速入門 API 範例，為使用者提供從註冊到首次請求的清楚路徑。' },
      { alt: 'llmxy 可用模型與 API 範例', title: '模型與 API 程式碼片段', description: '顯示具協定標籤的可用模型，以及可直接複製的 curl、JavaScript 與 Python 請求範例。' },
      { alt: 'llmxy 管理端智慧路由設定', title: '智慧路由規則', description: '從管理控制台為多個上游供應商設定加權、回復與提示詞感知路由。' },
      { alt: 'llmxy 管理端用量與計費記錄', title: '用量與計費記錄', description: '依使用者、金鑰、模型、狀態與標籤篩選用量，同時追蹤成本、延遲和 Token 消耗。' },
    ],
    closingTitle: '開放基礎與託管產品路徑',
    closingDescription: '檢視並自行架設 llmxy 原始碼；當團隊需要實作、環境所有權、受控升級與正式環境支援時，也可使用 Learnmark 產品。',
    openSourceCta: '瞭解開源版本',
    salesCta: '聯絡業務',
  },
  ja: {
    seoTitle: 'llmxy - マネージド LLM ゲートウェイ運用',
    seoDescription: 'マネージド llmxy は、プロバイダーのルーティング、アクセス制御、利用量課金、監視付き展開、導入支援を備えた本番 LLM ゲートウェイの運用を支援します。',
    seoKeywords: ['llmxy', 'マネージド LLM ゲートウェイ', 'LLM ルーティング', 'マルチプロバイダー LLM API', 'AI 課金分析', 'LLM ゲートウェイ運用'],
    breadcrumbHome: 'ホーム',
    eyebrow: 'マネージド AI インフラストラクチャ',
    heroDescription: '制御されたルーティング、OpenAI 互換 API、利用状況の可視化、展開から日常運用までのマネージドパスにより、複数のモデルプロバイダーを単一の本番ゲートウェイで運用します。',
    heroImageAlt: 'llmxy スマートルーティングダッシュボード',
    introduction: 'llmxy はアプリケーションとモデルプロバイダーの間に統合コントロールプレーンとして配置されます。クライアントプロトコルを安定させたまま、運用者は上流チャネル、モデル、ルーティングポリシー、クォータ、課金を一元設定できます。',
    features: [
      { name: '運用者が制御するルーティング', description: 'アプリケーションクライアントを変更せずに、上流チャネル、モデルマッピング、ルーティングポリシー、重みを設定します。' },
      { name: 'ゲートウェイでの適用', description: '認証、残高・クォータ確認、レート制限、利用量記録、課金をゲートウェイで一貫して適用します。' },
      { name: 'マルチプロバイダーアクセス', description: 'OpenAI、Anthropic、Gemini および変換された上流レスポンスの前段で OpenAI 互換プロトコルを使用します。' },
      { name: '利用状況分析', description: 'リアルタイムダッシュボードでモデル、キー、テナント別の Token 消費、コスト、レイテンシを追跡します。' },
      { name: '2 つのリレーパス', description: 'FastAPI の直接リレーから開始し、高スループットと非同期利用量報告にはオプションの Envoy パスを追加します。' },
    ],
    managedSummary: 'Learnmark 製品はオープンソース基盤を、展開エンジニアリング、プロバイダー導入、本番制御、責任あるサポート経路を備えた運用済みゲートウェイ環境へ変えます。',
    edition: {
      eyebrow: 'Learnmark 製品',
      title: 'マネージド llmxy 製品が追加するもの',
      description: 'リポジトリがゲートウェイソフトウェアを提供し、Learnmark 製品は本番プラットフォームへの導入と長期的な健全性維持に必要なエンジニアリング・運用層を追加します。',
      features: [
        { name: 'マネージドプライベート展開', description: 'Learnmark 専用管理または顧客管理の環境に llmxy を構築し、再現可能なリリース、暗号化設定、バックアップ、ロールバック手順を提供します。' },
        { name: 'プロバイダーとルーティングの導入', description: '承認済みモデルプロバイダーを接続し、モデル名、ルート重み、ポリシーを定義して、展開前にアプリケーションのフェイルオーバーを検証します。' },
        { name: '本番の可観測性', description: 'ゲートウェイとデータサービスに環境レベルのメトリクス、アラート、容量レビュー、利用量照合、運用手順書を追加します。' },
        { name: 'アップグレードとインシデント支援', description: 'オープンソーススタックを単独運用する代わりに、調整済みアップグレード、変更レビュー、トラブルシューティング、明確なエスカレーション経路を利用できます。' },
      ],
      compareLabel: 'オープンソース基盤と比較する',
    },
    screenshotsTitle: '製品スクリーンショット',
    screenshotsDescription: 'llmxy はセルフサービスのユーザーコンソールと、ルーティング、監視、課金運用のための管理ワークスペースを統合します。',
    screenshots: [
      { alt: 'llmxy ユーザー概要ダッシュボード', title: 'ユーザー概要', description: '残高、サブスクリプション、クイックスタート API 例により、登録から最初のリクエストまでを明確に案内します。' },
      { alt: 'llmxy の利用可能モデルと API 例', title: 'モデルと API スニペット', description: 'プロトコルタグ付きの利用可能モデルと、コピー可能な curl、JavaScript、Python のリクエスト例を表示します。' },
      { alt: 'llmxy 管理スマートルーティング設定', title: 'スマートルーティングルール', description: '管理コンソールから上流プロバイダー間の重み付き、フォールバック、プロンプト対応ルートを設定します。' },
      { alt: 'llmxy 管理の利用量・課金ログ', title: '利用量と課金ログ', description: 'ユーザー、キー、モデル、状態、ラベルで利用量を絞り込み、コスト、レイテンシ、Token 消費を追跡します。' },
    ],
    closingTitle: 'オープンな基盤と運用済み製品への道',
    closingDescription: 'llmxy のソースコードを確認してセルフホストするか、導入、環境管理、制御されたアップグレード、本番支援が必要な場合は Learnmark 製品をご利用ください。',
    openSourceCta: 'オープンソースを見る',
    salesCta: '営業に問い合わせる',
  },
  fr: {
    seoTitle: 'llmxy - Opérations managées de passerelle LLM',
    seoDescription: 'Le produit managé llmxy aide les équipes à exploiter une passerelle LLM en production avec routage des fournisseurs, contrôle des accès, facturation à l’usage, déploiement surveillé et accompagnement à l’implémentation.',
    seoKeywords: ['llmxy', 'passerelle LLM managée', 'routage LLM', 'API LLM multi-fournisseurs', 'analyse de facturation IA', 'opérations de passerelle LLM'],
    breadcrumbHome: 'Accueil',
    eyebrow: 'Infrastructure IA managée',
    heroDescription: 'Exploitez une passerelle de production pour plusieurs fournisseurs de modèles avec routage contrôlé, API compatibles OpenAI, visibilité sur l’usage et parcours managé du déploiement aux opérations quotidiennes.',
    heroImageAlt: 'Tableau de bord de routage intelligent llmxy',
    introduction: 'llmxy se place entre vos applications et les fournisseurs de modèles comme plan de contrôle unifié. Les équipes conservent un protocole client stable tandis que les opérateurs configurent au même endroit canaux amont, modèles, politiques de routage, quotas et facturation.',
    features: [
      { name: 'Routage contrôlé par les opérateurs', description: 'Configurez canaux amont, correspondances de modèles, politiques de routage et pondérations sans modifier les clients applicatifs.' },
      { name: 'Application des contrôles', description: 'Appliquez de manière cohérente l’authentification, les contrôles de solde et de quota, la limitation de débit, l’enregistrement de l’usage et la facturation.' },
      { name: 'Accès multi-fournisseurs', description: 'Utilisez un protocole compatible OpenAI devant OpenAI, Anthropic, Gemini et les réponses amont traduites.' },
      { name: 'Analyse de l’usage', description: 'Suivez en temps réel la consommation de tokens, le coût et la latence par modèle, clé et tenant.' },
      { name: 'Deux chemins de relais', description: 'Commencez avec le relais FastAPI direct ou ajoutez le chemin Envoy optionnel pour un débit supérieur et un reporting asynchrone.' },
    ],
    managedSummary: 'Le produit Learnmark transforme cette base open source en environnement de passerelle exploité, avec ingénierie de déploiement, intégration des fournisseurs, contrôles de production et support responsable.',
    edition: {
      eyebrow: 'Produit Learnmark',
      title: 'Ce que le produit managé llmxy ajoute',
      description: 'Le dépôt fournit le logiciel de passerelle. Le produit Learnmark ajoute la couche d’ingénierie et d’exploitation nécessaire pour l’introduire en production et le maintenir durablement.',
      features: [
        { name: 'Déploiement privé managé', description: 'Provisionnez llmxy dans un environnement dédié géré par Learnmark ou contrôlé par le client, avec versions reproductibles, configuration chiffrée, sauvegardes et procédures de retour arrière.' },
        { name: 'Intégration fournisseurs et routage', description: 'Connectez les fournisseurs approuvés, mappez les modèles, définissez pondérations et politiques, puis validez le basculement avec vos applications avant le lancement.' },
        { name: 'Observabilité en production', description: 'Ajoutez métriques d’environnement, alertes, revues de capacité, rapprochement d’usage et runbooks autour de la passerelle et de ses services de données.' },
        { name: 'Support des mises à niveau et incidents', description: 'Bénéficiez de mises à niveau coordonnées, revues de changement, diagnostic et d’un parcours d’escalade clair au lieu d’exploiter seul la stack open source.' },
      ],
      compareLabel: 'Comparer avec la base open source',
    },
    screenshotsTitle: 'Captures du produit',
    screenshotsDescription: 'L’interface llmxy associe une console utilisateur en libre-service à un espace d’administration pour le routage, la supervision et la facturation.',
    screenshots: [
      { alt: 'Tableau de bord utilisateur llmxy', title: 'Vue d’ensemble utilisateur', description: 'Solde, abonnements et exemples API de démarrage guident clairement l’utilisateur de l’inscription à sa première requête.' },
      { alt: 'Modèles disponibles et exemples API llmxy', title: 'Modèles et extraits API', description: 'Affichez les modèles avec leurs protocoles et des exemples curl, JavaScript et Python prêts à copier.' },
      { alt: 'Configuration du routage intelligent llmxy', title: 'Règles de routage intelligent', description: 'Configurez depuis la console des routes pondérées, de secours et sensibles aux prompts entre fournisseurs amont.' },
      { alt: 'Journaux d’usage et de facturation llmxy', title: 'Journaux d’usage et de facturation', description: 'Filtrez par utilisateur, clé, modèle, statut et étiquette tout en suivant coût, latence et consommation de tokens.' },
    ],
    closingTitle: 'Une base ouverte avec un parcours produit exploité',
    closingDescription: 'Inspectez et auto-hébergez le code llmxy, ou utilisez le produit Learnmark lorsque votre équipe a besoin d’implémentation, de responsabilité d’environnement, de mises à niveau contrôlées et de support en production.',
    openSourceCta: 'Découvrir l’open source',
    salesCta: 'Contacter les ventes',
  },
  de: {
    seoTitle: 'llmxy - Managed LLM-Gateway-Betrieb',
    seoDescription: 'Das Managed-Produkt llmxy unterstützt Teams beim Betrieb eines produktiven LLM-Gateways mit Anbieter-Routing, Zugriffskontrollen, Nutzungsabrechnung, überwachter Bereitstellung und Implementierungssupport.',
    seoKeywords: ['llmxy', 'Managed LLM-Gateway', 'LLM-Routing', 'anbieterübergreifende LLM-API', 'KI-Abrechnungsanalyse', 'LLM-Gateway-Betrieb'],
    breadcrumbHome: 'Startseite',
    eyebrow: 'Managed KI-Infrastruktur',
    heroDescription: 'Ein Produktions-Gateway für mehrere Modellanbieter mit kontrolliertem Routing, OpenAI-kompatiblen APIs, Nutzungstransparenz und einem Managed-Pfad von der Bereitstellung bis zum laufenden Betrieb.',
    heroImageAlt: 'llmxy-Dashboard für intelligentes Routing',
    introduction: 'llmxy sitzt als einheitliche Steuerungsebene zwischen Anwendungen und Modellanbietern. Teams behalten ein stabiles Client-Protokoll, während Betreiber Upstream-Kanäle, Modelle, Routing-Richtlinien, Kontingente und Abrechnung zentral konfigurieren.',
    features: [
      { name: 'Betreibergesteuertes Routing', description: 'Upstream-Kanäle, Modellzuordnungen, Routing-Richtlinien und Gewichtungen konfigurieren, ohne Anwendungsclients zu ändern.' },
      { name: 'Gateway-Durchsetzung', description: 'Authentifizierung, Guthaben- und Kontingentprüfungen, Ratenbegrenzung, Nutzungserfassung und Abrechnung einheitlich am Gateway anwenden.' },
      { name: 'Zugriff auf mehrere Anbieter', description: 'Ein OpenAI-kompatibles Protokoll vor OpenAI, Anthropic, Gemini und übersetzten Upstream-Antworten verwenden.' },
      { name: 'Nutzungsanalyse', description: 'Token-Verbrauch, Kosten und Latenz pro Modell, Schlüssel und Mandant mit Echtzeit-Dashboards verfolgen.' },
      { name: 'Zwei Relay-Pfade', description: 'Mit dem direkten FastAPI-Relay starten oder den optionalen Envoy-Pfad für höheren Durchsatz und asynchrone Nutzungsberichte ergänzen.' },
    ],
    managedSummary: 'Das Learnmark-Produkt macht aus der Open-Source-Basis eine betriebene Gateway-Umgebung mit Bereitstellungsengineering, Anbieter-Onboarding, Produktionskontrollen und verantwortlichem Support.',
    edition: {
      eyebrow: 'Learnmark-Produkt',
      title: 'Was das Managed-Produkt llmxy ergänzt',
      description: 'Das Repository liefert die Gateway-Software. Das Learnmark-Produkt ergänzt die Engineering- und Betriebsschicht, um sie in eine Produktionsplattform einzuführen und langfristig gesund zu halten.',
      features: [
        { name: 'Managed Private Deployment', description: 'llmxy in einer dedizierten, von Learnmark verwalteten oder kundengesteuerten Umgebung mit reproduzierbaren Releases, verschlüsselter Konfiguration, Backups und Rollback-Verfahren bereitstellen.' },
        { name: 'Anbieter- und Routing-Onboarding', description: 'Freigegebene Modellanbieter verbinden, Modellnamen zuordnen, Gewichtungen und Richtlinien definieren und Failover vor dem Rollout mit den Anwendungen prüfen.' },
        { name: 'Produktionsbeobachtbarkeit', description: 'Umgebungsmetriken, Alarmierung, Kapazitätsprüfungen, Nutzungsabgleich und Betriebshandbücher rund um Gateway und Datendienste ergänzen.' },
        { name: 'Upgrade- und Incident-Support', description: 'Koordinierte Upgrades, Änderungsprüfungen, Fehlerbehebung und einen klaren Eskalationsweg erhalten, statt den Open-Source-Stack allein zu betreiben.' },
      ],
      compareLabel: 'Mit der Open-Source-Basis vergleichen',
    },
    screenshotsTitle: 'Produkt-Screenshots',
    screenshotsDescription: 'Die llmxy-Oberfläche verbindet eine Self-Service-Benutzerkonsole mit einem Verwaltungsbereich für Routing, Überwachung und Abrechnung.',
    screenshots: [
      { alt: 'llmxy-Benutzerübersicht', title: 'Benutzerübersicht', description: 'Kontostand, Abonnements und Schnellstart-API-Beispiele führen Benutzer klar von der Anmeldung zur ersten Anfrage.' },
      { alt: 'Verfügbare llmxy-Modelle und API-Beispiele', title: 'Modelle und API-Beispiele', description: 'Verfügbare Modelle mit Protokollkennzeichen und kopierfertigen curl-, JavaScript- und Python-Anfragen anzeigen.' },
      { alt: 'llmxy-Konfiguration für intelligentes Routing', title: 'Regeln für intelligentes Routing', description: 'Gewichtete, Fallback- und Prompt-bezogene Routen über Upstream-Anbieter in der Verwaltungskonsole konfigurieren.' },
      { alt: 'llmxy-Nutzungs- und Abrechnungsprotokolle', title: 'Nutzungs- und Abrechnungsprotokolle', description: 'Nutzung nach Benutzer, Schlüssel, Modell, Status und Label filtern und dabei Kosten, Latenz und Token-Verbrauch verfolgen.' },
    ],
    closingTitle: 'Offene Basis mit einem betriebenen Produktpfad',
    closingDescription: 'Den llmxy-Quellcode prüfen und selbst hosten oder das Learnmark-Produkt nutzen, wenn Implementierung, Umgebungsverantwortung, kontrollierte Upgrades und Produktionssupport benötigt werden.',
    openSourceCta: 'Open Source entdecken',
    salesCta: 'Vertrieb kontaktieren',
  },
}