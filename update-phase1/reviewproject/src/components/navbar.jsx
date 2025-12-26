import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Review Social</h3>

      <button onClick={() => navigate("/add")}>
        Add Review
      </button>

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
