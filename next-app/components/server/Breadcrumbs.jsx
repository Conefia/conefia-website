import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { createPageUrl } from '@/components/server/utils/index';

export default function Breadcrumbs({ items, theme = 'light' }) {
  const isDark = theme === 'dark';
  
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href={createPageUrl('Home')} 
            className={`inline-flex items-center text-sm font-medium transition-colors ${
              isDark ? 'text-white/60 hover:text-[#DBFE01]' : 'text-gray-600 hover:bg-gray-200 hover:text-[#1a1a1a] px-1 py-0.5 rounded'
            }`}
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className={`w-4 h-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
              {item.path ? (
                <Link href={item.path} 
                   className={`ml-1 text-sm font-medium transition-colors md:ml-2 ${
                     isDark ? 'text-white/60 hover:text-[#DBFE01]' : 'text-gray-600 hover:bg-gray-200 hover:text-[#1a1a1a] px-1 py-0.5 rounded'
                   }`}
                 >
                  {item.label}
                </Link>
              ) : (
                <span className={`ml-1 text-sm font-medium md:ml-2 ${
                   isDark ? 'text-white' : 'text-gray-700'
                 }`}>
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}