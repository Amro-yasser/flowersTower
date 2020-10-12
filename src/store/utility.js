export const updateObject = (oldObject, updatedPropreties) => {
    return {
        ...oldObject,
        ...updatedPropreties
    }
}