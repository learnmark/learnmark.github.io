# Website Image Generation Prompts

本文档记录 Learnmark 网站核心商业链路的首批 AI 图片素材。所有提示词面向 `gpt-image-2`，共 5 张，只表现全球专家网络与企业咨询服务；Sello、其他产品和技术解决方案不在本批素材范围内。

## Assessment

首批素材只覆盖图片能够显著增强理解和信任的五个商业场景：

1. 企业团队与专家进行实际咨询。
2. 企业围绕关键决策使用一手经验。
3. Learnmark 项目团队定向寻源、筛选和匹配专家。
4. 专家自主评估并参与相关机会。
5. 敏感项目经过分层控制和人工复核。

页面现有的数据面板、步骤列表和规则说明继续承担精确信息表达，图片不替代这些内容。About 页面复述的是同一个双边网络模型，可复用首页素材或保留现有结构化视觉，不单独生成图片。虚构研究报告、客户成果、团队合照或客户案例容易被误认为真实证据，也不纳入生成范围。

## Source File Layout

生成后的原始文件按以下结构保存：

```text
assets/image-sources/
└── expert-network/
    ├── home-global-expertise-source.png
    ├── for-clients-decision-session-source.png
    ├── how-it-works-expert-matching-source.png
    ├── experts-remote-consultation-source.png
    └── compliance-human-review-source.png
```

`assets/image-sources/` 只保存生成源图，不应作为网站静态资源直接引用。完成抠图、裁切和压缩后，再将交付文件放入 `public/images/` 下对应目录。

## Generation Specifications

- 所有素材均为纪实照片：`1536 x 1024`，横向 `3:2`，直接保留场景背景。
- 本批素材不需要透明背景或绿幕抠图。
- 所有画面不得包含可读文字、品牌标志或水印。
- 不需要单独生成移动端或暗色主题版本；构图需允许响应式裁切，并兼容浅色和深色背景。
- 保留未经压缩、未经裁切、未经抠图的原始 PNG。
- 所有人物和场景均为说明性 AI 素材，不得描述为 Learnmark 员工、真实专家、真实客户或已完成项目。
- 后续实现时，所有可见图片的替代文本都必须在六种语言中明确描述画面；不得添加虚构身份或客户关系。

## Core Business Images

### 01. Homepage: Global Expert Consultation

Source file: `assets/image-sources/expert-network/home-global-expertise-source.png`

Primary placement: homepage consultation model; may also be reused on About if the composition needs a human image.

```text
Create a photorealistic editorial documentary photograph for a global enterprise expert-network website. A small strategy team of three professionals with naturally varied ages, genders, and ethnic backgrounds is conducting a live remote consultation with an experienced industry operator visible on a laptop screen. They are listening, comparing physical notes, and examining a simple unbranded product sample; candid concentration, not posing. Believable contemporary workspace, soft daylight, natural skin texture, accurate hands, restrained charcoal, slate, off-white, cobalt, and subtle deep-rose accents. Wide 3:2 composition, keep all important faces and objects within the central 70 percent for responsive cropping. No readable text, logos, watermarks, handshakes, staged smiles, luxury office, holograms, or glossy stock-photo styling.
```

### 02. For Clients: Decision Session

Source file: `assets/image-sources/expert-network/for-clients-decision-session-source.png`

Primary placement: For Clients, beside the use cases or service-detail content.

```text
Create a photorealistic editorial photograph of an enterprise decision workshop. An experienced industry specialist is explaining a physical technical component to two strategy professionals while a researcher records insights; the scene should clearly feel like firsthand expertise informing a real market, investment, or operating decision. Table-level documentary viewpoint, engaged listening, subtle disagreement and curiosity, authentic working materials with no readable content. Natural window light, restrained modern workspace, graphite, warm white, blue, amber, and small deep-rose accents. Wide 3:2 composition with responsive-safe central framing. No logos, readable charts, staged handshake, boardroom cliché, exaggerated smiles, sci-fi interfaces, or stock-photo polish.
```

### 03. How It Works: Expert Sourcing and Matching

Source file: `assets/image-sources/expert-network/how-it-works-expert-matching-source.png`

```text
Create a photorealistic editorial documentary photograph for a human-led global expert-network service. A focused project team of three professionals is translating an enterprise research brief into a targeted expert search and screening process. One person compares several anonymized profile cards, another checks role, sector, market, language, and experience criteria in a structured notebook, and a third conducts a short qualification call with an experienced professional visible on a laptop. The scene must communicate careful sourcing, firsthand-experience screening, and a focused shortlist, not recruitment for employment. Natural working posture, quiet concentration, believable contemporary workspace, soft daylight, realistic hands, restrained charcoal, slate, warm white, cobalt, amber, and subtle deep-rose accents. Wide 3:2 composition with all important people and objects inside the central 70 percent for responsive cropping. No readable text, real personal data, logos, walls of headshots, rating stars, hiring imagery, handshakes, holograms, staged smiles, or glossy stock-photo styling.
```

Primary placement: How It Works, near the service-model or sourcing-and-screening stages.

### 04. Experts: Remote Consultation

Source file: `assets/image-sources/expert-network/experts-remote-consultation-source.png`

```text
Create a photorealistic editorial portrait of an experienced mid-career industry professional participating in a remote expert consultation from a quiet, lived-in home office. The expert is speaking thoughtfully toward a laptop webcam with a notebook and a few unbranded technical objects nearby, confident but natural, not performing for the camera. Show professional experience, flexibility, and personal agency rather than a call-center setting. Soft directional daylight, realistic skin and hands, restrained charcoal, ivory, blue, and muted deep-rose details. Wide 3:2 composition, subject near the center-right with safe cropping room. No readable screen content, logos, headset, staged smile, corporate stock-photo look, or luxury interior.
```

Primary placement: Experts, beside the expert-value or flexible-participation content.

### 05. Compliance: Human Review and Boundaries

Source file: `assets/image-sources/expert-network/compliance-human-review-source.png`

```text
Create a photorealistic editorial documentary photograph of two experienced project compliance reviewers examining an expert-consultation case before approval. They are calmly checking an anonymized expert profile, conflict declaration, identity-disclosure choices, and topic-boundary checklist shown only as clean structured layouts with no readable text or personal data. One reviewer deliberately marks the case for further human review while the other verifies the project scope; the scene should communicate layered controls, privacy, professional judgment, and the ability to pause delivery. Quiet contemporary workspace, natural window light, realistic hands, restrained graphite, warm white, cobalt, amber, and subtle deep-rose accents. Wide 3:2 composition with responsive-safe central framing. No logos, readable documents, passports, government seals, gavels, courtrooms, surveillance imagery, generic shield graphics, panic, staged handshake, or glossy stock-photo styling.
```

Primary placement: Compliance, near the responsibility-model or control-path content.

## Processing Status

五张源图均已生成并保留在 `assets/image-sources/expert-network/`。网站交付版本使用 Sharp 转换为 `1536 x 1024`、质量 84 的 WebP，保存于 `public/images/expert-network/`：

```text
public/images/expert-network/
├── home-global-expertise.webp
├── for-clients-decision-session.webp
├── how-it-works-expert-matching.webp
├── experts-remote-consultation.webp
└── compliance-human-review.webp
```

图片已接入首页、企业客户、合作流程、专家与合规页面，并用于对应页面的 Open Graph、Twitter Card 和 Service JSON-LD。原始 PNG 未裁切、未压缩，也未作为网站静态资源直接引用。
