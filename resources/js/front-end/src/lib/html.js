export const html = ([first, ...strings], ...values) => {
    return values.reduce(
        (acc, cur) => {
            return acc.concat(cur, strings.shift())
        }
        , [first])
        .filter(x => x !== false && x !== true || x === 0)
        .join('')
}