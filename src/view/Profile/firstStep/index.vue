<template lang='pug'>
    .step
        .step__top
            .step__top-left
                ul.step__top-list.list
                    li.step__top-item
                        span Счет № 
                        span 1092

                    li.step__top-item
                        span Дата
                        span 02.11.2017

                    li.step__top-item
                        span Сумма 
                        span 550руб.
            .step__top-right
                .step__top-heading ВЫВОД ЗАРАБОТАННЫХ СРЕДСТВ

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t1 ОАО “MONEY-ONE”

                .step__top-t2 
                    p Чтобы <span style="color: orange">вывести деньги</span>, укажите, куда вам отправить перевод и один раз пополните счет на <span style="font-weight: bold">550 РУБ</span> для его активации. Вам будут отправлены <span style="color: orange">все деньги</span> с вашего баланса
                    //- p Вам открыт счет в системе массовых выплат. На счет зачислены заработанные вами деньги.

        .step__bot
            .step__bot-header ВЫВОД СРЕДСТВ

            .step__bot-body
                ul.step__bot-balans.list
                    li.step__bot-account
                        span.step__bot-account-bg
                            img(src="~img/images/account-img.svg")

                        span.step__bot-account-title Счет№:

                        span.step__bot-account-value 1773569865 

                    li.step__bot-sum
                        span.step__bot-sum-bg
                            img(src="~img/images/coint-img.svg")

                        span.step__bot-sum-title Баланс счета:

                        span.step__bot-sum-value 37458 руб

                .step__bot-form
                    .step__bot-group
                        label.step__bot-lbl Куда отправить перевод
                        select.step__bot-field
                            option Option 1
                            option Option 2

                    .step__bot-group 
                        label.step__bot-lbl Номер карты / кошелька
                        input.step__bot-field(type="text")


                    router-link.step__bot-submit.link(:to="{ name: 'automatic' }") ПОПОЛНИТЬ СЧЕТ И ВЫВЕСТИ ДЕНЬГИ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>