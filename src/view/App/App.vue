<template lang="pug">
  #app

    router-view

    foo
</template>

<script src="./script.js"></script>

<style lang="scss">
    #app{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .spinner{
        position: fixed;
        top: 0;
        left: 0;
        @include size(100%);
        @include aligment();
        background-color: rgba(bg-color(grey-dark), 1);
        z-index: 1000;

        img{ 
            animation-name: wow;
            animation-duration: 300ms
        }
    }

    @keyframes wow{
        0%{ transform: scale(0); }
        70%{ transform: scale(1.1) }
        100%{ transform: scale(1) }
    }
</style>
