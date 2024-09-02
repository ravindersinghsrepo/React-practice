import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./Header";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const heading1 = React.createElement('h1' , {id : "heading1"} , "This is heading tag 1");
const heading2 = React.createElement('h2' , {id : 'heading2'} , "This is heading 2");
const heading3 = React.createElement('h2' , {id : 'heading3'} , "This is heading 3");


const divElem = React.createElement('div' , {className: 'title'} , [heading1,heading2 , heading3]);


// Create the same element using JSX
const header = (
    <div className="title">
        <h1 key='h1'>This is heading 1</h1>
        <h2 key='h2'>This is heading 2</h2>
        <h3 key='h3'>This is heading 3</h3>
    </div>
)
// Create a functional component of the same with JSX

const FunctionalHeader = ()=>{ // first letter should be capital
    return(
        <div className="title">
        <h1 key='h1'>This is heading 1</h1>
        <h2 key='h2'>This is heading 2</h2>
        <h3 key='h3'>This is heading 3</h3> 
        </div>
    )
}

// composition of components --------------------------------
// Adding one component inside other 
const Comp1 = () => <>This is component 1</>

const Comp2 = () => {
    return(
        <div>
            We are inside component 1
            <br/>
            <Comp1/>
        </div>
    )
}

const rootELem = ReactDOM.createRoot(document.getElementById('root'));
rootELem.render(<Header/>)

