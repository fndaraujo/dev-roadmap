import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  gap: 1rem;
  background-color: black;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.6),
    0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.56);

  position: fixed;
  width: 100%;
  top: 0;

  h1 {
    font-size: 2rem;
    font-weight: bolder;
    text-transform: capitalize;
  }

  .container-logo {
    padding: 0 0.4rem;
    border-radius: 4px;
    background-color: #209cee;
    color: whitesmoke;
    font-size: 2rem;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .container-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    color: whitesmoke;
  }
  .notice-in-development {
    padding: 0.1rem 0.8rem;
    background-color: red;
    color: yellow;
    max-width: fit-content;
    border-radius: 8px;
    font-style: italic;
    font-weight: bold;
  }
`
