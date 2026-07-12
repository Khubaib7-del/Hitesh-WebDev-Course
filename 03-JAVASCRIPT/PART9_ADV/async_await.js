function  fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"chaicode",url:"https://chaicode.com"})
        },3000)
    })
}

async function getUserData() {
    try{
        console.log('Fetching user data...');
        const userData=await fetchUserData();
        console.log('Fetched user data successfully');
        console.log("User Data: ",userData);
    }
    catch(error)
    {
        console.log("Error fetching data",error);
    }
}

getUserData();