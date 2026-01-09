# 学术会议投稿截止时间网站

这是一个展示学术会议投稿截止时间的静态网站，支持时区转换、分类筛选和中英文切换。

## 功能特点

- 📅 显示多个学术会议的投稿截止时间
- 🌍 支持多时区显示（UTC、美东、美西、伦敦、巴黎、东京、北京/上海、新加坡）
- 🏷️ 按分类筛选（人工智能、机器人、机器学习、计算机视觉、自然语言处理、综合类）
- 🌐 中英文双语切换
- ⏰ 实时倒计时显示
- 📱 响应式设计

## 快速开始

### 方法1：使用Python内置HTTP服务器（推荐）

这是最简单的方法，无需安装任何依赖：

```bash
# 在项目目录下运行
python3 -m http.server 8000
```

然后访问：http://localhost:8000

### 方法2：使用快速启动脚本

我们提供了自动化的启动脚本：

```bash
# 运行快速启动脚本
python3 start_server.py
```

这个脚本会：
- 自动检查必要文件
- 寻找可用端口
- 自动打开浏览器
- 提供优化的HTTP服务

### 方法3：使用高级服务器

如果需要API支持，可以使用完整的服务器：

```bash
# 运行高级服务器
python3 server.py
```

这个服务器提供：
- 静态文件服务
- API端点（/api/conferences, /api/health）
- 优化的缓存策略
- 安全头配置

## 文件结构

```
conference-deadlines/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── server.py           # 高级Python服务器
├── start_server.py     # 快速启动脚本
├── conference-deadlines.conf    # Nginx配置（生产环境）
├── conference-deadlines-ssl.conf # Nginx SSL配置
└── README.md           # 说明文档
```

## 会议数据

会议数据存储在 [`script.js`](script.js:2) 文件中，包含以下信息：

- 会议名称（中英文）
- 投稿截止时间
- 官方网站链接
- 会议描述（中英文）
- 分类标签

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Python 3 (可选，用于本地开发)
- **部署**: Nginx (生产环境推荐)

## 生产环境部署

### 使用Nginx

1. 复制配置文件：
```bash
sudo cp conference-deadlines.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/conference-deadlines.conf /etc/nginx/sites-enabled/
```

2. 修改配置中的域名和路径
3. 重启Nginx：
```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 使用Docker

可以创建Dockerfile进行容器化部署。

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 开发说明

### 添加新会议

在 [`script.js`](script.js:2) 文件的 `conferencesData` 数组中添加新会议：

```javascript
{
    name: {
        zh: "会议中文名",
        en: "Conference Name"
    },
    deadline: "2025-12-31T23:59:59",
    link: "https://conference-website.org",
    description: {
        zh: "会议描述",
        en: "Conference Description"
    },
    category: "ai"  // 分类：ai, robotics, ml, cv, nlp, general
}
```

### 修改样式

编辑 [`styles.css`](styles.css) 文件来自定义外观。

### 添加新功能

JavaScript逻辑在 [`script.js`](script.js) 文件中，包含：
- 会议数据管理
- 时区转换
- 倒计时计算
- 语言切换
- 分类筛选

## 故障排除

### 端口被占用

如果端口8000被占用，可以：
```bash
# 使用其他端口
python3 -m http.server 8080
```

### 中文显示问题

确保HTML文件使用UTF-8编码：
```html
<meta charset="UTF-8">
```

### 时区问题

JavaScript使用浏览器的时区设置，确保系统时区配置正确。

## 许可证

MIT License - 详见项目文件。

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

---

如有问题，请检查浏览器控制台是否有错误信息，或查看服务器日志。