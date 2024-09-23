import axios from 'axios'

const $axios = axios.create({
  baseURL: 'http://localhost:3000'
})

const axiosPlugin = {
  install(app: any) {
    app.config.globalProperties.$axios = $axios
  }
}

export { $axios }
export default axiosPlugin
