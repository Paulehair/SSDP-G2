import React from "react";

import Team from "../molecules/Team.jsx";

export default {
  title: "Team"
};

const teamData = {
  team: [{ firstName: "firstName", lastName: "lastName" }]
};

export const ModalStory = () => {
  return <Team {...teamData} />;
};
