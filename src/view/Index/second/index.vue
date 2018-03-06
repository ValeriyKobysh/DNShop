<template lang='pug'>
    section.second
        .second__container.container
            h2.second__heading Поздравляем!

            .second__desc Одобрена и произведена автоматическая регистрация на сайте. Ваш ip допущен к работе. 

            .second__desc Запишите данные для входа и войдите в систему.
                span Для обработки сегодня Вам доступно 6 заказов

            .second__border
                .second__data
                    .second__data-heading Данные для входа в систему:

                    .second__data-login Логин: 
                        span {{User.login}}

                    .second__data-password Пароль: 
                        span {{User.password}}

                .second__form
                    input.second__form-field(type="text" placeholder="Логин" :value="User.login")

                    input.second__form-field(type="password" placeholder="Пароль" :value="User.password")

                    router-link(:to="{ name: 'product', params: { id: 1 } }").second__form-submit.link ВОЙТИ В СИСТЕМУ
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>