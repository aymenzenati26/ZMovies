function toggleEpisodes(seasonHeader) {
    // Get the episode list that follows the clicked season header
    const episodeList = seasonHeader.nextElementSibling;

    // Toggle the display of the episode list
    if (episodeList.style.display === "block") {
        episodeList.style.display = "none";
    } else {
        episodeList.style.display = "block";
    }
}