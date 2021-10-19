import { getStyles, setStyle } from "./dataAccess.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            const mainContainer = document.querySelector("#container")
            const renderAllHTML = () => {
                mainContainer.innerHTML = KneelDiamonds()
            }
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML() 
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(styleObj => {
        return `<li>
        <input type="radio" name="style" value="${styleObj.id}" /> ${styleObj.style}
    </li>`
    }
    )


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

