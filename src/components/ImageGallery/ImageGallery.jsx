import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({togleModal, images}) => {
    return (
        <>
        <ul>
            <ImageGalleryItem togleModal={togleModal} images={images} />
        </ul>
        </>
    )
}  