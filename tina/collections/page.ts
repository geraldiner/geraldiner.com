import { AboutBlock } from "@/app/templates/About.template";
import { ExperienceBlock } from "@/app/templates/Experience.template";
import { HeaderBlock } from "@/app/templates/Header.template";
import { MoreAboutBlock } from "@/app/templates/MoreAbout.template";
import { PhotoGridBlock } from "@/app/templates/PhotoGrid.template";
import { ProjectBlock } from "@/app/templates/Project.template";
import { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/page",
  fields: [
    {
      type: "object",
      name: "blocks",
      label: "Blocks",
      list: true,
      templates: [
        HeaderBlock,
        AboutBlock,
        ExperienceBlock,
        ProjectBlock,
        MoreAboutBlock,
        PhotoGridBlock,
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
    },
  },
};
