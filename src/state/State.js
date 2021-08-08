import { atom } from "recoil"

const GenderFilter = atom({
    key: "gender",
    default: {
        gender:[]
    }

})

export { GenderFilter };


const ColorFilter = atom({
    key: "color",
    default: {
        color: []
    }

})

export { ColorFilter };


const PriceFilter = atom({
    key: "gender",
    default: {
        price: []
    }

})

export { PriceFilter };


