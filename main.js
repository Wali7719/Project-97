document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var task = document.getElementById('taskInput').value;
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(task));

    var removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener('click', function() {
        this.parentNode.remove();
    });

    li.appendChild(removeButton);

    document.getElementById('taskList').appendChild(li);

    document.getElementById('taskInput').value = "";
});
