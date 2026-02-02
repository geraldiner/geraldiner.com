import { Template } from "tinacms";

export const MoreAboutBlock: Template = {
  name: "moreAboutBlock",
  label: "More About",
  fields: [
    {
      type: "string",
      label: "Section Title",
      name: "sectionTitle",
    },
    {
      type: "object",
      label: "Facts",
      name: "facts",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.fact || "Fact" };
        },
      },
      fields: [
        {
          type: "string",
          label: "Fact",
          name: "fact",
        },
        {
          type: "rich-text",
          label: "Details",
          name: "details",
        },
        {
          type: "boolean",
          label: "Truth",
          name: "isTrue",
        },
      ],
    },
  ],
};
