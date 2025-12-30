import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Loader2, Download } from 'lucide-react';

export default function GenerateImages() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);

  const generateImages = async () => {
    setLoading(true);
    try {
      const results = await Promise.all([
        base44.integrations.Core.GenerateImage({
          prompt: "Modern telemedicine mobile app interface showing a video consultation with a doctor on a smartphone screen, clean medical UI design, professional healthcare app, soft blue and white color scheme, high quality 3D render, welcoming and trustworthy atmosphere"
        }),
        
        base44.integrations.Core.GenerateImage({
          prompt: "Women's health AI companion mobile app interface with elegant purple and pink gradient design, showing AI chat assistant for women's wellness, modern feminine UI, supportive and caring atmosphere, smartphone mockup, premium quality digital illustration"
        }),
        
        base44.integrations.Core.GenerateImage({
          prompt: "Luxury beauty e-commerce website showcasing premium skincare products, elegant Shopify store design with sophisticated purple and gold packaging, beauty products arranged artistically, high-end cosmetics brand aesthetic, professional product photography style"
        }),
        
        base44.integrations.Core.GenerateImage({
          prompt: "Modern money transfer mobile app interface showing secure financial transaction, clean fintech app design with green accents, digital wallet and payment features, professional banking app UI, trustworthy and secure feeling, smartphone mockup"
        })
      ]);

      setImages({
        aviya: results[0].url,
        menovia: results[1].url,
        larovie: results[2].url,
        almahfza: results[3].url
      });
    } catch (error) {
      console.error('Error generating images:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Generate Case Study Images</h1>
        
        <Button 
          onClick={generateImages} 
          disabled={loading}
          className="mb-8"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating images... (30-40s)
            </>
          ) : (
            'Generate All Images'
          )}
        </Button>

        {images && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Aviya Telemed</h2>
              <img src={images.aviya} alt="Aviya" className="w-full rounded-lg mb-2" />
              <code className="text-xs bg-gray-100 p-2 block rounded">{images.aviya}</code>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Menovia AI</h2>
              <img src={images.menovia} alt="Menovia" className="w-full rounded-lg mb-2" />
              <code className="text-xs bg-gray-100 p-2 block rounded">{images.menovia}</code>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Larovie Beauty</h2>
              <img src={images.larovie} alt="Larovie" className="w-full rounded-lg mb-2" />
              <code className="text-xs bg-gray-100 p-2 block rounded">{images.larovie}</code>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Al-Mahfza</h2>
              <img src={images.almahfza} alt="Al-Mahfza" className="w-full rounded-lg mb-2" />
              <code className="text-xs bg-gray-100 p-2 block rounded">{images.almahfza}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}