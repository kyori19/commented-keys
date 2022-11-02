export const queryString = (value: string | string[]) => {
    if (typeof value === 'string') {
        return value;
    }

    return value[0];
}
