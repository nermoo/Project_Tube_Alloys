
const loginStatus=localStorage.getItem('loginStatus')==='true';
const username=loginStatus ? localStorage.getItem('user'):'';
const Login=(state = loginStatus,action)=>{
    let name=username;
    console.log(name);
    switch(action.type){
        case 'change':
            return !state;
        default:
            return state;
    }
}

export default Login;