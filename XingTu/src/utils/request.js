import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getToken } from '@/utils/auth';
import { useStore } from '@/stores/index.ts';

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5 * 1000
});

// 请求拦截器
service.interceptors.request.use(
    async config => {
        const store = await fetchData();
        if (store && store.getter.getToken) {
            config.headers['Authorization'] = 'Bearer ' + getToken();
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.defaults.withCredentials = false;

// fetchData 函数返回 store 对象
async function fetchData() {
    const theStore = useStore();
    return theStore;
}

// 其他拦截器逻辑保持不变

export default service;
