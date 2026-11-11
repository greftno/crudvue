<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const comentarios = ref([])
const postId = route.params.id


async function getComments() {
    const respuesta = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    const datos = await respuesta.json()
    comentarios.value = datos
}

onMounted(getComments)
</script>

<template>
    <h1>Comentarios</h1>
    <div class="card mt-2" v-for="comentario in comentarios">
  <div class="card-header">
    {{ comentario.name }}
  </div>
  <div class="card-body">
    <figure>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">{{ comentario.body }}</cite>
      </figcaption>
    </figure>
  </div>
</div>
</template>