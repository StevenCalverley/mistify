<template>
  <div>
    <header class="p-4 bg-gray-800">
      <h1 class="text-3xl text-gray-50">Mistify</h1>
    </header>
    <main class="mt-4 container mx-auto">
      <m-badge type="BLUE">Test</m-badge>
      <hr class="my-4" />
      <m-input
        id="test"
        v-model="input"
        placeholder="Test Me"
        :state="!hasError"
      />
      <m-button class="mt-4" id="test">Test</m-button>
      <MIcon>
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </MIcon>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    input: '',
  }),
  computed: {
    hasError() {
      return this.input && this.input.length < 4;
    },
  },
};
</script>

<style></style>
