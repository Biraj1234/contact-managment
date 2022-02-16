
export default{
    state(){
     return{
        friend:{
            name:'',
            address:'',
            email:'',
            contact_number:'',
            profile_pictre:''
        }
     }
    },
    mutation:{
        addFriend(state,payload){
            //
        }
    },
    actions:{
        addFriend(context,payload){
            
            context.commit('addFriend',payload)
        }
    }
}