

export function timeConverter(time) {
    var t = time.split("T")[0]
    let dateNums = t.split("-")
    // return `${date[1]}/${date[0]}`

    const date = new Date(dateNums[0], dateNums[1] - 1, dateNums[2]);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
return `${month} ${dateNums[0]} `
}