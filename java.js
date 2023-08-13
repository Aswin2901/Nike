function resizeVideo() {
    const video = document.getElementById("background-video");
    const container = document.querySelector(".video-container");

    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const containerAspectRatio = container.clientWidth / container.clientHeight;

    if (containerAspectRatio > videoAspectRatio) {
        video.style.width = "100%";
        video.style.height = "auto";
    } else {
        video.style.width = "auto";
        video.style.height = "100%";
    }
}

window.addEventListener("resize", resizeVideo);
resizeVideo();