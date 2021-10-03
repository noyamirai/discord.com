console.log("OS CHECKER SCRIPT ACTIVE");

let userAgent = window.navigator.userAgent;
let platform = window.navigator.platform;
let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
let iosPlatforms = ['iPhone', 'iPad', 'iPod'];

let headerDownloadBtn = document.querySelector("#header-download-btn");
let homeHeaderDownloadBtn = document.querySelector("#home-download-btn");
let footerDownloadBtn = document.querySelector("#footer-download-btn");
let downloadDetails = document.querySelector("#download-details");

let iosDownloadCard = document.querySelector("#ios-download");
let androidDownloadCard = document.querySelector("#android-download");
let linuxDownloadCard = document.querySelector("#linux-download");
let windowsDownloadCard = document.querySelector("#windows-download");
let macDownloadCard = document.querySelector("#mac-download");

let headerImg = document.querySelector("#header-img");

let pageId = document.querySelector("body");

let blackDownloadIcon = "<img src='./images/icons/download-icon.svg' alt='Download Discord'>";
let defaultDownloadIcon = "<img src='./images/icons/download-icon-white.svg' alt='Download Discord'>";

function getOS() {
  if (macosPlatforms.indexOf(platform) !== -1) {

    if (pageId.id == "download-page") {
      headerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Mac";
      downloadDetails.textContent = "MacOS 10.11 and up (El Capitan)";
      macDownloadCard.classList.add("hide");

      headerImg.src = "./images/discord_for_mac.svg";
      headerImg.alt = "Discord for Mac illustration";
    } else if (pageId.id == "home") {
      homeHeaderDownloadBtn.innerHTML = blackDownloadIcon + "Download for Mac";
      footerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Mac";
    }


  } else if (iosPlatforms.indexOf(platform) !== -1) {
    if (pageId.id == "download-page") {
      headerDownloadBtn.innerHTML = defaultDownloadIcon + "Download from App Store";
      downloadDetails.textContent = "Available on iOS 10.0 and up";
      iosDownloadCard.classList.add("hide");

      headerImg.src = "./images/discord_for_ios.svg";
      headerImg.alt = "Discord for iOS illustration";
    } else if (pageId.id == "home") {
      homeHeaderDownloadBtn.innerHTML = blackDownloadIcon + "Download from App Store";
      footerDownloadBtn.innerHTML = defaultDownloadIcon + "Download from App Store";
    }


  } else if (windowsPlatforms.indexOf(platform) !== -1) {

    if (pageId.id == "download-page") {
      headerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Windows";
      downloadDetails.textContent = "Windows 7 or higher";
      windowsDownloadCard.classList.add("hide");

      headerImg.src = "./images/discord_for_windows.svg";
      headerImg.alt = "Discord for Windows illustration";
    } else if (pageId.id == "home") {
      homeHeaderDownloadBtn.innerHTML = blackDownloadIcon + "Download for Windows";
      footerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Windows";
    }

  } else if (/Android/.test(userAgent)) {
    if (pageId.id == "download-page") {
      headerDownloadBtn.innerHTML = defaultDownloadIcon + "Download from Google Play";
      downloadDetails.textContent = "Available on Android 5.0.x and up";
      androidDownloadCard.classList.add("hide");

      headerImg.src = "./images/discord_for_android.svg";
      headerImg.alt = "Discord for Android illustration";
    } else if (pageId.id == "home") {
      homeHeaderDownloadBtn.innerHTML = blackDownloadIcon + "Download from Google Play";
      footerDownloadBtn.innerHTML = defaultDownloadIcon + "Download from Google Play";
    }

  } else if (!os && /Linux/.test(platform)) {
    if (pageId.id == "download-page") {
      headerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Linux";
      downloadDetails.classList.add("hide");
      linuxDownloadCard.classList.add("hide");

      headerImg.src = "./images/discord_for_linux.svg";
      headerImg.alt = "Discord for Linux illustration";
    } else if (pageId.id == "home") {
      homeHeaderDownloadBtn.innerHTML = blackDownloadIcon + "Download for Linux";
      footerDownloadBtn.innerHTML = defaultDownloadIcon + "Download for Linux";
    }
  }
}

window.addEventListener("load", function() { getOS(); });
