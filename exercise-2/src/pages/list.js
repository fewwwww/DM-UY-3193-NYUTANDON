import React from 'react';
import './list.css';
import ArticleCard from '../components/articleCard';

const List = () => {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    articles.push(
      <ArticleCard
        imageAlt='a'
        imageSrc='a'
        date='aa'
        blurb='adb'
        title='da'
        key={i}
      />,
    );
  }

  return (
    <main className='listWrapper'>
      <h1>Articles</h1>
      {articles}
    </main>
  );
};

export default List;
