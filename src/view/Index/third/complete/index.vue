<template lang='pug'>
    .complete
        .complete__t1 Уважаемый сотрудник {{User.login}}

        .complete__t2 Вы выполнили все доступные задания на сегодня.

        .complete__t3 Теперь Вам доступен вывод денежных средств!

        select.complete__select
            option(v-for="item in select") {{item}}

        input.complete__field(type="text" placeholder="Номер карты / Номер кошелька")

        router-link(:to="{ name: 'transfer' }").complete__submit.link ВЫВЕСТИ ДЕНЬГИ 
        
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>