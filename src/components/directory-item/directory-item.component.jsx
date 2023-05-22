import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBodyContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <DirectoryItemContainer>
      {/* <img src={imageUrl} />  */}
      <BackgroundImage bgimage={imageUrl}></BackgroundImage>
      <DirectoryItemBodyContainer to={`shop/${title.toLowerCase()}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
