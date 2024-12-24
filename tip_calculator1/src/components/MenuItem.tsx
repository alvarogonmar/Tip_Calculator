import type { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
};
export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className=" border-2 border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
