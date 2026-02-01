let link = (page)=>{
    window.location.href = `${page}.html`;
    document.getElementById("menu").style.display = "none";
}

let themeChange = () =>{
    console.log("change theme")
}

let menu = () =>{
    const menuDisplay = document.getElementById("menu").style.display
    if(menuDisplay == "none"){
        document.getElementById("menu").style.display = "block";
    }else{
        document.getElementById("menu").style.display = "none";
    }
}