import Head from 'next/head'

import appConfig from '/devroadmap.config'

import styled from 'styled-components'

const StyledHome = styled.div`
  color: #bebebe;

  h1 {
    text-transform: uppercase;
  }
  p {
    margin-left: 4rem;
  }

  .in-development-notice {
    padding: 0.1rem 0.8rem;
    background-color: #bebebe;
    color: white;
    max-width: fit-content;
    border-radius: 8px;
    font-style: italic;
    font-weight: bold;
  }
`
export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <StyledHome>
        <h1>developer roadmap</h1>
        <p>
          An interactive web site providing a roadmap for web development with
          focus on <strong>react</strong> and <strong>dotnet core</strong>{' '}
          technology and ecosystems.
        </p>
        <p className="in-development-notice">In development.</p>
      </StyledHome>
    </>
  )
}
