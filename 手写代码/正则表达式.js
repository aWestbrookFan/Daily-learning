/*
*
* 正则表达式
*
* */

{
    let str = '+7(903)-123-45-67'
    console.log(str.match(/\d/g).toString().split(',').join(''))
}


/*
* 锚点
* */
{
    let str = "namesww"
    console.log(/^name/.test(str) )
    console.log(/sww$/.test(str))
}


