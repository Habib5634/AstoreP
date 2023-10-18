import { userLogin } from '../redux/feature/auth/authAction';
import store from '../redux/store'


export const handleLogin = (e, email, password) => {
    e.preventDefault();
    try {
        if ( !email || !password) {
            return alert("Please provide all field")
        }
        store.dispatch(userLogin({ email, password}))
    } catch (error) {
        console.log(error)
    }
}


// export const handleRegister = (e,  name, email, password,country) => {
//     e.preventDefault();
//     try {
//         store.dispatch(userRegister({  name, email, password,country }))
//     } catch (error) {
//         console.log(error)
//     }
// }