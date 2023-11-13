import React from "react";
import Fire from "./Fire";
import Ice from "./Ice";
import Rock from "./Rock";
import Bug from "./Bug";
import Water from "./Water";
import Fighting from "./Fighting";
import Grass from "./Grass";
import Poison from "./Poison";
import Electric from "./Electric";
import Flying from "./Flying";
import Normal from "./Normal";
import Dark from "./Dark";
import Ghost from "./Ghost";
import Fairy from "./Fairy";
import Ground from "./Ground";
import Psychic from "./Psychic";
import Dragon from "./Dragon";
import { convertTypeToHex } from "../../../Utils/helpers";

function IconType({ type, addColor }) {
  const hex = convertTypeToHex(type);
  return (
    <>
      {type === "water" && <Water hex={hex} addColor={addColor} />}
      {type === "rock" && <Rock hex={hex} addColor={addColor} />}
      {type === "ice" && <Ice hex={hex} addColor={addColor} />}
      {type === "fighting" && <Fighting hex={hex} addColor={addColor} />}
      {type === "fire" && <Fire hex={hex} addColor={addColor} />}
      {type === "fairy" && <Fairy hex={hex} addColor={addColor} />}
      {type === "bug" && <Bug hex={hex} addColor={addColor} />}
      {type === "grass" && <Grass hex={hex} addColor={addColor} />}
      {type === "poison" && <Poison hex={hex} addColor={addColor} />}
      {type === "electric" && <Electric hex={hex} addColor={addColor} />}
      {type === "flying" && <Flying hex={hex} addColor={addColor} />}
      {type === "normal" && <Normal hex={hex} addColor={addColor} />}
      {type === "dark" && <Dark hex={hex} addColor={addColor} />}
      {type === "dragon" && <Dragon hex={hex} addColor={addColor} />}
      {type === "ghost" && <Ghost hex={hex} addColor={addColor} />}
      {type === "ground" && <Ground hex={hex} addColor={addColor} />}
      {type === "rock" && <Rock hex={hex} addColor={addColor} />}
      {type === "psychic" && <Psychic hex={hex} addColor={addColor} />}
    </>
  );
}

export default IconType;
