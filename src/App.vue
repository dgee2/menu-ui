<template>
  <v-app>
    <v-app-bar flat color="primary">
      <v-app-bar-nav-icon :to="{ name: 'Home' }" icon="mdi-home" />
      <v-btn variant="text" :to="{ name: 'Recipes' }">Recipes</v-btn>

      <v-spacer></v-spacer>

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
