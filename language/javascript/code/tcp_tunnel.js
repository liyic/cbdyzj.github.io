#!/usr/bin/env node
const net = require('net')

function tunntlTcp(host, port) {
    const server = net.createServer(source => {
        const destination = net.connect(
            { host, port },
            () => source.on('data', data => destination.write(data)),
        )
        destination.on('data', data => source.write(data))

        destination.on('error', error => source.destroy())
        source.on('error', error => destination.destroy())
    })
    return { from: server.listen.bind(server) }
}

if (require.main === module) {
    tunntlTcp('127.0.0.1', 8000).from(8080)
}
