# Transcendence 
This is the Codam College Core Curriculum final project.

The current project is forked from [this](https://github.com/42-jkoers/ft_transcendence) repository and is a collaboration of 
- [Aileen Chen](https://github.com/aprilmayjune135)
- [Irem Ergun](https://github.com/ergunirem)
- [Joppe Koers](https://github.com/SirMorfield)
- [Olga Samara](https://github.com/olsamar)
- [Xiaojing X](https://github.com/ccxxj)


## Description
It's a full stack, dockerised single-page web app with TypeScript, NodeJS, NextJS OAauth, 2FA, web sockets.
The goal was to create a project for the mighty Pong contest. 


## Overview
Users can will play Pong with others. Besides, a real-time chat is provided.

The project requirements were:

- [x] The backend must be written in NestJS.
- [x] The frontend must be written with a TypeScript framework of your choice. We are using VueJS.
- [x] You are free to use any library you want to in this context. However, you must use
the latest stable version of every library or framework used in your project.
- [x] You must use a PostgreSQL database. That’s it, no other database.
- [x] Your website must be a single-page application. The user should be able to use the
Back and Forward buttons of the browser.
- [x] Your website must be compatible with the latest stable up-to-date version of
Google Chrome, Firefox, and Safari.
- [x]  The user should encounter no unhandled errors and no warnings when browsing the
website.


## Prerequisites
- gpg --> brew install gpg
- make
- nodeJS
- docker
- docker-compose

## Setup
```$ make```\
This will do the following:
1. Ask for a password
2. Decrypt ./backend/inject-secrets.sh.gpg to ./backend/inject-secrets.sh
3. Run ./backend/inject-secrets.sh
4. Copy ./backend/.env-example to ./backend/.env
5. Fill out all the secret data

If you edit the secrets in ./backend/inject-secrets.sh, then run `make encrypt-secrets-file` and commit the ./backend/inject-secrets.sh.gpg to store the secrets safely.
