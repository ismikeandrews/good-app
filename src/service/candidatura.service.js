import axios from 'axios';

import url from './env'
const prefix = "candidatura"

const candidaturaService = {

        async getCandidaturaList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getCandidaturaById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getStatusCandidatura(id){
            return await axios.get(`${url}/${prefix}/${id}/status`)
        },

        async createCandidatura(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateCandidatura(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteCandidatura(id){
            return await axios.put(`${url}/${prefix}/${id}`)
        }
}



export default candidaturaService;