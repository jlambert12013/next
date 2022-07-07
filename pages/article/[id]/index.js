// import { useRouter } from 'next/router'
import Link from 'next/link'

const Article = ({ article }) => {
  //   NOTE This is an Example using NEXT JS with useRouter
  //   const router = useRouter()
  //   const { id } = router.query

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </>
  )
}

// Get Server-side Props - getServerSideProps
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()
//   return {
//     props: {
//       article,
//     },
//   }
// }

//  Get Static Props - getStaticProps
//    Using a combination of GetStaticProp and GetStaticPaths to
//    dynamically generally static pages with paths. This makes the site fast and
//    this allows you to use as a static website if you desire.
export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/`)
  const articles = await res.json()
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Article
