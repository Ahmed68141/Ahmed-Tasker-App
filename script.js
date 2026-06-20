
const input = document.getElementById("taskInput");
        const submitBtn = document.getElementById("submitBtn");
        const taskList = document.getElementById("taskList");

        function addTask() {
            const value = input.value.trim();
            if (value === "") return;

            const row = document.createElement("div");
            row.className = "task-row";

            const text = document.createElement("span");
            text.className = "task-text";
            text.textContent = value;

                 const com = document.createElement("button");
            com.className = "com";
            com.textContent = "✔";
                         com.style.color="grey";
           let completed = false;
              com.addEventListener("click", function() {
               completed = !completed;
                 if (completed) {
        com.style.backgroundColor = "green";
        com.style.color = "white";
        text.style.textDecoration = "line-through";
                text.style.color = "#dadada ";

    } else {
        com.style.backgroundColor = "transparent";
        com.style.color = "grey";
        text.style.textDecoration = "none";
    }  
            });
            const delBtn = document.createElement("button");
            delBtn.className = "del-btn";
            delBtn.textContent = "×";

          

            delBtn.addEventListener("click", function() {
                row.remove();
            });

       row.appendChild(text);
row.appendChild(com);
row.appendChild(delBtn);
            taskList.prepend(row);

            input.value = "";
            input.focus();
        }

        submitBtn.addEventListener("click", addTask);

        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                addTask();
            }
        });
        const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});