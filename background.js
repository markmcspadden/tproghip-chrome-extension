var visible = true

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    null, {file:"content.js"});

  
  if(visible) {
    chrome.browserAction.setIcon({path:"off.png"});
    visible = false;
  }
  else {
    chrome.browserAction.setIcon({path:"on.png"}); 
    visible = true;
  }
});