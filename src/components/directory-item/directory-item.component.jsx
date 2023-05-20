import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <div className="directory-item-container">
      {/* <img src={imageUrl} />  */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
