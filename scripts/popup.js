chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const pageLoaded = { obj };
  console.log('message received', pageLoaded, response);
  if (response && pageLoaded) {
    const previewPlayer = document.querySelector('.VideoPreviewPlayer');
    const videos = document.querySelectorAll('video');
    console.log('videos:', videos);
    console.log(previewPlayer);
    previewPlayer.removeAttribute('autoplay');
    console.log('in if statement');
  }
});
