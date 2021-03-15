export default class People {
    constructor (public name:string, private age: number) {
        this.name = name
        this.age = age
    }
    public getName () :string{
        return this.name
    }
}