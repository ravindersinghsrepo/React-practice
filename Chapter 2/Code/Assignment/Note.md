- npm init used to initialize a project and create package.json file 
- package.json file is a configuration file , it keeps the record of package we use in our project 
---------------------------------------------------
Important 
aft  d react-dom and simply used 

I got
The error message "Uncaught SyntaxError: Cannot use import statement outside a module (at App.js:9:1)" means that you are trying to use the import statement in a script that is not a module.
To fix this error, you need to make sure that your script is a module. You can do this by adding the type="module" attribute to the script tag.
For example:
<!-- <script type="module" src="App.js"></script> -->


In JavaScript, you can only use import and export statements inside modules, not regular scripts. To use import statements in a script, you need to treat the JavaScript file as a module. You can do this by:
Adding the type="module" attribute to the script tag for client-side code

-----------------------------------------------------
still after correcting the module mistake i got another error which was related to some paths , on further investigation i found out that i needed to install webpack/parcel or vite to run my application on a server 

for parcel installation i did 
npm install -D parcel
for starting the app at any entry point i did 
npx parcel index.html (index.html is here my entry point) 
npx parcel <entry-point> 
(this above statement command is for dev build only) 
