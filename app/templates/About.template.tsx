import { Template } from "tinacms";

export const AboutBlock: Template = {
  name: "aboutBlock",
  label: "About",
  fields: [
    {
      type: "string",
      label: "Section Title",
      name: "sectionTitle",
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true,
    },
  ],
};
