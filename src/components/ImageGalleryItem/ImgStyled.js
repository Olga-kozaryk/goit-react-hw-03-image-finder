import styled from "styled-components";

export const ImgStyled = styled('img')(()=> {
    return {
        width: "100%",
        height: '260px',
        objectFit: 'cover',
        transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'scale(1.03)',
          cursor: 'zoom-in',
    }}
})