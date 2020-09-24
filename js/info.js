fetch("../static/json/checklist.json")
.then(res => res.json())
.then(checklist => {
    let categories = Object.keys(checklist);
    let container = document.querySelector("#checklist");
    categories.forEach(category => {
        let col_div = document.createElement("div");
        col_div.classList.add("col-6");
        col_div.classList.add("col-md-4");
        col_div.classList.add("pb-4");
        let elements = checklist[category];
        let category_title = document.createElement("p");
        category_title.classList.add("category-title");
        category_title.innerHTML = category;
        col_div.appendChild(category_title);
        elements.forEach(ele => {
            let label = document.createElement("label");
            label.innerHTML = ele;
            label.setAttribute("class","checklist-label");
            col_div.appendChild(label);
            container.appendChild(col_div);
        })
    });
})
