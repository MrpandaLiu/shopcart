import { request } from './axios'

export function getList() {
    return request({
        method: 'get',
        url: '/getlist'
    })
}

export function addOne(addmsg) {
    return request({
        method: 'post',
        url: '/addone',
        data: addmsg
    })
}