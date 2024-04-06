import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    thumbnail_url,
    name,
    details,
    image_url,
  } = news;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="font-medium text-blue-500">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
