import Head from 'next/head' // For HTML Head Tags
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alabama Powersports | 2925 Citizens Pkwy, Selma AL 36701</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <h1>Welcome to Alabama Powersports</h1>
    </div>
  )
}
