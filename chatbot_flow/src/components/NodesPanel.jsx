import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleSavebtn=()=>{

    let node=JSON.parse(localStorage.getItem("node"));
    let edge=JSON.parse(localStorage.getItem("edge"));
    console.log("nodelength", node);
    console.log("edgelength", edge);

    if((node-1)===edge){
      alert("saved")
    }else{
      alert("sth went wrong")
    }
   
  }

  return (
    <aside>
      {/* Save Button */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "5px",
            width: "50%",
            fontSize: "16px",
            borderRadius: "4px",
            color: "blue",
            borderColor: "blue",
            cursor: "pointer",
          }}
          onClick={handleSavebtn}
        >
          Save Button
        </button>
      </div>

      <hr />
      <h1 style={{ textAlign: "center" }}>Message</h1>
      <hr />

      {/* Setting panel */}
      <div style={{ fontSize: "15px" }}>Text</div>
      <textarea
        className="inputtag"
        onChange={(e) => setValue(e.target.value)}
        onDragStart={(event) => onDragStart(event, value)}
        draggable
      >
        {value}
      </textarea>
    </aside>
  );
};
