<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-heading ЗАЩИЩЕННАЯ ЛИНИЯ ГОТОВА К ИСПОЛЬЗОВАНИЮ

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t2 Чтобы <span style="color: orange">денежный перевод</span> был отправлен, вам нужно один раз получить цифровую подпись, которой заверяются все денежные переводы. Это обязательная <span style="color: orange">мена</span> безопасности процессингового центра, обрабатывающего переводы через защищенные линии связи. <span style="font-weight: bold">Сразу после получения лицензионного ключа, вам будет отправлен денежный перевод.</span>

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

                p.step__bot-t1 Статус: <span class="green">Готов к отправке</span>

                p.step__bot-t2 Защищенная линия связи полностью настроена. <br />Получите личную цифровую подпись для заверения всех <br />ваших дальнейших переводов. 


                p.step__bot-t2 Подключение защищенной линии:  <span class="blue bold large">1625 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'insurance' }") ПОЛУЧИТЬ ЦИФРОВУЮ ПОДПИСЬ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>