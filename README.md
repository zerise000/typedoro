# Typedoro - A pomodoro timer in typescript
## What is Typedoro

Typedoro is a pomodoro timer written in typescript; it is meant as a personal 
project both to learn a new language and because I needed a time management 
tool for studying. It should provide both a CLI tool and a GUI, 
so the final user can decide which interface fits better for him/her.

## Is it ready?

No not for now. Currently the project is CLI only, and is able only
to set a simple timer without proper schedule setting.
Once I've finished to write basic logic on command line 
I'll start making the GUI.

# TODO

## CLI:
- [X] setting up the timer
- [X] switching between timebreak and study sessions
- [X] color formatting
- [ ] passing schedule through command line
- [ ] passing schedule through text file 
- [ ] daemon execution (still need to decide if I want to implement it)

## GUI:
- [ ] first definition of the structure

## How to execute
clone the repo, then exec the following commands:
```console
  cd <dest dir>
  npm i typescript --save-dev
  npx tsc
  node ./build/index.js 
```
