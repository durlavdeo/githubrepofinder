import { Link, MapPin, UsersRound } from "lucide-react";


const UserDetails = ({userDetails}) => {
  return (
   <div className="lg:w-[300px] md:w-[250px] mb-6">
            <div className="flex md:gap-6 gap-3 mb-6 w-full md:flex-col flex-row md:items-start items-center">
              <div className="md:h-[200px] md:w-[200px] w-[80px] h-[80px] lg:w-[300px] lg:h-[300px] bg-red-500 rounded-full overflow-hidden border-2 border-gray-500 flex items-center justify-center">
                <img src={userDetails.avatar_url} alt="" className="contain" />
              </div>
              <div>
                <h1 className="md:text-[2rem] text-[1.2rem] font-bold">
                  {userDetails.name}
                </h1>
                <h2 className="text-gray-500 md:text-lg text-md">
                  {userDetails.login}
                </h2>
              </div>
            </div>
            <p className="mb-2">{userDetails.bio}</p>
            <div className="flex gap-2 mb-1 items-center">
              <p className="flex items-center">
                <span className="font-bold text-white flex items-center gap-1">
                  <span>
                    <UsersRound size={"16px"} />
                  </span>
                  {userDetails.followers}
                </span>
                <span className="text-gray-500 ml-1">followers</span>
              </p>

              <span className="h-[3px] w-[3px] bg-white rounded-full"></span>
              <p>
                <span className="font-bold text-white">
                  {userDetails.following}
                </span>
                <span className="text-gray-500 ml-1">following</span>
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <span className="flex items-center gap-1">
                {" "}
                <span>
                  {" "}
                  <MapPin size={"15px"} />{" "}
                </span>{" "}
                {userDetails.location}
              </span>
              <span className="flex items-center gap-1">
                <span>
                  {" "}
                  <Link size={"15px"} />
                </span>
                <a
                  href={userDetails.blog}
                  target="_blank"
                  className="hover:underline"
                >
                  {userDetails.blog}
                </a>
              </span>
            </div>
          </div>
  )
}

export default UserDetails