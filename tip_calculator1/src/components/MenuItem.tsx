import type { MenuItems } from "../types";
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItems;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className=" border-2 border-gray-400 w-full hover:bg-gray-300 p-3 flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
