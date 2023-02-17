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


