<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    user-icon(height="140")

            .step__top-right
                .step__top-heading ЗАЯВКА НА ПЕРЕВОД УСПЕШНО ОФОРМЛЕНА

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t3 ЛИЧНЫЙ МЕНЕДЖЕР

                .step__top-t2 
                    p Конечно же, не удобно так долго ждать. Но такие условия у системы массовых выплат, к которой мы подключены.

                    p Обычно наши пользователи не ждут, а подключают услугу "Мгновенный перевод" и каждый день сразу получают деньги. Она стоит 1500 рублей. Если вы тоже хотите получать переводы мгновенно, рекомендую один раз подключить эту услугу и вам моментально поступят деньги.

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

                p.step__bot-t1 Статус: <span class="green"> Заявка оформлена</span>

                p.step__bot-t2 Заявка на перевод оформлена.<br /><span class="black">Переводы, по сумме превышающие 20000 рублей<br />поступают в течении 30 рабочих дней.</span ><br />Ожидайте поступления средств.

                router-link.step__bot-submit.link(:to="{ name: 'fiveStep' }") ПОДКЛЮЧИТЬ ТАРИФ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>