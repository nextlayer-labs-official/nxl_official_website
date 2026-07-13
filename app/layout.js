import "./globals.css";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageTransition from "../components/PageTransition";

export const metadata = {
  metadataBase: new URL("https://nextlayerlabs.in"),
  title: "NextLayer Labs - Technology Solutions & IT Services in Bangalore",
  description:
    "NextLayer Labs delivers secure IT infrastructure, full-stack software development, and managed IT support for growing businesses in Bangalore — from network security and server management to custom web applications and 24/7 technical support.",
  keywords:
    "IT services Bangalore, IT infrastructure security, network security, full-stack development, web development, managed IT support, technical support, cybersecurity Bangalore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    siteName: "NextLayer Labs",
    type: "website",
    locale: "en_IN",
    title: "NextLayer Labs - Technology Solutions & IT Services",
    description:
      "Secure IT infrastructure, full-stack development, and managed IT support for growing businesses.",
    url: "/",
    images: [
      {
        url: "/it-infrastructure-servers.jpg",
        width: 1200,
        height: 420,
        alt: "NextLayer Labs - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLayer Labs - Technology Solutions & IT Services",
    description:
      "Secure IT infrastructure, full-stack development, and managed IT support for growing businesses.",
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