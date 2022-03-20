<template>
  <div class="main">
    <div class="container">
      <the-sidebar></the-sidebar>

      <div class="router">
        <div class="back">
          <button class="btn btn-success" @click="$router.go(-1)">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>