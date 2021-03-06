import {state} from "./database.js"

const database = state()
const newCustomEvent = new CustomEvent("stateChanged")

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOptions = () => {
    return database.jewelryOptions.map(option => ({...option}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const getOrdersBuilder = () => {
    return {...database.orderBuilder}
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    document.dispatchEvent(newCustomEvent)   
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    document.dispatchEvent(newCustomEvent)    
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    document.dispatchEvent(newCustomEvent)   
}

export const setOption = (id) => {
    database.orderBuilder.optionId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    if (lastIndex === -1){
        newOrder.id = 1
    } else {
        newOrder.id = database.customOrders[lastIndex].id + 1
    }

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(newCustomEvent)
}
