
import { LeaderBoard } from "@/components/LeaderBoard";
import Navbar from "@/components/Navbar";

const LeaderboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <LeaderBoard />
      </div>
    </>
  );
};

export default LeaderboardPage;
