# Заголовок проекта
Разработка блога на React с использованием TypeScript и Material-UI

## Цель проекта
Создать веб-приложение блога с возможностью публикации статей и комментариев, используя React, TypeScript и Material-UI. Данные должны храниться в localStorage, и должен быть создан и использован хук `useLocalStorage`.

## Описание проекта
Вам предстоит разработать веб-приложение блога, позволяющее пользователям публиковать статьи и оставлять комментарии к статьям, используя React, TypeScript и Material-UI.

## Требования

### Интерфейс блога
- Создайте главную страницу, на которой будут отображаться все опубликованные статьи.
- Для каждой статьи должны быть доступны заголовок, автор, дата публикации и текст статьи.
- Добавьте страницу с подробным просмотром статьи, на которой отображается текст статьи и комментарии к ней.
- Реализуйте форму для создания новой статьи с полями: заголовок, автор и текст статьи.
- Добавьте возможность оставлять комментарии к статьям на странице просмотра статьи. (например, на странице статьи)

### Функциональные требования
- Все данные о статьях и комментариях должны храниться в localStorage браузера.
- Реализуйте валидацию полей формы создания статьи (например, заголовок и текст статьи не могут быть пустыми).
- При создании статьи, автор и дата публикации должны быть автоматически заполнены. (автора можно забить в localstorage по ключу author с полями name, surname)
- Добавьте возможность удалять статьи и комментарии.

### Технические требования
- Используйте TypeScript для разработки приложения.
- Для создания пользовательского интерфейса используйте библиотеку Material-UI.
- Разработайте компоненты для отображения статей и комментариев.
- Создайте хук `useLocalStorage` для управления данными в localStorage.
