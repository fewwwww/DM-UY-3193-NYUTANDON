import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import './article.css';
import Data from '../components/data';

const Article = () => {
  const { id } = useParams();

  const article = Data.find((article) => article.id === id);

  const date = useMemo(() => {
    if (!article) {
      return '';
    }
    const parsedDate = new Date(article.publishedDate);
    return parsedDate.toDateString();
  }, [article]);

  return (
    <main>
      <header
        style={{
          backgroundImage: `url('${article.image.url}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <h1>{article.title}</h1>
        <p>{date}</p>
        <h2>{article.blurb}</h2>
      </header>
      <section>
        {article.articleText.map((text, index) => {
          const type = text.type;
          switch(type) {
            case 'p': {
              return <p key={index}>{text.data}</p>;
            }
            case 'h1': {
              return <h1 key={index}>{text.data}</h1>;
            }
            case 'h2': {
              return <h2 key={index}>{text.data}</h2>;
            }
            case 'h3': {
              return <h3 key={index}>{text.data}</h3>;
            }
            case 'h4': {
              return <h4 key={index}>{text.data}</h4>;
            }
            default: {
              return <p key={index}>{text.data}</p>;
            }
          }
        })}
      </section>
    </main>
  );
};

export default Article;
