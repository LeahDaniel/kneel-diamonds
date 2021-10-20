import { getMetals, setMetal } from "./dataAccess.js"
import { getOrdersBuilder } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)


export const Metals = () => {
    const orderBuilder = getOrdersBuilder()
    let html = "<ul>"

    const listItems = metals.map(metal => {
        if (metal.id === orderBuilder.metalId) {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    })
    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

