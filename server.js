import http from 'http';

const token = 'fejebfwebfebwebfwejkfweb';

const main = () => {
    http.createServer((req, res) => {    
        console.log(req.url);

        const info = req.url.split('/');
        console.log(info)

        if (info[2] == 'get-products-data' && info[3] == token) {

            // add your game ending code here            

            const o = {
                status  : 'ok',
                message : `Sure, here's what we have`
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(o)); 
        } else
        if (info[2] == 'login' && info[3] == '15') {
            const o = {
                status   : 'ok',
                token,
                username : 'Gaashi'
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(o)); 
        } else {
            const o = {
                status   : 'try again noob'
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(o)); 
        }

    }).listen(8080);

    console.log('Server running...');
}

main();