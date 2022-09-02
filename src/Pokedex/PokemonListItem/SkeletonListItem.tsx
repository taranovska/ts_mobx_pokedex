import Skeleton from "../../Skeleton";
import styles from "./PokemonListItem.module.css";

export const SkeletonListItem = () => {
  return (
    <div className={styles["item-container"]}>
      <Skeleton style={{ width: 96, height: 96 }} />
      <div className={styles["item-container"]}>
        <Skeleton style={{ width: 120, height: 21 }} />
        <Skeleton style={{ width: 256, height: 21 }} />
      </div>
    </div>
  );
};
