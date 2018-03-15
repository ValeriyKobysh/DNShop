<template lang='pug'>
    section.third
        .container
            .third__container
                h2.third__heading Личный кабинет сотрудника {{User.login}}

                .third__data
                    .third__data-item В обработке:
                        span {{Cash.processing}} руб.

                    .third__data-item Доступно к выводу:
                        span {{Cash.available}} руб.

                router-view

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>