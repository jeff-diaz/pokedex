import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

const CloseButtonContainer = styled.div`
  color: white;
  padding: 0;
  margin: 0;
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;

function CloseButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <CloseButtonContainer onClick={goBack}>
      <ArrowBackIcon fontSize="large" />
    </CloseButtonContainer>
  );
}

export default CloseButton;
