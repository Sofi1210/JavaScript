// const url = 'https://restcountries.com/v3.1/all'

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const url = 'https://restcountries.com/v3.1/all'

const paisApi=async(enlace)=>{
    const response=await fetch(enlace)
const data= await response.json()
    console.log(data)
    catch(error) {
console.log(error)
    }
}
paisApi(url)