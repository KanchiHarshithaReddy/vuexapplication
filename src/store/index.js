import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state:{
users:[],
user1:[],
 userList:[],

  },
  getters:{

  },
  mutations:{
    onclick(state,users){
      state.user1.push(users)
    },
    onGet(state,userList){
      state.userList=userList

    }
  },
  actions:{
    onFormSubmit({commit},user) {
   const result = axios.post(
        "https://form-e488f-default-rtdb.firebaseio.com/post.json",user);
      this.users = result.data;
      commit('onclick',this.users)
      console.log(this.users);
    },
    async adddata({commit}) {
      // console.log(this.userList);
  
  const result1=await axios.get("https://form-e488f-default-rtdb.firebaseio.com/post.json")
  
   console.log(result1.data);
   commit('onGet',result1.data);
    }
  },
 
  
})