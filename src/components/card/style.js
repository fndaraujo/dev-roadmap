import styled from 'styled-components'

export const StyledCard = styled.div`
  margin: 0.5rem;
  width: 16rem;
  text-align: center;

  .frontend {
    padding: 0.2rem;
    border: solid 1px #2b2b2b;
    border-radius: 0.8rem;
    background-color: #f27a10;
    color: whitesmoke;
    transition: 0.5s linear;
  }
  .backend {
    padding: 0.2rem;
    border: solid 1px #e666cc;
    border-radius: 0.8rem;
    background-color: #9780e5;
    color: whitesmoke;
    transition: 0.5s linear;
  }
  .fullstack {
    padding: 0.2rem;
    border: solid 1px #2b2b2b;
    border-radius: 0.8rem;
    background-color: lightblue;
    color: grey;
    transition: 0.5s linear;
  }
  .unselected {
    padding: 0.2rem;
    border: solid 1px #c1c1c1;
    border-radius: 0.8rem;
    color: #c1c1c1;
    transition: 0.5s linear;
  }
  .following {
    padding: 0.2rem;
    border: solid 1px #c1c1c1;
    border-radius: 0.8rem;
    background-color: #c3c3c3;
    color: whitesmoke;
    transition: 0.5s linear;
  }
`
