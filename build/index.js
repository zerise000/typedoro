"use strict";
const sleep = require('sleep');
const argv = require('minimist')(process.argv.slice(2));
class Time {
    constructor(hours, minutes, seconds) {
        this.seconds = hours * 3600 + minutes * 60 + seconds;
    }
    getSeconds() {
        return this.seconds;
    }
    update() {
        if (this.seconds == 0)
            return false;
        this.seconds--;
        return true;
    }
    print() {
        let hours_left = Math.floor(this.seconds / 3600);
        let minutes_left = Math.floor(this.seconds / 60);
        let seconds_left = this.seconds % 60;
        console.log("time left: %d:%d:%d", hours_left, minutes_left, seconds_left);
    }
}
function countdown(timer, final_msg) {
    do {
        console.clear();
        console.log(final_msg);
        timer.print();
        sleep.sleep(1);
    } while (timer.update());
}
function main() {
    console.log(argv);
    let sessions = [
        [new Time(0, 20, 0), new Time(0, 5, 0)],
        [new Time(0, 20, 0), new Time(0, 5, 0)],
        [new Time(0, 20, 0), new Time(0, 20, 0)]
    ];
    if (argv['schedule'] !== undefined) {
        let sessions = [
            [new Time(0, 5, 0), new Time(0, 5, 0)],
            [new Time(0, 5, 0), new Time(0, 5, 0)],
            [new Time(0, 5, 0), new Time(0, 5, 0)]
        ];
    }
    sessions.forEach((single_session) => {
        countdown(single_session[0], "\x1b[0;31mstudy session\x1b[0m");
        countdown(single_session[1], "\x1b[0;32mtimebreak\x1b[0m");
    });
    console.log("\x1b[0;33mthere are no more study sessions, you can stop now\x1b[0m");
}
main();
