import React from "react";
import { useQuery } from "react-query";
import { PokemonListItem } from "./PokemonListItem";
import { SkeletonListItem } from "./SkeletonListItem";

const PokemonListItemWrapper = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      const details = await fetch(url).then((res) => res.json());
      const species = await fetch(details.species.url).then((res) =>
        res.json()
      );
      return { ...details, names: species.name };
    },
    {
      staleTime: 600_000,
    }
  );
  return (
    <>{!isLoading ? <PokemonListItem {...data} /> : <SkeletonListItem />}</>
  );
};

export default PokemonListItemWrapper;
