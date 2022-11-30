<template>
    <div class="mv3">
      <p>Your payment was {{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
  </script>