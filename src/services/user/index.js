// criando userService
import api from '../api';

const userService = {
    cadastrar: async (user) => {
        try {
            const response = await api.post('/users/createUser', user);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    findUser: async (id) => {
        try {
            const response = await api.post('/users/findUser', id);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
};

export default userService;