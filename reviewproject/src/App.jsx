import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Feed from "./pages/feed";
import AddReview from "./pages/addreview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/add" element={<AddReview />} />
    </Routes>
  );
}

export default App;
