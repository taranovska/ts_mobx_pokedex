// import { useQuery } from "react-query";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styles from "./PokemonListItem.module.css";

interface Props {
  name: string;
  url: string;
}

export const PokemonListItem = ({ name, url }: Props) => {
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

  console.log(data);
  return (
    <>
      {!isLoading && (
        <>
          {" "}
          <div>
            <img
              src={data.sprites.front_default}
              className={styles["item-content"]}
              alt=""
              width="96"
              height="96"
            />
          </div>
          <div className={styles["item-content"]}>
            <div>
              #{data.id} <strong>{data.name}</strong>
            </div>
            <div>
              Types: {data.types.map((t: any) => t.type.name).join(", ")}
            </div>
          </div>
        </>
      )}
    </>
  );
};
