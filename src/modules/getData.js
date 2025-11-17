const getData = (str) => {
    return fetch('https://test-6289d-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
       return response.json();
    })
    
     
}

export default getData;