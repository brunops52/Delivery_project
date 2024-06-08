import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#F48787',
  orange: '#FFAC7D',
  white: '#fff',
  lightPink: '#FF8E8E'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background: linear-gradient(to right, ${colors.orange}, ${colors.pink});


    .display-none {
      display: none;
    }

    .botao{

      &:hover {
    transform: translateY(2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

      &:active {
      transform: translateY(1px);
      ox-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Button = styled.button`
  width: 100%;
  padding: 4px 0;
  background-color: ${colors.white};
  color: ${colors.lightPink};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
