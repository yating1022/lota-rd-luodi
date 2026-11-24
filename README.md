# 研发 AI设计平台 · 平台介绍页

用于播放「研发 AI设计平台」介绍影片的落地页。视觉延续平台首页的浅蓝色调、浮层导航、白色圆角卡片与紫色品牌标记；内容聚焦文生 / 图生场景图与个人、团队知识资产的沉淀复用。

> 自建 GitLab 无法被 Vercel 直接 Import。本项目通过 **Vercel CLI** 或 **GitLab CI** 部署，配置见 [部署到 Vercel](#部署到-vercel)。

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- shadcn/ui 组件约定（Button / Badge / Accordion）
- lucide-react
- Instrument Sans 可变字体（自托管）

## 本地开发

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 内容与媒体

- 介绍影片：`public/media/rd-ai-intro.mp4`，2560 × 1440，H.264，约 67.8 MB，**直接使用原片，不做压缩转码**。
- 海报与章节图：`public/images/`，均由介绍影片关键帧截取。
- 原始影片 `homepage-promo.mp4` 保留在本地作为素材源，已加入 `.gitignore`。

## 部署到 Vercel

仓库远程：`https://gitlab.bjyt.de/luta-public/ai_rd_vi.git`

**Vercel 的原生 Git 集成无法直接连接自建 GitLab。** 本项目使用以下两种方式之一部署，Vercel 不需要访问 GitLab。

### 方式一：Vercel CLI 直接部署

最快的上线方式，适合当前机器直接发布：

```bash
npx vercel login
npx vercel link
npx vercel --prod
```

- 首次 `vercel link` 用于创建或关联 Vercel 项目，会生成 `.vercel/project.json`（已被 `.gitignore` 忽略）。
- Framework Preset 选择 **Vite**；Build Command 为 `npm run build`；Output Directory 为 `dist`。
- 页面使用的 67.8 MB 原片低于 Vercel 单文件 100 MB 限制，无需压缩。
- `.vercelignore` 已排除本地素材源 `homepage-promo.mp4`，不会重复上传。

### 方式二：GitLab CI 自动部署

仓库已包含 `.gitlab-ci.yml`。GitLab Runner 负责构建，再通过 HTTPS 把 `.vercel/output` 推送给 Vercel，因此不依赖 Vercel 读取自建 GitLab。

1. 本地执行一次：
   ```bash
   npx vercel login
   npx vercel link
   ```
   打开生成的 `.vercel/project.json`，记下 `orgId` 和 `projectId`。
2. 在 Vercel 控制台 **Account Settings → Tokens** 创建 Access Token。
3. 在 GitLab 项目 **Settings → CI/CD → Variables** 添加，并标记为 Masked / Protected：
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. 推送到 `main` 后，CI 自动执行 `vercel build --prod` + `vercel deploy --prebuilt --prod`；其他分支生成 Preview 部署。

Vercel 配置已写入 `vercel.json`：

- Framework：Vite
- Build Command：`npm run build`
- Output Directory：`dist`
- 媒体与图片启用长缓存，页面启用基础安全响应头

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy-pages.yml`。Vite 使用相对基础路径，因此同一个构建产物既能部署在 Vercel 根路径，也能部署在 GitHub Pages 的项目子路径下。

1. 在 GitHub 创建一个仓库，并通过 HTTPS 推送 `main` 分支：
   ```bash
   git remote add github https://github.com/<用户名>/<仓库名>.git
   git push -u github main
   ```
2. 打开 GitHub 仓库 **Settings → Pages**，把 **Build and deployment → Source** 设为 **GitHub Actions**。
3. 推送完成后，`Deploy to GitHub Pages` workflow 会自动构建并发布；也可以在 **Actions** 页面手动运行。
4. 站点地址通常是：
   ```text
   https://<用户名>.github.io/<仓库名>/
   ```
   如需根路径或更正式域名，可在 **Pages → Custom domain** 绑定自定义域名。

说明：

- 67.8 MB 原片低于 GitHub 单文件 100 MB 限制，可直接随仓库发布，不需要压缩或 Git LFS。
- GitHub Pages 的发布站点上限约 1 GB，带宽软限制约 100 GB/月；按原片大小估算，每月大约支持 1,400 次完整播放。
- 如果仓库是 Private，需要 GitHub Pro / Team / Enterprise 才能启用 Pages；公开仓库不受此限制。
- GitHub Pages 与 Vercel 部署互不影响，可以同时保留。

## 页面结构

1. Hero + 平台介绍影片（自定义播放器、章节跳转、静音/全屏）
2. 核心能力：文生场景图、图生场景图、知识资产复用
3. 工作流：文生/图生双入口 → 调用个人/团队资产 → 生成并交付场景图 → 沉淀回知识库；电子画册仅为可选支线
4. 知识资产：个人知识库、团队知识库、资产复用、资产治理
5. 常见问答
6. 行动号召与页脚
