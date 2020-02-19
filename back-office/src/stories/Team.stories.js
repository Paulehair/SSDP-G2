import React from "react";

import Team from "../molecules/Team.jsx";

export default {
  title: "Team"
};

const teamData = {
  team: [{ firstName: "Simon", lastName: "Soleau" }]
};

export const ModalStory = () => {
  return <Team {...teamData} />;
};
