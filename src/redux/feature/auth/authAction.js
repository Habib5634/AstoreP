import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../services/API'
import { toast } from 'react-toastify'



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({  email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('https://enchanting-capris-jay.cyclic.app/signin/admin', {  email, password })
            //store token
            if (data) {
                localStorage.setItem('token', data.token);
                toast.success("Login Successfull")
                
                
                    window.location.replace('/')
              
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)

//register  

// export const userRegister = createAsyncThunk(
//     'auth/register',
//     async ({ name, email, password, country }, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.post('https://better-red-camel.cyclic.cloud/signup/', { name, email, password,country })
//             if (data) {
//                 toast.success(data.success);
//                 window.location.replace('/login')
//             }
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }

//         }
//     }
// )


//current user

// export const getCurrentUser = createAsyncThunk(
//     'aith/getCurrentUser',
//     async ({ rejectWithValue }) => {
//         try {
//             const res = await API.get('/auth/current-user')
//             if (res?.data) {
//                 return res?.data
//             }
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     }
// )

// name,
//           price,  
//         weight,
//           description,category,
//           status,
//           attendees,
//           imageUrls