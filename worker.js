const CSS_CONTENT = `
:root {
    --primary: #ff9000;
    --bg: #0f0f0f;
    --card-bg: #1a1a1a;
    --text: #ffffff;
    --text-secondary: #999999;
    --max-width: 1200px;
    --radius: 12px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, system-ui, sans-serif;
    line-height: 1.5;
}

/* Header */
.header {
    background: #000;
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
}

.logo span {
    color: var(--primary);
}

/* Main Content */
.main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 8rem 2rem 4rem;
}

/* Hero Section */
.hero {
    text-align: center;
    margin-bottom: 6rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-title span {
    color: var(--primary);
}

.hero-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* Features Grid */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 6rem;
}

.feature-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: var(--radius);
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature-card ul {
    list-style: none;
}

.feature-card li {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
}

.feature-card li:before {
    content: "→";
    color: var(--primary);
    position: absolute;
    left: 0;
}

/* Button */
.cta-button {
    display: inline-block;
    background: var(--primary);
    color: var(--text);
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    filter: brightness(110%);
}

/* Footer */
.footer {
    text-align: center;
    padding: 4rem 0;
    color: var(--text-secondary);
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .main {
        padding: 6rem 1.5rem 3rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1.1rem;
    }
    
    .feature-card {
        padding: 1.5rem;
    }
}
`;

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - 节点导航</title>
    <style>${CSS_CONTENT}</style>
</head>
<body>
    <header class="header">
        <div class="logo">Node<span>Hub</span></div>
    </header>

    <main class="main">
        <section class="hero">
            <h1 class="hero-title">ChromeGo <span>节点提取器</span></h1>
            <p class="hero-description">
                自动化提取和验证节点信息，每6小时更新一次，完全免费
            </p>
            <a href="https://github.com/linzjian666/chromego_extractor" 
               target="_blank" class="cta-button">
                访问项目主页
            </a>
        </section>

        <section class="features">
            <div class="feature-card">
                <h3>自动更新</h3>
                <ul>
                    <li>每6小时自动更新</li>
                    <li>自动检测可用性</li>
                    <li>稳定性有保障</li>
                    <li>长期维护更新</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>多协议支持</h3>
                <ul>
                    <li>Shadowsocks</li>
                    <li>ShadowsocksR</li>
                    <li>VMess</li>
                    <li>Trojan</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>开源项目</h3>
                <ul>
                    <li>代码完全开源</li>
                    <li>社区共同维护</li>
                    <li>免费使用</li>
                    <li>随时查看源码</li>
                </ul>
            </div>
        </section>

        <footer class="footer">
            <p>本站仅作为项目导航，请访问 GitHub 项目主页获取详细信息</p>
            <p>仅供学习交流使用，请勿用于非法用途</p>
        </footer>
    </main>
</body>
</html>`;

// 3. Worker 处理函数
async function handleRequest(request) {
    return new Response(HTML_CONTENT, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

// 4. 事件监听器
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 