
  import { useEffect } from 'react';
  import axios from 'axios';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  import Script from 'next/script';
  
  export default function ContactUs() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/7acac802-bed4-45b5-8d75-b2d3786582ec/Template3/ContactUs/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("ContactUsID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/7acac802-bed4-45b5-8d75-b2d3786582ec/Template3/ContactUs/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("ContactUsID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/7acac802-bed4-45b5-8d75-b2d3786582ec/Template3/ContactUs/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='ContactUsID'></div>

        <>
          <Footer />
        </>
        <Script src="https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/scripts/FormScripts/formScript.js" />
      </div>
    )
  }