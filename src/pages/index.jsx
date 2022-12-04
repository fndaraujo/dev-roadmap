import Head from 'next/head'
import { useState } from 'react'

import Header from 'src/components/header'
import Contents from 'src/components/contents'

import appConfig from '/devroadmap.config'

export default function Home() {
  const [category, setCategory] = useState('')
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <Header title={appConfig.app.product} setCategory={setCategory} />
      <Contents category={category} />
    </>
  )
}
