// Manipulate the DOM using Javascript

// const newElem = document.createElement('h2');
// newElem.innerText = 'Hello'
// const root = document.getElementsByClassName('root');
// root[0].appendChild(newElem)
// console.log(root[0].innerHTML) // prints the innerHTML content of the element 
// console.log(root[0].innerText) // prints the innerText content of the element excluding the HTML Tags

// Manipulate the nested React Elements 
const heading1 = React.createElement('h1' , {} , "Heading 1")
const heading2 = React.createElement('h1', {} , "heading 2");
const container = React.createElement('div' , {} , [heading1 , heading2])
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(container)

console.log(heading1)
console.log(heading2)
