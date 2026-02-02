import { Template } from "tinacms";

export const ExperienceBlock: Template = {
  name: "experienceBlock",
  label: "Experience",
  fields: [
    {
      type: "string",
      label: "Section Title",
      name: "sectionTitle",
    },
    {
      type: "object",
      label: "Experiences",
      name: "experiences",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.employer?.company || "Experience" };
        },
      },
      fields: [
        {
          type: "string",
          label: "Role",
          name: "role",
        },
        {
          type: "object",
          label: "Employer",
          name: "employer",
          fields: [
            {
              type: "string",
              label: "Company",
              name: "company",
            },
            {
              type: "string",
              label: "Link",
              name: "link",
            },
          ],
        },
        {
          type: "object",
          label: "Featured Project",
          name: "featuredProject",
          fields: [
            {
              type: "string",
              label: "Project Name",
              name: "projectName",
            },
            {
              type: "string",
              label: "Project Link",
              name: "projectLink",
            },
          ],
        },
        {
          type: "string",
          label: "Date Range",
          name: "dateRange",
        },
        {
          type: "string",
          label: "Duration",
          name: "duration",
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description",
          isBody: true,
        },
      ],
    },
  ],
};
