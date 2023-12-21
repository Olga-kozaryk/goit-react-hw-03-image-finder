import styled from "styled-components";

export const Header = styled('header')(()=> {
    return {
        top:' 0',
        left:' 0',
        position: 'sticky',        

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',

        color:' #fff',
        backgroundColor:' #3f51b5',

    }}
)