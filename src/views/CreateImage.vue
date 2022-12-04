<template>
  <div class="container">
  <div class="row d-flex justify-content-center align-content-center">
      <div class="col col-xl-5 col-lg-5 col-md-6 col-sm-6">
        <div>
          <router-link to="/">
            <button  class="btn my-2 btn-primary">Go back</button>
          </router-link>
        </div>
        <div class="card rounded-0">
          <div class="card-header">
            <h4>Create Image</h4>
            <h3 class="text-light text-bg-info">{{message}}</h3>
          </div>
          <div class="card-body">

            <form @submit.prevent="submit">
              <div class="my-2">
                <label class="p-0 m-0" for="imagename"><b>Image Name</b></label>
                <input type="text" v-model="title"   class="form-control" >
              </div>

              <div class="my-2">
                <label class="p-0" for="imagename"><b>Image</b></label>
                <input type="file" @change="onFileChange"   id="title" class="form-control" />
              </div>
              <button class="btn btn-primary pt-3">
                save Image
              </button>
            </form>

        </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
    import axios from 'axios'
    import {ref}from 'vue'
    import {useRouter} from "vue-router";
    const message=ref('');
    const title=ref('');
    const image=ref('');

    const router=useRouter();
const onFileChange=(e)=>{
  image.value=e.target.files[0];
}
 const  submit = async () => {
  if(!title.value || !image.value){
    alert('input file data is required')
  }
  else{
    const formData= new FormData();
    formData.append('title', title.value);
    formData.append('image', image.value);

  const res = await axios.post("http://127.0.0.1:8000/api/save_image", formData);
  if(res.status==200){
    message.value = 'Uploaded image successfully'
    title.value=''
    image.value=''
    router.push('/')
  }
  }
}
</script>

<style scoped>
.row{
  min-height: 80vh;
}
</style>