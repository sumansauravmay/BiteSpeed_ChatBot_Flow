import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const Savebutton = () => {
    const toast = useToast()



  const handleSavebtn = () => {
    let node = JSON.parse(localStorage.getItem("node"));
    let edge = JSON.parse(localStorage.getItem("edge"));
    console.log("nodelength", node);
    console.log("edgelength", edge);

    if (node - 1 === edge) {
      toast({
        title: 'congratulations!',
        description: "flow saved.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position:"top"
      })
    } else {
      toast({
        title: 'Sorry!',
        description: "Can not save flow",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position:"top"
      })
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        background: "grey",
        height: "60px",
      }}
    >
      <Button
        style={{
          padding: "5px",
          height: "30px",
          marginRight: "80px",
          marginTop: "15px",
          fontSize: "16px",
          borderRadius: "4px",
          color: "blue",
          borderColor: "blue",
          cursor: "pointer",
        }}
        onClick={handleSavebtn}
      >
        Save Button
      </Button>
    </div>
  );
};

export default Savebutton;
