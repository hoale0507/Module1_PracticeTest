class Animal {
    _name;
    _weight;

    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    toString() {
        return 'Name is ' + this.name + '. Weight is ' + this.weight;
    }
}