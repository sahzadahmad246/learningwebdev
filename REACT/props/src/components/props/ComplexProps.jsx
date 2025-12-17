import toast from "react-hot-toast";

function UserCard({ user, action, theme }) {
  return (
    <div className={` p-3  rounded-xl ${theme.bg}`}>
      <div className="flex items-center justify-around-center">
        <p className={` p-3 rounded-full mr-2 ${theme.avatarBg}`}>
          {user.avatar}
        </p>
        <div className="">
          <p className={`font-bold ${theme.primaryText}`}>{user.name}</p>
          <p className={` text-gray-500 text-sm`}>{user.email}</p>
          <div className={`flex gap-3 text-sm ${theme.primaryText} `}>
            <span className={`py-1 rounded-3xl px-4 mt-2 ${theme.avatarBg}`}>
              {user.role}
            </span>
            <span className={`py-1 rounded-3xl px-4 mt-2 ${theme.avatarBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-evenly">
        {Object.entries(action).map(([name, func], i) => {
          const label = name
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (c) => c.toUpperCase());

          const buttonBg = i === 0 ? theme.primaryBtn : theme.secondaryBtn;
          return (
            <button
              className={` rounded-xl px-3 py-1  ${buttonBg}`}
              key={i}
              onClick={func}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const ComplexProps = () => {
  const Users = [
    {
      user: {
        name: "Shahzad",
        avatar: "😎",
        email: "shaz@gmail.com",
        role: "admin",
        status: "active",
        posts: "410",
        followers: "427833",
        following: "232",
      },
      action: {
        approveUser: () => toast.success("Approving user"),
        banAccount: () => toast.success("Banning account"),
      },
      theme: {
        bg: "bg-purple-200",
        avatarBg: "bg-purple-300",
        primaryBtn: "bg-purple-800",
        secondaryBtn: "bg-gray-400",
        primaryText: "text-gray-800",
        secondaryText: "text-gray-600",
      },
    },

    // USER 2 (FULL-STACK DEVELOPER)
    {
      user: {
        name: "Aarav Dev",
        avatar: "💻",
        email: "aarav.dev@example.com",
        role: "Full-Stack Developer",
        status: "online",
        projects: "18",
        commits: "12,940",
        reviews: "327",
      },
      action: {
        runBuild: () => toast.success("Running full-stack build"),
        openRepo: () => toast.success("Opening GitHub repository"),
      },
      theme: {
        bg: "bg-blue-200",
        avatarBg: "bg-blue-300",
        primaryBtn: "bg-blue-800 text-white",
        secondaryBtn: "bg-gray-300 text-gray-800",
        primaryText: "text-gray-900",
        secondaryText: "text-gray-600",
      },
    },

    // USER 3 (MOBILE APP DEVELOPER)
    {
      user: {
        name: "Riya Build",
        avatar: "📱",
        email: "riya.build@example.com",
        role: "Mobile App Developer",
        status: "coding",
        projects: "12",
        commits: "8,130",
        reviews: "142",
      },
      action: {
        testOnDevice: () => toast.success("Testing on virtual device"),
        openPlayStore: () => toast.success("Opening Play Store page"),
      },
      theme: {
        bg: "bg-pink-200",
        avatarBg: "bg-ppink-300",
        primaryBtn: "bg-pink-700 text-white",
        secondaryBtn: "bg-gray-200 text-gray-900",
        primaryText: "text-gray-900",
        secondaryText: "text-gray-600",
      },
    },

    // USER 4 (DEVOPS ENGINEER)
    {
      user: {
        name: "Kabir Ops",
        avatar: "🛠️",
        email: "kabir.ops@example.com",
        role: "DevOps Engineer",
        status: "online",
        pipelines: "57",
        deployments: "213",
        incidentsResolved: "72",
      },
      action: {
        restartServer: () => toast.success("Restarting server"),
        checkLogs: () => toast.success("Checking production logs"),
      },
      theme: {
        bg: "bg-yellow-200",
        avatarBg: "bg-yellow-300",
        primaryBtn: "bg-yellow-700 text-white",
        secondaryBtn: "bg-gray-300 text-gray-800",
        primaryText: "text-gray-900",
        secondaryText: "text-gray-600",
      },
    },
  ];

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold">Complex / Nexted Props</h3>
      <p className="text-gray-500 text-sm">
        These props bundle multiple layers of information inside structured
        objects, letting components handle advanced behaviors like actions,
        themes, user profiles, and dynamic UI states with ease.
      </p>

      <div className="grid gird-clos-1 md:grid-cols-2 gap-4 mt-3">
        {Users.map((userData, index) => (
          <UserCard key={index} {...userData} />
        ))}
      </div>
    </div>
  );
};

export default ComplexProps;
