const YML = require('yamljs')
const fs = require('fs')

let ls   = [],
    data = YML.parse(fs.readFileSync('./data/友人帐.yml').toString().replace(/(?<=rss:)\s*\n/g, ' ""\n'));
data.split(',').forEach((e.i) => {
    let j = data.length-1;  //获取友链数组的范围（除了最后一栏，前面的都获取）
    if (i != j) ls = ls.concat(e.link_list) 
});
fs.writeFileSync('./dist/link.json', `{"link_list": ${JSON.stringify(ls)},"length":${ls.length}}`)
console.log('友链文件已生成。');
