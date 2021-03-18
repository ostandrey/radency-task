const HAS_CHILDREN_TRUE = 'TRUE';
const HAS_CHILDREN_FALSE = 'FALSE';

export const hasChildrenValidator = (hasChildren: any): boolean => {
    if (typeof hasChildren !== 'string') {
        return false;
    }
    if (hasChildren.length === 0) {
        hasChildren = HAS_CHILDREN_FALSE;
    }
    return hasChildren === HAS_CHILDREN_TRUE || hasChildren === HAS_CHILDREN_FALSE
}
