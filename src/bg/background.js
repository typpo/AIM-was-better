chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "http://www.ianww.com/im_sounds/aim_incoming_message.mp3"};
  },
  {urls: [
    "https://ssl.gstatic.com/chat/sounds/incoming_message_eb39ce414e3ffba41a8e173581dc7248.mp3"
  ]},
  ["blocking"]
);
