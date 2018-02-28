<template lang='pug'>
    section.first
        .first__one
            .first__one-container.container
                .first__one-column
                    p.first__one-big Здравствуйте, меня зовут

                    p.first__one-name Анна Вергус. 

                    p Я являюсь директором интернет магазина «DNshop». На данный момент нам требются сотрудники для удаленной работы на дому. Работать можно в любой стране дистанционно (на дому).
 
                    p Работать можно с любого устройства главное, что бы был доступ в Интернет. 

                    p Работа несложная, справиться даже школьник или пенсионер.

                .first__one-column
                    h3.first__one-heading Какая зарплата Вас ждет?

                    p.first__one-text Каждый наш сотрудник на дому гарантированно получает от 2500 рублей в день! Выплаты возможны ежедневно на электронный кошелек или на банковскую карту в USD по курсу ЦБ РФ на день оплаты!

                    h3.first__one-heading Условия работы:

                    p.first__one-text
                        span Опыт и вложенения 
                        | - Не требуются! 
                        span Время работы 
                        | - Свободный график 
                        span Гарантированная з/п 
                        | - От 2500 рублей в день или 7,5% от обработанного заказа

        .first__two
            .first__container.container
                h2.first__two-heading Работая с нами Вы получаете:

                ul.first__two-list.list
                    li.first__two-item(v-for="item in returnData")
                        span.first__two-icon
                            component(:is="item.icon" height="75")

                        span.first__two-title {{item.title}}

                        span.first__two-desc {{item.desc}}

        .first__three
            .first__three-container.container
                .first__three-left
                    h2.first__three-heading Начать работу 

                    p.first__three-text Для того, чтобы стать нашим официальным сотрудником, Вам необходимо нажать на кнопку ниже. Вы пройдете автоматичскую регистрацию. Вам будут присвоены данные для входа в систему. Обязательно запишите эти данные. После этого введите их в форму и войдите в систему. Далее можно приступать к работе, следуя подсказкам системы.

                    router-link(:to="{ name: 'homeSecond' }").first__three-btn.link НАЧАТЬ РАБОТУ СОТРУДНИКОМ!

                .first__three-right Набор сотрудников ограничен:
                    span 2

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>