import React, {useMemo} from "react";

const ArticleCard = ({imageSrc, imageAlt, blurb, date, title, id}) => {
  const dateString = useMemo(() => {
    if (!date) {
      return '';
    }
    const parsedDate = new Date(date);
    return parsedDate.toDateString();
  }, [date]);

  return (
    <div className="articleCard">
      <div className="articleCard--image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="articleCard--text">
        <h2>{title}</h2>
        <p className="date">{dateString}</p>
        <p className="blurb">{blurb}</p>
        <p className="link">
          <a href={`/article/${id}`}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
