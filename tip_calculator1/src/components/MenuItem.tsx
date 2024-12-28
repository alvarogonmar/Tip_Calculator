import type { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className=" border-2 border-gray-400 w-full hover:bg-gray-300 p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
