import React from "react";
import { cakeOrdered, cakeRestocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface CakeState {
  numOfCakes: number;
}

export const CakeView: React.FC = () => {
  const numOfCakes = useAppSelector(
    (state: { cake: CakeState }) => state.cake.numOfCakes
  );
  const [restock, setRestock] = React.useState(1);
  const dispatch = useAppDispatch();
  const handleBuyCake = () => {
    if (numOfCakes > 0) {
      dispatch(cakeOrdered());
    } else {
      alert("No Cakes left,Please Restock");
    }
  };

  const handleCakeRestock = () => {
    dispatch(cakeRestocked(restock));
    setRestock(1);
  };
  return (
    <div className="flex flex-col items-center justify-center my-10 ">
      <h2 className=" text-xl sm:text-2xl font-semibold my-2">
        Number of Cakes - {numOfCakes}
      </h2>
      <button
        className="p-2 sm:p-4 bg-slate-900 text-white rounded-md my-2"
        onClick={handleBuyCake}
      >
        Buy Cake
      </button>
      <br />

      <div>
        <input
          className="mx-2 text-xl p-2 sm:p-4 border-slate-500 border-2 rounded-md text-center  "
          type="number"
          placeholder="Enter the number of Ice Creams to restock"
          value={restock}
          min={1}
          onChange={(e) => setRestock(Number(e.target.value))}
        />
        <button
          className="p-2 sm:p-4 bg-slate-900 text-white rounded-md my-2"
          onClick={handleCakeRestock}
        >
          Restock Cakes
        </button>
      </div>
    </div>
  );
};
