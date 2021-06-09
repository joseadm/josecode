import Head from 'next/head'
import { useState, useEffect } from 'react'
import fire from '../config/fire-config'
import Navbar from '../components/Navbar'
import tw from 'twin.macro'

const Main = tw.div`flex mb-4 container flex-col lg:flex-row mx-auto my-8`

export default function Resume() {
    return (
      <div style={{ overflow: 'hidden' }}>
      <Head>
        <title>josecode</title>
      </Head>
      <Navbar />
      <Main>
        test
        </Main>
        </div>
        )
  }