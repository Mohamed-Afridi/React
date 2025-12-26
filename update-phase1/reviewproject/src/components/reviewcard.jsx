function ReviewCard(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>User: {props.name}</p>
      <p>{props.desc}</p>
      <p>Rating: ⭐ {props.rating}</p>
    </div>
  );
}

export default ReviewCard;
