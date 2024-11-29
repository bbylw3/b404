# NodeHub - 免费节点导航

NodeHub 是一个简洁的节点导航页面，采用现代化设计风格，用于展示和导航到 [ChromeGo](https://github.com/bannedbook/fanqiang/wiki/Chrome%E4%B8%80%E9%94%AE%E7%BF%BB%E5%A2%99%E5%8C%85) 的免费节点信息。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- 🎨 现代化界面设计
- 📱 完全响应式，支持各种设备
- 🚀 轻量级，快速加载
- 🔄 自动更新节点信息
- ✨ 优雅的动画效果

## 部署方式

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 数据来源

本项目使用 [chromego_extractor](https://github.com/linzjian666/chromego_extractor) 提供的节点数据，每6小时自动更新一次。支持以下协议：

- Shadowsocks
- ShadowsocksR
- Vmess
- Trojan

## 自定义修改

你可以通过修改 `worker.js` 中的以下部分来自定义界面：

- `CSS_CONTENT`: 修改样式，如颜色、布局等
- `HTML_CONTENT`: 修改页面内容和结构
- 背景图片：替换英雄区域的背景图片 URL

## 致谢

- 节点数据来源：[chromego_extractor](https://github.com/linzjian666/chromego_extractor)
- 原始节点来源：[ChromeGo](https://github.com/bannedbook/fanqiang)
- 背景图片：Unsplash

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。