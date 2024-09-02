- its important to know about basic dom manipulation 
- its important to know the placement of the script tag in the html file (script tag's sequence matters)
-> when i placed the script tag above the cdn links . the browser was unable to identify the react keyword 
-> When I placed the script tag(which links the js file ) below the cdn links it was able to identify the React keyword 

------------------------------------------------------------
Important Takeaways about the session 
- ReactDOM responsible for creating the root 
- React Elements are normal JS objects 
- root.render() -> takes React Object/React element(js object) and converts it into HTML element(browser understandable) & render it inside root element

