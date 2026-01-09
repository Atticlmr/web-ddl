#!/usr/bin/env python3
"""
学术会议截止时间网站 - 本地开发服务器
支持静态文件服务和简单的API端点
"""

import os
import json
import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import mimetypes

class ConferenceDeadlineHandler(SimpleHTTPRequestHandler):
    """自定义HTTP处理器，支持静态文件和API"""
    
    def do_GET(self):
        """处理GET请求"""
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # API端点处理
        if path == '/api/conferences':
            self.handle_api_conferences()
        elif path == '/api/health':
            self.handle_health_check()
        else:
            # 静态文件处理
            super().do_GET()
    
    def handle_api_conferences(self):
        """处理会议数据API请求"""
        try:
            # 读取并返回会议数据
            with open('conferences.json', 'r', encoding='utf-8') as f:
                conferences_data = json.load(f)
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = {
                'status': 'success',
                'data': conferences_data,
                'timestamp': datetime.datetime.now().isoformat()
            }
            
            self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))
            
        except FileNotFoundError:
            self.send_error(404, "会议数据文件未找到")
        except Exception as e:
            self.send_error(500, f"服务器错误: {str(e)}")
    
    def handle_health_check(self):
        """健康检查端点"""
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        
        response = {
            'status': 'healthy',
            'timestamp': datetime.datetime.now().isoformat(),
            'server': 'Conference Deadlines Server'
        }
        
        self.wfile.write(json.dumps(response).encode('utf-8'))
    
    def end_headers(self):
        """添加额外的响应头"""
        # 添加缓存控制
        if self.path.endswith(('.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg')):
            self.send_header('Cache-Control', 'public, max-age=31536000')  # 1年缓存
        elif self.path.endswith('.html'):
            self.send_header('Cache-Control', 'public, max-age=3600')  # 1小时缓存
        
        # 添加安全头
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        super().end_headers()

def create_conferences_json():
    """从JavaScript文件提取会议数据并创建JSON文件"""
    try:
        # 读取script.js文件
        with open('script.js', 'r', encoding='utf-8') as f:
            js_content = f.read()
        
        # 提取会议数据（简单的字符串匹配方法）
        # 在实际应用中，可能需要更复杂的解析
        conferences = []
        
        # 这里我们创建一个示例数据，实际应该从JavaScript解析
        sample_conferences = [
            {
                "name": {"zh": "AAAI 2025", "en": "AAAI 2025"},
                "deadline": "2026-08-15T23:59:59",
                "link": "https://aaai.org",
                "description": {"zh": "人工智能顶级会议", "en": "Top AI Conference"},
                "category": "ai"
            },
            {
                "name": {"zh": "ICML 2025", "en": "ICML 2025"},
                "deadline": "2024-09-01T23:59:59",
                "link": "https://icml.cc",
                "description": {"zh": "机器学习顶级会议", "en": "Top Machine Learning Conference"},
                "category": "ml"
            }
        ]
        
        # 写入JSON文件
        with open('conferences.json', 'w', encoding='utf-8') as f:
            json.dump(sample_conferences, f, ensure_ascii=False, indent=2)
        
        print("✅ 会议数据JSON文件已创建: conferences.json")
        
    except Exception as e:
        print(f"❌ 创建会议数据文件失败: {e}")

def main():
    """主函数"""
    print("🚀 启动学术会议截止时间网站服务器...")
    
    # 检查必要的文件
    required_files = ['index.html', 'styles.css', 'script.js']
    missing_files = []
    
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ 缺少必要文件: {', '.join(missing_files)}")
        return
    
    # 创建会议数据JSON文件
    create_conferences_json()
    
    # 服务器配置
    host = 'localhost'
    port = 8000
    
    # 创建HTTP服务器
    server = HTTPServer((host, port), ConferenceDeadlineHandler)
    
    print(f"✅ 服务器启动成功!")
    print(f"📁 服务目录: {os.getcwd()}")
    print(f"🌐 访问地址: http://{host}:{port}")
    print(f"📊 健康检查: http://{host}:{port}/api/health")
    print(f"📋 API端点: http://{host}:{port}/api/conferences")
    print("\n📝 可用文件:")
    print(f"  - 主页: http://{host}:{port}/index.html")
    print(f"  - CSS: http://{host}:{port}/styles.css")
    print(f"  - JS: http://{host}:{port}/script.js")
    print("\n⚡ 按 Ctrl+C 停止服务器")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 服务器已停止")
        server.shutdown()

if __name__ == '__main__':
    main()