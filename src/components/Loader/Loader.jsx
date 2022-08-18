import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
   display: "block",
   margin: "0 auto",
   borderColor: "bisque",
 };

export const LoaderComponent = () => {

  

  let [loading] = useState(true);
  let [color] = useState("bisque");

  return (
    <div>
   <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
   
  </div>
  );   
};