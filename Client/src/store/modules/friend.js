
export default{
    namespaced:true,
    state(){
     return{
       //
     }
    },
    mutation:{
        addNewFriend(state,payload){
            console.log(state,payload);
        }
    },
    actions:{
        addFriend(context,payload){
            console.log(payload);
            context.commit('addNewFriend',payload)
        }
    }
}