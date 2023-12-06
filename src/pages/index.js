import React, { useState } from "react";
import "../styles/index.scss";
import { InputTheme1, InputTheme2, InputTheme3, InputTheme4, InputTheme5 } from "@/components/StylerJS/InputThemes/InputThemes";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const index=function(){


  // const [needs, set_needs] = useState("test");

  return(
    <div className="index_page_container">
      <form action="#" className="input_preview_container">
        <div className="field_container">
          <InputTheme1
          label="Input Theme 1"
          errorMessage="Invalid input"
          attrs={{
            name:"Fullname",
            type:"text",
            // value:this.state.Fullname,
            // onChange:this.form_change,
            // onInvalid:(e)=>{e.target.setCustomValidity("Enter proper fullname")},
            type:"number",
          }}
          />
        </div>
        
        <pre>
          {/* <code className="language-javascript"> */}
          <code className="language-javascript line-numbers">
            {`
              <InputTheme1
              label="Input Theme 1"
              errorMessage="Invalid input"
              attrs={{
                name:"Fullname",
                type:"text",
                value:this.state.Fullname,
                onChange:this.form_change,
                onInvalid:(e)=>{e.target.setCustomValidity("Enter proper fullname")},
                type:"number",
              }}
              />
            `}
          </code>
        </pre>

        <InputTheme2
        label="Input Theme 2"
        
        />

        <InputTheme3
        label="Input Theme 3"
        // errorMessage="Invalid input"
        errorMessage="Invalid input"
        attrs={{
          type:"number"
        }}
        />

        <InputTheme4
        label="Input Theme 4"
        errorMessage="Invalid input"
        attrs={{
          type:"number"
        }}
        />

        <InputTheme5
        label="Input Theme 5"
        errorMessage="Invalid input"
        attrs={{
          type:"number"
        }}
        />
      </form>
    </div>
  )
}
export default index;