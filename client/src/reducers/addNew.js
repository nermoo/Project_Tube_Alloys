var list=[{item:"water the plants"}];
const addItem=(state=list,action)=>{

    const item=action.payload;
    switch(action.type){
        case 'add':
            return (list.unshift(item));

        default:
            return list;
    }

}

export default addItem;