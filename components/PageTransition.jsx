'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from './Preloader';

export default function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        const targetPath = new URL(target.href).pathname;
        if (targetPath !== pathname && !target.target) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, [pathname]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen fade-in-up">
      {children}
    </div>
  );
}
