import Vue from 'vue';

export default class VueEventBus {

    constructor() {
        this.bus = new Vue;
    }

    fire(events, ...data) {
        this.wrapper(
            events,
            () => this.bus.$emit(events, ...data),
            value => this.bus.$emit(value, ...data)
        );
    }

    listen(events, callback) {
        this.wrapper(
            events,
            () => this.bus.$on(events, callback),
            value => this.bus.$on(value, callback)
        );
    }

    unlisten(events, callback) {
        this.wrapper(
            events,
            () => this.bus.$off(events, callback),
            value => this.bus.$off(value, callback)
        );
    }

    wrapper(events, ifNotArray, otherwise) {
        if (!Array.isArray(events)) {
            ifNotArray();
            return;
        }

        for (const value of events) {
            otherwise(value);
        }
    }

}