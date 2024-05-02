# Diplom IoT

## Используемые технологии

Frontend:
  - Next
  - TypeScript
  - Tailwind
  - Chakra UI
  - Jotai

Backend:
  - FastAPI
  - PostgreSQL
  - Sqlalchemy

## Локальный запуск

Для начала необходимо установить **Node.js > 18.0.0**, **npm@latest**, **Python 3.10+** и **сервер PostgreSQL** с официального сайта бандлом. Далее клонируйте этот репозиторий и следуйте инструкциям ниже.

### Клиентская часть

1. Перейдите в папку **frontend**.
2. Установите зависимости, выполнив команду `npm install`.
3. Запустите сервер разработки, выполнив команду `npm run dev`, или продакшен сервер, выполнив команду `npm run prod`.
4. Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

### Серверная часть

1. Перейдите в папку **backend**.
2. Установите зависимости, выполнив команду `pip install -r requirements.txt`.
3. Запустите сервер разработки, выполнив команду `uvicorn main:app --port 8000 --reload`, или продакшен сервер, выполнив команду `uvicorn main:app --port 8000`.
4. Обращение к API будет доступно по адресу [http://localhost:8000/api/{endpoint}](http://localhost:8000/api). Документация к коду выполнена в Swagger и Re-doc и будет доступна по адресу [http://localhost:8000/docs](http://localhost:8000/docs) и [http://localhost:8000/re-doc](http://localhost:8000/re-doc).