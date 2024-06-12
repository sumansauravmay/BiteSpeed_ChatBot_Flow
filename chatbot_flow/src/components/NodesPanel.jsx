import React, { useState } from "react";
import NodeText from "./NodeText";
import { Button, Textarea, Text } from '@chakra-ui/react';

export default ({ value, handleChange, handleClick }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      {/* Setting panel */}
      <Text fontSize='2xl' style={{ textAlign: "center" }}>Message</Text>
      <hr />
      <div style={{ fontSize: "15px" }}>Text</div>
      <Textarea style={{borderColor:"black"}} onChange={handleChange}>
        {value}
      </Textarea>
      <div style={{ textAlign: "center" }}>
        <Button
        mt={5} color={'white'}
        background={'blue'}
        _hover={{
          bg: 'blue.500',
        }}
          onClick={handleClick}
        >
          Update
        </Button>
      </div>

      {/* NodeText */}
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Test Message 1")}
        draggable
      >
        <NodeText message="Test Message 1" />
      </div>

      <div
        className="dndnode2"
        onDragStart={(event) => onDragStart(event, "Test Message 2")}
        draggable
      >
        <NodeText message="Test Message 2" />
      </div>

    </aside>
  );
};
