import { getMetals, setMetal } from "./dataAccess.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            const mainContainer = document.querySelector("#container")
            const renderAllHTML = () => {
                mainContainer.innerHTML = KneelDiamonds()
            }
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML() 
        }
    }
)


export const Metals = () => {
    let html = "<ul>"

    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

