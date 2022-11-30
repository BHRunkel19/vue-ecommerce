<template>
    <section>
      <div class="mt4">
        <i class="fas fa-times fa-8x dark-red" />
      </div>
      <PaymentMessage message="not successful" />
    </section>
  </template>
  <script>
  import PaymentMessage from '@/components/PaymentMessage.vue';
  export default {
    components: {
      PaymentMessage
    }
  }
  </script>