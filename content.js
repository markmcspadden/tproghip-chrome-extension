function togglePRs() {
  var actualCode = "$('.pull-requests:first').is(':visible') ? $('.pull-requests').parents('.issue').hide() : $('.pull-requests').parents('.issue').show();";
  injectCode(actualCode);
}

function injectCode(code) {
  var script = document.createElement('script');
  script.appendChild(document.createTextNode(code));
  (document.head || document.documentElement).appendChild(script);
  script.parentNode.removeChild(script);
}

togglePRs();