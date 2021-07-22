Сборка goit-js-hw-10-food-service
!!! Важно 
После распаковки себе на комп
зайти в терминале в папку goit-js-hw-10-food-service
Перед началом работы
Один раз на проект установить все зависимости.

npm ci

Разработка
Запустить режим разработки.
npm run dev

Во вкладке браузера перейти по адресу http://localhost:1234.

Деплой
!!! запускается командой 
npm run deploy

Сборка будет собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку gh-pages. 

 Для этого необходимо в файле package.json отредактировать заменив имя_пользователя на свои:

"repository": {
    "type": "git",
    "url": "git+https://github.com/имя_пользователя/goit-js-hw-10-food-service.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/имя_пользователя/goit-js-hw-10-food-service/issues"
  },
  "homepage": "https://имя_пользователя.github.io/goit-js-hw-10-food-service/"
  
На всякий случай стоит зайти в настройки репозитория Settings > Pages и убедиться что продакшен версии файлов раздаются из папки /root ветки gh-pages.
