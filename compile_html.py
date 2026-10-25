#!/usr/bin/env python3
"""
Yukto HTML Compiler
Assembles modular HTML section components into index.html.
Run anytime you update any file in sections/
"""

import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
SECTIONS_DIR = os.path.join(ROOT_DIR, "sections")
OUTPUT_FILE = os.path.join(ROOT_DIR, "index.html")

SECTIONS = [
    "navbar.html",
    "hero.html",
    "problem.html",
    "services.html",
    "work.html",
    "why-us.html",
    "cta.html",
    "about.html",
    "contact.html",
    "footer.html",
    "floating.html",
]

HTML_HEADER = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Yukto - Web & App Development, AI Automation & Digital Marketing. Transform your business with high-performance websites, custom apps, and intelligent automated workflows.">
    <title>Yukto - Your Complete Digital Partner | Web, Apps & AI Automation</title>
    
    <!-- Design System & Modular Styles -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
"""

HTML_FOOTER = """
    <!-- Modular JavaScript Entry Point -->
    <script type="module" src="script.js"></script>
</body>
</html>
"""

def compile_html():
    content_parts = [HTML_HEADER]
    
    for section_name in SECTIONS:
        section_path = os.path.join(SECTIONS_DIR, section_name)
        if os.path.exists(section_path):
            with open(section_path, "r", encoding="utf-8") as f:
                content_parts.append(f.read().strip())
                content_parts.append("\n\n")
        else:
            print(f"[Warning] Section not found: {section_path}")
            
    content_parts.append(HTML_FOOTER)
    
    full_html = "".join(content_parts)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(full_html)
        
    print(f"[Success] Successfully compiled index.html ({len(full_html)} bytes) from {len(SECTIONS)} modular sections.")

if __name__ == "__main__":
    compile_html()
