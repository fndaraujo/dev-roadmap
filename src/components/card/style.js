import { css } from 'styled-components'
import styled from 'styled-components'

const textcolor_following = 'whitesmoke'

const bgcolor_react = '#61dafb;'
const bgcolor_following = '#c3c3c3'
const bgcolor_javascript = '#f27a10'
const bgcolor_nodejs = '#026e00'
const bgcolor_dotnet = '#9780e5'
const bgcolor_aspnet = '#ac99ea'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  height: 2rem;
  width: 16rem;
  padding: 0.2rem;
  border: solid 1px #c1c1c1;
  border-radius: 0.8rem;
  transition: 0.5s linear;
  ${(props) => {
    switch (props.skillClassName) {
      case 'react':
        return css`
          background-color: ${bgcolor_react};
          color: whitesmoke;
        `
      case 'javascript':
        return css`
          background-color: ${bgcolor_javascript};
          color: whitesmoke;
        `
      case 'node':
        return css`
          background-color: ${bgcolor_nodejs};
          color: whitesmoke;
        `
      case 'dotnet':
        return css`
          background-color: ${bgcolor_dotnet};
          color: whitesmoke;
        `
      case 'aspnet':
        return css`
          background-color: ${bgcolor_aspnet};
          color: whitesmoke;
        `
      case 'following':
        return css`
          background-color: ${bgcolor_following};
          color: whitesmoke;
        `
      default:
        return css`
          color: #c1c1c1;
        `
    }
  }}
`
