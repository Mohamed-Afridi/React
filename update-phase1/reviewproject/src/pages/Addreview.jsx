import { useNavigate } from "react-router-dom";

function AddReview() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add Review</h2>

      <input placeholder="Review Title" />
      <br />

      <textarea placeholder="Review Description"></textarea>
      <br />

      <select>
        <option>5</option>
        <option>4</option>
        <option>3</option>
      </select>
      <br />

      <button onClick={() => navigate("/feed")}>
        Post Review
      </button>
    </div>
  );
}

export default AddReview;
