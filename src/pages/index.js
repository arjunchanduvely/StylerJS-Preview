import React, { useState } from "react";
import "../styles/index.scss";
import { InputTheme1, InputTheme2, InputTheme3, InputTheme4 } from "@/components/StylerJS/InputThemes/InputThemes";

const index=function(){


  // const [needs, set_needs] = useState("test");

  return(
    <div className="index_page_container">
      <form action="#" className="input_preview_container">
        <InputTheme1
        label="Input Theme 1"
        attrs={{
          name:"Fullname",
          type:"text",
          // value:this.state.Fullname,
          // onChange:this.form_change,
          // onInvalid:(e)=>{e.target.setCustomValidity("Enter proper fullname")},
          pattern:"^[A-Za-z ]+$",
          required:true,
          autoComplete:"off"
        }}
        />

        <InputTheme2
        label="Input Theme 2"
        
        />

        <InputTheme3
        label="Input Theme 3"
        errorMessage="Invalid input"
        attrs={{
          type:"number"
        }}
        />

        <InputTheme4
        label="InputTheme4"
        attrs={{
          // value:"alsdkjf"
        }}
        />
      </form>
    </div>
  )
}
export default index;