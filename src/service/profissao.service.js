import axios from 'axios';

import url from './env'
const prefix = "profissao"

const profissaoService = {

        async getProfissaoList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getProfissaoById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async createProfissao(data){
                return await axios.post(`${url}/${prefix}`, data)
        },

        async updateProfissao(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteProfissao(id){
                return await axios.delete(`${url}/${prefix}/${id}`)
        }
}



export default profissaoService;