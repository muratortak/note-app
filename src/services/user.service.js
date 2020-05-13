import axios from 'axios';
import cookie from 'js-cookie';

export async function login(user) {
    let usr;
    try {
        usr = await axios.post('http://localhost:3001/login', user);
        // localStorage.setItem('user', usr.data.user.token.toString());
        // console.log("LOCAL STORAGE: ", localStorage['user']);
        let tokenClient = cookie.get("tokenClient");
        console.log("TOKEN CLIENT: ", tokenClient);
    } catch(err) {
        console.log("AXIOS ERR: ", err);
    }
    return usr.data.user;

    // TODO: check why below is not working.
    // return axios.post('http://localhost:3001/login', user)
    // .then(res => {
    //     console.log(res.data);
    //     // getToken(res);
    //     // store.set('loggedin', true);
    //     localStorage.setItem('user', JSON.stringify(user.data));
    //     return user.data;
    // }).catch(err => {
    //     console.log(err);
    // })z
}

export async function logout() {
    try
    {
        let logout = await axios.post('http://localhost:3001/logout');
        console.log("LOGOUT SUCCESS: ", logout);
    }
    catch(err) 
    {
        console.log("ERR ON LOGOUT ", err);
    }
}


export async function isAuth(token) {

}
