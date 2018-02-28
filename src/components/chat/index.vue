<template lang='pug'>
    aside.chat
        header.chat__header Онлайн чат

        .chat__body
            ul.chat__list.list
                li.chat__msg.chat__msg_to
                    span.chat__avatar
                        img(src="http://via.placeholder.com/55x55")
                    
                    .chat__info
                        .chat__info
                            span.chat__time 15:39

                            span.chat__name Я

                        .chat__text Моментально на любую карту !!!


        footer.chat__footer
            input.chat__field(type="text")
            a.chat__send.link(href="javascript:;")
                //- send-icon
                svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="28" viewBox="0 0 535.5 535.5" xml:space="preserve")
                    polygon(points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75")
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>