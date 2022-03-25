
.<template>
<div class="col-sm-6">
 <div class="container1">
      <h3 >Add a Contact </h3>
    <form @submit.prevent=" onFormSubmit">
      <div class="col-75">
        <label >Select Which form you want to fill out : </label>&nbsp;
        <select id="first"  v-model="user.selectwhichtypeofform"  name="select-which-form">
        
          <option value="Basic" selected>Basic Add Contact Form</option>
          <option value="Normal">Normal Add Contact Form</option>
          <option value="Moderate">Moderate Add Contact Form</option></select
        ><br /><br />
      </div>
      <div class="actionset">
<div class="text" >
      <label >Select Action Set  </label>&nbsp;
      <select id="second" v-model="user.selectactionset"  name="Select-Action">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select></div></div>
      <br />
<div class="fn">
      <label for="fname">First Name  </label>&nbsp;

      <input
        type="text"
        id="fname"
        name="firstname"
     v-model="user.firstname"
      /></div>

      <br />
<div class="ln">
      <label for="lname">Last Name  </label>&nbsp;

      <input
        type="text"
        id="lname"
        name="lastname"
      v-model="user.lastname"
      /> </div><br />
     <div class="emil">
      <label for="lname" >Email </label>&nbsp;

      <input
        type="text"
        id="lname"
        name="email"
       v-model="user.email"
      /></div>
      <br />
       <div class="phone1">
      <label id="select">Phone1 </label>
  
      <select id="radius" v-model="user.phone1"  name="phone">
        <option value="work">Work</option>
        <option value="office">Office</option>
        <option value="home">Home</option></select
      >&nbsp; <input type="text" v-model="user.phone2"  name="ph1" id="one"/>&nbsp; <input type="text" name="ph2" v-model="user.landline"   id="one"/></div><br />
      <div  class="fex1">
      <label id="select">Fax 1</label>
      <select id="radius" v-model="user.faxtype"  name="fax">
        <option value="work">Work</option>
        <option value="office">Office</option>
        <option value="home">Home</option></select
      >&nbsp;
      <input type="text" v-model="user.fax1" id="one"  name="fx1"/></div>

      <br />
<h3>Add tags</h3>
<p>Tags are used to categorize your contacts or trigger automated cmpaigns</p>
<input type="text" placeholder="Please Select a tag" v-model="user.tag"  name="tags"><br><br>
   
   <button type="button" class="btn btn-primary" v-on:click=" usersdata" >Save</button>&nbsp;
   <button type="button" class="btn btn-light" id="colur" style="color:#477dec" > Save & Add Another Contact</button>
    </form>
    </div>
  </div>
</template>

<script>

export default {
data(){
  return{
    user:{}
  }
},
methods:{
  //  async onFormSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.user);
  //     const result =await axios.post(
  //       "https://secondkeeptask-default-rtdb.firebaseio.com/post.json",
  //       this.user
  //     );
  //     this.user = result.data;
  //   },
  usersdata(){
    this.$store.dispatch('onFormSubmit',this.user)
    this.user=""
  }
  },
}

</script>

<style>

#one{
  width: 90px;
}
.container1 {
  border-radius: 10px;
  /* background-color: #f2f2f2; */
  padding: 20px;
  text-align: left;
  height: 500px;
  width: 800px;
  padding-top: 0px;
  font-size: 12px;
  padding-bottom: 0px;
}

input[type="text"],

textarea {
  width: 50%;
  height: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
}
#drop{
  width: 50%;
  height: 20px;
  padding: 12px;
  padding-top: 5px;
  padding-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;

}
.cen{
  margin-left: 100px;
}
.text{
  margin-left : 40px;
}
.fn{
  margin-left: 33px;
}
.ln{
    margin-left: 33px;
   
}
#lname{
  width: 365px;
}
.emil{
  margin-left: 60px;
}
#select{
  margin-left: 160px;
}
#radius{
  border-radius: 8px;
  height: 25px;
}
.actionset{
margin-left: -40px;
}
.fex1{
margin-left: -90px;
}
.phone1{
  margin-left: -104px;
}
.selection{
  border-radius: 10px;
  height: 25px;
  width: 50px;
}
#first{
  height: 25px;
  border-radius: 8px;
  width: 500px;
}
#second{
    height: 25px;
  border-radius: 8px;
  width: 360px;
}
</style>