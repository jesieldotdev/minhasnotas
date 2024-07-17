export async function fetchTasksRequest() {
    return fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        .then((response) => {
            if (!response.ok) throw new Error("Erro na requisição");
            return response.json();
        })
        .catch((error) => console.log(error));
}