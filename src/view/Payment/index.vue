<template lang='pug'>
    .payment.grow
        header-component

        .payment__content
            h1.payment__heading Интернет - магазин бытовой техники DNShop

            .payment__desc Активация аккаунта User1508. Вывод (133.04$)

            .payment__avatar
                img(src="http://via.placeholder.com/135x135")

            .payment__methods
                .payment__methods-title ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ:

                ul.payment__methods-list.list
                    li.payment__methods-item(v-for="item, index in methods" :key="index" :class="{ active: item.active }" @click="toggleItem(index)")
                        component(:is="item.icon" height="40" width="40") 


            .payment__price Стоимость: 
                span 153 РУБ.

            a(:href="link()").payment__submit.link ОПЛАТИТЬ УСЛУГУ 
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>