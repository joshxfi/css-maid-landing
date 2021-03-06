import React from "react";
import Head from "next/head";

export const HeadHTML: React.FC = () => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='title' content='CSS Maid | React' />
      <meta
        name='description'
        content='CSS Maid is a tool for React.js that helps clean up & reset default css! It resets default padding, remove text-decoration on <a> tag, and many more! This tool was built using emotion & typescript!'
      />
      <meta name='google-site-verification' content='qYvjviRXMIRtb9Rxhqxx1RqDfL55pfJfPCbeB8kEonE' />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Josh Daniel Bañares' />

      <meta property='og:title' content='CSS Maid | React' />
      <meta
        property='og:description'
        content='CSS Maid is a tool for React.js that helps clean up & reset default css! It resets default padding, remove text-decoration on <a> tag, and many more! This tool was built using emotion & typescript!'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://xfi.vercel.app' />
      <meta
        property='og:image'
        content='https://raw.githubusercontent.com/joshxfi/project-skl/main/client/public/css-maid-landing-ss.jpg'
      ></meta>
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='twitter:card' content='website' />
      <meta
        property='twitter:description'
        content='CSS Maid is a tool for React.js that helps clean up & reset default css! It resets default padding, remove text-decoration on <a> tag, and many more! This tool was built using emotion & typescript!'
      />
      <meta property='twitter:title' content='CSS Maid | React' />
      <meta
        property='twitter:image'
        content='https://raw.githubusercontent.com/joshxfi/project-skl/main/client/public/css-maid-landing-ss.jpg'
      />

      <title>CSS Maid | React</title>
    </Head>
  );
};
