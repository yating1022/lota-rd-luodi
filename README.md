# 研发 AI设计平台 · 平台介绍页

用于播放「研发 AI设计平台」介绍影片的落地页。视觉延续平台首页的浅蓝色调、浮层导航、白色圆角卡片与紫色品牌标记；内容聚焦文生 / 图生场景图与个人、团队知识资产的沉淀复用。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

> 点击按钮前往 Vercel 创建项目，连接 GitLab 后选择本仓库 `luta-public/ai_rd_vi` 即可自动绑定并构建。

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

- 介绍影片：`public/media/rd-ai-intro.mp4`，1920 × 1080，H.264，约 13 MB。
- 海报与章节图：`public/images/`，均由介绍影片关键帧截取。
- 原始影片 `homepage-promo.mp4` 保留在本地作为素材源，已加入 `.gitignore`，不参与仓库与构建。

重新导出影片的 ffmpeg 参考命令：

```bash
ffmpeg -i homepage-promo.mp4 \
  -vf "scale=1920:1080:flags=lanczos" \
  -c:v libx264 -preset slow -crf 23 -profile:v high -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/media/rd-ai-intro.mp4
```

## 部署到 Vercel

仓库远程：`https://gitlab.bjyt.de/luta-public/ai_rd_vi.git`

### 一键创建项目

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. 点击上方按钮，打开 Vercel 的 New Project 页面。
2. 连接 GitLab 账号，选择 `luta-public/ai_rd_vi` 仓库。
3. Framework Preset 保持 **Vite**，Root Directory 保持仓库根目录。
4. Build Command 使用 `npm run build`，Output Directory 使用 `dist`。
5. 点击 **Deploy**。Vercel 会自动读取 `vercel.json` 并完成首次构建；之后每次推送到 `main` 都会自动部署。

> Vercel 连接 GitLab 仓库时，账号需要项目或所在 Group 的 **Maintainer** 权限，用于配置 webhook 和自动部署。若团队使用自建 GitLab Pipelines，也可以执行 `vercel build` + `vercel deploy --prebuilt`。

也可以直接使用 CLI 部署：

```bash
npx vercel --prod
```

Vercel 配置已写入 `vercel.json`：

- Framework：Vite
- Build Command：`npm run build`
- Output Directory：`dist`
- 媒体与图片启用长缓存，页面启用基础安全响应头

## 页面结构

1. Hero + 平台介绍影片（自定义播放器、章节跳转、静音/全屏）
2. 核心能力：文生场景图、图生场景图、知识资产复用
3. 工作流：文生/图生双入口 → 调用个人/团队资产 → 生成并交付场景图 → 沉淀回知识库；电子画册仅为可选支线
4. 知识资产：个人知识库、团队知识库、资产复用、资产治理
5. 常见问答
6. 行动号召与页脚
