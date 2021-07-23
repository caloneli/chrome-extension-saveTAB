let myLeads = []
let intputBtn = document.getElementById("input-btn")
let clearBtn = document.getElementById("clear-btn")
const inputEl = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("list")
//const - ne moze da se reassignuje

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Link:"))



tabBtn.addEventListener("click", function () {
    
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
    localStorage.setItem("Link:", JSON.stringify(myLeads))
    render(myLeads)

    })

    /*myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
*/
})


intputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    localStorage.setItem("Link:", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

clearBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//null - developer kaze nema
//undefined - js kaze nema

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" //MOZE I OVO!!!
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}
        </a>
        </li>`

        /*const li = document.createElement("li")
          li.textContent = myLeads[i]
          ulEl.append(li)
    */
    }
    ulEl.innerHTML = listItems
}
