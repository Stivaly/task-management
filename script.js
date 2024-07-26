let contadorTareas = 0;

function createCard(containerId, title, content, username) {
    console.log(containerId)
    contadorTareas++;
    const cardId = `card-${contadorTareas}`;
    const cardContentId = `card-content-${contadorTareas}`;

    var card = `
        <div class="card" id="${cardId}" data-column="${containerId}">
            <div class="card-header">
                ${title}
                <a class="card-link" title="Ver detalles" data-bs-toggle="collapse" href="#${cardContentId}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </span>
                </a>
                    
                <span class="float-end ms-5">
                    <button class="btn btn-success next-column-btn" title="Completar etapa" style="width:25px !important; height:25px !important; padding: 0% !important;" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 22">
                            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </button>
                    <button class="btn btn-danger delete-task-btn" title="Eliminar tarea" style="width:25px !important; height:25px !important; padding: 0% !important;" type="button" data-card-id="${cardId}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" class="bi bi-trash3">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </button>
                    <button class="btn btn-warning edit-task-btn" title="Editar tarea" style="width:25px !important; height:25px !important; padding: 0% !important;" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-pen" viewBox="0 0 16 24">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                    </button>
                </span>
            </div>
            <div class="collapse card-link" id="${cardContentId}">
                <div class="card-body">
                    <blockquote class="blockquote mb-1">
                        <p>${content}</p>
                        <br>
                        <div class="blockquote-footer">Usuario: <cite title="Source Title">${username}</cite></div>
                    </blockquote>
                </div>
            </div>
        </div>
    `;

    $('#' + containerId).append(card);
    
    $('#card-content-' + cardId).collapse('hide');
    $('#' + containerId + ' .card-header').last().on('click', function() {
        $('#card-content-' + cardContentId).collapse('toggle');
    });

}


$(document).ready(function() {   


    $(".edit-task-btn").tooltip();
    $(".next-column-btn").tooltip();
    $(".delete-task-btn").tooltip();
    $(".card-link").tooltip();

    $(".card").draggable({
   });

    $(".column").droppable({
        accept: ".card",
        drop: function(event, ui) {
            var droppedCard = ui.helper;
            var newColumn = $(this);
            var newColumnId = newColumn.attr('id');
            droppedCard.attr('data-column', newColumnId);
            newColumn.append(droppedCard);
        }
    });

    $('#add-task-btn').click(function() {
        $('#taskModal').modal('show');
    });

    $('#taskForm').submit(function(event) {
        event.preventDefault();
        
        const taskName = $('#taskName').val();
        const taskSummary = $('#taskSummary').val();
        const userName = $('#userName').val();
        const newTask = createCard('por-hacer', taskName, taskSummary, userName);
        $('.task-to-do').append(newTask);
        $('#taskModal').modal('hide');
        $('#taskForm')[0].reset();
        
    });

    $('#saveTaskChanges').click(function() {
        const taskId = $('#editTaskId').val();
        const taskName = $('#editTaskName').val();
        const taskSummary = $('#editTaskSummary').val();
        const userName = $('#editUserName').val();
        const taskCard = $('#' + taskId);

        taskCard.find('.card-header').contents().first().replaceWith(taskName + ' ');
        taskCard.find('.blockquote p').text(taskSummary);
        taskCard.find('.blockquote-footer cite').text(userName);

        $('#editTaskModal').modal('hide');
    });

    $(document).on('click', '.edit-task-btn', function() {
        const taskCard = $(this).closest('.card');
        const taskId = taskCard.attr('id');
        const taskName = taskCard.find('.card-header').contents().first().text().trim();
        const taskSummary = taskCard.find('.blockquote p').text().trim();
        const userName = taskCard.find('.blockquote-footer cite').text().trim();

        $('#editTaskId').val(taskId);
        $('#editTaskName').val(taskName);
        $('#editTaskSummary').val(taskSummary);
        $('#editUserName').val(userName);
        $('#editTaskModal').modal('show');
    });

    $(document).on('click', '.delete-task-btn', function() {
        const cardId = $(this).data('card-id');
        $(`#${cardId}`).remove();
        contadorTareas--;
    });

    $(document).on('click', '.next-column-btn', function() {
        const taskCard = $(this).closest('.card');
        const cardId = taskCard.attr('id');
        console.log(cardId);
        const currentColumn = $(`#${cardId}`).attr('data-column');
        console.log(currentColumn);
        let nextColumn;
    
        if (currentColumn === 'por-hacer') {
            nextColumn = 'haciendo';
        } else if (currentColumn === 'haciendo') {
            nextColumn = 'hecho';
            taskCard.find('.next-column-btn').fadeOut('slow');
            taskCard.find('.edit-task-btn').fadeOut('slow');
        } else if (currentColumn === 'hecho') {
            taskCard.find('.next-column-btn').fadeOut('slow');
            taskCard.find('.edit-task-btn').fadeOut('slow');
        }

        $(`#${cardId}`).attr('data-column', nextColumn);
        $('#' + nextColumn).append(taskCard);
        
    });

    /* $(document).on('mouseover', '.next-column-btn', function() {
        const taskCard = $(this).closest('.card');
        taskCard.find('.next-column-btn').dialog();
        $(this).css('background-color', 'yellow'); 

    });  */

});
