<template lang='pug'>
    aside.chat
        header.chat__header Онлайн чат

        .chat__body
            ul.chat__list.list
                li.chat__msg(v-for="msg in msgs" :class="[ msg.type ? 'chat__msg_to' : 'chat__msg_from' ]")
                    span.chat__avatar
                        img(:src="msg.avatar")
                    
                    .chat__info
                        .chat__top
                            span.chat__time {{msg.time}}

                            span.chat__name {{msg.name}}

                        .chat__text {{msg.text}}


        footer.chat__footer
            input.chat__field(type="text" v-model="newMsg" @keydown.enter="addNewMsg")
            a.chat__send.link(href="javascript:;" @click="addNewMsg")
                //- send-icon
                svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="28" viewBox="0 0 535.5 535.5" xml:space="preserve")
                    polygon(points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75")
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>