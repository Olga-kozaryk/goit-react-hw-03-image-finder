import styled from "styled-components";

export const Header = styled('header')(()=> {
    return {
        top:' 0',
        left:' 0',
        position: 'sticky',        

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
      
        paddingRight: '24px',
        paddingLeft: '24px',
        paddingTop: '12px',
        paddingBottom: '12px',
      
        color:' #fff',
        backgroundColor:' #3f51b5',

    }}
)