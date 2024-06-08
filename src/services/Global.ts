export async function fetchTasksRequest() {
    return fetch('http://localhost:3000/tasks')
        .then((response) => {
            if (!response.ok) throw new Error("Erro na requisição");
            return response.json();
        })
        .catch((error) => console.log(error));
}