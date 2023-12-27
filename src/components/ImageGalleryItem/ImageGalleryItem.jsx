//import {ItemStyled} from "./ImageGalleryItem";

export const ImageGalleryItem = ({ images, togleModal }) => {
  return (
      images.map(item => (
        <li key={item.id} onClick={(evt)=>{togleModal(item.largeImageURL, item.tags);}}>
          <img
            loading="lazy"
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))
  );
};