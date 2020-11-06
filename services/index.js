let getPromise = (test) => {
	return new Promise((resolve, reject) =>{
    !!test ? resolve(1) : reject(0);
  })
}

const arr = [true, false, true, true, false];

let fctArrayPromise = () => {
	let arrayPromise = arr.map(async (e) => {
  	console.log(e)
  	return await getPromise(e)
  })
  return arrayPromise;
}

let fctDeux = async () => {
    console.log("gonna be waiting some promise")
    let arrayPro = await fctArrayPromise();
    console.log("done with await fctDeux();");
  
    arrayPro.map((e) =>{
        e.then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    })
  
  console.log("resolve done with fctDeux mais pas les catchs")
}

let fctTrois = async () => {
    try {
        let arrayPro = await fctArrayPromise();
        await Promise.all([getPromise(true),getPromise(true),getPromise(true)])
        //Promise.all(arrayPro)
        .then((responses) => {
          console.log(responses)
        })
        .catch((errors) => {
          console.log(errors)
        })
        console.log("done with fctTrois();")
    }
    catch(err) {
        console.log(err)
    }

}

let service = async () => {
    console.log("cocou")
	await fctDeux();
	await fctTrois();
}

module.exports = {
    service
}
