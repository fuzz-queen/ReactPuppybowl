const COHORT = "230-ftb-et-web-am";
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`

export async function fetchAllPlayers() {
    try {
        const response = await fetch (`${baseURL}/players`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`${baseURL}/players/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function createPlayer(name, breed) {
    try {
        const response = await fetch(`${baseURL}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                breed
            })
        });
    const result = await response.json();
    return result;
    } catch (error) {
        console.error(error);
    }
}

export async function deletePlayer(id) {
    try {
        const response = await fetch(`${baseURL}/players/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}