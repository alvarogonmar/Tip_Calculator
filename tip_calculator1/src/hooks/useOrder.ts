import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItems) => {
        
        const newItem : OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    console.log(order)
    return{
        addItem
    }
}