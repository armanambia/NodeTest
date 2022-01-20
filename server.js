import http from 'http'

const server = http.createServer( (request, response) => {
    //console.log('headers', request.headers)
    console.log('-----')
    console.log('method', request.method)
    console.log('url', request.url)

    // this is how you set a header with html text
    //      response.setHeader('Content-Type','text/html');
    //      response.end('<h1>HELLLLLOO<h1>')
    const user = {
        name: 'John',
        hobby: 'skating'
    }
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(user))
})

server.listen(3000)