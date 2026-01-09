#!/usr/bin/env python3
"""
学术会议截止时间网站 - 快速启动脚本
使用Python内置HTTP服务器，无需额外依赖
"""

import http.server
import socketserver
import os
import webbrowser
import threading
import time
import sys

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """自定义HTTP处理器，添加MIME类型支持"""
    
    def end_headers(self):
        # 添加MIME类型
        if self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
        elif self.path.endswith('.css'):
            self.send_header('Content-Type', 'text/css')
        elif self.path.endswith('.html'):
            self.send_header('Content-Type', 'text/html; charset=utf-8')
        
        # 添加缓存控制
        if self.path.endswith(('.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg')):
            self.send_header('Cache-Control', 'public, max-age=31536000')
        elif self.path.endswith('.html'):
            self.send_header('Cache-Control', 'public, max-age=3600')
        
        # 添加安全头
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        
        super().end_headers()

def open_browser():
    """延迟打开浏览器"""
    time.sleep(1.5)  # 等待服务器启动
    url = f'http://localhost:{PORT}'
    print(f"🌐 正在打开浏览器: {url}")
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"⚠️  无法自动打开浏览器: {e}")
        print(f"请手动访问: {url}")

def main():
    """主函数"""
    global PORT
    
    # 默认端口
    PORT = 8000
    
    # 检查端口是否被占用
    import socket
    while PORT < 8010:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('localhost', PORT))
                break
        except OSError:
            print(f"端口 {PORT} 被占用，尝试 {PORT + 1}")
            PORT += 1
    
    # 检查必要文件
    required_files = ['index.html', 'styles.css', 'script.js']
    missing_files = []
    
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ 缺少必要文件: {', '.join(missing_files)}")
        sys.exit(1)
    
    print("🚀 启动学术会议截止时间网站...")
    print(f"📁 服务目录: {os.getcwd()}")
    print(f"🌐 服务器地址: http://localhost:{PORT}")
    print("\n📋 可用页面:")
    print(f"  - 主页: http://localhost:{PORT}/index.html")
    print(f"  - CSS样式: http://localhost:{PORT}/styles.css")
    print(f"  - JS脚本: http://localhost:{PORT}/script.js")
    print("\n⚡ 按 Ctrl+C 停止服务器")
    
    # 启动浏览器线程
    browser_thread = threading.Thread(target=open_browser, daemon=True)
    browser_thread.start()
    
    # 启动HTTP服务器
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"✅ 服务器启动成功，监听端口 {PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 服务器已停止")
        sys.exit(0)
    except Exception as e:
        print(f"❌ 服务器启动失败: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()