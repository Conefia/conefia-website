
import os
import re

HOOKS = [
    'useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 
    'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue', 'useDeferredValue',
    'useTransition', 'useId', 'useSyncExternalStore', 'useInsertionEffect',
    'useQuery', 'useMutation', 'useQueryClient', # React Query
    'useRouter', 'usePathname', 'useSearchParams', 'useParams', # Next.js
]

def add_use_client(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if "use client" is already there
    if '"use client"' in content or "'use client'" in content:
        return

    # Check for hooks usage
    has_hook = False
    for hook in HOOKS:
        if re.search(r'\b' + hook + r'\b', content):
            has_hook = True
            break
            
    # Also check for event handlers which often imply client interaction (onClick, onChange, etc.)
    # Simple heuristic: look for on[A-Z]
    if not has_hook:
        if re.search(r'\bon[A-Z]\w+=', content):
            has_hook = True

    if has_hook:
        print(f"Adding 'use client' to {filepath}")
        with open(filepath, 'w') as f:
            f.write('"use client";\n' + content)

# Walk directory
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.tsx') or file.endswith('.ts'):
            # Skip non-component files if possible? 
            # Utilities might use hooks (custom hooks)? Custom hooks need use client if they use other hooks.
            # So just checking contents is fine.
            add_use_client(os.path.join(root, file))
