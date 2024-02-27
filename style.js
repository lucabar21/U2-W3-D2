/*
1. Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome.
A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage,
uno rimuoverà il valore precedentemente salvato (se presente).
Mostra sopra l’input field il valore precedentemente salvato, se presente. */
const nameKey = "names-memory";

const userText = document.getElementById("text-field");
const saveButton = document.getElementById("saveBtn");
const removeButton = document.getElementById("deleteBtn");
const ulList = document.getElementById("text-saved");

const addLi = function () {
  let newLi = document.createElement("li");
  const savedName = localStorage.getItem(nameKey);
  newLi.innerText = "Nome: " + savedName;
  ulList.appendChild(newLi);
};

const saveElement = function () {
  const singleText = userText.value;
  localStorage.setItem(nameKey, singleText);
  userText.value = "";
  addLi();
};

const deleteElement = function () {
  localStorage.removeItem(nameKey);
  ulList.remove();
};

saveButton.addEventListener("click", saveElement);
removeButton.addEventListener("click", deleteElement);

/*2. Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage.
Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia.
Il valore del contatore deve aggiornarsi ad ogni secondo. */

let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

const sessionTimer = function () {
  i = i + 1;
  document.getElementById("timer").innerText = "La sessione dura: " + i;
  sessionStorage.setItem("count", i);
};

setInterval(sessionTimer, 1000);
