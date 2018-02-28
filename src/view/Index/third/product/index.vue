<template lang='pug'>
    .product
        .product__heading Задание {{$route.params.id}}/{{maxProduct}} - Подтверждение заказа

        .product__desc Прямо сейчас, Вам нужно внести данные с заказа в поля ниже !

        .product__info
            .product__img
                img(:src="Products[getProduct].img")

            ul.product__list.list
                li.product__item
                    span.product__title Бытовая техника:
                    span.product__value {{Products[getProduct].product}}

                li.product__item
                    span.product__title Номер заказа:
                    span.product__value {{Products[getProduct].order}}

                li.product__item
                    span.product__title Город доставки: 
                    span.product__value {{Products[getProduct].city}}

                li.product__item
                    span.product__title Имя получателя:
                    span.product__value {{Products[getProduct].name}}

                li.product__item
                    span.product__title Время отправки: 
                    span.product__value {{Products[getProduct].time}}

        .product__form
            .product__group
                label.product__lbl Бытовая техника<span>*</span>
                input.product__field(type="text")

            .product__group
                label.product__lbl Номер заказа<span>*</span>
                input.product__field(type="text")

            .product__group
                label.product__lbl Город доставки<span>*</span>
                input.product__field(type="text")

            .product__group
                label.product__lbl Имя получателя<span>*</span>
                input.product__field(type="text")

            .product__group
                label.product__lbl Время отправки<span>*</span>
                input.product__field(type="text")

            .product__group
                router-link(:to="nav()").product__submit.link Подтвердить и добавить заказ в систему
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>