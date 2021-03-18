export const ageValidator = (age: any): boolean => {
    if (isNaN(age)) {
        return false;
    }
    return age >= 21 // min age value
}
