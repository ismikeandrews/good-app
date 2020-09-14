import axios from 'axios';

import url from './env'
const prefix = "candidato"

const candidatoService = {

        async getCandidatoList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getCandidatoById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getCandidatoByUser(id){
            return await axios.get(`${url}/${prefix}/usuario/${id}`)
        },

        async createCandidato(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateCandidato(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteCandidato(id){
            return await axios.put(`${url}/${prefix}/${id}`)
        }
}



export default candidatoService;