import "./category-item.styles.scss";

const CategoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <div className="category-container">
      {/* <img src={imageUrl} />  */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
