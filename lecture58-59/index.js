document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.getElementById("searchBtn");
  let userInput = document.getElementById("user-input");
  let statDiv = document.getElementsByClassName("stats");
  let easyProgress = document.querySelector("#easyProgress");
  let mediumProgress = document.querySelector("#mediumProgress");
  let hardProgress = document.querySelector("#hardProgress");
  let easyLevel = document.querySelector("#easyLevel");
  let mediumLevel = document.querySelector("#mediumLevel");
  let hardLevel = document.querySelector("#hardLevel");

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
        errorDiv.textContent = "Username not found";
        document.querySelector(".main").appendChild(errorDiv);
      }
    } catch (error) {
      console.log(error);
    } finally {
      searchButton.textContent = "Search";
    }
  }
  searchButton.addEventListener("click", () => {
    username = userInput.value;
    if (validateLeetCodeUsername(username)) {
      fetchUserData(username);
    }
  });
});
