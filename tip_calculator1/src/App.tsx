import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Tip and Total Pay Calculator
        </h1>
      </header>

      <main className=" max-w-7xl py-20 mx-auto grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>

          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  );
}

export default App;
