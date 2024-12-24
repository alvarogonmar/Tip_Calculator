import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);

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
        </div>
        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  );
}

export default App;
