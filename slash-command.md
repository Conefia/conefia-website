**PROMPT / COMMAND:**

```markdown
You are an expert DevOps and React engineer. I need you to execute a "Vite to Next.js Migration" using a pre-written script and specific post-install commands.

**PHASE 1: EXECUTION**
Please execute the following shell commands in order. Stop if any command fails.

1. `node migration-tool.js`
   (This moves the files to a new `./next-app` directory)
   
2. `cd next-app`

3. `npm init -y`

4. `npm install next@latest react@latest react-dom@latest`

5. `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

6. `npm install lucide-react clsx tailwind-merge class-variance-authority`
   (These are required for the shadcn/ui components detected in the project)

**PHASE 2: CONFIGURATION**
After the installation is complete, I need you to create a `tailwind.config.js` file inside the `next-app` directory with the following specific content to ensure styling works:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

**PHASE 3: INSTRUCTION**
Once Phase 1 and 2 are done, please output a bold, easy-to-read "Final Manual Checklist" for me that lists these exact steps:

1. **Update Imports:** Remind me to search for `<a href` and replace with `<Link href` from `next/link`.
2. **Fix Hooks:** Remind me to replace `useLocation/useNavigate` with `usePathname/useRouter` from `next/navigation`.
3. **Run Dev:** Tell me to run `npm run dev` to test.
4. **Build:** Tell me to run `npm run build` to generate the static HTML `out` folder.

Begin execution now.
