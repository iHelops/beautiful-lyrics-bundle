# Beautiful Lyrics Bundle
Этот репозиторий содержит собранную версию расширения [`Beautiful Lyrics`](https://github.com/surfbryce/beautiful-lyrics) для `Spicetify` с измененными ссылками на статические файлы. Это временное решение, которое заменяет ссылки на статические файлы с CDN автора на публичные источники. Поводом для этого стало [неработающее CDN](https://github.com/surfbryce/beautiful-lyrics/issues/1080) у автора расширения.

## Изменения:
- Шрифты используются из репозитория https://github.com/awdev1/beautitifullyricsfont (thanks @awdev1)
- Словари `kuromoji` используются из оригинального репозитория `kuromoji.js` https://github.com/takuyaa/kuromoji.js/tree/master/dict
- Скрипт `beautiful-lyrics.mjs` переделан для использования сборки из текущего репозитория, а так же вырезаны авто-обновления.

## Установка
1. Скачайте файл `beautiful-lyrics.mjs` из этого репозитория и поместите его в следующую директорию

| Platform      | Path                             |
| ------------- |:--------------------------------:|
| Windows       | `%appdata%\spicetify\Extensions` |
| Linux/MacOS	| `~/.config/spicetify/Extensions` |

2. Активируйте расширение с помощью следующих команд
```console
$ spicetify config extensions beautiful-lyrics.mjs
$ spicetify apply
```

## Удаление
1. Отключите расширение с помощью следующих команд
```console
$ spicetify config extensions beautiful-lyrics.mjs-
$ spicetify apply
```

2. Удалите файл из шага #1 в инструкции по установке. (Необязательно)

## Заключение
Пожалуйста, не используйте этот способ установки расширения, если вы не испытываете проблем с оригинальным расширением [`Beautiful Lyrics`](https://github.com/surfbryce/beautiful-lyrics). Данная версия не будет обновляться автоматически и очередное обновление Spotify может его сломать.