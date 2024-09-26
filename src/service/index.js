export const ApiService = {
    scheduling: {
        getAll: async function (paginationProps, searchPayload) {
            const response = await fetch(`http://localhost:5001/data?_page=${paginationProps.page}&_per_page=${paginationProps.perPage}&medico.nome=${searchPayload.doctor ?? ''}&paciente.nome=${searchPayload.client ?? ''}&_sort=${searchPayload.orderBy ? 'dataCriacao' : ''}`)
            const data = await response.json()
            return data
        }
    }
}