<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { defineComponent, ref } from "vue";

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	<div>
		<Edit />
		<el-row class="mb-4"><el-button>Default</el-button><el-button type="primary">Primary</el-button><el-button type="success">Success</el-button><el-button type="info">Info</el-button><el-button type="warning">Warning</el-button><el-button type="danger">Danger</el-button><el-button>中文</el-button></el-row>
		<router-link :to="{name:'HelloWorld',params:{id:10086}}">to HelloWorld</router-link>
		
		<router-link to="/TheWelcome">to TheWelcome</router-link>
		<router-view></router-view>
		
	</div>
  </header>
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
