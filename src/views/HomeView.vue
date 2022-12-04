<template>

  <div class="row d-flex justify-content-center my-3">

   <div class="col col-sm-12 col-md-7 col-lg-7">
     <div class="link-center d-flex bg-danger align-content-center justify-content-between my-0">
       <h2 class="ms-2">List of all users</h2>

       <router-link class="" to="/create"><button class="btn btn btn-info my-1 me-2">Create</button></router-link>
     </div>
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>name</th>
          <th>Image</th>
          <th colspan="2">Operations</th>
        </tr>
        </thead>
        <tbody v-for="image in images" :key="image">
        <tr>
          <td>{{image.id}}</td>
          <td>{{image.title}}</td>
          <td>{{image.name}}</td>
         <td> <img :src="'http://127.0.0.1:8000/storage/uploads/'+image.name" width="100" height="100"/>
         </td>
          <td><router-link :to="`edit/${image.id}`">Edit</router-link></td>
          <td><button class="btn btn-danger" @click="deleteImage(image.id)">delete</button></td>
        </tr>
        </tbody>

      </table>
    </div>
   </div>
  </div>
</template>

<script setup>
import axios from "axios"
import {onMounted, ref} from "vue";
import async from "async";
const images=ref([]);
const getImages=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/fetch_image');
  images.value=res.data;
};
const deleteImage=async (id) =>{
  const res = await axios.get('http://127.0.0.1:8000/api/delete_image/'+id)
  if(res.status==200){
    alert('Picture Deleted successfully')
    getImages()
  }
  else{
    alert('Something went wrong')
  }

}
onMounted(()=>{
  getImages();
})

</script>
