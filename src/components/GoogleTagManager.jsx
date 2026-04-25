import { useEffect } from 'react';

export default function GoogleTagManager() {
  useEffect(() => {
    // Defer GTM injection until after first idle tick so it never
    // competes with LCP / FID on the main thread.
    const inject = () => {
      if (document.getElementById('gtm-script')) return;
      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N27JJGK7');`;
      document.head.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(inject, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(inject, 3000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-N27JJGK7"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}