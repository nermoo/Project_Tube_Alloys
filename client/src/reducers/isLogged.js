

const Login=(state=false,action)=>{
    switch(action.type){
        case 'login':
            return !state;
    }
}

export default Login;