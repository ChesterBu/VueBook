const http = require('http')
const fs = require('fs')
const url = require('url')
const sliders = require('./sliders')

//get swiper data  /sliders

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    let {
        pathname,
        query
    } = url.parse(req.url)
    if (pathname === '/sliders') {
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.end(JSON.stringify(sliders))
    }
}).listen(9999)