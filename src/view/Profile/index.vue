<template lang='pug'>
    section.profile.grow
        transition(name="fade" mode="out-in")
            .spinner(v-if="Spinner")
                img(src="~img/images/spinner-img.svg" height="200")

            .spinner(v-if="Checked")
                img(src="~img/images/checked-img.svg" height="140")
        header-component

        .profile__container.container
            .profile__content 
                navbar-component

                router-view 

            chat-component
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>