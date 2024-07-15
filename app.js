document.getElementById('partido-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const lugar = document.getElementById('lugar').value;
    const fecha = document.getElementById('fecha').value;
    
    const partido = {
        nombre,
        telefono,
        lugar,
        fecha
    };

    let partidos = JSON.parse(localStorage.getItem('partidos')) || [];
    partidos.push(partido);
    localStorage.setItem('partidos', JSON.stringify(partidos));
    
    mostrarPartidos();
});

document.getElementById('ciudad').addEventListener('change', mostrarPartidos);

function mostrarPartidos() {
    const ciudad = document.getElementById('ciudad').value;
    const listaPartidos = document.getElementById('lista-partidos');
    listaPartidos.innerHTML = '';

    let partidos = JSON.parse(localStorage.getItem('partidos')) || [];
    partidos.forEach(partido => {
        const partidoElement = document.createElement('div');
        partidoElement.classList.add('partido');
        partidoElement.innerHTML = `
            <h3>${partido.nombre}</h3>
            <p>Teléfono: ${partido.telefono}</p>
            <p>Lugar: ${partido.lugar}</p>
            <p>Fecha: ${partido.fecha}</p>
        `;
        listaPartidos.appendChild(partidoElement);
    });
}

document.getElementById('chat-send').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;
    if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
    }
});
