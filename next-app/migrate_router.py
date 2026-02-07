
import os
import re

def migrate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Check if file needs migration
    if 'react-router-dom' not in content:
        return

    print(f"Migrating {filepath}...")

    # Add "use client" if not present
    if '"use client"' not in content and "'use client'" not in content:
        content = '"use client";\n' + content

    # 1. Handle Imports
    # This is a bit simplistic, might need manual cleanup for complex imports
    
    # Replace Link import
    if 'import { Link } from \'react-router-dom\'' in content:
        content = content.replace('import { Link } from \'react-router-dom\'', 'import Link from \'next/link\'')
    
    # Replaces: import { ..., Link, ... } from 'react-router-dom'
    # Strategy: Replace 'react-router-dom' with 'next/navigation' for hooks, and extract Link to 'next/link'
    
    # Regex for imports
    import_pattern = re.compile(r"import\s+\{(.*?)\}\s+from\s+['\"]react-router-dom['\"];?")
    
    def replace_import(match):
        imports = [i.strip() for i in match.group(1).split(',')]
        
        next_nav_imports = []
        has_link = False
        
        for imp in imports:
            if imp == 'Link':
                has_link = True
            elif imp == 'useNavigate':
                next_nav_imports.append('useRouter')
            elif imp == 'useLocation':
                next_nav_imports.append('usePathname')
                # useSearchParams might be needed if search is used
                if 'usePathname' not in next_nav_imports: next_nav_imports.append('usePathname')
            elif imp == 'useParams':
                next_nav_imports.append('useParams')
            else:
                # Keep other imports? react-router-dom has many. Assume mostly hooks or Link.
                pass
        
        replacement = ""
        if has_link:
            replacement += "import Link from 'next/link';\n"
        if next_nav_imports:
             # Remove duplicates
            next_nav_imports = list(dict.fromkeys(next_nav_imports))
            replacement += f"import {{ {', '.join(next_nav_imports)} }} from 'next/navigation';"
            
        return replacement

    content = import_pattern.sub(replace_import, content)


    # 2. Handle Usage
    
    # <Link to=...> -> <Link href=...>
    content = re.sub(r'<Link\s+to=', '<Link href=', content)
    
    # useNavigate -> useRouter
    content = re.sub(r'const\s+(\w+)\s*=\s*useNavigate\(\);', r'const router = useRouter();', content)
    # Replace usage: navigate('/path') -> router.push('/path')
    # Use loose regex, assuming variable name was 'navigate'
    if 'const router = useRouter();' in content:
         # Find the variable name if it wasn't exactly 'navigate' - actually the regex above captured it as \w+ but I replaced whole line
         # Wait, if I replace 'const nav = useNavigate()' with 'const router = useRouter()', I need to replace 'nav(' with 'router.push('.
         # To be safer, let's match the variable name first.
         pass

    # A better approach for useNavigate:
    # Find variable name
    navigate_var_match = re.search(r'const\s+(\w+)\s*=\s*useNavigate\(\)', original_content)
    if navigate_var_match:
        var_name = navigate_var_match.group(1)
        content = content.replace(f'{var_name}(', 'router.push(')

    # useLocation -> usePathname
    # const location = useLocation(); -> const pathname = usePathname();
    # usage: location.pathname -> pathname
    location_var_match = re.search(r'const\s+(\w+)\s*=\s*useLocation\(\)', original_content)
    if location_var_match:
        var_name = location_var_match.group(1)
        # Content replace declaration
        content = re.sub(r'const\s+\w+\s*=\s*usePathname\(\);', 'const pathname = usePathname();', content) # Since the import replacement might have changed it? No, import replacement checks imports.
        # But wait, my manual regex replacement for imports handled the 'import' line. 
        # But I haven't touched the Usage lines for hooks in the general regex.
        
        content = content.replace(f'const {var_name} = useLocation();', 'const pathname = usePathname();')
        content = content.replace(f'{var_name}.pathname', 'pathname')
    
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

# Walk directory
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.tsx') or file.endswith('.ts'):
            migrate_file(os.path.join(root, file))
