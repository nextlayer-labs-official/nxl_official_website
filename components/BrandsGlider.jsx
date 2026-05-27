import React from 'react';
import Image from 'next/image';

const BrandsGlider = () => {
  const brands = [
    { name: "Askclinik", logo: "/askclinik.png" },
    { name: "Drashta (Bhasa)", logo: "/drashta.svg" },
    { name: "DBJainSabha", logo: "/dbjainsabha.svg" },
    { name: "SoftPixel Works", logo: "/spx.svg" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-8 sm:py-12 bg-white border-t border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Clients We’ve Worked With
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-scroll flex w-max items-center">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-10 flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] lg:min-w-[180px]"
              >
                <div className="relative h-12 sm:h-12 lg:h-16 w-[120px] sm:w-[140px] lg:w-[160px]">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <span className="mt-2 text-xs sm:text-sm lg:text-base font-medium text-slate-700 text-center">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsGlider;