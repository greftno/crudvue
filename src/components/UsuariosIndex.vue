<script setup>
import { ref, onMounted } from "vue"


const posts = ref([])
const error = ref("")

async function obtenerUsuarios() {
    error.value = ""

    try{
        const respuesta = await fetch (
            "https://jsonplaceholder.typicode.com/posts"
        )

        if (!respuesta.ok) {
            throw new Error("Error al consultar usuarios");
            
        }
        console.log(posts)
        const datos = await respuesta.json()
        posts.value = datos
        console.log(posts)
    }catch {

    }
    
}

onMounted(obtenerUsuarios)

</script>

<template>
    <div class="container py-5">
        <h1>Vista de Publicaciones</h1>
        <div class="card mb-5" v-for="post in posts">
  <div class="card-header">
    {{ post.title }}
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <RouterLink 
    :to = "`/posts/${post.id}/comentarios`">ver comentarios</RouterLink>
    <p class="card-text">{{ post.body }}</p>
    <a href="´/comentarios?id=${post.id}`" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>