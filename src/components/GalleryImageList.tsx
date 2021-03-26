import { useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import GalleryListItem from "./GalleryListItem";
import LoadingSpinner from "./LoadingSpinner";

const GalleryImageList = () => {
  const [text, setText] = useState("");
  const [notFound, setNotFound] = useState("");
  const { searchImagesCreator } = useAction();
  const { loading, error, data } = useSelector((state: any) => state.images);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.length === 0) {
      setNotFound("Not found any results matches");
    }

    searchImagesCreator(text, 1);
  };

  return (
    <>
      <div className="header">
        <div className="content container">
          <h2 style={{ color: "#fff", textTransform: "uppercase" }}>
            Search for anything
          </h2>
          <form onSubmit={onSubmit} style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Search for..."
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="container">
        {loading && <LoadingSpinner />}
        {error && error}

        <div className="gallery-images-wrapper">
          {!loading &&
            !error &&
            data.map((item: any) => (
              <GalleryListItem key={item.id} {...item} />
            ))}
        </div>

        {!data.length && !loading && (
          <div style={{ fontWeight: 500, color: "red" }}>{notFound}</div>
        )}
      </div>
    </>
  );
};

export default GalleryImageList;
