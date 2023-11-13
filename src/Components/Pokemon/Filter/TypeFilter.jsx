import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import IconType from "../../Icons/IconType";
import styled from "styled-components";

const allTypes = [
  "all",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fighting",
  "grass",
  "fire",
  "fairy",
  "flying",
  "ghost",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  // "rock",
  // "steel",
  "water",
];

const ListItemName = styled.div`
  grid-template-columns: 20px 1fr;
  display: grid;
  gap: 10px;
  font-size: 13px;
  font-weight: normal;
`;

export default function TypeFilter({ setPokemonType }) {
  const gen = useParams();
  const [type, setType] = useState("");

  useEffect(() => {
    if (type !== "all") {
      setType("");
    }
  }, [gen]);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          {allTypes.map((type) => {
            return (
              <MenuItem
                value={type}
                onClick={() => setPokemonType(type)}
                key={type}
              >
                <ListItemName>
                  <IconType type={type} addColor={true} />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </ListItemName>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
