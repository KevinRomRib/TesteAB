// criando userService
import api from '../api';

const AcessoService = {
    acessar: async (obj) => {
        try {
            const response = await api.post('/acesso/acessar', obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    dados: async () => {
        try {
            const response = await api.post('/acesso/dados');
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

export default AcessoService;