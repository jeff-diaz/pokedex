import React, { useState } from "react";
import styled from "styled-components";
import Stats from "./Stats";
import Evolutions from "./Evolutions";
import Moves from "./Moves";
import About from "./About";

function Tabs({ data }) {
  const [activeTab, setActiveTab] = useState("About");
  const { moves, types, stats, abilities, id } = data;
  let color = data.types[0].type.name;
  return (
    <TabsContainer>
      <TabHeaders>
        <Tab
          key="About"
          color={activeTab === "About" ? `var(--light${color})` : ""}
          onClick={() => setActiveTab("About")}
        >
          About
        </Tab>
        <Tab
          key="Stats"
          color={activeTab === "Stats" ? `var(--light${color})` : ""}
          onClick={() => setActiveTab("Stats")}
        >
          Stats
        </Tab>
        <Tab
          key="Moves"
          color={activeTab === "Moves" ? `var(--light${color})` : ""}
          onClick={() => setActiveTab("Moves")}
        >
          Moves
        </Tab>
        <Tab
          key="Evolutions"
          color={activeTab === "Evolutions" ? `var(--light${color})` : ""}
          onClick={() => setActiveTab("Evolutions")}
        >
          Evolution
        </Tab>
      </TabHeaders>
      <TabContent>
        {activeTab === "About" && <About data={data} types={types} />}
        {activeTab === "Stats" && <Stats color={color} stats={stats} />}
        {activeTab === "Moves" && <Moves moves={moves} />}
        {activeTab === "Evolutions" && <Evolutions id={+id} />}
      </TabContent>
    </TabsContainer>
  );
}

const TabContent = styled.div`
  margin-top: 20px;
`;

const TabsContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-rows: auto 1fr;
  margin-top: -50px;
  background-color: white;
  color: #bbb;
  padding: 30px;
  padding-top: 60px;
`;

const TabHeaders = styled.div`
  display: grid;
  font-weight: 500;
  font-size: 14px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
`;
const Tab = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 10px 0px 10px 0px;
  border-bottom: 2px solid #eee;
  color: ${(props) => props.hex};
  border-color: ${(props) => props.color};
  background-color: ${(props) => props.color};
`;

export default Tabs;
