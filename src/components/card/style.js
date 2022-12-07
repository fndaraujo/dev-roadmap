import { css } from 'styled-components'
import styled from 'styled-components'

const textcolor_card_selected = 'whitesmoke'
const textcolor_card_unselected = '#c1c1c1'

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
          color: ${textcolor_card_selected};
        `
      case 'javascript':
        return css`
          background-color: ${bgcolor_javascript};
          color: ${textcolor_card_selected};
        `
      case 'node':
        return css`
          background-color: ${bgcolor_nodejs};
          color: ${textcolor_card_selected};
        `
      case 'dotnet':
        return css`
          background-color: ${bgcolor_dotnet};
          color: ${textcolor_card_selected};
        `
      case 'aspnet':
        return css`
          background-color: ${bgcolor_aspnet};
          color: ${textcolor_card_selected};
        `
      case 'following':
        return css`
          background-color: ${bgcolor_following};
          color: ${textcolor_card_selected};
        `
      default:
        return css`
          color: ${textcolor_card_unselected};
        `
    }
  }}
`
