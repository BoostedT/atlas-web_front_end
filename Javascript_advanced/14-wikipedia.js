function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}
// queryWikipedia function
function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  req.open("GET", url, true);

  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      if (req.status === 200) {
        const data = JSON.parse(req.responseText);
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;

        callback(extract);
      }
    };

    req.send();
  }
}
queryWikipedia(createElement);
