export default class VueEventBus {

    constructor() {
        this.bus = new Map();
    }

    fire(events, ...data) {
        this.wrapper(
            events,
            () => this.emit(events, ...data),
            value => this.emit(value, ...data)
        );
    }

    listen(events, callback) {
        this.wrapper(
            events,
            () => this.on(events, callback),
            value => this.on(value, callback)
        );
    }

    unlisten(events, callback) {
        this.wrapper(
            events,
            () => this.off(events, callback),
            value => this.off(value, callback)
        );
    }

    emit(event, ...data) {
        const callbacks = this.bus.get(event);
        if (callbacks) {
            callbacks.forEach(callback => callback(...data));
        }
    }

    on(event, callback) {
        if (!this.bus.has(event)) {
            this.bus.set(event, []);
        }
        this.bus.get(event).push(callback);
    }

    off(event, callback) {
        const callbacks = this.bus.get(event);
        if (callbacks) {
            if (callback) {
                const index = callbacks.indexOf(callback);
                if (index > -1) {
                    callbacks.splice(index, 1);
                }
            } else {
                this.bus.delete(event);
            }
        }
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