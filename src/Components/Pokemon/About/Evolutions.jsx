import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  fetchEvolutionChain,
  getPokemonImage,
} from "../../../../Utils/helpers";
import Loader from "../Loader/Loader";

const StyledEvolutions = styled.div`
  grid-gap: 20px;
  display: grid;
`;

const Evolution = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 65%;
  max-width: 100px;
  opacity: 1;
  margin: 0 auto;
`;

const Level = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Evolutions({ id }) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchEvolutionChain(id),
    queryKey: ["pokemonEvolution", id],
    staleTime: 120000,
  });

  let content;

  if (isLoading) {
    content = <Loader></Loader>;
  }

  if (isError) content = <p>...Error</p>;

  if (data)
    content = (
      <StyledEvolutions>
        <Evolution>
          <Image src={getPokemonImage(data.firstId)} />
          <Level>
            {data.secondLevel ? <span>lvl: {data.secondLevel}</span> : ""}
            {data.secondLevel ? <ArrowRightAltIcon fontSize="large" /> : ""}
          </Level>
          {data.secondLevel ? (
            <Image src={getPokemonImage(data.secondId)} />
          ) : (
            ""
          )}
        </Evolution>
        {data.thirdLevel !== undefined ? (
          <Evolution>
            <Image src={getPokemonImage(data.secondId)} />
            <Level>
              {data.thirdLevel ? <span>lvl: {data.thirdLevel}</span> : ""}
              {<ArrowRightAltIcon fontSize="large" />}
            </Level>
            <Image src={getPokemonImage(data.thirdId)} />
          </Evolution>
        ) : (
          ""
        )}
      </StyledEvolutions>
    );

  return <>{content}</>;
}

export default Evolutions;
