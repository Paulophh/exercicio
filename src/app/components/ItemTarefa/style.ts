import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    margin: 0;
    max-height: 150px;
    background-color: #fff;
    margin-bottom: 40px;
    color: black;
    position: relative;
    border-radius: 20px;
    overflow: auto;
`

export const Control = styled.div `
    margin-left: 10px;
    
`

export const CheckTasks = styled.div `
 
    display: flex;
    align-items : center ;
 

 .oswald-font {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: 18px;
   
}
`

export const TitleTask = styled.div `
    display: flex;
    
    align-items: center;
    font-size: 20px;
    font-weight: bold;

`

export const DescriptionTask = styled.div `
display: flex;
align-items: center;
margin-bottom: 18px;
font-size: 10px;
font-weight: 500;


`

export const ButtonsTask = styled.div `

.botao {
    border:none;
    background-color: transparent;
    color: black;
    font-weight: bold;
    cursor: pointer;

}

`

