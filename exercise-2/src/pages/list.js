import React from 'react';
import './list.css';
import ArticleCard from '../components/articleCard';
import Data from '../components/data';

const List = () => {
  return (
    <main className='listWrapper'>
      <h1>Articles</h1>
      {Data.map((article, index) => (
        <ArticleCard
          key={index}
          blurb={article.blurb}
          date={article.publishedDate}
          imageAlt={article.image.alt}
          imageSrc={article.image.url}
          title={article.title}
          id={article.id}
        />
      ))}
    </main>
  );
};

export default List;
