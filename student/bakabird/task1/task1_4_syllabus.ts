

window.onload=()=>{
    const getTime = ():void =>{
        const timesEle = document.getElementsByTagName('time');
        let timesObj = {};
        for(let i = 0,timedata:string;i<timesEle.length;i++){
            timedata = timesEle[i].attributes[0].nodeValue;
            if(!timesObj[timedata]){
                timesObj[timedata] = i;
            }
        }
        let timesArr = [];
        for(let item in timesObj){
            timesArr.push(item); 
        }
        // get the time & fix it
    }


    getTime()
}


