import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="ltlTSFeAemYqs-hXORek1LejHOKvihtuN8tn6BpvNUE" />

      {/* SEO Meta Tags */}
      <meta name="description" content="Vibhanshu Jain's developer portfolio showcasing full-stack projects, skills in MERN stack, and expertise in software development." />
      <meta name="keywords" content="Vibhanshu Jain, developer portfolio, MERN stack, software engineer, full-stack projects, web development, React, Node.js, MongoDB, JavaScript" />
      <meta name="author" content="Vibhanshu Jain" />

      {/* Open Graph (OG) tags for social sharing (optional) */}
      <meta property="og:title" content="Vibhanshu Jain | Developer Portfolio" />
      <meta property="og:description" content="Explore Vibhanshu Jain's portfolio with full-stack projects and skills in web development." />
      <meta property="og:url" content="https://vibhanshujainportfolio.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://vibhanshujainportfolio.vercel.app/og-image.jpg" /> {/* Replace with your image if available */}

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
