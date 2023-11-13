import { useQuery } from "@tanstack/react-query";
import React, { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { fetchSinglePokemon } from "../../Utils/helpers";
import Artwork from "../Components/Pokemon/Artwork";
import Tabs from "../Components/Pokemon/About/Tabs";

function DetailPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { name } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchSinglePokemon(name),
    queryKey: ["pokemon", name],
    staleTime: 5000000,
  });

  let content;

  if (isLoading) content = <p>...Loading</p>;

  if (isError) content = <p>...Error</p>;

  if (data) {
    const color = data.types[0].type.name;
    content = (
      <>
        <Artwork color={color} data={data} />
        <Tabs data={data} />
      </>
    );
  }
  return <>{content}</>;
}

export default DetailPage;
