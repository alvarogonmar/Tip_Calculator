import { MenuItems, OrderItem } from "../types"

export type OrderActions = 
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

export const orderReducer = (
        state: OrderState = initialState,
        action: OrderActions
    ) => {
        
        if(action.type === "add-item"){

            return {
                ...state
            }
        }

        if(action.type === "remove-item"){

            return {
                ...state
            }
        }

        if(action.type === "place-order"){

            return {
                ...state
            }
        }

        if(action.type === "add-tip"){

            return {
                ...state
            }
        }

    return state
}