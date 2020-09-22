fetch("../static/checklist.json")
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
            let checklistItem = document.createElement("div");
            checklistItem.classList.add("form-group");
            checklistItem.classList.add("checklist-item");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.classList.add("form-check-input");
            checkbox.setAttribute("id", ele);
            let label = document.createElement("label");
            label.innerHTML = ele;
            label.classList.add("form-check-label");
            label.setAttribute("for", ele);
            checklistItem.appendChild(checkbox);
            checklistItem.appendChild(label);
            col_div.appendChild(checklistItem);
            container.appendChild(col_div);
        })
    });
})
