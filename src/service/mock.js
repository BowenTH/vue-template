/**
 * mockjs模拟数据
 * Mock.mock('url','post|get','data')
 * 
*/
import Mock from 'mockjs'

async function getPromise(sigalObj){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(sigalObj)
        },10)
    })
}

/**
 * 获取不同数据mock数组
 * @param sigalData  Promise对象，返回JSON对象
 * @param reg        mock个数规则，eg："2-4"
 * @return mockArray mock数组
*/
async function getMockArray(sigalPromiseData,reg){
    let formateReg = 'test|'+reg || '1'
    let mockData = {}
    mockData[formateReg] = [{}]
    let tests = Mock.mock(mockData)
    for(let i in tests){
        let docs = tests[i]
        let promises = docs.map(()=>sigalPromiseData())
        let books = await Promise.all(promises)
        return books
    }    
}

async function getBook(){
    let books = Mock.mock({
        "books":  await getMockArray(()=>getPromise({
            "id|+1": 1,
            "uid":Mock.Random.id(),
            "image":Mock.Random.image("200x100",Mock.Random.color(),Mock.Random.ctitle()),
            "name":Mock.Random.cname(),
            "email":Mock.Random.email(),
        }),"10"),
        // "books|1000":  [{
        //     "id|+1": 1,
        //     "uid":Mock.Random.id(),
        //     "image":Mock.Random.image("200x100",Mock.Random.color(),Mock.Random.ctitle()),
        //     "name":Mock.Random.cname(),
        //     "email":Mock.Random.email(),
        // }]
    })
    Mock.mock('http://barefeet.cn/book',books)
}

function getMusic(){

}

function getMovie(){

}

export default {
    init(){
        getBook()
        getMusic()
        getMovie()
    }
}
