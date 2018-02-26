import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9999'

//get slider data

export let getSliders = ()=>{
    return axios.get('/sliders')
}