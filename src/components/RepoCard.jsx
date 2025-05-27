const RepoCard = ({ repo }) => {
  return (
    <div
      key={repo.id}
      className="bg-[#161b22] rounded-lg p-6 mb-4 h-fit border border-[#30363d] hover:border-[#58a6ff] transition-colors"
    >
      <h2 className="text-xl font-semibold mb-2 text-[#58a6ff]">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {repo.name}
        </a>
      </h2>
      <p className="text-gray-400 mb-4 line-clamp-2">
        {repo.description || "No description available"}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <span>{repo.stargazers_count}</span>
        </div>
        {repo.language && (
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#58a6ff]"></span>
            <span>{repo.language}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
