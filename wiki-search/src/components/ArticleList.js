import Article from "./Article";

const ArticleList = ({ articles }) => {
  const renderArticles = articles.map((article) => {
    return <Article key={article.pageid} article={article}></Article>;
  });
  return <div>{renderArticles}</div>;
};

export default ArticleList;
