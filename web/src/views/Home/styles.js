import styled from 'styled-components';

export const Container  = styled.div `
  width: 100%;

`;

export const FilterArea = styled.div` 
  width: 100%;
  display: flex;
  flex-wrap: wrap ;

  justify-content: space-around;
  margin-top: 10px;

  button{
    background: nome;
    border: none;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295f;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3{
    color: ##20295f;
    position: relative;
    top: 28px;
    background: #fff;
    text-align: center;
    padding: 0 10px;
  }
`
