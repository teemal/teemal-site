<template>
  <div class="home">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        Add:
        <div v-for="(val, key) in this.buttons" :key="key">
          <Button :name="key" :color="val" v-on:button_selected="changeButtons"/>
        </div>
        <component :is="form_name" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import RamenForm from "../components/forms/RamenForm"
import NewRecipeForm from "../components/forms/NewRecipeForm"

export default {
  name: "Home",
  data() {
    return {
      form_name: "",
      buttons: {
        Recipe: "",
        "Food Thoughts": "",
        "Ramen Review": "is-primary"
      },
      forms: {
        Recipe: "NewRecipeForm",
        "Food Thoughts": "",
        "Ramen Review": "RamenForm"
      }
    };
  },
  components: {
    Button,
    RamenForm,
    NewRecipeForm
  },
  methods: {
    changeButtons(butt_name){
      this.form_name = this.forms[butt_name];
      for(const key in this.buttons){
        if(key == butt_name){
          this.buttons[key] = 'is-primary'
        } else {
          this.buttons[key] = ''
        }
      }
    }
  }
};
</script>

<style scoped></style>
