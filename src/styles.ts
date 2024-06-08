import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  lightYellow: '#FFEBD9',
  salmon: '#E66767',
  white: '#fff',
  bege: '#FFF8F2'
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
    background: linear-gradient(to right, #ffac7d, #f48787);


    .display-none {
      display: none;
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
  background-color: #fff;
  color: #ff8e8e;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
