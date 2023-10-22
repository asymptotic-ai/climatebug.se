<template>
  <nav class="bg-pastel-blue p-4">
    <div class="container mx-auto">
      <ul class="flex justify-around">
        <li><router-link to="/" class="text-white hover:text-gray-700">Home</router-link></li>
        <li><router-link to="/about" class="text-white hover:text-gray-700">About Us</router-link></li>
        <li><router-link to="/contact" class="text-white hover:text-gray-700">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
};
</script>
