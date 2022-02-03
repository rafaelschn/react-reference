export function addReserve(filme) {
    return {
        type: 'ADD_RESERVE',
        filme
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id
    }
}
