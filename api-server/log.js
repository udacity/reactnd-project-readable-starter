const chalk = require('chalk')

module.exports = function(type, message) {
  const date = new Date()
  const hour = `[${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}]`

  switch (type) {
    case 'init':
      return console.log(chalk.black.bold.bgWhite(` ${message} `))
    break

    case 'get':
      return console.log(`\n${chalk.bgBlue.black.bold(' GET  ')} ${hour} ${message}`)
    break

    case 'put':
      return console.log(`\n${chalk.bgYellow.black.bold(' PUT  ')} ${hour} ${message}`)
    break

    case 'post':
      return console.log(`\n${chalk.bgGreen.black.bold(' POST ')} ${hour} ${message}`)
    break

    case 'delete':
      return console.log(`\n${chalk.bgRed.black.bold(' DEL  ')} ${hour} ${message}`)
    break

    case 'success':
      return console.log(chalk.green(`${message}`))

    case 'error':
      return console.error(message)

    default: console.log(message)
  }
}
