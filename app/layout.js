import "./globals.css";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "NextLayer Labs - Technology Solutions & IT Services in Bangalore",
  description:
    "NextLayer Labs provides comprehensive IT solutions including full-stack development, UI/UX design, digital marketing, computer repair, technical support, and corporate training in Bangalore.",
  keywords:
    "IT services Bangalore, full-stack development, UI/UX design, digital marketing, computer repair, technical support, corporate training",
  openGraph: {
    title: "NextLayer Labs - Technology Solutions & IT Services",
    description:
      "Comprehensive IT solutions including development, design, marketing, and support services",
    type: "website",
    url: "https://nextlayerlabs.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="min-h-screen bg-slate-950 text-white">
        <div
          id="initial-preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
        >
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/logo-primary.svg"
              alt="NextLayer Labs"
              width={160}
              height={64}
              priority
              className="h-14 sm:h-16 w-auto opacity-90"
            />

            <div className="w-40 h-[2px] bg-slate-800 overflow-hidden rounded-full">
              <div className="h-full w-1/2 bg-slate-300 preloader-bar" />
            </div>

            <p className="text-xs sm:text-sm text-slate-500 tracking-[0.25em] uppercase">
              Loading
            </p>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function () {
                setTimeout(function () {
                  const preloader = document.getElementById('initial-preloader');
                  if (preloader) {
                    preloader.style.opacity = '0';
                    preloader.style.transition = 'opacity 0.3s ease';
                    setTimeout(function () {
                      preloader.remove();
                    }, 300);
                  }
                }, 250);
              });
            `,
          }}
        />

        <style>{`
          @keyframes preloaderSlide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }

          .preloader-bar {
            animation: preloaderSlide 1.2s ease-in-out infinite;
          }
        `}</style>

        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}