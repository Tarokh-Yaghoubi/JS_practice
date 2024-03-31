
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')


console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))   // \t is the tab delimited
console.log(uuid()) // this will generate a different ID each time


