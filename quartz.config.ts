import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Expectations for Expecting",
    pageTitleSuffix: " | Expectations for Expecting",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "sam-morey.github.io/Expectations-for-Expecting",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "90 - Templates",
      "89 - To Be Processed",
      "copilot",
      "**/.DS_Store",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Nunito Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#ece9f5",
          gray: "#9b93b5",
          darkgray: "#4f4770",
          dark: "#2f2a55",
          secondary: "#be4b8b",
          tertiary: "#6d63c7",
          highlight: "rgba(190, 75, 139, 0.1)",
          textHighlight: "#f9a8d455",
        },
        darkMode: {
          light: "#211914",
          lightgray: "#3a2b22",
          gray: "#8d765e",
          darkgray: "#ead9bd",
          dark: "#fff8e5",
          secondary: "#f2a17f",
          tertiary: "#bdc99a",
          highlight: "rgba(242, 161, 127, 0.14)",
          textHighlight: "#f5c96a55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages is disabled to keep local and GitHub Pages builds from depending on remote font fetches.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
