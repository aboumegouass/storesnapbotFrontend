import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://api.snapbot.app/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})
export default axios