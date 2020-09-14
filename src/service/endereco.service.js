import axios from 'axios';

import url from './env'
const prefix = "empresa"

const empresaService = {

        async getEmpresaList(data){
                return await axios.post(`${url}/${prefix}`, data);
        },
}



export default empresaService;