import React, { useState } from "react";
import SearchBar from "../Components/Pokemon/SearchBar";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchAllNames } from "../../Utils/helpers";
import Navigation from "../Components/Header/Navigation";

const SearchPageContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

function SearchPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["All Pokemon Names"],
    queryFn: fetchAllNames,
  });

  let content = "";

  if (isLoading) content = <div>...Loading</div>;
  if (isError) content = <div>...Error</div>;

  if (data)
    content = (
      <>
        <Navigation />
        <SearchBar data={data} />
      </>
    );

  return <SearchPageContainer>{content}</SearchPageContainer>;
}

export default SearchPage;
