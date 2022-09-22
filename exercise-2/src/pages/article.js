import React from 'react';
import "./article.css";

const Article = ({ imageSrc, imageAlt, title, date, blurb, content }) => {
  const backgroundImage = "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"

  return (
    // <main>
    //   <header>
    //     <img src={imageSrc} alt={imageAlt} />
    //     <h1>{title}</h1>
    //     <p>{date}</p>
    //     <p>{blurb}</p>
    //   </header>
    //   <section>
    //     {content}
    //   </section>
    // </main>
    <main>
      <header style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>title</h1>
        <p>date</p>
        <h2>blurb</h2>
      </header>
      <section>content</section>
    </main>
  );
};

export default Article;
