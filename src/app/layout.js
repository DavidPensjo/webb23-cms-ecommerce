import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();

  return (
    <StoryblokProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Layout config={currentConfig}>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
