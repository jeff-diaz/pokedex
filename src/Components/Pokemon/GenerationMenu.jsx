import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 13px;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, 0.33) !important;
  color: #777 !important;
  text-transform: capitalize !important;
`;

export default function GenerationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (gen) => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        size="large"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Select Gen
      </StyledButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem dense={true} onClick={handleClose}>
          <StyledLink to="/1">First Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/2">Second Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/3">Third Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/4">Fourth Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/5">Fifth Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/6">Sixth Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/7">Seventh Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/8">Eighth Gen</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/9">Ninth Gen</StyledLink>
        </MenuItem>
      </Menu>
    </>
  );
}
