import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Binome from "./../molecules/Binome";
import Details from "./../molecules/Details";
import Modal from "./../elements/Modal";
import useToggle from "../helpers/useToggle";
import { backgroundColor } from "./../data/theme";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${backgroundColor};
  border-radius: 8px;
  padding: 16px 10px 10px 16px;
  margin: 8px 0 0 0;

  :first-child {
    margin: 15px 0 0 0;
  }

  :last-child {
    margin: 8px 0;
  }
`;

export default ({ visit }) => {
  const [initials, setInitials] = useState(null);
  const [open, toggle] = useToggle(false);

  useEffect(() => {
    let newInitials = [];
    visit.team.forEach(el => {
      newInitials.push(`${el.firstName[0]}${el.lastName[0]}`);
    });
    setInitials(newInitials);
  }, [visit]);

  if (!initials) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {open && <Modal data={visit} toggle={toggle} />}

      <Card onClick={toggle}>
        <Details
          hotel={visit.name}
          rooms={`${visit.rooms} chambres`}
          hour="10h30 - 13h"
        />
        <Binome initials={initials} />
      </Card>
    </div>
  );
};
