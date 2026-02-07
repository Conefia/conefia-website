
import os
import re

def fix_imports(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Replace ../utils with @/utils
    # We use regex to match imports
    # import ... from '../utils'
    # import ... from "../utils"
    
    replacements = [
        (r"from\s+['\"](\.\./)+utils", "from '@/utils"),
        (r"from\s+['\"](\.\./)+components", "from '@/components"),
        (r"from\s+['\"](\.\./)+api", "from '@/api"),
        (r"from\s+['\"](\.\./)+lib", "from '@/lib"),
        (r"from\s+['\"](\.\./)+hooks", "from '@/hooks"),
        # Also handles files *inside* utils etc?
        # If I am in src/components/pages/Home.jsx
        # ../utils -> src/components/utils (WRONG)
        # ../../utils -> src/utils (CORRECT)
        # So replacing any `../utils` or `../../utils` with `@/utils` is safe and cleaner.
    ]
    
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)

    # Specific fix for layout import if it appeared
    # content = content.replace("from './Layout'", "from '@/Layout'") # Layout.jsx is now in src/components/Layout potentially? 
    # I haven't moved Layout.jsx yet. I should check that.
    
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed imports in {filepath}")

# Walk directory
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.tsx') or file.endswith('.ts'):
            fix_imports(os.path.join(root, file))
