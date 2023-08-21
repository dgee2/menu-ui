<template>
  <v-app>
    <v-app-bar flat color="primary">
      <v-app-bar-nav-icon :to="{ name: 'Home' }" icon="mdi-home" />
      <v-app-bar-title>Menu</v-app-bar-title>
      <v-btn variant="text" :to="{ name: 'Recipes' }">Recipes</v-btn>

      <v-app-bar-nav-icon :to="{ name: 'CreateRecipe' }" icon="mdi-plus" />
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup></script>
