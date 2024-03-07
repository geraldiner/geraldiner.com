const PROJECT_IDS = {
  // POTLUCK_ORGANIZER_ID: "potluck-organizer",
  SECRET_SANTA_APP_ID: "secret-santa-app",
  MIN_TO_WIN_ID: "min-to-win",
};

const PROJECTS = [
  // {
  //   id: PROJECT_IDS.POTLUCK_ORGANIZER_ID,
  //   name: "Potluck Organizer",
  //   description:
  //     "Plan your next get-together with everyone’s preferences in mind.",
  //   demoLink: "",
  //   sourceLink: "",
  // },
  {
    id: PROJECT_IDS.SECRET_SANTA_APP_ID,
    name: "Secret Santa App",
    description: "Holiday gift exchange has never been so easy.",
    demoLink: "https://secret-santa-staging.vercel.app/",
    sourceLink: "https://github.com/geraldiner/secret-santa-app",
  },
  {
    id: PROJECT_IDS.MIN_TO_WIN_ID,
    name: "Min to Win",
    description: "A collection of group games for your next event.",
    demoLink: "https://min-to-win.netlify.app/",
    sourceLink: "https://github.com/geraldiner/min-to-win",
  },
];

export { PROJECTS, PROJECT_IDS };
