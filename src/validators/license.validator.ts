export const licenseValidator = (license: any): boolean => {
    if (typeof license !== 'string') {
        return false
    }
    return license.length === 6 // required length of license
}
