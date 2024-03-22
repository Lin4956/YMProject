import request from '@/utils/request'
//获取导航栏列表信息
export function getCategoryList() {
    return request({
        url: 'xingtu/categoryList',
        method: 'get'
    })
}