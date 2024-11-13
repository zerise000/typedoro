"use strict";
class Time {
    constructor(hours, minutes, seconds) {
        this.seconds = hours * 3600 + minutes * 60 + seconds;
    }
    update() {
        if (this.seconds == 0)
            return false;
        this.seconds--;
        return true;
    }
    getSeconds() {
        return this.seconds;
    }
    print() {
        let hours_left = Math.floor(this.seconds / 3600);
        let minutes_left = Math.floor(this.seconds / 60);
        let seconds_left = this.seconds % 60;
        console.log("%d:%d:%d left", hours_left, minutes_left, seconds_left);
    }
}
async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function countdown(t) {
    do {
        console.clear();
        t.print();
        await delay(1000);
    } while (t.update());
    alert("counter expired");
}
function main() {
    const t = new Time(0, 0, 3);
    countdown(t);
}
main();
