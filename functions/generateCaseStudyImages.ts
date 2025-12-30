import { base44 } from '@/api/base44Client';

export async function generateCaseStudyImages() {
  const images = await Promise.all([
    // Aviya Telemed
    base44.integrations.Core.GenerateImage({
      prompt: "Modern telemedicine mobile app interface showing a video consultation with a doctor on a smartphone screen, clean medical UI design, professional healthcare app, soft blue and white color scheme, high quality 3D render, welcoming and trustworthy atmosphere"
    }),
    
    // Menovia AI
    base44.integrations.Core.GenerateImage({
      prompt: "Women's health AI companion mobile app interface with elegant purple and pink gradient design, showing AI chat assistant for women's wellness, modern feminine UI, supportive and caring atmosphere, smartphone mockup, premium quality digital illustration"
    }),
    
    // Larovie Beauty
    base44.integrations.Core.GenerateImage({
      prompt: "Luxury beauty e-commerce website showcasing premium skincare products, elegant Shopify store design with sophisticated purple and gold packaging, beauty products arranged artistically, high-end cosmetics brand aesthetic, professional product photography style"
    }),
    
    // Al-Mahfza
    base44.integrations.Core.GenerateImage({
      prompt: "Modern money transfer mobile app interface showing secure financial transaction, clean fintech app design with green accents, digital wallet and payment features, professional banking app UI, trustworthy and secure feeling, smartphone mockup"
    })
  ]);

  return {
    aviya: images[0].url,
    menovia: images[1].url,
    larovie: images[2].url,
    almahfza: images[3].url
  };
}