import React, { useState } from "react";


export default () => {
    const [value, setValue]=useState("");



  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      {/* Save Button */}
        <div style={{textAlign:"center"}}>
        <button
        style={{padding:"5px", width:"50%", fontSize:"16px", borderRadius:"4px", color:"blue", borderColor:"blue"}}
        >Save Button</button>
        </div>
        
        <hr/>
        <h1 style={{textAlign:"center"}}>Message</h1>
        <hr/>

        {/* Setting panel */}
      <div className="description">Text</div> 
      <textarea
       className="inputtag"
       onChange={(e)=>setValue(e.target.value)}
       onDragStart={(event) => onDragStart(event, value)}
       draggable
      >{value}</textarea> 
    </aside>
  );
};