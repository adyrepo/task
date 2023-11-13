import {useState} from 'react'
import ReactSlider from 'react-slider'

const Calculator = (props) => {
    const [sliderVal, setSliderVal] = useState(10)

    const styles = {
        subheading: {
        paddingTop:150,
        fontFamily:"circular",
        fontSize:(props.width < 500)? 40 : 60, 
        color:"#00D287",
        textShadow:"2px 2px 7px #FFF",
        justifyContent:"space-evenly",
        lineHeight:1}
      }

return(
        <section>
        <div 
        style={styles.subheading}>
        Find out how much you can save
        </div>
  
        <div 
        style={{
         fontFamily:"circular",
         fontSize:120,
         color:"#00D287",
         textShadow:"2px 2px 7px #FFF",
         paddingBottom:10,
        //  background:"#fff",
        }}>Spend £{sliderVal}</div>
  
        <div style={{
          width:"80%",
          height:20,
          background:"#fff",
          margin:"0 auto",
          padding:0
          }}>
            
      <ReactSlider
      onChange={(e) => setSliderVal(e)}
      min={10}
      snapDragDisabled={true}
      max={1000}
      thumbClassName="slideFace"
      renderThumb={(props, state) => 
        <span {...props}>
          {/* {state.valueNow} */}
        </span>
      
    } />
  
          </div>
  
          <div 
        style={{
         fontFamily:"circular",
         fontSize:40, 
         color:"#00D287",
         textShadow:"2px 2px 7px #FFF",
         display:"flex",
         justifyContent:"space-evenly"
         
        }}
        >
        <p>Save: £{(sliderVal * props.savePercentage).toFixed(2)}</p><br/>
        <p>Total: £{(sliderVal * props.totalSave).toFixed(2)}</p>
        
        </div>
        </section>
    )
}

export default Calculator;