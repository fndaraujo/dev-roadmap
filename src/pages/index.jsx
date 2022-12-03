import Head from 'next/head'

import Header from 'src/components/header'

import appConfig from '/devroadmap.config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <Header title={appConfig.app.product} />
    </>
  )
}
