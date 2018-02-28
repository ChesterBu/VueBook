import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.0.103:9999'
axios.interceptors.response.use((res)=>{
    return res.data
})

//get slider data

export let getSliders = ()=>{
    return axios.get('/sliders')
}

// get hotbooks data
export let getHotBooks = ()=>{
    return axios.get('/hot')
}

// get all books
export let getBooks = ()=>{
    return axios.get('/book')
}

// delete exact book

export let removeBook = (id)=>{
    return axios.delete(`/book?id=${id}`)
}
// get exact book
export let findOne = (id)=>{
    return axios.get(`/book?id=${id}`)
}

// modify book
export let updateBook =(id,data)=>{
    return axios.put(`/book?id=${id}`,data)
}

// add book

export let addBook=(id,data)=>{
    return axios.post(`/book`,data)
}

export let getHomeInfo = ()=>{
    return axios.all([getSliders(),getHotBooks()])
}
// base on offset get books
export let pagination=(offset)=>{
    return axios.get(`/page?offset=${offset}`)
}