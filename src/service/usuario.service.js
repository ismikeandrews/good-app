import axios from 'axios';

import url from './env'
const prefix = "usuario"

const usuarioService = {

        async getUsuarioList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getUsuarioById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },


        async createUsuario(data){
                return await axios.post(`${url}/${prefix}`, data)
        },

        async updateUsuario(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteUsuario(id){
                return await axios.delete(`${url}/${prefix}/${id}`)
        }
}



export default usuarioService;