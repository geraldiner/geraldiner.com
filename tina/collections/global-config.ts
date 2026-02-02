import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "nav",
      label: "Site Main Navigation",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.label,
          };
        },
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "isIndex",
          label: "Is Index?",
          type: "boolean",
        },
        {
          name: "isCTA",
          label: "Should be styled as CTA?",
          type: "boolean",
        },
      ],
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.label,
          };
        },
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
  ],
};
