import React from "react";
import styled from "styled-components";
import { useTheme } from "./../context/ThemeContext";
import PrimaryText from "./../atoms/PrimaryText";
import SecondaryText from "./../atoms/SecondaryText";
import Input from "./../atoms/Input";
import data from "./../data/inputData";

const Area = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .areaTitle {
    margin-bottom: 10px;
  }
`;

export default ({ zones, onChange }) => {
  const toggleTheme = useTheme();

  const inputData = {
    ...data.zone,
    onChange,
    placeholder: data.zone.name,
    value: data.zone.name
  };

  return (
    <Area>
      <div className="areaTitle">
        <PrimaryText text="Secteurs" />
      </div>
      {zones.map((zone, i) => (
        <div key={i}>
          <Input data={{ ...inputData, value: zone.code }} />
          <SecondaryText text={`Secteur du ${zone.code}`} black={true} />
        </div>
      ))}
    </Area>
  );
};
