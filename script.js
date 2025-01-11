document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskPriority = document.getElementById('taskPriority').value;

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

    document.getElementById('taskList').appendChild(taskItem);

    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });

    document.getElementById('taskForm').reset();
});
