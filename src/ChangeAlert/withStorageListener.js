import React from "react";

function withStorageListener(wrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en todos_v1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };
    return <wrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
