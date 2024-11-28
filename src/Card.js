import { useContext } from "react";
import { cardContext } from "./context";
//Refactor this to use the useContext hook
export const Card = () => {
  const value = useContext(cardContext);
  console.log(value);

  return (
    
    // <cardContext.Consumer>
    //   {(value) => {
    //     return (
    //       <div className="card" style={{ backgroundColor: value.color }}>
    //         <h3>{value.text}</h3>
    //       </div>
    //     );
    //   }}
    // </cardContext.Consumer>
    <div className="card" style={{ backgroundColor: value.color }}>
      <h3>{value.text}</h3>
    </div>
  );
};
