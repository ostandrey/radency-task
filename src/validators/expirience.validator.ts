import {ageValidator} from "./age.validator";

export const experienceValidator = (experience: any, age: any): boolean => {
    if (!ageValidator(age)) {
        return false;
    }
    if (isNaN(experience)) {
        return false
    }
    return experience >= 0 && experience <= age
}
