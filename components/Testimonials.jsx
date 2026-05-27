'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote: "NextLayer Labs transformed our entire IT infrastructure. Their technical expertise and 24/7 support have been invaluable to our business operations.",
      author: "Vikram Singh",
      role: "IT Director",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "The full-stack development team at NextLayer Labs delivered our e-commerce platform ahead of schedule. The quality and attention to detail were exceptional.",
      author: "Meera Patel",
      role: "CEO",
      company: "Digital Retail Hub",
      rating: 5
    },
    {
      quote: "Their corporate training program upskilled our entire development team. The placement assistance helped us find top talent quickly and efficiently.",
      author: "Arjun Reddy",
      role: "HR Manager",
      company: "Innovation Labs",
      rating: 5
    }
  ];

  const changeTo = useCallback((index) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 300);
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setIsVisible(true);
      }, 300);
    }, 5000);
  }, [testimonials.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [startTimer]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeTo(newIndex);
    startTimer();
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    changeTo(newIndex);
    startTimer();
  };

  const goToIndex = (index) => {
    if (index === currentIndex) return;
    changeTo(index);
    startTimer();
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-brand-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-brand-400">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Hear from businesses that have transformed their technology landscape with NextLayer Labs.
          </p>
        </div>

        <div className="relative lg:px-16">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6 sm:mb-8">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-brand-600" />
            </div>

            <div
              className="text-center mb-6 sm:mb-8 transition-opacity duration-300"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-6 sm:mb-8 px-2 sm:px-4 lg:px-8">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="text-center">
                <div className="font-bold text-slate-800 text-base sm:text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-brand-600 font-semibold text-sm sm:text-base">{testimonials[currentIndex].role}</div>
                <div className="text-slate-600 text-sm sm:text-base">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Desktop nav buttons */}
          <button
            onClick={goToPrevious}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-brand-400 shadow-lg'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile nav buttons */}
          <div className="flex justify-center space-x-6 mt-6 lg:hidden">
            <button
              onClick={goToPrevious}
              className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
