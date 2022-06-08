#!/usr/bin/env node

// This file contains the main entry point for the command line `minty` app, and the command line option parsing code.
// See minty.js for the core functionality.

const fs = require('fs/promises')
const path = require('path')
const {Command} = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const colorize = require('json-colorizer')
const config = require('getconfig')
const {CreateLoyalty} = require('./loyalty')

const colorizeOptions = {
    pretty: true,
    colors: {
        STRING_KEY: 'blue.bold',
        STRING_LITERAL: 'green'
    }
}



async function main() {
    const program = new Command()

    // commands
    program
        .command('create <username>')
        .description('create a new user')
        .action(createUser)

    program
        .command('earn <member> <points>')
        .description('Earn point')
        .action(earnPoint)

    program
        .command('get <member>')
        .description('Get the point of membership ')
        .action(getPoint)

    const rootDir = path.join(__dirname, '..')
    process.chdir(rootDir)

    await program.parseAsync(process.argv)
}

// ---- command action functions

async function createUser(username, options) {
    const loyalty = await CreateLoyalty()

    const user = await loyalty.createUser(username)
    console.log('🌿  Created a new user : ')

    alignOutput([
        ['Account Number ID:', chalk.green(user.accountNumber)],
        ['Username:', chalk.blue(user.username)],
    ])
    loyalty.disconnect()
}

async function earnPoint( member,points) {
    const loyalty = await CreateLoyalty()

    const result = await loyalty.earnPoint({member ,points})
    console.log('🌿  Earn point : ', result)

    loyalty.disconnect()
}
async function getPoint( member) {
    const loyalty = await CreateLoyalty()

    const {userPoint,userLog} = await loyalty.getPoint(member)
    console.log('🌿  Get User Info : ')
    alignOutput([
        ['Point:', chalk.green(JSON.stringify(userPoint))],
        ['Logs:', chalk.blue(userLog)],
    ])

    loyalty.disconnect()
}

async function getUser( member,points) {
    const loyalty = await CreateLoyalty()

    const result = await loyalty.earnPoint({member ,points})
    console.log('🌿  Earn point : ', result)

    loyalty.disconnect()
}

// ---- helpers

async function promptForMissing(cliOptions, prompts) {
    const questions = []
    for (const [name, prompt] of Object.entries(prompts)) {
        prompt.name = name
        prompt.when = (answers) => {
            if (cliOptions[name]) {
                answers[name] = cliOptions[name]
                return false
            }
            return true
        }
        questions.push(prompt)
    }
    return inquirer.prompt(questions)
}

function alignOutput(labelValuePairs) {
    const maxLabelLength = labelValuePairs
      .map(([l, _]) => l.length)
      .reduce((len, max) => len > max ? len : max)
    for (const [label, value] of labelValuePairs) {
        console.log(label.padEnd(maxLabelLength+1), value)
    }
}

// ---- main entry point when running as a script

// make sure we catch all errors
main().then(() => {
    process.exit(0)
}).catch(err => {
    console.error(err)
    process.exit(1)
})
