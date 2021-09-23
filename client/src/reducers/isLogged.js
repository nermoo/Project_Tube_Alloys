
const loginStatus=localStorage.getItem('loginStatus')==='true';
const username=loginStatus ? localStorage.getItem('user'):'';
const Login=(state = loginStatus,action)=>{
    if(username===''){
        return state=false;
    }
    // console.log(username);
    switch(action.type){
        case 'change':
            return state;
        default:
            return state;
    }
}

export default Login;