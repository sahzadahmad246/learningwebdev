document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.getElementById("searchBtn");
  let userInput = document.getElementById("user-input");

  function validateLeetCodeUsername(username) {
    if (!username || username.trim() === "") {
      alert("Username cannot be empty");
      return false;
    }

    const regex = /^[a-zA-Z0-9_-]{3,39}$/;
    if (!regex.test(username)) {
      alert("Invalid username! Use letters, numbers, _ or - (3-39 characters)");
      return false;
    }

    return true;
  }

  function renderData(userData) {
    console.log(userData);
    document.querySelector(".progressContainer").style.display = "flex";

    function updateProgress(level) {
      const solved = userData[`${level}Solved`];
      const total = userData.totalSolved;
      const percentage = Math.round((solved / total) * 100);
      const degree = (percentage / 100) * 360;

      const progressElement1 = document.getElementById(`${level}Progress`);
      const textElement1 = document.getElementById(`${level}Level`);

      progressElement1.style.setProperty("--progress-degree", `${degree}deg`);
      textElement1.textContent = `${solved}/${total}`;
    }
    ["easy", "medium", "hard"].forEach(updateProgress);
    function renderStats(statsData) {
      const container = document.querySelector(".stats");
      container.style.display = "grid";
      let card = document.createElement("div");
      card.classList.add("statsCard");

      const valueDiv = document.createElement("div");
      valueDiv.classList.add("statsValue");
      valueDiv.textContent = statsData.value;

      const labelDiv = document.createElement("div");
      labelDiv.classList.add("statsLabel");
      labelDiv.textContent = statsData.label;

      card.appendChild(valueDiv);
      card.appendChild(labelDiv);

      container.appendChild(card);
    }

    [
      { label: "Acceptance Rate", value: `${userData.acceptanceRate}%` },
      { label: "Ranking", value: userData.ranking },
      { label: "Reputation", value: userData.reputation },
      { label: "Total Solved", value: userData.totalSolved },
      { label: "Contribution Points", value: userData.contributionPoints },
    ].forEach((stats) => {
      renderStats(stats);
    });
  }

  async function fetchUserData(username) {
    try {
      searchButton.textContent = "Searching...";
      const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
      const response = await fetch(url);
      const userData = await response.json();
      // console.log(data);
      if (userData.status === "success") {
        renderData(userData);
      } else {
        console.log(userData);
        const errorDiv = document.createElement("p");
        errorDiv.classList.add("errorDiv");
        errorDiv.textContent = "Username not found";
        document.querySelector(".main").appendChild(errorDiv);
      }
    } catch (error) {
      console.log(error);
    } finally {
      searchButton.textContent = "Search";
    }
  }

  function clearOldData() {
    const statsContainer = document.querySelector(".stats");
    const errorDiv = document.querySelector(".errorDiv");
    errorDiv;
    if (statsContainer) {
      statsContainer.innerHTML = "";
      statsContainer.style.display = "none";
    }

    if (errorDiv) {
      errorDiv.textContent = "";
      statsContainer.style.display = "none";
    }
  }
  searchButton.addEventListener("click", () => {
    username = userInput.value;
    if (validateLeetCodeUsername(username)) {
      clearOldData();
      fetchUserData(username);
    }
  });
});
