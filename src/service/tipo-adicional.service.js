import axios from 'axios';

import url from './env'
const prefix = "regime-contratacao"

const tipoAdicionalService = {

        async getTipoAdicionalList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getRegimeContratacaoById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getRegimeContratacaoByName(name){
                return await axios.get(`${url}/${prefix}/nome/${name}`)
        },

        async createRegimeContratacao(data){
                return await axios.post(`${url}/${prefix}`, data)
        },

        async updateRegimeContratacao(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteRegimeContratacao(id){
                return await axios.delete(`${url}/${prefix}/${id}`)
        }
}



export default tipoAdicionalService;