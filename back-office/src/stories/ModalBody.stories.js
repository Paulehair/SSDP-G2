import React from "react";

import ModalBody from "../molecules/ModalBody.jsx";

export default {
  title: "ModalBody",
  excludeStories: /.*Data$/
};

const modalBodyData = {
  data: [{ team: "test", sector: "sector", anomaly: "ano", rooms: "rooms" }]
};

export const ModalStory = () => {
  return <ModalBody {...modalBodyData} />;
};
