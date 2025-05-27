const SearchBar = ({fetchRepos,username,setUsername,loading}) => {
  return (
    <form onSubmit={fetchRepos} className="mb-8">
          <div className="flex gap-4 max-w-xl mx-auto">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 px-4 py-2 rounded-lg bg-[#161b22] border border-[#30363d] focus:outline-none focus:border-[#58a6ff] text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#238636] hover:bg-[#2ea043] rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
  )
}

export default SearchBar