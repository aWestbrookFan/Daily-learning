class EventEmitter {
    /* 构造函数默认创建了对象 */
    constructor() {
        this.listeners = Object.create(null)
    }

    //    注册事件
    on(event, listerer) {

        if (!event || !listerer) {
            return;
        }

    }
}
