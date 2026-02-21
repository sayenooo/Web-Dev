const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");

function updateStats() {
  const items = list.querySelectorAll(".item");
  const completed = list.querySelectorAll(".item.done");

  totalCount.textContent = items.length;
  completedCount.textContent = completed.length;
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const left = document.createElement("div");
  left.className = "left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
    updateStats();
  });

  const span = document.createElement("span");
  span.className = "task";
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "delete-btn";
  delBtn.setAttribute("aria-label", "Delete task");
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
    updateStats();
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(delBtn);

  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  list.appendChild(item);

  input.value = "";
  input.focus();

  updateStats();
});
