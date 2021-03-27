import { useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import GalleryListItem from "./GalleryListItem";
import LoadingSpinner from "./LoadingSpinner";
import { Pagination } from "@material-ui/lab";
// import Pagination from "./Pagination";

const GalleryImageList = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [perPage, setPerPage] = useState(30);
  const { searchImagesCreator } = useAction();
  const { loading, error, data } = useSelector((state: any) => state.images);
  const { results, total_pages, total } = data;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchImagesCreator(text, page, perPage);
  };

  return (
    <>
      <div className="header">
        <div className="content container">
          <h2
            style={{
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Search for any image
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
      <div className="gallery-items container">
        {loading && <LoadingSpinner />}
        {error && error}

        <div className="gallery-images-wrapper">
          {!loading &&
            !error &&
            results?.map((item: any) => (
              <GalleryListItem key={item.id} {...item} />
            ))}
        </div>

        {/* <Pagination perPage={perPage} total={total} /> */}
      </div>
      {results && (
        <Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          count={total_pages}
          page={page}
          onChange={(e, page) => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            setPage(page);
            searchImagesCreator(text, page, perPage);
            console.log(page, results);
          }}
        />
      )}
    </>
  );
};

export default GalleryImageList;
