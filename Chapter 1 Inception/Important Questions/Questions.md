Chapter 01 - Inception
Q: What is Emmet?
A: Emmet is a tool that allows you to type shortcuts that autocompletes into a full pieces of code . 

Q: Does Browser understands JS code ? 
A: Browser has JS engine that only understands JS . Browser doesnot understands React code .

Q: What is crossorigin in script tag?-> Not important & Need to understand it completely !
A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

Syntax
<script crossorigin="anonymous|use-credentials">

Q: Difference between a Library and Framework?
A: The Key Difference: Inversion of Control
A concept called inversion of control is the technical distinction between libraries and frameworks.

Libraries: When using a library, you, the developer, are in charge. You call upon the library's functions at specific points in your code to achieve the desired outcome.
Frameworks: In contrast, frameworks take control. They define the overall flow of the application and provide designated areas where you can insert your custom code. The framework then calls your code at appropriate moments within its execution cycle.

Q: What is CDN? Why do we use it?
A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

Q: Why is React known as React?
A: React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.




Q: What is difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

Q: What is difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

Syntax
<script src="demo_async.js" async></script>
Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

Syntax
<script src="demo_defer.js" defer></script>
Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

<script type="module" src="main.js"></script> and place the tag inside <head>
 <script defer nomodule> can be used as a legacy fallback.
As the name suggests, it allows you to import modules, which makes it easier to organize your code. Enable strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them. Execute your code only after the DOM has initialized, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events. Prevent top level variables from implicitly polluting the global namespace. Allow you to use top-level await in supported engines. Load and parse your code asynchronously, which improves load performance.

Namaste-React/Chapter 01 - Inception/Theory/Session1-Theory.md at main ·