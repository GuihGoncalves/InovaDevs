document.getElementById('reservationForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const formData = {
        name: document.getElementById('name').value,
        userId: 1,
        productId: 1,
        peopleQtt: document.getElementById('peopleQtt').value,
        reservationDate: document.getElementById('reservationDate').value,
        reservationTime: document.getElementById('reservationTime').value,
        status: "Pendente",
        area: document.querySelector('input[name="area"]:checked').value
    };

    try {
        const response = await fetch('https://inovadevsapi.onrender.com/service/reservationService/createReservation.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        document.getElementById('reservationForm').reset();

        const result = await response.json();
        if (response.ok) {
            showNotification(result.message, 'success');
        } else {
            showNotification(result.message || 'Erro ao criar reserva.', 'error');
        }
    } catch (error) {
        showNotification('Erro de conexão com o servidor.', 'error');
    }
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Abrir o modal
document.getElementById('openModalBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão
    document.getElementById('reservationModal').style.display = 'flex';
    fetchReservations();
});

// Fechar o modal
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('reservationModal').style.display = 'none';
});

// Buscar reservas
async function fetchReservations() {
    try {
        const response = await fetch('https://inovadevsapi.onrender.com/service/reservationService/readReservation.php');
        const reservations = await response.json();

        const reservationList = document.getElementById('reservationList');
        reservationList.innerHTML = '';

        reservations.forEach(reservation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reservation.reservation_id}</td>
                <td>${reservation.name}</td>
                <td>${reservation.people_qtt}</td>
                <td>${reservation.reservation_date}</td>
                <td>${reservation.reservation_time}</td>
                <td>${reservation.area}</td>
            `;
            reservationList.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar reservas:', error);
    }
}
document.getElementById('delete').addEventListener('click', function () {
    const reservationId = prompt('Digite o ID da reserva que deseja deletar:');
    
    if (reservationId) {
        deleteReservation(reservationId);
    } else {
        showNotification('ID inválido ou cancelado.', 'error');
    }
});


// Função para deletar uma reserva por ID
async function deleteReservation(id) {
    try {
        const response = await fetch(`https://inovadevsapi.onrender.com/service/reservationService/deleteReservation.php?reservationId=${id}`, {
            method: 'DELETE',
        });

        const result = await response.json();

        if (response.ok) {
            showNotification(result.message, 'success');
            fetchReservations(); // Atualiza a lista de reservas
        } else {
            showNotification(result.message || 'Erro ao excluir reserva.', 'error');
        }
    } catch (error) {
        showNotification('Erro de conexão com o servidor.', 'error');
        console.error('Erro ao excluir reserva:', error);
    }
}
