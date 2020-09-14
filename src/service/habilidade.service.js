import axios from 'axios';

import url from './env'
const prefix = "habilidade"

const empresaService = {

        async getEmpresaList(id){
                return await axios.get(`${url}/${prefix}/${id}`, data);
        },
}



export default empresaService;