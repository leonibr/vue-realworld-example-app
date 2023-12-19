<template>
  <v-sheet width="300" class="mx-auto">
    <v-form ref="form">
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
<script>
import { ref } from "vue";

export default {
  name: "RwvVuetify",
  compatConfig: {
    MODE: 3,
    COMPONENT_V_MODEL: false,
    COMPONENT_ASYNC: false,
    INSTANCE_LISTENERS: false,
    COMPONENT_FUNCTIONAL: false,
    ATTR_FALSE_VALUE: false
  },
  setup() {
    const form = ref(null);

    const checkbox = ref(false);
    return {
      form,
      checkbox
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.form.value.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.form.value.reset();
    },
    resetValidation() {
      this.form.value.resetValidation();
    }
  }
};
</script>
