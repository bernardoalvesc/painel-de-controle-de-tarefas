document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskPriority = document.getElementById('taskPriority').value;

    // Criar um novo item de tarefa
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', taskPriority);

    taskItem.innerHTML = `
        <div>
            <h3>${taskTitle}</h3>
            <p>${taskDescription}</p>
        </div>
        <div class="task-actions">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    // Adicionar a tarefa à lista
    document.getElementById('taskList').appendChild(taskItem);

    // Adicionar funcionalidade aos botões de concluir e deletar
    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });

    // Limpar o formulário
    document.getElementById('taskForm').reset();
});
