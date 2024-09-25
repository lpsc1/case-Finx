export const ApiService = {
    scheduling: {
        getAll: async function (doctor = '', client = '') {
            const response = await fetch(`http://localhost:5001/data?medico.nome=${doctor}&paciente.nome=${client}`)
            const data = await response.json()
            return data
        }
    }
}