import jewel from "./assets/jewel.png";
import cat from "./assets/cat.png";
import animation from "./assets/animation.png";
import airline from "./assets/airline.png";
import contact from "./assets/contact.png";
import player from "./assets/player.png";
import social from "./assets/social.png";
import todo from "./assets/todo.png";
import kasper from "./assets/kasper.png";
import doctor from "./assets/doctor.png";
import library from "./assets/Library.png";

export const projects = [
    ["Library", `${library}`, "https://book-shelf-jade.vercel.app/", "https://github.com/e-n-eliseev/book-shelf", "Chrome, FireFox", "Приложение- мини библиотека.", "SPA приложение - библиотека, основанная на общедоступном сервисе Google Book API. В приложении есть возможность чтения/поиска/просмотра информации о книге, функционал отличается для авторизованных пользователей. На странице профиля отображается отображается личная информация аккаунта, есть возможность изменения данных, восстановления пароля, удаления аккаунта. На странице избранного находится список книг добавленных в избранное пользователем и перечень открытых для прочтения произведений.Реализован роутинг, аутентификация, фильтрация поисковых запросов по параметрам, манипуляция списком избранного, можно оставить отзыв. Данные хранятся удаленно в базе FireBase. Для авторизации в приложении необходимо ввести логин и пароль учетной записи, после чего вам будут доступны возможность добавления книги в избранное, просмотр отзывов, скачивание, страницы профиля, без авторизации доступно чтение и поисковые запросы. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, TypeScript, MUI, React, Router, Redux ToolKit,Redux-Thunk,  React-Hook-Form, React Progressive Graceful Image, FireBase."],
    ["Contacts Cabinet", `${contact}`, "https://contacts-list-cabinet.vercel.app/", "https://github.com/e-n-eliseev/contacts_list_cabinet", "Chrome, FireFox", "Приложение-менеджер списка контактов.", "SPA приложение - личный кабинет для работы со списком контактов. Реализован роутинг, аутентификация, есть возможность добавления/удаления/редактирования элемента списка, поиска по различным параметрам. Данные хранятся удаленно в базе FireBase. При загрузке страницы необходимо зарегистрироваться или ввести логин и пароль учетной записи, после чего вы автоматичеки будете переведены на страницу контактов. Формы добавления и поиска открываются при нажатии на соответствующие ярлыки, реализованы всплывающие подсказки.  При введении данных в форме необходимо нажать на знак '+' для применения изменений. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, MUI, React, Router, Redux, Redux-Thunk, TypeScript, FireBase."],
    ["Animation and decoration page", `${animation}`, "https://animations-taupe.vercel.app/", "https://github.com/e-n-eliseev/animations", "Chrome, FireFox", "Сайт - сборник стилизации элементов.", "На сайте собраны различные варианты стилизации и анимирования компонентов. Новые примеры работ периодически добавляются на страницу. Для навигации можно использовать кнопку меню или постраничную паггинацю. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, React, Hooks, Router."],
    ["Doctor's world", `${doctor}`, "https://doctor-s-world.vercel.app/", "https://github.com/e-n-eliseev/doctor-s_world", "Chrome, FireFox", "Страница сайта для врачей.", "Приложение - страница информационного сайта для врачей, при наведении курсора мыши на симптом, появляется его описание. Отзывчиво-адаптивное. Происходит динамическое вычисление расположения элементов карусели в зависимости от количества. Используется SSR.  Используемые технологии: HTML, SCSS, TypeScript, NextJs, Hooks."],
    ["Kaspersky Page", `${kasper}`, "https://lk-kappa.vercel.app/", "https://github.com/e-n-eliseev/lk", "Chrome, FireFox, Safari", "Страница сайта продажи програмого обеспечения.", "Страница создана без использования фреймворков. При первой прокрутке старницы ниже уровня блока формы покупки появляется \"липкое\" окно, попадающее при пересечении этой области вновь, пропадающее при пересечении границы в 20 пикселей от нижней границы страницы, для реализации используется Observer Api. Созданы кастомные выпадающие меню и чекбоксы. На мобильной версии сайта \"липкое\"окно сворачивается в кнопку, при нажатии на которое меню раскрывается в виде модального окна, не позволяя взаимодействовать с главным экраном. Цена изменяется в зависисмости от выбранных параметров, а размер шрифта - в зависимоти от величины итоговой суммы. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, JS."],
    ["Zoo Shop Page", `${cat}`, "https://fun-cat.vercel.app/", "https://github.com/e-n-eliseev/fun-cat", "Chrome, FireFox, Safari, IE11", "Страница сайта продажи корма для животных.", "Приложение - страница сайта продажи корма для животных, есть возможность выбора корма, сопровождающаяся анимированием, если навести курсор мыши на выбранный товар, то заголовок карточки изменится. Отзывчиво-адаптивное. Изображения адаптированы под экраны с повышенной плотностью пикселей  Используемые технологии: HTML, SCSS, React, Hooks, Redux."],
    ["To-do", `${todo}`, "https://react-to-do-nu.vercel.app/", "https://github.com/e-n-eliseev/react-to-do", "Chrome, FireFox", "Приложение-менеджер списка дел.", "SPA приложение - менеджер списка дел. Реализован роутинг,  есть возможность добавления/удаления/маскирования элемента списка, поиска по параметрам. Навигация использует паггинацию. Для загрузки элементов списка используются данные с внешнего API. Для того, чтобы открыть формы добавления и поиска нужно нажать на соответствующий переключатель. Приложение не подключено к базе данных, поэтому данные при перезагрузке странницы не сохранятся. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, Bootstrap, React, Router."],
    ["Social Network Page", `${social}`, "https://react-redux-app-opal.vercel.app/", "https://github.com/e-n-eliseev/react-redux-app", "Chrome, FireFox", "Страница социальной сети.", "Приложение имитирующее работу со страницей социальной сети. Реализована возможность добавления/удаления/модификации коментариев и подписи к фото. Реализован спам фильтр,например, нельзя писать оскорбительные фразы (словарь содержит: редиска, козел) или оставлять пустые комментарии, система выдаст предупредительное сообщение. Для загрузки комментариев используются данные с внешнего API. Приложение не подключено к базе данных, поэтому данные при перезагрузке странницы не сохранятся. Отзывчиво-адаптивное.  Используемые технологии: HTML, SCSS, React, Hooks, Redux, Redux-Thunk."],
    ["Music Player", `${player}`, "https://react-player-five.vercel.app/", "https://github.com/e-n-eliseev/react-player", "Chrome, FireFox", "Музыкальный плеер", "Приложение проигрывающее музыкальные файлы. Реализована система управления позволяющая запускать/останавливать/переключать прослушивание файла, есть возможность открыть плейлист, в котором визуально анимируется проигрываемый трек,  выбрать желаемый для воспроизведения файл без использования кнопок на панели. Есть возможность сделать воспроизведение списка циклическим, управлять воспроизведением используя временную шкалу. Отзывчиво-адаптивное. Используемые технологии: HTML, SCSS, React, Hooks."],
    ["AirLine Tikets Shop Page", `${airline}`, "https://airlines-test-task-e-n-eliseev.vercel.app/", "https://github.com/e-n-eliseev/airlines-test-task", "Chrome, FireFox", "Страница магазина поиска билетов.", "Приложение - страница сайта поиска авиабилетов по параметрам. Реализована динамическая фильтрация данных. Отзывчиво-адаптивное.  Используемые технологии: HTML, SCSS, React, Hooks, Redux. "],
    ["Jewerly Shop", `${jewel}`, "https://e-n-eliseev.github.io/jewelry-shop/", "https://github.com/e-n-eliseev/jewelry-shop", "Chrome, FireFox", "Верстка главной страницы сайта магазина ювелирных изделий.", "Верстка отзывчиво-адаптивной страницы сайта интернет магазина. Реализована анимация эффектов наведения на интерактивные элементы. На JS реализованы функции нажатия на кнопки выбора категории, возможность запустить воспроизведение видео с анимированным кастомным интерфейсом. Используемые технологии: HTML, SCSS(GRID),JS."],
]