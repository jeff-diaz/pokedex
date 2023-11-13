import { fetchSinglePokemon, getPokemonImage } from "../../../Utils/helpers";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Types from "./Types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Loader from "./Loader/Loader";

function Thumbnail({ name, pokemonType }) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchSinglePokemon(name),
    queryKey: ["pokemon", name],
    staleTime: 5000000,
  });

  console.log(data);
  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p>...Error</p>;
  }

  if (data) {
    const color = data.types[0].type.name;
    const color2 = data?.types[1]?.type.name;
    if (
      pokemonType === color ||
      pokemonType === color2 ||
      pokemonType === "all"
    ) {
      content = (
        <Wrapper color={color} to={`/pokemon/${name}`}>
          <img key={data.id} src={getPokemonImage(data.id)} />
          <h3>{data.id}</h3>
          <h2>{data.name}</h2>
          <Types types={data.types} />
        </Wrapper>
      );
    }
  }

  return <>{content}</>;
}

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Link)`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  text-decoration: none;
  background-color: var(--${(props) => props.color});

  h2 {
    font-size: 18px;
    color: white;
    padding: 0;
    margin: 0 0 10px 0;
    font-weight: 600;
    text-transform: capitalize;
  }

  h3 {
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    color: #ffffffb4;
    line-height: 1em;
    font-weight: normal;
    &::before {
      content: "# ";
      font-size: 0.75em;
    }
  }

  img {
    width: 75%;
    margin: 0;
    max-width: 200px;
    &:hover {
      color: white;
      animation: grow 2s;
    }
    @keyframes grow {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;

export default Thumbnail;
