import { MenuItems } from "../types"

export type orderActions = 
    {type : "add-item", payload: {item: MenuItems}}