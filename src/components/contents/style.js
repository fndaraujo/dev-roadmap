import styled from 'styled-components'

export const StyledContents = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  align-items: center;
  margin: 3rem 4rem 0 4rem;
  padding: 1rem;

  @media screen and (max-width: 1650px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
