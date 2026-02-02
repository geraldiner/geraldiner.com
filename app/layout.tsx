import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Geraldine Ragsac | Software Engineer";
  const description = `
    "Oh, hi! I'm Geraldine, a software engineer and serial hobbyist based in Raleigh, NC.
    I like building things for the web, from full-scale applications for real-life problems
    to silly little projects just for fun.
  `;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://geraldiner.com" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geraldiner" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <!-- <meta property="og:image" content="" /> --> */}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://geraldiner" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
