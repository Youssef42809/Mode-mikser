// Mood playlists with YouTube embed links
const moodPlaylists = {
    happy: [
      "https://www.youtube.com/embed/3AtDnEC4zak", // Example: Happy Song 1
      "https://www.youtube.com/embed/OPf0YbXqDm0", // Example: Happy Song 2
    ],
    sad: [
      "https://www.youtube.com/embed/1G4isv_Fylg", // Example: Sad Song 1
      "https://www.youtube.com/embed/RgKAFK5djSk", // Example: Sad Song 2
    ],
    energetic: [
      "https://www.youtube.com/embed/hT_nvWreIhg", // Example: Energetic Song 1
      "https://www.youtube.com/embed/kXYiU_JCYtU", // Example: Energetic Song 2
    ],
    relaxed: [
      "https://www.youtube.com/embed/7NOSDKb0HlU", // Example: Relaxed Song 1
      "https://www.youtube.com/embed/1ZYbU82GVz4", // Example: Relaxed Song 2
    ],
  };
  
  // Get DOM elements
  const moodButtons = document.querySelectorAll(".mood-buttons button");
  const playlistDiv = document.getElementById("playlist");
  
  // Add event listeners to mood buttons
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      showPlaylist(mood);
    });
  });
  
  // Function to display the playlist
  function showPlaylist(mood) {
    // Clear previous playlist
    playlistDiv.innerHTML = "";
  
    // Get the playlist for the selected mood
    const playlist = moodPlaylists[mood];
  
    // Display each song as an embedded YouTube video
    playlist.forEach((videoUrl) => {
      const iframe = document.createElement("iframe");
      iframe.src = videoUrl;
      iframe.width = "100%";
      iframe.height = "200";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      playlistDiv.appendChild(iframe);
    });
  }
