import axios from 'axios';

import url from './env'
const prefix = "curriculo"

const curriculoService = {

        async getCurriculoList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getCurriculoById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getProfessionByCategoryId(id){
            return await axios.get(`${url}/${prefix}/${id}/profissao`)
        },

        async createCurriculo(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateCurriculo(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteCurriculo(id){
            return await axios.delete(`${url}/${prefix}/${id}`)
        },

        async getCurriculoAdicionalById(id){
            return await axios.get(`${url}/${prefix}/adicional/${id}`)
        },

        async createCurriculoAdicional(data){
            return await axios.post(`${url}/${prefix}/adicional`, data)
        },

        async createCurriculoAdicionais(data){
            return await axios.post(`${url}/${prefix}/adicional`, data)
        },

        async updateCurriculoAdicionais(id, data){
            return await axios.post(`${url}/${prefix}/${id}/adicionais`, data)
        },

        async deleteAdicionalCurriculo(id){
            return await axios.delete(`${url}/${prefix}/adicional/${id}`)
        },

        async getCurriculoAdicional(id){
            return await axios.get(`${url}/${prefix}/${id}/adicional`)
        },

        async getCurriculoCargoById(id){
            return await axios.get(`${url}/${prefix}/${id}/cargo`)
        },

        async getCargoCurriculoById(id){
            return await axios.get(`${url}/${prefix}/cargo/${id}`)
        },

        async createCargo(data){
            return await axios.post(`${url}/${prefix}/cargo`, data)
        },

        async createCargos(data){
            return await axios.post(`${url}/${prefix}/cargos`, data)
        },

        async updateCargo(id, data){
            return await axios.put(`${url}/${prefix}/${id}/cargos`, data)
        },

        async deleteCargo(id){
            return await axios.put(`${url}/${prefix}/cargo/${id}`)
        },
}



export default curriculoService;