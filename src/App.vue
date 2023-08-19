<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-btn :to="{ name: 'Home' }" icon="mdi-home" />
        <v-btn variant="text" :to="{ name: 'Recipes' }">Recipes</v-btn>

        <v-spacer></v-spacer>

        <v-btn :to="{ name: 'CreateRecipe' }" icon="mdi-plus" />
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup></script>
