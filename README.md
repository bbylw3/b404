# NodeHub - 简洁的节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [ChromeGo](https://github.com/bannedbook/fanqiang) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 预览

![NodeHub Preview](preview.png)

## 特性

- 🎨 简约现代的设计风格
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 定时自动更新信息

## 技术栈

- HTML5 + CSS3
- Vanilla JavaScript
- Cloudflare Workers

## 快速部署

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 项目结构

```
worker