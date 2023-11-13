
import {useState} from 'react'

const Forms = () => {
    const [userInput, setUserInput] = useState({});

    const submitForm =(e) => {
        e.preventDefault()
        //API CALL

        // const config = {     
        //     headers: { 'content-type': 'application/json' }
        //     //WP headers
        // }

    // working object 
    console.log(userInput)
    //validation

    }

    const styles ={
        formElem:{
            display:"flex",
            width:"100%",
        }
    }
    return(
        <section>
        <div style={{flexDirection:"column",background:"#fff", borderRadius:40, width:"fit-content", margin:"0 auto", padding:40}}>
        <div style={{fontSize:20, color:"#00D287", paddingBottom:10}}>Sign up for your <span style={{color:"black"}}>unlimited</span> card</div>
        <form onSubmit={e => submitForm(e)}>
        <div style={styles.formElem}>
        <input type="text" name="firstname" placeholder="Firstname" onChange={(e) => setUserInput({...userInput, firstname: e.target.value})} required/>
        <input type="text" name="lastname" placeholder="Lastname" onChange={(e) => setUserInput({...userInput, lastname: e.target.value})} required/>
        </div>

        <div style={styles.formElem}>
        <input type="email" name="email" placeholder="Email" onChange={(e) => setUserInput({...userInput, email: e.target.value})} required/>
        <input type="text" name="number" placeholder="Number" onChange={(e) => setUserInput({...userInput, name: e.target.value})} required/>
        </div>

        <div style={styles.formElem}>
        <input type="text" name="address" placeholder="Address" onChange={(e) => setUserInput({...userInput, address: e.target.value})} required/>
        <div className="locate"><p>Locate</p></div>
        </div>

        <div style={styles.formElem}>
        <input type="text" name="county" placeholder="County" onChange={(e) => setUserInput({...userInput, county: e.target.value})} required/>
        <input type="text" name="postcode" placeholder="Postcode" onChange={(e) => setUserInput({...userInput, postcode: e.target.value})} required/>
        </div>

        <div>Terms & Conditions and Privacy Policy</div>
        <input type="submit" value="Sign Up"/>
        </form>

        </div>
        </section>
    )


}

export default Forms;