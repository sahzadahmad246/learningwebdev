import UserCard from "./UserCard";

function UserCardApp() {
  const userData = [
  {
    UserName: "Shahzad Ahmad",
    bio: "half-stack developer powered by AI",
    profilePic:
      "https://pbs.twimg.com/profile_images/1944331965630648320/5M66OFQj_400x400.jpg",
  },
  {
    UserName: "Ayan Khan",
    bio: "Front-end wizard & coffee lover",
    profilePic:
      "https://pbs.twimg.com/profile_images/1933219628542500864/mDlZN1Ye_400x400.jpg",
  },
  {
    UserName: "Rahul Verma",
    bio: "Backend enthusiast building apps",
    profilePic:
      "https://pbs.twimg.com/profile_images/1968896717471756288/cmUDoFWo_400x400.jpg",
  },
  {
    UserName: "Ayesha Malik",
    bio: "UI/UX designer turning ideas into visuals",
    profilePic:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    UserName: "Karan Singh",
    bio: "Full-stack dev with a love for coffee and music",
    profilePic:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    UserName: "Sara Ali",
    bio: "React enthusiast & cat person 🐱",
    profilePic:
      "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    UserName: "Imran Raza",
    bio: "Cloud engineer making the internet smarter ☁️",
    profilePic:
      "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    UserName: "Neha Gupta",
    bio: "Front-end magician with a pixel-perfect eye",
    profilePic:
      "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

  return (
    <>
      {/* <UserCard
        name={userData[0].UserName}
        bio={userData[0].bio}
        profilePic={userData[0].profilePic}
      />

      <UserCard
        name={userData[1].UserName}
        bio={userData[1].bio}
        profilePic={userData[1].profilePic}
      />
      <UserCard
        name={userData[2].UserName}
        bio={userData[2].bio}
        profilePic={userData[2].profilePic}
      /> */}
      {userData.map((user, index) => {
        return (
          <UserCard
            id={index}
            name={user.UserName}
            bio={user.bio}
            profilePic={user.profilePic}
          />
        );
      })}
    </>
  );
}

export default UserCardApp;
