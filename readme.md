`Вложенный роутинг.`

# Принципы построения базового вложенного роутинга.

! Вложенный роутинг находится на странице contacts

1) В главном файле роутер маин(Routers.tsx) нужно правильно раставлять роуты
    --- Сначала роуты с явным значением  path="/info"
    --- Динамические после явных <Route path='/:topicId'>
    --- Внимание на exact его нужно ставить если путь оканчивается т.е. `exact  path="/info"` не подразумевает что будет маршрут  `exact  path="/info/ааа"`, иначе не сработает 404 страница
    --- 404 страница идет в самом конце списка роутов ( если нет совпадений то выдаст страницу 404 )

2) Волженный роутинг (ContactsRouter.tsx) строиться по такому-же принципу: 
    --- явные маршруты `/info/a1`
    --- динамические <Route path={`${match.path}/:topicId`}>
    --- роут основной страницы (exact path={ `${ match.path }` }) т.е. если мы сейчас на странице `/info` то её базовое отображение будет по этому роуту.
    --- 404 страница 

3) Принцип отображения:
    1. Шапка вверху отдельный елемент он не трогается ( в ней линки на страницы )
    2. После шапки идет блок контент в нем отображаем роуты ( роуты которые показывают контент после перехода по линке которые  в шапке )
    3. У страницы уже есть свой layout куда можно добавить вложенный роутинг
        --- слева меню с уникальными линками принадлежащими конкретным страницам 
        --- справа блок с роутами ( вложенными для конкретной страницы который отобразит информацию после нажатия на линки которые находятся слева в меню для каждой страницы разные )
        