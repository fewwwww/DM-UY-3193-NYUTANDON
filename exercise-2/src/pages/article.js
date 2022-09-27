import React from 'react';
import { useParams } from 'react-router';
import "./article.css";
import Data from '../components/data';

const Article = ({ imageSrc, imageAlt, title, date, blurb, content }) => {
  const { id } = useParams();

  const article = Data.find((article) => article.id === id);

  return (
    <main>
      <header style={{ backgroundImage: `url(${article.image.url})` }}>
        <h1>{article.title}</h1>
        <p>{article.publishedDate}</p>
        <h2>{article.blurb}</h2>
      </header>
      <section>{article.articleText[0].data}</section>
    </main>
  );
};

export default Article;
