<template>
  <div
    class="
      container
      text-center
      flex
      text-2xl
      bg-blue-300
      space-x-5
      text-white
      w-full
    "
  >
    <router-link to="/Myprofile" class="hover:bg-blue-500 text-center"
      >Profile</router-link
    >
    <router-link to="/Contactinfo" class="hover:bg-blue-500 text-center"
      >Contact</router-link
    >
    <span class="text-red-500">| Router-link 2 Pages and Some Basic Info</span>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
};
</script>
