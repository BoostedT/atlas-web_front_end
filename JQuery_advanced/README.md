##📁 JQuery_advanced — Advanced Jquery tasks
This project includes a series of HTML files that progressively demonstrate and practice core jQuery concepts including DOM manipulation, AJAX, and working with JSON APIs.

##📄 Files Overview
File	Description
0-index.html	Verifies jQuery is loaded correctly using a simple if (window.jQuery) alert.
1-index.html	Dynamically creates and appends a <p> element using jQuery.
2-index.html	Appends a family tree table by injecting raw HTML with .append().
3-index.html	Builds the same family tree table using jQuery DOM element creation ($("<tag>")).
4-index.html	Replaces the <tbody> of the table with new data using .html().
5-index.html	Adds new members to the table with a delete (x) button. Uses .append(), .click(), and .remove().
6-index.html	Adds a form to insert new table rows either before or after using .prepend() and .append().
10-index.html	Uses $.get() to fetch post data from a local json-server and appends it to the page.
11-index.html	Adds a form to submit new posts using $.post() and updates the page dynamically.
12-index.html	Fixes POST issues using $.ajax() with Content-Type: application/json.
13-index.html	Adds a (delete) button that sends a DELETE request to remove posts from the page and server using $.ajax() and .remove().


##💻 Requirements
jQuery (loaded via CDN)

json-server for tasks 10–13
Start it with:

bash
Copy
Edit
npx json-server --watch db.json

* [Tyler Whitchurch](https://github.com/boostedt)