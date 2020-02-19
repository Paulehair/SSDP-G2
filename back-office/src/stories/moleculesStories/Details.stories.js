import React from "react";
import Details from "../../molecules/Details";

export default {
  component: Details,
  title: "Details",
  excludeStories: /.*Data$/
};

const detailsData = {
  hotel: "Sweet Hôtel Paris.",
  rooms: "12",
  hour: "00:00"
};

export const DateStory = () => {
  return <Details {...detailsData} />;
};
