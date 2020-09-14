import axios from 'axios';

import url from './env'
const prefix = "status"

const statusService = {

        async getStatusList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getStatusById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async createStatus(data){
                return await axios.post(`${url}/${prefix}`, data)
        },

        async updateStatus(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        }
}



export default statusService;