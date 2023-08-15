import { LiaStar, LiaStarSolid, LiaStarHalfAltSolid } from "react-icons/lia"

export default function Rating({ rating } : {rating : number}) {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<LiaStarSolid color="#fcba03" key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<LiaStarHalfAltSolid color="#fcba03" key={fullStars} />);
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<LiaStar color="#fcba03" key={fullStars + i + 1} />);
    }

    return stars;
  };

  return <span>{renderStars()} {rating} </span>;
}