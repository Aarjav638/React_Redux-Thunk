import React from "react";
import { iceCreamOrdered, iceCreamRestocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface IceCreamState {
  numOfIceCreams: number;
}

export const IceCreamView: React.FC = () => {
  const numOfIceCream = useAppSelector(
    (state: { iceCream: IceCreamState }) => state.iceCream.numOfIceCreams
  );
  const [restock, setRestock] = React.useState(1);
  const dispatch = useAppDispatch();
  const handleBuyIceCream = () => {
    if (numOfIceCream > 0) {
      dispatch(iceCreamOrdered());
    } else {
      alert("No Ice Creams left,Please Restock");
    }
  };

  const handleRestockIceCream = () => {
    dispatch(iceCreamRestocked(restock));
    setRestock(1);
  };

  return (
    <div className="flex flex-col items-center justify-center my-10 ">
      <h2 className="text-xl sm:text-2xl font-semibold my-2">
        Number of Ice Creams - {numOfIceCream}
      </h2>
      <button
        className="p-2 sm:p-4 bg-slate-900 text-white rounded-md my-2"
        onClick={handleBuyIceCream}
      >
        Buy Ice Cream
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
          onClick={handleRestockIceCream}
        >
          Restock Ice Creams
        </button>
      </div>
    </div>
  );
};
