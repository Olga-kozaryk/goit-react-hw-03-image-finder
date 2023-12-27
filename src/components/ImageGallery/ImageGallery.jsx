
import {UlStyled} from "./ImageGallery.styled";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images, togleModal}) => {
    return (
        <UlStyled>
       <ImageGalleryItem togleModal={togleModal} images={images} />
        </UlStyled>

    )
};
