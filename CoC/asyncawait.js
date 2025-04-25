function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({fname : "vishal" , lname : "singh"});
            reject({fname:null,lname:null});
        }, 2000);
    })
}

async function getdata() {
    console.log('feching data...')
    const data = await fetchData();
    console.log('Data fetched successfully')
    console.log(data)

}

// getdata();


function ytvideoname(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('here comes the video name')
        }, 2000);
    })
}

function ytvideolength(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('here comes the video length')
        }, 3000);
    })
}

function ytvideoviews(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('here comes the video views')
        }, 4000);
    })
}

async function resolve(){
    try {
        console.log('loading details ...');
        // const [name,length,views] = await Promise.all([ytvideoname(),ytvideolength(),ytvideoviews()]);
        const name = await ytvideoname();
        console.log(name)
        const length = await ytvideolength();
        console.log(length)
        const views = await ytvideoviews();
        console.log(views)
        console.log('Data fetched successfully .');
    } catch (error) {
        console.error('dhang se sikhle ! ab bhi time h')
        console.error(error)
    }
}

resolve()
