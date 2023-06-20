import { AxiosRequestConfig } from "axios";

declare const wptba: WPTBA;

export interface WPTBA {
    _wpnonce?: string
}

const axiosBaseConfig: AxiosRequestConfig = {
    baseURL: window.location.origin + '/wp-json/wptba',
    headers: {
        'X-WP-Nonce': wptba._wpnonce,
    }
}
export default axiosBaseConfig;