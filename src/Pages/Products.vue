<script setup>

</script>

<template>
<header>
  <h1>Product List</h1>
  <div class="Buttons-Parent">
    <button class="Add-Button">ADD</button>
    <button id="delete-product-btn">MASS DELETE</button>
  </div>
</header>
</template>



<style scoped>

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
}

.Buttons-Parent{
  display: flex;
  justify-content: space-between;
  gap: 12px;

}
.Add-Button,#delete-product-btn {
  transition: ease-in-out 0.3s;
  border: none;
  width: auto;
  height: auto;
  padding: 12.2px;
  border-radius: 4px;
}
.Add-Button,#delete-product-btn:hover {
  transition: ease-in-out 0.3s;
  cursor: pointer;
}


#delete-product-btn{
  background-color: #d13e3e;
  color: white;
}
#delete-product-btn:hover {
  background-color: #d65151;
}

 .Add-Button:hover{
   background-color: #e5e1da;
 }

.Add-Button{
  background-color: #cecbc4;
  color: black;
}

</style>


