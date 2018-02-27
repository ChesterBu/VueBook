const http = require('http')
const fs = require('fs')
const url = require('url')
const process = require('process')
const sliders = require('./sliders')

function read(cb) {
    fs.readFile('mock/book.json', 'utf8', (err, data) => {
        if (err || data.length === 0) {
            cb([])
        } else {
            cb(JSON.parse(data))
        }
    })
}

function write(data, cb) {
    fs.writeFile('mock/book.json', JSON.stringify(data), cb)
}



http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
    let {
        pathname,
        query
    } = url.parse(req.url, true)
    //get swiper data  /sliders
    if (pathname === '/sliders') {
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        return res.end(JSON.stringify(sliders))
    }
    if (pathname === '/hot') {
        read(books => {
            let hot = books.reverse().slice(0, 6)
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(hot))
        })
        return;
    }
    if (pathname === '/book') { //对书的增删改查
        let id = parseInt(query.id)
        switch (req.method) {
            case 'GET':
                if (!isNaN(id)) {
                    read(books => {
                        let book = books.find(item => item.bookId === id) || {}
                        res.end(JSON.stringify(book))
                    })
                } else { //获取所有图书
                    read(books => res.end(JSON.stringify(books.reverse())))
                }
                break;
            case 'POST':
                let str = '';
                req.on('data', chunk => {
                    str += chunk
                });
                req.on('end', () => {
                    let book = JSON.parse(str);
                    read(books=> { // 添加id
                        book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
                        books.push(book); //将数据放到books中 ，books在内存中
                        write(books,()=> {
                            res.end(JSON.stringify(book));
                        });
                    });
                });

                break;
            case 'DELETE':
                read(books => {
                    books = books.filter(item => item.bookId !== id)
                    write(books, () => {
                        res.end(JSON.stringify({})) // 返回空
                    })
                })
                break;
            case 'PUT':
                if (id) {
                    let str = ''
                    req.on('data', chunk => {
                        str += chunk
                    })
                    req.on('end', () => {
                        let book = JSON.parse(str)
                        read(books => {
                            books = books.map(item => {
                                if (item.bookId === id) { //覆盖找到的
                                    return book
                                }
                                return item
                            })
                            write(books, () => {
                                res.end(JSON.stringify(book))
                            })
                        })

                    })
                }

                break;
        }
        return
    }
}).listen(9999)