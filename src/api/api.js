import axios from 'axios'

export const getPricesApi = async () => {
    const url = "https://currency.jafari.pw/json"

    const response = await axios.get(url)

    return response.data
}