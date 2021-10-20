import { getStyles, setStyle } from "./dataAccess.js"
import { getOrdersBuilder } from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    const orderBuilder = getOrdersBuilder()
    let html = "<ul>"

    const listItems = styles.map(style => {
        if (style.id === orderBuilder.styleId) {
            return `<li>
            <input type="radio" name="style" value="${style.id}" checked/> ${style.style}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        }
    })
    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

