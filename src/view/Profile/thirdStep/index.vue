<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    user-icon(height="140")

            .step__top-right
                .step__top-heading ПРЕВЫШЕН ЛИМИТ ПО СУММЕ ПЕРЕВОДА

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t3 ЛИЧНЫЙ МЕНЕДЖЕР

                .step__top-t2 
                    p Здравствуйте. Меня зовут Андрей Ковалев. Я ваш личный менеджер. Ваш денежный перевод в сумме 38000 рублей я только что отправил в обработку. Вам осталось только оплатить комиссию за перевод средств, которая берет система массовых выплат.

                    p Чтобы завершить перевод, увеличьте лимит по сумме перевода, подключив тариф "Максимум". Это стоит всего 1120 рублей. Как только подключите, они сразу отправят вам деньги.

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