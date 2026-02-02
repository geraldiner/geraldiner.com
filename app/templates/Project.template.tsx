import { Template } from "tinacms";

export const ProjectBlock: Template = {
  name: "projectBlock",
  label: "Project",
  fields: [
    {
      type: "string",
      label: "Section Title",
      name: "sectionTitle",
    },
    {
      type: "object",
      label: "Projects",
      name: "projects",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.projectName || "Project" };
        },
      },
      fields: [
        {
          type: "string",
          label: "Project Name",
          name: "projectName",
        },
        {
          type: "string",
          label: "Project Description",
          name: "projectDescription",
        },
        {
          type: "string",
          label: "Live Site Link",
          name: "liveSiteLink",
        },
        {
          type: "string",
          label: "Source Code Link",
          name: "sourceCodeLink",
        },
        {
          type: "string",
          label: "Technologies Used",
          name: "technologies",
        },
      ],
    },
  ],
};
