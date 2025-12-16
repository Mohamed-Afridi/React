import Navbar from "../components/navbar";
import ReviewCard from "../components/reviewcard";

function Feed() {
  return (
    <div>
      <Navbar />

      <ReviewCard
        name="Afridi"
        title="Great Course"
        desc="React basics explained well"
        rating="5"
      />

      <ReviewCard
        name="John"
        title="Good UI"
        desc="Simple and clean design"
        rating="4"
      />
    </div>
  );
}

export default Feed;
