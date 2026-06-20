
const input = document.getElementById("taskInput");
        const submitBtn = document.getElementById("submitBtn");
        const taskList = document.getElementById("taskList");

        function addTask() {
            const value = input.value.trim();
            if (value === "") return;

            // Create new task row
            const row = document.createElement("div");
            row.className = "task-row";

            // Task text
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
            // Delete button
            const delBtn = document.createElement("button");
            delBtn.className = "del-btn";
            delBtn.textContent = "×";

          

            // Delete functionality
            delBtn.addEventListener("click", function() {
                row.remove();
            });

            // Add elements to row
            row.prepend(text);
            row.prepend(com);
            row.prepend(delBtn);
            // Add row to task list
            taskList.prepend(row);

            // Clear input
            input.value = "";
            input.focus();
        }

        // Button click
        submitBtn.addEventListener("click", addTask);

        // Enter key
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