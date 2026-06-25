import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig, siteBasePath } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: "Docs",
        url: `${siteBasePath}/docs`,
        active: "nested-url",
      },
    ],
  };
}
