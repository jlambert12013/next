import articleStyle from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article) => (
        <h1>{article.title}</h1>
      ))}
    </div>
  )
}
export default ArticleList
