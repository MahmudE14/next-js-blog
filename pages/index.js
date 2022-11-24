import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/blog/list'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JSON Blog</title>
        <meta name="description" content="Blog with JSON data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blog />
    </div>
  )
}
