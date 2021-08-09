const list = document.querySelector('.lista');
Sortable.create(list, {
    animation: 250,
    chosenClass: "seleccionado",
    ghostClass: "fantasma",
    dragClass: "agarre",
    // Luego de finalizar un movimiento...
    onEnd: function(e) {
    },
    groupName: 'persons-list',
    store: {
        // Guardar el orden en LocalStorage
        set: (sortable) => {
            // Convertirlo en un arreglo, se ejecta automáticamente.
            const order = sortable.toArray()
            // Guardar en el local con "join()"
            localStorage.setItem(sortable.options.groupName, order.join('|'));
        },
        get: (sortable) => {
            const order = localStorage.getItem(sortable.options.groupName)
            return order ?  order.split('|') : null
        }
    }
})