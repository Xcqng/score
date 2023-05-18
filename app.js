const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios");
const request = require("request")
var app = express();
app.get("/leagues/:p",(req,res)=>{
var url = "https://www.thairath.co.th/sport/footballscore/"+req.params.p
var score = []
var data1 = []
async function main(){
const data = await request.get(url,(e,r,b)=>{
const $ = cheerio.load(b)
const scoree = $("tbody tr td").each((index,el)=>{
score.push($(el).text())
})
for (i=0;i<score.length;i++){
if (i== 5 || i==14 || i==23 || i==32 || i==41 || i==50 || i==59 || i==68 || i==77 || i==86 || i==95 || i==104 || i== 113 || i==122 || i==131 || i==140 || i==149 || i==158 || i==167 || i==176){
i+=3
}
data1.push(score[i])
}
function getdata(){

Datateam = [
{
"statua":"success",
"code":"Ok 200",
"league":req.params.p
}
,
{
"name":data1[0],
"race":data1[1],
"wins":data1[2],
"lost":data1[3],
"always":data1[4],
"point":data1[5]
},
{
"name":data1[6],
"race":data1[7],
"wins":data1[8],
"lost":data1[9],
"always":data1[10],
"point":data1[11]
},
{
"name":data1[12],
"race":data1[13],
"wins":data1[14],
"lost":data1[15],
"always":data1[16],
"point":data1[17]
},
{
"name":data1[18],
"race":data1[19],
"wins":data1[20],
"lost":data1[21],
"always":data1[22],
"point":data1[23]
},
{
"name":data1[24],
"race":data1[25],
"wins":data1[26],
"lost":data1[27],
"always":data1[28],
"point":data1[29]
},
{
"name":data1[30],
"race":data1[31],
"wins":data1[32],
"lost":data1[33],
"always":data1[34],
"point":data1[35]
},
{
"name":data1[36],
"race":data1[37],
"wins":data1[38],
"lost":data1[39],
"always":data1[40],
"point":data1[41],
},
{
"name":data1[42],
"race":data1[43],
"wins":data1[44],
"lost":data1[45],
"always":data1[46],
"point":data1[47]
},
{
"name":data1[48],
"race":data1[49],
"wins":data1[50],
"lost":data1[51],
"always":data1[52],
"point":data1[53]
},
{
"name":data1[54],
"race":data1[55],
"wins":data1[56],
"lost":data1[57],
"always":data1[58],
"point":data1[59]
},
{
"name":data1[60],
"race":data1[61],
"wins":data1[62],
"lost":data1[63],
"always":data1[64],
"point":data1[65]
},
{
"name":data1[66],
"race":data1[67],
"wins":data1[68],
"lost":data1[69],
"always":data1[70],
"point":data1[71]
},
{
"name":data1[72],
"race":data1[73],
"wins":data1[74],
"lost":data1[75],
"always":data1[76],
"point":data1[77]
},
{
"name":data1[78],
"race":data1[79],
"wins":data1[80],
"lost":data1[81],
"always":data1[82],
"point":data1[83]
},
{
"name":data1[84],
"race":data1[85],
"wins":data1[86],
"lost":data1[87],
"always":data1[88],
"point":data1[89]
},
{
"name":data1[90],
"race":data1[91],
"wins":data1[92],
"lost":data1[93],
"always":data1[94],
"point":data1[95]
},
{
"name":data1[96],
"race":data1[97],
"wins":data1[98],
"lost":data1[99],
"always":data1[100],
"point":data1[101]
},
{
"name":data1[102],
"race":data1[103],
"wins":data1[104],
"lost":data1[105],
"always":data1[106],
"point":data1[107]
},
{
"name":data1[108],
"race":data1[109],
"wins":data1[110],
"lost":data1[111],
"always":data1[112],
"point":data1[113]
},
{
"name":data1[114],
"race":data1[115],
"wins":data1[116],
"lost":data1[117],
"always":data1[118],
"point":data1[119]
}]
return Datateam
}
if (data1[0] == undefined){
return res.status(404).json({"status":"error","code":"404","league":"not found"})
}
res.send(getdata())
})
}
main()
})
app.use((req,res,nuxt)=>{
res.status(404).json({"status":"error","code":"404","league":"not found"})
})

app.listen(3000,function(){
console.log("start");
})
