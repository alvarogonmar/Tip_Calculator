import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import TipPercentageForm from "./components/TipPercentageForm";
import OrderTotals from "./components/OrderTotals";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <header className=" bg-neutral-700 py-5">
          <h1 className="text-center text-4xl font-black">
            Tip and Total Pay Calculator
          </h1>
        </header>

        <main className=" max-w-7xl py-20 mx-auto grid md:grid-cols-2">
          <div className="p-5">
            <h2 className=" text-4xl font-black">Menu</h2>
            <div className=" space-y-3 mt-10 bg-neutral-700">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} addItem={addItem} />
              ))}
            </div>
          </div>
          <div className=" border border-dashed bg-neutral-700 p-5 rounded-lg space-y-10">
            {order.length > 0 ? (
              <>
                <OrderContents order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} tip={tip} />
                <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
              </>
            ) : (
              <p className="text-center">Order Empty</p>
            )}
          </div>
        </main>

        <footer className="bg-neutral-700 py-5 text-center">
          <p className="text-sm mb-3">Made by: Alvaro Gonzalez</p>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/alvarogonmar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://linkedin.com/in/alvarogonmar0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
