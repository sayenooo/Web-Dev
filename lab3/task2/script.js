const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

function createTodoItem(text) {
  // <li class="item">
  const li = document.createElement("li");
  li.className = "item";

  // left container
  const left = document.createElement("div");
  left.className = "left";

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked); // dynamic styling
  });

  // task text
  const span = document.createElement("span");
  span.className = "task";
  span.textContent = text;

  // delete button
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "delete-btn";
  delBtn.setAttribute("aria-label", "Delete task");
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    list.removeChild(li); // DOM remove
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
  list.appendChild(item); // DOM append

  input.value = "";
  input.focus();
});
