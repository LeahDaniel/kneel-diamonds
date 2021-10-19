import { getOptions, setOption} from "./dataAccess.js"

const options = getOptions()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "option") {
            setOption(parseInt(event.target.value))
        }
    }
)

export const JewelryOptions = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = options.map(option => {
        return `<li>
        <input type="radio" name="option" value="${option.id}" /> ${option.option}
    </li>`
    }
    )


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}
