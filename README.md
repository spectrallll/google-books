### Project run

1. Clone repository
```
https://github.com/spectrallll/future-group.git
```
2. Run app
```
yarn install
yarn start
```
3. Application available at
```
localhost:3000
```
4. Tests
```
На скриншотные тесты можно сгенерировать отчёт - yarn test:ui:report,
далее запустить html из .loki/report.html
На юнит тесты так же генерируется отчёт.
```
```
yarn test:unit - юнит тесты
yarn test:e2e - e2e тесты Cypress
yarn test:ui - скриншотные тесты. запускается yarn storybook, потом yarn test:ui
```
5. Config
```
build - конфигурация Webpack
jest - конфигурация Jest
storybook - конфигурация Storybook
babel - плагины для Babel
```

### Архитектура: [*Feature-Sliced Design*](https://feature-sliced.design/ru/)

1. **Shared** — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.
2. **Entities** (сущности) — бизнес-сущности (например, User, Product или Order).
3. **Features** (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.
4. **Widgets** (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки.
5. **Pages** (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
6. **Processes** — сложные сценарии, покрывающие несколько страниц (например, аутентификация).
7. **App** — настройки, стили и провайдеры для всего приложения.