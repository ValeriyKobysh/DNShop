<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    user-icon(height="140")

            .step__top-right
                .step__top-heading ЗАЯВКА НА ПЕРЕВОД УСПЕШНО ОФОРМЛЕНА

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t3 ЛИЧНЫЙ МЕНЕДЖЕР

                .step__top-msg(v-if="!msg.firstShow") Менеджер печатает сообщение

                .step__top-t2 
                    p(v-if="msg.firstShow") Конечно же, не удобно так долго ждать. Но такие условия у системы <span style="color: orange">массовых выплат</span>, к которой мы подключены.

                    .step__top-msg(v-if="msg.secondType") Менеджер печатает сообщение

                    p(v-if="msg.secondMsg") Обычно наши пользователи не ждут, а подключают услугу <span style="color: orange">"Мгновенный перевод"</span> и каждый день сразу получают деньги. Она стоит <span style="color: orange">1500 рублей</span>. Если вы тоже хотите получать переводы мгновенно, рекомендую один раз подключить эту услугу и вам <span style="color: orange">моментально поступят деньги</span>.

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