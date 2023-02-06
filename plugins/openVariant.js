const plugin = require("tailwindcss/plugin")


const opeVariant = plugin(function ({ addVariant }){
  addVariant("group-open", ":merge(.group).open &")


})

module.exports = opeVariant