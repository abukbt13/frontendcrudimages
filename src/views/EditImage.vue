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
            <h4>Update Image</h4>
            <h3 class="text-light text-bg-info"></h3>
          </div>
          <div class="card-body">

            <form @submit.prevent="submit">
              <div class="my-2">
                <label class="p-0 m-0" for="imagename"><b>Image Name</b></label>
                <input type="text" v-model="title"   class="form-control" >
              </div>
              <label for="">Image</label><br>
              <input type="hidden" v-model="image" id="">
              <img :src="'http://127.0.0.1:8000/storage/uploads/'+image" style="width:100%;">
<!--              <img :src="`http://127.0.0.1:8000/storage/uploads/${image}`"  width="100" height="100" alt="">-->
              <div class="my-2">
                <label class="p-0" for="imagename"><b>Image</b></label>
                <input type="file" @change="onFileChange"   id="title" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary pt-3">
                Update Image
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
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
import async from "async";
// const message=ref('');
const title=ref('');
const image=ref('');
const new_image=ref('');
const route=useRoute();

const onFileChange=(e)=>{
  new_image.value=e.target.files[0];
}
const  getImage = async () => {
    const res = await axios.patch(`http://127.0.0.1:8000/api/edit_image/${route.params.id}`);
    if(res.status==200){
      title.value=res.data.title
      image.value=res.data.name
    }

};
const submit= async () =>{
  if(!title.value){
    alert('Please select a title')
}
  else {
    const formData=new FormData();
    formData.append('title',title.value);
    formData.append('image',image.value);
    formData.append('new_image',new_image.value);

    const res = await axios.post(`http://127.0.0.1:8000/api/update_image/${route.params.id}`,formData)
    if(res.status==200){
      alert('successfully updated')
      getImage()
    }
  }
}

onMounted(()=>{
  getImage();
})
</script>

<style scoped>
.row{
  min-height: 80vh;
}
</style>