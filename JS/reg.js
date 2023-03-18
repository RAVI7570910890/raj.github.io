let pattern = 'pw'

let regeExOne = new RegExp(pattern)

let flag = 'gi'
let regeExTwo = new RegExp(pattern,flag)

let regeExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently"

const result = regeExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regeExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regeExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/hitesh%30bbcfh"
const useableUrl = webUrl.replace(/%\d\d/, '-')
console.log(useableUrl);