<template lang='pug'>
    .navbar
        .navbar__top
            .navbar__login
                span.navbar__avatar
                    img(src="http://via.placeholder.com/55x55")

                | LOGIN123

            ul.navbar__info.list
                li.navbar__item
                    span.navbar__title Регион:&nbsp;
                    span.navbar__value Россия

                li.navbar__item
                    span.navbar__title Баланс:&nbsp;
                    span.navbar__value 120 РУБЛЕЙ

        .navbar__bot
            ul.navbar__bot-list.list
                li.navbar__bot-item
                    span.navbar__bot-value 5476571 РУБ

                    span.navbar__bot-title ЗАРАБОТАНО СЕГОДНЯ

                li.navbar__bot-item
                    span.navbar__bot-value 577476

                    span.navbar__bot-title ПОКУПАТЕЛЕЙ В БАЗE

                li.navbar__bot-item
                    span.navbar__bot-value 3 СЕК НАЗАД

                    span.navbar__bot-title ПОСЛЕДНЯЯ ВЫПЛАТА
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>