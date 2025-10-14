import React, { useState, useEffect } from "react";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setUserData(null);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError(null);

      fetch(`https://api.github.com/users/${username}`, { signal })
        .then((res) => {
          if (!res.ok) throw new Error("User not found");
          return res.json();
        })
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setError(err.message);
            setUserData(null);
            setLoading(false);
          }
        });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      controller.abort(); // cancel previous fetch
    };
  }, [username]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p>{userData.name}</p>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
