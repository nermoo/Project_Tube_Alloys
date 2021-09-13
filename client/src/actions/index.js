export const login=()=>{
    return{
    type:'change'}
}

export const addItem=(item)=>{
    return{
        type:'add',
        payload:item
    }
}

export const user=(name)=>{
    return{
        type:'new',
        payload:name
    }
}