# 🍪 Cookies Atlas

This project is a collection of small web applications that demonstrate how to use cookies, localStorage, and sessionStorage in the browser using only vanilla JavaScript. It is served using Webpack Dev Server.

## 📁 Project Files

- 0-index.html: Set and display cookies
- 1-index.html: Set cookies with a 10-day expiration
- 2-index.html: Add getCookie() and display formatted cookie values
- 3-index.html: Show welcome message if logged in, with logout support
- 4-index.html: Same as 3, but uses js-cookie library (via CDN)
- 5-index.html: Simple cart using localStorage
- 6-index.html: Same cart but using sessionStorage (per-tab storage)
- 7-index.html: Advanced cart system with quantity tracking, item removal, and clear cart (sessionStorage only)

## 🚀 Running the Project

1. Install dependencies:

   npm install webpack-dev-server --save-dev
   npm i -D webpack
   npm i -D webpack-cli

2. Start Webpack Dev Server:

   npx webpack-dev-server  

3. Visit in your browser:

   http://localhost:8080/

You can test any file like:

- http://localhost:8080/0-index.html
- http://localhost:8080/7-index.html

## ✅ Features

- Cookie-based login and welcome messages
- sessionStorage/localStorage-based cart logic
- Quantity and item removal
- Fully dynamic DOM manipulation (no hardcoded HTML)
- Uses js-cookie only in 4-index.html
