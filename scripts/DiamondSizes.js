import { getSizes, setSize } from "./dataAccess.js"
import { getOrdersBuilder } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    const orderBuilder = getOrdersBuilder()
    let html = "<ul>"

    const listItems = sizes.map(size => {
        if (size.id === orderBuilder.sizeId) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
        </li>`
        } else {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

