const getData = (str) => {
    return fetch(
    `https://test-6289d-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => {
       return response.json();
    })   
}

export default getData;