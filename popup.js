// function onAnchorClick(event) {
//   chrome.tabs.create({ url: event.srcElement.href });
//   return false;
// }

// // Given an array of URLs, build a DOM list of these URLs in the
// // browser action popup.
// function buildPopupDom(mostVisitedURLs) {
//   var popupDiv = document.getElementById("mostVisited_div");
//   var ol = popupDiv.appendChild(document.createElement("ol"));

//   for (var i = 0; i < mostVisitedURLs.length; i++) {
//     var li = ol.appendChild(document.createElement("li"));
//     var a = li.appendChild(document.createElement("a"));
//     a.href = mostVisitedURLs[i].url;
//     a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
//     a.addEventListener("click", onAnchorClick);
//   }
// }

// console.log(chrome, 666);

// function buildPopupDom (mostVisitedURLs) {
var popupDiv = document.getElementById("mostVisited_div");
popupDiv.innerHTML = JSON.stringify(11);
// }

// chrome.topSites.get(buildPopupDom);
