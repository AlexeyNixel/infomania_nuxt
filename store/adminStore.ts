// import { defineStore } from 'pinia'
//
// // import { put } from '@/api/put'
// // import { post } from '@/api/post'
// // import { getContent } from '@/api/getAdmin'
// // import { deleteItem } from '@/api/delete'
// // import { getOne } from '@/api/getOne'
// // import type { ParamsType, UserType } from '@/types/models'
// // import { axiosApi } from '@/api/axios'
//
//
// export const useAdminStore = defineStore('admin', {
//     state: () => ({
//         menus: {},
//         content: {},
//         isAdmin: false,
//         user: localStorage.getItem('user'),
//         token: '',
//     }),
//     getters: {
//         getCookies() {
//             this.token = localStorage.getItem('token') as string
//             this.user = localStorage.getItem('user') as string
//         },
//     },
//     actions: {
//         async fetchAdminMenu(slug?: string) {
//             const { response } = await getOne('meta', 'model', {
//                 model: slug,
//             })
//             this.menus = response
//             return response
//         },
//
//         async fetchContentAdmin(model: string, slug?: string, params?: ParamsType): Promise<any> {
//             return await getContent(model, slug, params)
//         },
//
//         async loginAccount(user: UserType) {
//             if (user) {
//                 const response = await post('auth/login', undefined, user)
//                 if (response?.response?.status === 401) {
//                     return false
//                 } else {
//                     this.user = user.username!
//                     this.token = response.access_token
//                     localStorage.setItem('token', this.token)
//                     localStorage.setItem('user', this.user)
//                     axiosApi.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
//                     return true
//                 }
//             }
//         },
//
//         async logoutAccount() {
//             localStorage.removeItem('User')
//             localStorage.removeItem('token')
//             this.token = ''
//         },
//
//         async updateContent(model: string, slug: string, data: object | []) {
//             const response = await put(model, slug, data)
//             return response?.data
//         },
//
//         async createContent(model: string, data: object) {
//             return await post(model, data)
//         },
//
//         async deleteElement(model: string, id: string) {
//             const response = await deleteItem(model, id)
//             return response?.data
//         },
//     },
// })
