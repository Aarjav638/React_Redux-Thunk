import "./App.css";
import { CakeView } from "./features/cake/cakeView";
import { IceCreamView } from "./features/icecream/iceCreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <h1 className=" text-3xl  font-bold my-4 sm:text-6xl">
        React Redux Thunk Demo
      </h1>
      <hr />
      <span className="font-semibold text-sm sm:text-xl my-4 ">
        This is a simple demo for React Redux Thunk. It demonstrates how to use
        Redux Thunk in a React application with a simple example.
      </span>

      <br />

      <h1 className=" text-2xl offer font-semibold my-2 ">
        <span className=" text-red-500 ">Offer:</span> Buy 1 Cake and Get a Ice
        Cream Free
      </h1>

      <hr />
      <h2 className="text-4xl font-semibold my-5 ">Features</h2>

      <hr />
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
