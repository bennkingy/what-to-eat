<template>
  <div class="add-meal
   container z-depth-1">
    <h2 class="center-align indigo-text">Add New Meal</h2>
    <form @submit.prevent="AddMeal">
      <div class="field title">
        <label for="title">meal
             title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (press tab to add):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add meal

        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddMeal',
  data(){
    return{
      title: null,
      ingredients: [],
      another: null,
      feedback: null
    }
  },
  methods: {
    AddMeal
    (){
      console.log(this.title, this.ingredients)
    },
    addIng(){
      if(this.another){
        this.ingredients.push(this.another)
        // Set the ingredients and warning message to null each ingredient added
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to an an ingredient'
      }
    }
  }
}
</script>

<style>
.add-meal
{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-meal
 h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-meal
 .field{
  margin: 20px auto;
}
</style>