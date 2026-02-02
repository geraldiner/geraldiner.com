import { Template } from "tinacms";

export const HeaderBlock: Template = {
  name: "headerBlock",
  label: "Header",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "string",
      label: "Blurb",
      name: "blurb",
    },
    {
      type: "string",
      label: "GitHub Username",
      name: "githubUsername",
    },
    {
      type: "string",
      label: "LinkedIn Profile",
      name: "linkedinProfile",
    },
    {
      type: "image",
      label: "Avatar",
      name: "avatar",
    },
    {
      type: "image",
      label: "Resume",
      name: "resume",
    },
  ],
};
