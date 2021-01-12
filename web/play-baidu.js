// chrome.tab.query(
//   {
//     active: true,
//     currentWindow: true,
//   },
//   function (tabs) {
//     chrome.executeScript(tabs[0].id, {
//       code: "document.style.color = 'red'",
//     });
//   }
// );

document.getElementById("su").value = "查查查";

console.log("666dd");

window.ranckTool = {
  hahaha() {
    console.log("ahahha");
  },
};

let index = 1;

setInterval(() => {
  
  document.getElementById("su").value = `查查查${index++}`;
}, 5000);
