<template>

<div class="container">
   
    <table class="table table -dark">
        <thead  >
            <tr>
                <th class="col">select which form </th>
                 <th class="col">SelectAction</th>
                  <th class="col">First Name</th>
                   <th class="col">Last Name </th>
                    <th class="col">Email</th>
                     <th class="col">Phone1</th> 
                     <th class="col">ph1</th>
                      <th class="col">ph2</th>
                     <th class="col">Fax 1</th>
                     <th class="col">FaxNumber</th>
                            <th class="col">Tags</th>
                     
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(list,i) in userList" :key="i">
                <td>{{list.selectwhichtypeofform}}</td>
                 <td>{{list.selectactionset}}</td>
                  <td>{{list.firstname}}</td>
                   <td>{{list.lastname}}</td>
                   <td>{{list.email}}</td>

                   <td>{{list.phone1}}</td>
                   <td>{{list.phone2}}</td>
<td>{{list.landline}}</td>
                   <td>{{list.faxtype}}</td>
                   <td>{{list.fax1}}</td>
                    <td>{{list.tag}}</td>

            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
// import axios from "axios";
export default {
    data(){
   return{
     
       }
 },
    methods:{
    //     adddata() {
    //   console.log(this.userList);

    //   axios.get("https://form-e488f-default-rtdb.firebaseio.com/post.json")

    //     .then((response) => {
    //       this.userList = response.data;

    //       console.log(this.userList);

    //       Object.keys(this.userList).forEach((result) => {
    //         console.log(result);

    //         this.datalist.push(this.userList[result]);
    //       });
    //     });
    // },
    },
    computed:{
        userList(){
           return this.$store.state.userList;
        }
    },
    mounted(){
        this.$store.dispatch('adddata')
    }

}
</script>

<style>
.container{
    /* display: flex; */
   margin-left: 60px;
   font-size: 12px;
   border:1px solid black;
 border-radius: 10px;
   margin-top:20px;
   
    
}

.container th {
  padding-top: 2px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #8d8f8ea8;
  color: rgb(12, 10, 10);
  
 
}

</style>