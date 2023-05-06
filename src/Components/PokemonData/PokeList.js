import React from "react";
import PokeCard from "./PokeCard";
// import { v4 as uuidv4 } from "uuid";

const PokeList = (props) => {
  return (
    <React.Fragment key={props.data.id}>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 
      gap-1 sm:gap-1.5 md:gap-2 lg:gap-3.5 mb-3 md:my-10 duration-300"
      >
        {props.data.map((item) => {
          return (
            <PokeCard
              data={item}
              modalEnabler={props.onModalEnabler}
              transferData={props.processedTransferData}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PokeList;
