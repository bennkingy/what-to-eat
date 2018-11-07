<template>
  <div class="index container">
    <div class="card" v-for="meal in meals" :key="meal.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteMeal(meal.id)">delete</i>
        <h2 class="indigo-text">{{ meal.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in meal.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data(){
    return{
      meals: []
    }
  },
  methods: {
    deleteMeal(id){
      this.meals = this.meals.filter(meal => {
        return meal.id != id
      })
    }
  },
  created(){
  db.collection('meals').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data())
          let meal = doc.data()
          meal.id = doc.id
          this.meals.push(meal)
        })
      })
  }
}
</script>

<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>