import jewel from "./assets/jewel.png";
import cat from "./assets/cat.png";
import airline from "./assets/airline.png";
import contact from "./assets/contact.png";
import player from "./assets/player.png";
import social from "./assets/social.png";
import todo from "./assets/todo.png";

export const projects = [
    ["Contacts Cabinet", `${contact}`, "https://contacts-list-cabinet.vercel.app/", "https://github.com/e-n-eliseev/contacts_list_cabinet", "Chrome, FireFox", "Приложение-менеджер списка контактов.", "SPA приложение - личный кабинет для работы со списком контактов. Реализован роутинг, аутентификация, есть возможность добавления/удаления/редактирования элемента списка, поиска по различным параметрам. Данные хранятся удаленно в базе FireBase. При загрузке страницы необходимо зарегистрироваться или ввести логин и пароль учетной записи, после чего вы автоматичеки будете переведены на страницу контактов. Формы добавления и поиска открываются при нажатии на соответствующие ярлыки, реализованы всплывающие подсказки.  При введении данных в форме необходимо нажать на знак '+' для применения изменений. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, MUI, React, Router, Redux, Redux-Thunk, TypeScript, FireBase."],
    ["Zoo Shop Page", `${cat}`, "https://fun-cat.vercel.app/", "https://github.com/e-n-eliseev/fun-cat", "Chrome, FireFox, Safari, IE11", "Страница сайта продажи корма для животных.", "Приложение - страница сайта продажи корма для животных, есть возможность выбора корма, сопровождающаяся анимированием. Отзывчиво-адаптивное.  Используемые технологии: HTML, SCSS, React, Hooks, Redux."],
    ["To-do", `${todo}`, "https://react-to-do-nu.vercel.app/", "https://github.com/e-n-eliseev/react-to-do", "Chrome, FireFox", "Приложение-менеджер списка дел.", "SPA приложение - менеджер списка дел. Реализован роутинг,  есть возможность добавления/удаления/маскирования элемента списка, поиска по параметрам. Навигация использует паггинацию. Для загрузки элементов списка используются данные с внешнего API. Для того, чтобы открыть формы добавления и поиска нужно нажать на соответствующий переключатель. Приложение не подключено к базе данных, поэтому данные при перезагрузке странницы не сохранятся. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, Bootstrap, React, Router."],
    ["Social Network Page", `${social}`, "https://react-redux-app-opal.vercel.app/", "https://github.com/e-n-eliseev/react-redux-app", "Chrome, FireFox", "Страница социальной сети.", "Приложение имитирующее работу со страницей социальной сети. Реализована возможность добавления/удаления/модификации коментариев и подписи к фото. Реализован спам фильтр,например, нельзя писать оскорбительные фразы (словарь содержит: редиска, козел) или оставлять пустые комментарии, система выдаст предупредительное сообщение. Для загрузки комментариев используются данные с внешнего API. Приложение не подключено к базе данных, поэтому данные при перезагрузке странницы не сохранятся. Отзывчиво-адаптивное.  Используемые технологии: HTML, SCSS, React, Hooks, Redux, Redux-Thunk."],
    ["Music Player", `${player}`, "https://react-player-five.vercel.app/", "https://github.com/e-n-eliseev/react-player", "Chrome, FireFox", "Музыкальный плеер", "Приложение проигрывающее музыкальные файлы. Реализована система управления позволяющая запускать/останавливать/переключать прослушивание файла, есть возможность открыть плейлист, в котором визуально анимируется проигрываемый трек,  выбрать желаемый для воспроизведения файл без использования кнопок на панели. Есть возможность сделать воспроизведение списка циклическим, управлять воспроизведением используя временную шкалу. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, React, Hooks."],
    ["AirLine Tikets Shop Page", `${airline}`, "https://airlines-test-task-e-n-eliseev.vercel.app/", "https://github.com/e-n-eliseev/airlines-test-task", "Chrome, FireFox", "Страница магазина поиска билетов.", "Приложение - страница сайта поиска авиабилетов по параметрам. Реализована динамическая фильтрация данных. Отзывчиво-адаптивное.  Используемые технологии: HTML, SCSS, React, Hooks, Redux. "],
    ["Jewerly Shop", `${jewel}`, "https://e-n-eliseev.github.io/jewelry-shop/", "https://github.com/e-n-eliseev/jewelry-shop", "Chrome, FireFox", "Верстка главной страницы сайта магазина ювелирных изделий.", "Верстка отзывчиво-адаптивной страницы сайта интернет магазина. Реализована анимация эффектов наведения на интерактивные элементы. На JS реализованы функции нажатия на кнопки выбора категории, возможность запустить воспроизведение видео с анимированным кастомным интерфейсом. Используемые технологии: HTML, SCSS(GRID),JS."],
]