import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PokemonListItem } from "./PokemonListItem/PokemonListItem";
import styles from "./PokemonDetails.module.css";

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      return await fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(
        (res) => res.json()
      );
    },
    {
      staleTime: 600_000,
    }
  );
  return (
    <>
      <Link to="/" className={styles["nav-bar"]}>
        &lt; Back to the Pokedex
      </Link>
      {!isLoading && <PokemonListItem name={name!} url={data.url} />}
    </>
  );
};

export default PokemonDetails;
