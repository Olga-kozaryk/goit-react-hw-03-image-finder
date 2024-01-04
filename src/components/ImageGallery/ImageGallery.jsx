import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { UlStyled } from "./ImageGallery.styled";


export const ImageGallery = ({ images, togleModal }) => {
    return (
      <>
        <UlStyled>
          <ImageGalleryItem togleModal={togleModal} images={images} />
        </UlStyled>
      </>
    );
  };
  
