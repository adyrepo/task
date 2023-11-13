import {useState, useEffect, useRef} from 'react';
import {ReactComponent as Logo} from '../img/logo.svg'
import gsap from "gsap"

const Navbar = () => {
const [isResized, setIsResized] = useState({bool: false, width: null})
const [bool, setBool] = useState(true)


useEffect(() => {
window.addEventListener("resize", () => {
    setIsResized({bool: true, width: window.innerWidth})
})
}, [isResized.bool]) 


const menuItem = [
    "Home",
    "Where to shop",
    "How it works",
    "Help",
    "About Us",
]

const styles = {
    list:{
        marginLeft:20,
        listStyle:"none",
        fontFamily:"circular-book",
        color:(window.scrollY < window.innerHeight * 2) ? "white" : "black" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"auto",
    },
    listVertical:{
        marginLeft:0,
        padding:0,
        listStyle:"none",
        fontFamily:"circular-book",
        color:"black" ,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:50,
        paddingTop:20,
        overflow:"scroll"
    },

    signin:{
        listStyle:"none",
        background: "#00d287",
        color: "#fff",
        marginLeft:100,
        textAlign: "center",
        verticalAlign: "top",
        padding: "12px 26px",
        borderRadius: "50px",
        textDecoration: "none",
        cursor: "pointer",
        alignSelf:"center",
    },
    getapp:{
        listStyle:"none",
        background: "transparent",
        border: "2px solid #00d287",
        color: "#00d287",
        marginLeft:20,
        textAlign: "center",
        verticalAlign: "top",
        padding: "12px 26px",
        borderRadius: "50px",
        textDecoration: "none",
        cursor: "pointer",
        alignSelf:"center",
    },
    listContainer: {
        padding:0,
        display:"flex", 
        width:"100%",
        marginLeft:100,
    },
    listContainerVertical:{
        padding:0,
        display:"block", 
        width:"100%",
        // marginLeft:100,
    },
    nav_container:{
        transition:"background .5s ease",
        width:"calc(100% - 40px)",
        background:(window.scrollY < window.innerHeight * 2) ? (bool) ? "transparent" : "white" : "white",
        zIndex:9999,
        position:"fixed", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        padding:20,
    },

    menuSpan: {
        display:"block",
        background: "#00d287",
        height:3,
        width: 30,
        borderRadius:10
    },

    menuContainer:{
        position:"absolute",
        zIndex:9999,
        width:"100vw",
        background:"white",
        left:"100vw",
        height:"100vh",
        top:92
    }
}

const listItems = menuItem.map((arr, i) => <li key={i} style={(window.innerWidth < 1156) ? styles.listVertical : styles.list}>{arr}</li> );

const menuContainer = useRef() 
const openMenu = () => {
    setBool(!bool)
    if(bool){
        gsap.to(menuContainer.current, .5, {left: "0vw"})
    }else{
        gsap.to(menuContainer.current, .5, {left: "100vw"})
    }
}


return(
<div style={styles.nav_container}> 
   <div style={{transform:"scale(0.8)"}}><Logo/></div>
    {(isResized.width > 1156 || window.innerWidth > 1156) ? 
    <>
    <ul style={styles.listContainer}>
    {listItems}
    </ul>
    <div style={{
        display:"flex",
        alignContent:"flex-end",
        justifyContent:"flex-end",
        width:"100%",
    }}>
    <li style={styles.signin}>Sign In</li>
    <li style={styles.getapp}>Get App</li>
    </div>
</>
    :
    <>
    <div 
    onClick={openMenu}
    style={{
        width:"100%", 
        padding:0, 
        textAlign:"right", 
        flexDirection:"row",
        display:"flex", 
        justifyContent:"flex-end",
        cursor:"pointer",
        // height:"100vh",
        // zIndex:9999
        }}>
        <div style={{color:(window.scrollY < window.innerHeight * 2) ? "white" : "black"}}>
            <span style={{...styles.menuSpan, marginTop:0}}></span>
            <span style={{...styles.menuSpan, marginTop:6}}></span>
            <span style={{...styles.menuSpan, marginTop:7}}></span>
        </div>
    </div>

    <div ref={menuContainer} className={"menuContainer"} style={styles.menuContainer}>
        

    <ul style={styles.listContainerVertical}>
    {listItems}

    </ul>
    <div style={{
        display:"flex",
        alignContent:"center",
        justifyContent:"center",

    }}>
    <li style={{...styles.signin, marginLeft:0}}>Sign In</li>
    <li style={styles.getapp}>Get App</li>
    </div>



    </div>
    </>
}

</div>
)

}

export default Navbar;