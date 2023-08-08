// import axios from 'axios';

// const URL = 'http://localhost:0.0.0';

// export const createTask = async (data: any) => {
//     try {
//         await axios.post(URL, data).then(res => {
//             return res.data.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const readTask = async () => {
//     try {
//         return await axios.get(URL).then((res: any) => {
//             console.log(res.data)
//             return res.data.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


// export const deleteTask = async (id: string) => {
//     try {
//         return await axios.delete(`${URL}/${id}`).then((res: any) => {
//             return res.data.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }



import React from 'react'

const authApi = () => {
  return (
    <div>authApi</div>
  )
}

export default authApi