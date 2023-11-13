import React from "react";
import styled from "styled-components";

function Bar({ color, value }) {
  return (
    <Container color={`${color}`}>
      <StyledBar color={color} value={value}>
        &nbsp;
      </StyledBar>
    </Container>
  );
}

const StyledBar = styled.div`
  border-radius: 25px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  text-align: left;
  width: ${(props) => (props.value < 100 ? `${props.value}%` : 100)};
  font-size: 11px;
  white-space: nowrap;
  color: white;
  background-color: ${(props) => `var(--${props.color})`};
  height: 100%;
  animation: slide 1.5s ease;
  @keyframes slide {
    0% {
      width: 0;
    }
    100% {
      width: ${(props) => props.value};
    }
  }
`;

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${(props) => `var(--light${props.color})`};
  border-radius: 25px;
  box-sizing: border-box;
  padding: 3px;
`;

export default Bar;
