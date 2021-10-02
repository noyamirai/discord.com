console.log("OS CHECKER SCRIPT ACTIVE");

let userAgent = window.navigator.userAgent;
let platform = window.navigator.platform;
let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
let iosPlatforms = ['iPhone', 'iPad', 'iPod'];

let headerDownloadBtn = document.querySelector("#header-download-btn");
let downloadDetails = document.querySelector("#download-details");

let iosDownloadCard = document.querySelector("#ios-download");
let androidDownloadCard = document.querySelector("#android-download");
let linuxDownloadCard = document.querySelector("#linux-download");
let windowsDownloadCard = document.querySelector("#windows-download");
let macDownloadCard = document.querySelector("#mac-download");

let headerImg = document.querySelector("#header-img");

let downloadIcon = "<img src='./images/icons/download-icon-white.svg' alt='Download icon'>";

function getOS() {
  if (macosPlatforms.indexOf(platform) !== -1) {
    headerDownloadBtn.innerHTML = downloadIcon + "Download for Mac";
    downloadDetails.textContent = "MacOS 10.11 and up (El Capitan)";
    macDownloadCard.classList.add("hide");
    headerImg.src = "./images/discord_for_mac.svg";
    headerImg.alt = "Discord for Mac illustration";

  } else if (iosPlatforms.indexOf(platform) !== -1) {
    headerDownloadBtn.innerHTML = downloadIcon + "Download from App Store";
    downloadDetails.textContent = "Available on iOS 10.0 and up";
    iosDownloadCard.classList.add("hide");

    headerImg.src = "./images/discord_for_ios.svg";
    headerImg.alt = "Discord for iOS illustration";

  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    headerDownloadBtn.innerHTML = downloadIcon + "Download for Windows";
    downloadDetails.textContent = "Windows 7 or higher";
    windowsDownloadCard.classList.add("hide");

    headerImg.src = "./images/discord_for_windows.svg";
    headerImg.alt = "Discord for Windows illustration";

  } else if (/Android/.test(userAgent)) {
    headerDownloadBtn.innerHTML = downloadIcon + "Download from Google Play";
    downloadDetails.textContent = "Available on Android 5.0.x and up";
    androidDownloadCard.classList.add("hide");

    headerImg.src = "./images/discord_for_android.svg";
    headerImg.alt = "Discord for Android illustration";

  } else if (!os && /Linux/.test(platform)) {
    headerDownloadBtn.innerHTML = downloadIcon + "Download for Linux";
    downloadDetails.classList.add("hide");
    linuxDownloadCard.classList.add("hide");

    headerImg.src = "./images/discord_for_linux.svg";
    headerImg.alt = "Discord for Linux illustration";
  }
}

window.addEventListener("load", function() { getOS(); });
