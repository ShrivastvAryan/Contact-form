// to fetch the data from the backend

const getServices= async()=>{
    try {
        const repsonse=await fetch("",{
            method:"GET"
        })

        if(response.ok){
            const data=await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(`services frontend error: ${error}`)
    }
}