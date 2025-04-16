import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
// import { FilePath, joinSegments } from "./quartz/util/path"
// import fs from "fs"
// import { glob } from "./quartz/util/glob"
// import { dirname } from "path"
// import { Argv } from "./quartz/util/ctx"

// Custom plugin for the root static folder
// const CustomStatic = () => ({
//   name: "CustomStatic",
//   async *emit({ argv, cfg }: { argv: Argv; cfg: QuartzConfig }) {
//     const staticPath = "static" // Root static folder
//     const fps = await glob("**", staticPath, cfg.configuration.ignorePatterns)
//     const outputStaticPath = joinSegments(argv.output, "static")
//     await fs.promises.mkdir(outputStaticPath, { recursive: true })
//     for (const fp of fps) {
//       const src = joinSegments(staticPath, fp) as FilePath
//       const dest = joinSegments(outputStaticPath, fp) as FilePath
//       await fs.promises.mkdir(dirname(dest), { recursive: true })
//       await fs.promises.copyFile(src, dest)
//       yield dest
//     }
//   },
//   async *partialEmit() {},
// })

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ガーデン",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Droid Sans Mono",
        body: "Roboto Serif",
        code: "Droid Sans Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
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
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
