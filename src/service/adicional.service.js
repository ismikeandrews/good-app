import axios from 'axios';

import url from './env'
const prefix = "adicional"

const adicionalService = {

        async getAdicionalList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getAdicionalById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getAdicionalByType(id){
            return await axios.get(`${url}/${prefix}/tipo/${id}`)
        },

        async getAdicionalByNameType(name){
            return await axios.get(`${url}/${prefix}/tipo/nome/${name}`)
        },

        async createAdicional(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateAdicional(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteAdicional(id){
            return await axios.put(`${url}/${prefix}/${id}`)
        }
}



export default adicionalService;