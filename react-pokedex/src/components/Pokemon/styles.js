import styled from 'styled-components'

export const Container = styled.div`
    max-width: 12rem;
    max-height: 12rem;
    height: 100%;
    width: 100%;
    margin: auto;

    background-color: #F1CAD0;

    @media (min-width: 798px){
        max-width: 18rem;
        max-height: 18rem;
    }
`

export const TitleContainer = styled.div`
    margin: .5rem;

    display: flex;
    justify-content: center;

    h3 {
        color: #c95467;
        font-weight: 400;
        font-size: 1.25rem;
    }
`

export const ImageContainer = styled.div`
    margin: auto;
    margin-bottom: 1rem;
    width: 7rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 5rem;
        width: 5rem;
    }
`

export const InfoContainer = styled.div`
    margin: .5rem;


    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: .8rem;
`

export const TypesContainer = styled.div`
    ul{
        list-style: none;

        display: flex;

        li {
            margin-right: .3rem;
            background-color: #97cd45;
        }
    }
`

export const IdContainer = styled.div`
    p {
        color: #c95467;
    }
`

