var textoRecebido = document.getElementById("entItem");

function entradaTarefa(){

   

    if (textoRecebido == ""){
        alert("POR FAVOR, DIGITE UMA TAREFA")
        document.getElementById("entItem").focus();
    }else{


    var lista  = document.getElementById("seq").innerHTML;
    lista = lista +"<li > <input type=checkbox onchange=toggleTask(this)>" + textoRecebido.value + "</li>";
    document.getElementById("seq").innerHTML = lista;
    document.getElementById("entItem").value = "";
    document.getElementById("entItem").focus();

    }
}  

function toggleTask(checkbox) {
      const listItem = checkbox.parentNode;
      listItem.classList.toggle("completed");
    }

    function deleteCompletedTasks() {
      const taskList = document.getElementById("seq");
      const completedItems = taskList.getElementsByClassName("completed");
      while (completedItems.length > 0) {
        completedItems[0].remove();
      }
    }