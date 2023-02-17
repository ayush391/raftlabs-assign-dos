export const calcDos = (graph, startPerson, endPerson) => {
    const paths = [];

    function dfs(person, path) {
        if (person === endPerson) {
            paths.push([...path, endPerson]); // add the current path to the paths array
            return;
        }

        if (!(person in graph)) return

        for (const connection of graph[person]) {
            if (!path.includes(connection)) {
                dfs(connection, [...path, person]); // make a copy of the path array for the new connection
            }
        }
    }

    dfs(startPerson, []);

    return paths;
}
// export const calcDos = (graph, start, end, visited = new Set) => {
//     if (start === end) return [...visited, end];
//     visited.add(start)

//     for (let neighbour of graph.get(start)) {
//         if (!visited.has(neighbour)) {
//             console.log(visited)
//             return calcDos(graph, neighbour, end, visited)
//         }
//     }
//     visited.delete(start)
// }

