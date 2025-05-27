import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RepoCard from "./components/RepoCard";
import UserDetails from "./components/UserDetails";
import Footer from "./components/Footer";

const App = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [userDetails, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRepos = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const response2 = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setDetails(response2.data);
      const sortedRepos = response.data.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      setRepos(sortedRepos);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to fetch repositories. Please check the username and try again."
      );
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-gray-200 p-8">
      <div className="max-w-full xl:max-w-7xl mx-auto mb-12">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-center text-white">
            GitHub Repository Finder
          </h1>
        </div>

        <SearchBar
          fetchRepos={fetchRepos}
          loading={loading}
          setUsername={setUsername}
          username={username}
        />
        {error && <div className="text-red-500 text-center mb-8">{error}</div>}

        <div className="flex md:flex-row flex-col gap-x-6">
          {Object.keys(userDetails).length > 0 && (
            <UserDetails userDetails={userDetails} />
          )}
          <div className="w-full">
            {repos.length > 0
              ? repos.map((repo, index) => <RepoCard repo={repo} key={index} />)
              : ""}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
