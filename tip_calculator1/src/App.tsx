import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem } = useOrder();

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Tip and Total Pay Calculator
        </h1>
      </header>

      <main className=" max-w-7xl py-20 mx-auto grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  );
}

export default App;
