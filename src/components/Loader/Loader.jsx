import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
   display: "block",
   margin: "0 auto",
   borderColor: "red",
 };

export const LoaderComponent = () => {

  

  let [loading] = useState(true);
  let [color] = useState("#ffffff");

  return (
    <div>
   <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
   
  </div>
  );   
};