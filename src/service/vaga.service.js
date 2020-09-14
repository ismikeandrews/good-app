import axios from 'axios';

import url from './env'
const prefix = "vaga"

const usuarioService = {

        async getVagaList(){
                return await axios.get(`${url}/${prefix}`);
        },

        async getVagaById(id){
                return await axios.get(`${url}/${prefix}/${id}`);
        },

        async getMatch(idCandidato, idCurriculo){
                return await axios.get(`${url}/${prefix}/match/${idCandidato}/${idCurriculo}`);
        },

        async getMatch(data){
                return await axios.post(`${url}/${prefix}`, data);
        },

        async getMatch(id, data){
                return await axios.post(`${url}/${prefix}/${id}`, data);
        },

        async getMatch(id){
                return await axios.delete(`${url}/${prefix}/${id}`);
        },

        async getMatch(id){
                return await axios.get(`${url}/${prefix}/${id}/beneficio`);
        },

        async getMatch(id){
                return await axios.get(`${url}/${prefix}/beneficio/${id}`);
        },

        async getMatch(data){
                return await axios.get(`${url}/${prefix}/beneficio/`, data);
        },

        async getMatch(data){
                return await axios.get(`${url}/${prefix}/beneficios/`, data);
        },

        async getMatch(id, data){
                return await axios.get(`${url}/${prefix}/beneficio/${id}`, data);
        },

        async getMatch(id, data){
                return await axios.get(`${url}/${prefix}/beneficio/${id}`, data);
        },
        
}



export default usuarioService;