import { getSizes, setSize } from "./dataAccess.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            const mainContainer = document.querySelector("#container")
            const renderAllHTML = () => {
                mainContainer.innerHTML = KneelDiamonds()
            }
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML() 
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

