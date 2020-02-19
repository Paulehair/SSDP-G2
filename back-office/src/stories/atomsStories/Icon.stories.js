import React from "react";
import Icon from "../../atoms/Icon";

export default {
  component: Icon,
  title: "Icon",
  excludeStories: /.*Data$/
};

const IconData = {
  type: ["calplus", "caltimes", "trash", "cancel", "logout", "bell"]
};
export const IconStory = () => {
  return (
    <>
      {IconData.type.map(t => {
        return <Icon type={t} />;
      })}
    </>
  );
};
