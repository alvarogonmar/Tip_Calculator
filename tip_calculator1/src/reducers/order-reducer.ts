import { MenuItems, OrderItem } from "../types"

export type orderActions = 
    {type : "add-item", payload: {item: MenuItems}} |
    {type : "remove-item", payload: {id: MenuItems["id"]}} |
    {type : "place-order"} |
    {type : "add-tip", payload: {value: number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
}
export const initialState: OrderState = {
    order: [],
    tip: 0
}