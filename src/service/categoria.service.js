import axios from 'axios';

import url from './env'
const prefix = "categoria"

const categoriaService = {

        async getCategoriaList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getCategoriaById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async getProfessionByCategoryId(id){
            return await axios.get(`${url}/${prefix}/${id}/profissao`)
        },

        async createCategoria(data){
            return await axios.post(`${url}/${prefix}`, data)
        },

        async updateCategoria(id, data){
            return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteCategoria(id){
            return await axios.put(`${url}/${prefix}/${id}`)
        }
}



export default categoriaService;