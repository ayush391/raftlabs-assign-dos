export const calcDos = (graph, start, end, visited = new Set) => {
    if (start === end) return [...visited, end];
    visited.add(start)

    for (let [neighbour] of list.get(start)) {
        if (!visited.has(neighbour)) {
            return calcDos(graph, neighbour, end, visited)
        }
    }
    visited.delete(start)
}

