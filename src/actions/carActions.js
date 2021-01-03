export const ADD_FEATURE = 'ADD_FEATURE';
// export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (newFeature) => {
    console.log("add feature to array of features actionJS", newFeature)
    return { type: ADD_FEATURE, payload: newFeature }
}

