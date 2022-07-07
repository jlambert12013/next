// import { useRouter } from 'next/router'
import Link from 'next/link'

const Article = ({ article }) => {
  //   This is an Example using NEXT JS
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

//  Get Server-side Props
export const getServerSideProps = async (context) => {
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

export default Article
