import { Template } from "tinacms";

export const PhotoGridBlock: Template = {
  name: "photoGridBlock",
  label: "Photo Grid",
  fields: [
    {
      type: "object",
      label: "Photos",
      name: "photos",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.altText || "Photo" };
        },
      },
      fields: [
        {
          type: "image",
          label: "Photo",
          name: "photo",
        },
        {
          type: "string",
          label: "Alt Text",
          name: "altText",
        },
      ],
    },
  ],
};
