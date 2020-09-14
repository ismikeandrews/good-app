import axios from 'axios';

import url from './env'
const prefix = "empresa"

const empresaService = {

        async getEmpresaList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getEmpresaById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getVagaByEmpresaId(id){
            return await axios.get(`${url}/${prefix}/${id}/vagas`)
        },

        async getCandidatoByEmpresaId(id){
            return await axios.get(`${url}/${prefix}/${id}/candidatos`)
        },

        async createEmpresa(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateEmpresa(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteEmpresa(id){
            return await axios.put(`${url}/${prefix}/${id}`)
        }
}



export default empresaService;