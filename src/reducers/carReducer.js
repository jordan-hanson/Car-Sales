import { ADD_FEATURE } from '../actions/carActions'

export const initialState = {
    // What state is global? I believe it is the additionalPrice only
    // because I update car.price and car.features but use additonalFeatures.price 
    // for it. Ask this question!!!!??
    additionalPrice: 0,
    car: {
        price: 26395,
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
export const carReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_FEATURE:
            return ({
                ...state,
                additionalPrice: action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features, action.payload
                    ]
                }
            });
        default:
            return state;
    }
}