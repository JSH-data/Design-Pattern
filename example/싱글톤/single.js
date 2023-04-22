let singleInstance = null

class Single {
    #count
    constructor() {
        this.#count = 0
    }

    get count() {
        return this.#count
    }

    increase() {
        this.#count ++
        console.log(this.#count)
    }
}

export function createInstance() {
    let tmpInstance = null
    if (!singleInstance) {
        singleInstance = Object.freeze(new Single());
        tmpInstance = singleInstance
    }
    else tmpInstance = singleInstance

    return tmpInstance
}