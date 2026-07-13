import React from "react";
import Image from "next/image";

const HowWeWork = () => {

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                        How We <span className="text-brand-600">Work</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our process is designed to deliver secure, reliable technology solutions
                        that help your business operate efficiently and scale with confidence.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/how-do-we-work-6d-roadmap.svg"
                        alt="How We Work Roadmap"
                        width={1200}
                        height={600}
                        className="w-full max-w-5xl h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;