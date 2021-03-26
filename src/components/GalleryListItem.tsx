const GalleryListItem = (props: any) => {
  const { urls } = props;
  const { regular } = urls;

  return (
    <div className="item">
      <img src={regular} alt="titlte" />
    </div>
  );
};

export default GalleryListItem;
