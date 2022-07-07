import Head from 'next/head' // For HTML Head Tags
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Alabama Powersports | 2925 Citizens Pkwy, Selma AL 36701</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
