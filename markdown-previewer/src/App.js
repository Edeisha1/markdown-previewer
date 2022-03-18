/* eslint-disable react/no-danger-with-children */

import './App.css';
import React from "react";
import { marked} from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks:true
  })

//This ensures the system reads the processes <br> when you press enter in the editor

//When my markdown previewer first loads, the default text(initial state) in the #editor fiel contains markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
// When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element

const  initialState = ` # Go ahead and type something.

## This fun markdown previewer makes it easy. 

### View the instructions for this project at [freecodecamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  
- you can make lists 
 - convert code
  - make headers
- and even a secret diary in here! shhhh! 


  I love this. It's great, ain't it! \`<div></div>\`
  

  \`\`\`

 
    Tell your mom, 
    your sister 
    and your uncle!
  
  \`\`\`
  

  >"Time fly's when you're having fun"
  
  ![smiley face emoji](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/33/smiling-face-with-smiling-eyes_1f60a.png)
  
  **That's All for today folks!!**
`;
    

  class ControlInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: initialState
      };
      
  this.handleChange= this.handleChange.bind(this);
  
    }
   
  
  handleChange(event){
    this.setState({
    input: event.target.value
  });
  }

  
   
    render() {

    const {input} = this.state;     
    const rawMarkup = marked(input, { sanitize: true });   
      

      return (
        <div className='App'>
         <div className='App-header'>
         <div className='contianer1'>
         <div className="toolbar1"><i class="fa-solid fa-pen-to-square"></i> Editor</div>
  <textarea id ="editor" value = {this.state.input} onChange={this.handleChange}></textarea></div>
  <h1> Markdown Previewer </h1>
        <div className='contianer2'>
        <div className="toolbar2"><i class="fa-solid fa-square-poll-horizontal"></i> Preview Results</div>
        <div dangerouslySetInnerHTML={{ __html: rawMarkup }} id="preview" ></div></div>
        </div>
        </div>
      );
    }
  };
export default ControlInput;


//When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.
//dangerouslySetInnerHTML={{ __html: rawMarkup }} makes that adjusment from markedup text to html. ref:https://marked.js.org/ 