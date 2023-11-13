
import {ReactComponent as Logo} from '../img/logo.svg'

const Footer = (props) => {
    const styles = {
        ul:{
            textAlign:"left",
            justifySelf: "flex-end"
        },
        li: {
            margin:20,
            fontSize: (props.width < 600) ? 10 : (props.width > 800) ? 18 : 12
        }
    }

    const siteNav = [
        "Corporate",
        "Press enquiries",
        "News",
        "Coverage",
        "Leadership team",
    ]

    const siteOption = [
        "Choose site",
        "UK",
        "US"
    ]

    const product = [
"Product",
"Zilch Up",
"Zilch Classic",
"How it works",
"Where to shop",
"Google Play",
"Apple Store",
    ]

    const resources = [
"Resources",
"Cookie Policy",
"Zilch Privacy Notice",
"General Terms of use",
"Competition Terms",
"FAQ",
"Compliance",
"The lowdown",
"Contact Zilch"
    ]

    

    const nav = siteNav.map((e, i) => (<li key={i} style={styles.li}>{e}</li>))
    const option = siteOption.map((e, i) => (<li key={i} style={styles.li}>{e}</li>))
    const resource = resources.map((e, i) => (<li key={i} style={styles.li}>{e}</li>))
    const products = product.map((e, i) => (<li key={i} style={styles.li}>{e}</li>))

    
  

    return(
        <section style={{background:"#fff"}}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:'flex-end',
                width:"100%",
                margin:"0 auto",
            }}>
                 <div style={{display:"flex",
                justifyContent:'flex-start',
                width:"100%",
                paddingLeft:(props.width < 500) ? 20 : 60,
                paddingTop:(props.width < 500) ? 20 : 60
                }}>
                <Logo/>
            </div>

            <div style={{display:"flex",
                justifyContent:'flex-start',
                width:"100%",
                paddingLeft: (props.width < 500) ? 10 : 50,
                paddingTop:(props.width < 500) ? 10 : 50
                }}>
             <ul style={styles.ul}>
                {products}
            </ul>
             <ul style={styles.ul}>
                {resource}
            </ul>
            
            <ul style={styles.ul}>
                {nav}
            </ul>

            <ul style={styles.ul}>
                {option}
            </ul>
            </div>
           

            </div>

        </section>
    )
}

export default Footer;