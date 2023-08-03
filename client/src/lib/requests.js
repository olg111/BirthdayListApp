const API_URL = 'http://localhost:4000'

export const addItemRequest = (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      };
    return  fetch(`${API_URL}/birthdayPerson`, requestOptions)
    .then((response) => response.json())
}

export  const deleteItemRequest = (id) => {
      return fetch(`${API_URL}/birthdayPerson/${id}`, { method: "DELETE" })

}

export const onTogglePropRequest = (id, updatedItem) => {

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    };

    return fetch(`${API_URL}/birthdayPerson/${id}`, requestOptions)
      .then((response) => response.json())

  };