<template lang='pug'>
    .product

        transition(name="fade" mode="out-in")
        .spinner(v-if="Spinner")
            img(src="~img/images/spinner-img.svg" height="200")

        .spinner(v-if="Checked")
            img(src="~img/images/checked-img.svg" height="140")

        .product__heading Задание {{$route.params.id}}/{{maxProduct}} - Подтверждение заказа

        .product__desc Прямо сейчас, Вам нужно внести данные с заказа в поля ниже !

        .product__info
            .product__img
                img(:src="Products[getProduct].img")

            ul.product__list.list
                li.product__item
                    span.product__title Бытовая техника:
                    span.product__value {{Products[getProduct].product}}
                        span.product__copy(@click="copyMT('product')") Копировать

                li.product__item
                    span.product__title Номер заказа:
                    span.product__value {{Products[getProduct].order}}
                        span.product__copy(@click="copyMT('order')") Копировать

                li.product__item
                    span.product__title Город доставки: 
                    span.product__value {{Products[getProduct].city}}
                        span.product__copy(@click="copyMT('city')") Копировать

                li.product__item
                    span.product__title Имя получателя:
                    span.product__value {{Products[getProduct].name}}
                        span.product__copy(@click="copyMT('name')") Копировать

                li.product__item
                    span.product__title Время отправки: 
                    span.product__value {{Products[getProduct].time}}
                        span.product__copy(@click="copyMT('time')") Копировать

        .product__form
            .product__group
                label.product__lbl Бытовая техника<span>*</span>
                input.product__field(type="text" :value="paste.product")
                span.product__copy(@click="pasteMT('product')") Вставить

            .product__group
                label.product__lbl Номер заказа<span>*</span>
                input.product__field(type="text" :value="paste.order")
                span.product__copy(@click="pasteMT('order')") Вставить

            .product__group
                label.product__lbl Город доставки<span>*</span>
                input.product__field(type="text" :value="paste.city")
                span.product__copy(@click="pasteMT('city')") Вставить

            .product__group
                label.product__lbl Имя получателя<span>*</span>
                input.product__field(type="text" :value="paste.name")
                span.product__copy(@click="pasteMT('name')") Вставить

            .product__group
                label.product__lbl Время отправки<span>*</span>
                input.product__field(type="text" :value="paste.time")
                span.product__copy(@click="pasteMT('time')") Вставить

            .product__group
                router-link(:to="nav()").product__submit.link Подтвердить и добавить заказ в систему
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>