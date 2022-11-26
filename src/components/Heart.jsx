import { useContext } from "react";
import heart from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { provideContext } from "../hooks/context";

const Heart = ({ id }) => {
  const { handleFavorite, isFavorite } = useContext(provideContext);

  const inFav = isFavorite(id);

  return (
    <>
      <img
        src={inFav ? heartSolid : heart}
        alt={inFav ? "heartSolid" : "heart"}
        className="fav_icon"
        onClick={() => handleFavorite(id)}
      />
    </>
  );
};

export default Heart;
