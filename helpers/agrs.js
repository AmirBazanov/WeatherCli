export const getArgs = (args) => {
    const res = {}
    args.forEach((elem, index) => {
        if (elem === '-s') {
            if (args[index + 1].charAt(0) !== '-') {
                res['s'] = args[index + 1]
            } else {
                res['s'] = true
            }
        }
        if (elem === '-h') {
            res['h'] = true
        }

        if (elem === '-t') {
            res['t'] = args[index + 1]
        }

        if (elem === '-save') {
            if (args[index + 1].charAt(0) !== '-') {
                res['save'] = args[index + 1]
            }
        }
    })
    return res
}