const loginData = {
    host  : 'http://localhost:8080',
    id    : 15,
    token : 'fejebfwebfebwebfwejkfweb',
}

const login = async() => {
    const result = await fetch(loginData.host + '/api/login/' + loginData.id).then(t => t.json());
    if (result.status == 'ok') {
        loginData.token = result.token;
        return result.username;
    }
}

const getProductsData = async() => {
    const result = await fetch(loginData.host + '/api/get-products-data/' + loginData.token).then(t => t.json());
    if (result.status == 'ok') {        
        return result.data;
    }        
}

const main = async() => {
    const username = await login();
    console.log('User', username,'has started a game session.');
    
}

main();