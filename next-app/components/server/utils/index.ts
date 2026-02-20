export function createPageUrl(pageName: string, params: any = {}) {
    if (!pageName) return '/';

    // Normalize page names
    const name = pageName.toLowerCase();

    if (name === 'home') return '/';

    if (name === 'blogpost') {
        return params.slug ? `/blog/${params.slug}` : '/blog';
    }

    // Handle other pages
    return '/' + name.replace(/ /g, '-');
}