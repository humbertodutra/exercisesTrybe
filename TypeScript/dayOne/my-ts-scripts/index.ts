import readline from "readline-sync"

const script = [
    {name: 'Convert Length', script: "./length"},
    
    { name: "Converter massa", script: "./mass" },

    { name: "Converter capacidade", script: "./capacity" },

    { name: "Converter área", script: "./area" },

    { name: "Converter volume", script: "./volume" }

]

const scriptNames = script.map(a => a.name)

const choice = readline.keyInSelect(scriptNames,'choice a script to use');


require(script[choice].script)
