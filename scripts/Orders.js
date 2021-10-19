import { getOrders, getSizes, getStyles, getMetals, getOptions } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()
const options = getOptions()


const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(metal => metal.id === order.metalId)
    const foundStyle = styles.find(style => style.id === order.styleId)
    const foundSize = sizes.find(size => size.id === order.sizeId)
    const foundOption = options.find(option => option.id === order.optionId)

    const totalCost = () => {
        const totalOfBase = foundMetal.price + foundStyle.price + foundSize.price
        if(foundOption.id === 1){
            return totalOfBase
        } else if (foundOption.id === 2){
            return totalOfBase * 2
        } else if (foundOption.id === 3){
            return totalOfBase * 4
        }
    }

    const costString = totalCost().toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString} and was placed on ${order.timestamp}
    </li>`

}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

