import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
import "./index.css";
import API from "./utils/API";
import Header from "./elements/Header";
import Sidebar from "./elements/Sidebar";
import Planning from "./elements/Planning";

const App = styled.main`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;

    /* -64px = hauteur du header */
    &.--main {
      height: calc(100vh - 64px);
      background-color: #e5e5e5 !important;
    }

    &.--button {
      display: none;
    }
  }
`;

const zonesStart = [
  {
    code: "Paris",
    active: true
  },
  {
    code: "92/94",
    active: false
  },
  {
    code: "93",
    active: false
  },
  {
    code: "77/91",
    active: false
  },
  {
    code: "78/95",
    active: false
  }
];

export default () => {
  const [planning, setPlanning] = useState(null);
  const [zones, setZones] = useState(zonesStart);
  const toggleTheme = useTheme();

  useEffect(_ => {
    (async function getPlanning() {
      const response = await API.getPlanning("Paris");
      localStorage.setItem("current", "Paris");
      setPlanning(response.data.data.planning);
    })();
  }, []);

  const handleChange = async event => {
    event.persist();
    const response = await API.getPlanning(event.target.value);
    localStorage.setItem("current", event.target.value);
    toggleTheme.toggle(event.target.value);
    setPlanning(response.data.data.planning);
  };

  const download = () => {
    let current = localStorage.getItem("current");
    window.open(
      `http://localhost:9000/api/exportPlanning/${current.replace("/", "")}`
    );
  };

  return (
    <App>
      <Header />
      <div className="wrapper --button">
        <button className="download" onClick={download}>
          Télécharger le planning
        </button>
      </div>
      <div className="wrapper --main">
        {zones && <Sidebar onChange={handleChange} zones={zones} />}
        {planning && <Planning planning={planning} />}
      </div>
    </App>
  );
};
