import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchAllPokemon } from "../../Utils/helpers";
import Thumbnail from "../Components/Pokemon/Thumbnail";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import GenerationMenu from "../Components/Pokemon/GenerationMenu";
import TypeFilter from "../Components/Pokemon/Filter/TypeFilter";
import Navigation from "../Components/Header/Navigation";
import Loader from "../Components/Pokemon/Loader/Loader";

function HomePage() {
  const { gen } = useParams();
  const [pokemonType, setPokemonType] = useState("all");

  useEffect(() => {
    if (pokemonType !== "all") {
      setPokemonType("all");
    }
  }, [gen]);

  const { data, isError, isLoading, error } = useQuery({
    queryFn: () => fetchAllPokemon(gen),
    queryKey: ["AllPokemon", gen],
    staleTime: 10000,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <div>...Error</div>;
  }

  if (data) {
    content = (
      <HomePageContainer>
        <Filters>
          <GenerationMenu gen={gen} />
          <div></div>
          <TypeFilter data={data} setPokemonType={setPokemonType} />
        </Filters>
        {data.map((pokemon) => {
          return (
            <>
              <Thumbnail
                pokemonType={pokemonType}
                name={pokemon}
                key={Math.random()}
              />
            </>
          );
        })}
      </HomePageContainer>
    );
  }

  return (
    <div>
      <Navigation />
      {content}
    </div>
  );
}

const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  background-color: white;
  padding: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px 10px;
    grid-gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    padding: 30px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding: 30px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    padding: 30px;
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
    padding: 30px;
  }
`;
const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Filters = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: auto 1fr 150px;
  grid-row: 1;
`;

export default HomePage;
