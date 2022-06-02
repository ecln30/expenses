import './App.css';
import Head from "./components/Head"
import Body from "./components/Body"
import data from "./data.json"

function App() {

  function amount(e){
    const el = e.target
    console.log(el)
    const preEl = el.previousElementSibling
    const day = el.className
    if (el.matches(".mon")) {
        preEl.style.top = "20px"
        el.classList.toggle("mon-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".tue")) {
        preEl.style.top = "-10px"
        el.classList.toggle("tue-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".wed")) {
        preEl.style.top = "-58px"
        el.classList.toggle("wed-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".thu")) {
        preEl.style.top = "0px"
        el.classList.toggle("thu-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".fri")) {
        preEl.style.top = "10px"
        el.classList.toggle("fri-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".sat")) {
        preEl.style.top = "-30px"
        el.classList.toggle("sat-mar")
        preEl.classList.toggle("show")  
    }
    if (el.matches(".sun")) {
        preEl.style.top = "1px"
        el.classList.toggle("sun-mar")
        preEl.classList.toggle("show")  
    }
   
}
  return (
    <main>
     <Head />
     <Body data={data} amount={amount} />
    </main>
  );
}

export default App
