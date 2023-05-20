import  styled  from "styled-components" 
export const Container = styled.div`
   width: 100%;
    
    >header{ 
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
        padding: 64px 124px;

;
    a{
        height: 144px;
        width: 100%;
        color:${({theme}) => theme.COLORS.PINK};
        font-size: 16px;
        
        
    }
}

    >form{
        max-width: 340px;
        margin: 0 auto;
        padding: 64px 0 59px 144px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -160px auto 64px;
    >img{ 
        width: 186px;
        height: 186px;
        border-radius: 50%;

    }

    >label{
        background-color: ${({theme}) => theme.COLORS.PINK};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 7px;
        bottom: 7px;
        cursor: pointer;
        position: absolute;
        >input{
            display: none;
        }
    }

`;