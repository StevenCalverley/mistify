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
      <p>Input: {{ input }}</p>
      <hr class="my-4" />
      <m-input-group label="Test Label" description="Test Description">
        <m-input
          id="test2"
          v-model="input"
          placeholder="Test Me"
          :state="!hasError"
        />
      </m-input-group>
      <p>Input: {{ input }}</p>
      <hr class="my-4" />
      <m-input-group label="Test Label" description="Test Description">
        <m-select id="test-select" v-model="select" :options="options" />
      </m-input-group>
      <p>Selected: {{ select }}</p>
      <hr class="my-4" />
      <m-input-group description="Test Description" class="space-y-2">
        <m-checkbox-item
          id="test-checkbox-bool"
          label="Single Check return true/false"
          v-model="checkboxBool"
          :checked="checkboxBool"
        />
        <m-checkbox-item
          id="test-checkbox-string"
          label="Single Check Item String"
          trueValue="Single Check Item String"
          falseValue=""
          v-model="checkboxStr"
          :checked="checkboxStr === 'Single Check Item String'"
        />
      </m-input-group>
      <p>Checked Bool: {{ checkboxBool }}</p>
      <p>Checked String: {{ checkboxStr }}</p>

      <hr class="my-4" />
      <m-input-group
        description="Single Checkbox Items - Array"
        class="space-y-2"
      >
        <m-checkbox-item
          id="test-checkbox"
          label="Mutliple Check 1"
          v-model="checkboxArr"
          :checked="checkboxArr.includes('Mutliple Check 1')"
        />
        <m-checkbox-item
          id="test-checkbox"
          label="Mutliple Check 2"
          v-model="checkboxArr"
          :checked="checkboxArr.includes('Mutliple Check 2')"
        />
      </m-input-group>
      <p>Checked: {{ checkboxArr }}</p>

      <hr class="my-4" />
      <m-input-group description="Checkbox Items - Array" class="space-y-2">
        <m-checkbox
          id="test-checkbox"
          label="Mutliple Check 1"
          :options="checkboxMultipleOpts"
          v-model="checkboxMultipleArr"
          :checked="checkboxMultipleArr.includes('Mutliple Check 1')"
        />
      </m-input-group>
      <p>Checked: {{ checkboxMultipleArr }}</p>

      <hr class="my-4" />
      <m-input-group description="Checkbox Items - Array" class="space-y-2">
        <m-checkbox
          id="test-checkbox"
          label="Mutliple Check 1"
          :options="checkboxMultipleObjOpts"
          v-model="checkboxMultipleObjArr"
          :checked="checkboxMultipleObjArr.includes('Mutliple Check 1')"
        />
      </m-input-group>
      <p>Checked: {{ checkboxMultipleObjArr }}</p>

      <m-button class="mt-4" id="test">Test</m-button>
      <hr class="my-4" />
      <MIcon solid class="text-gray-700">
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
    select: '',
    options: ['Option 1', 'Option 2'],
    checkboxBool: false,
    checkboxStr: '',
    checkboxArr: ['Mutliple Check 2'],
    checkboxMultipleArr: [],
    checkboxMultipleOpts: ['Test Option 1', 'Test Option 2'],
    checkboxMultipleObjArr: [],
    checkboxMultipleObjOpts: [
      {
        value: 'TestOption1',
        display: 'Test Option 1',
      },
      {
        value: 'TestOption2',
        display: 'Test Option 2',
      },
    ],
  }),
  computed: {
    hasError() {
      return this.input && this.input.length < 4;
    },
  },
};
</script>

<style></style>
