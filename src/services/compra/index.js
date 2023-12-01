// criando userService
import api from '../api';

const compraService = {
    cadastrar: async (obj) => {
        try {
            const response = await api.post('/comprar/comprar', obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    dados: async () => {
        try {
            const response = await api.post('/comprar/dados');
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

export default compraService;