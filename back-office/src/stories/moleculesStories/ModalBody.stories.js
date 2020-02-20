import React from "react";

import ModalBody from "../../molecules/ModalBody.jsx";

export default {
  title: "ModalBody"
};

const modalBodyData = {
  data: [
    {
      team: { firstName: "testName", lastName: "lastName" },
      sector: "sector",
      anomaly: "ano",
      rooms: "rooms"
    }
  ]
};

export const ModalStory = () => {
  return <ModalBody {...modalBodyData} />;
};
