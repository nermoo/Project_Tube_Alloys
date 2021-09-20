


const addItem=(state=[],action)=>{

    
    
    switch(action.type){
        case 'add':
            var list=[];
            const item=action.payload;
        console.log(item);
        item.map((is)=>{
        list.push(is.item)});
        console.log(list);
            return list;

        default:
            return list;
    }

}

export default addItem;