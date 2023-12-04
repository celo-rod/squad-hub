import apiConfig from "./APIService"

const api = {
    usuarios:{
        login: async (login, senha) => {
            const response = await apiConfig.post('/login', {login, senha})
            return response
        },
        register: async (login, senha) => {
            const response = await apiConfig.post('/registrar', {login, senha})
            return response
        }
    },

    funcionarios:{
        index: async () => {
            const response = await apiConfig.get('/funcionarios')
            return response
        },
        show: async (cpf) => {
            const response = await apiConfig.get(`/funcionarios/${cpf}`)
            return response
        },
        store: async (funcionario) => {
            const response = await apiConfig.post('/funcionarios', funcionario)
            return response
        },
        update: async (cpf, funcionario) => {
            const response = await apiConfig.put(`/funcionarios/${cpf}`, funcionario)
            return response
        },
        delete: async (cpf) => {
            const response = await apiConfig.delete(`/funcionarios/${cpf}`)
            return response
        }
    },

    projetos:{
        index: async () => {
            const response = await apiConfig.get('/projetos')
            return response
        },
        show: async (id) => {
            const response = await apiConfig.get(`/projetos/${id}`)
            return response
        },
        store: async (projeto) => {
            const response = await apiConfig.post('/projetos', projeto)
            return response
        },
        update: async (id, projeto) => {
            const response = await apiConfig.put(`/projetos/${id}`, projeto)
            return response
        },
        delete: async (id) => {
            const response = await apiConfig.delete(`/projetos/${id}`)
            return response
        }
    },

    squads:{
        index: async () => {
            const response = await apiConfig.get('/squads')
            return response
        },
        show: async (id) => {
            const response = await apiConfig.get(`/squads/${id}`)
            return response
        },
        store: async (squad) => {
            const response = await apiConfig.post('/squads', squad)
            return response
        },
        update: async (id, squad) => {
            const response = await apiConfig.put(`/squads/${id}`, squad)
            return response
        },
        delete: async (id) => {
            const response = await apiConfig.delete(`/squads/${id}`)
            return response
        }
    }
}

export default api