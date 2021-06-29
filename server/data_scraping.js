const dfd = require("danfojs-node");
var {Trie} = require('./trie');

async function run(){
    var df = await dfd.read_csv("./bse.csv");
    var nameTrie = new Trie();
    df["Security Name"].data.forEach((name) => {
        nameTrie.insert(name);
    });
}

run();