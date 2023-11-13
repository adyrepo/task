import { ReactComponent as Zilch } from '../img/logo.svg';
import { ReactComponent as MasterCard } from '../img/mastercard.svg';
import UiOverlay from "./UiOverlay"

const Card = (props) => {
    const color = {
        nike: {
          fill: "url(#nikeGradient)"
        },
        stop1: {
          stopColor: "#000"
          // stopColor: "#000" //blackNike matte finish
        },
        stop2: {
          stopColor: "#00D287"
          // stopColor: "#444" //blackNike matte finish
        }
      }

    const NikeLogo = () => {
        return (
          <>
            <svg width="500" height="500" viewBox="0 0 2500 2500" >
              <linearGradient id="nikeGradient" gradientTransform={"rotate(" + props.mouseData.x / 30 + ")"}>
                <stop style={color.stop1} offset="0%" />
                <stop style={color.stop2} offset="100%" />
              </linearGradient>
              <path style={color.nike} d="M397.2,857.7c-155.7,182.8-304.8,409.4-306.4,578.8c-0.6,63.8,19.8,119.4,68.6,161.5
            c70.2,60.7,147.7,82.1,224.7,82.2c112.6,0.1,224.3-45.3,311.9-80.3c147.4-58.9,1776.7-766.5,1776.7-766.5
            c15.7-7.9,12.8-17.7-6.9-12.8c-7.9,1.9-1773.7,480.5-1773.7,480.5c-33.4,9.5-68,14.5-102.7,14.7c-135.7,0.9-256.5-74.6-255.5-233.3
            C334.1,1020.8,353.2,945.9,397.2,857.7L397.2,857.7z" />
            </svg>
          </>
        )
      }
const linearColor = 'linear-gradient(' + props.mouseData.x / 30 + 'deg, #006D63,' + (props.mouseData.x / 15) + '%, #00D287 100%)'

    return(
        <header className="App-header">
          <div style={{ width: "100%" }}>

            <div style={{
              width: "100%",
              background: "black",
              backgroundRepeat: "repeat",
              backgroundSize: "contain",
              height: props.height * 2 + "px",
              overflow: "hidden",
              paddingTop: 30,
            }}>

              <div
                style={{
                  marginTop: -30,
                  fontSize: "12vw",
                  letterSpacing: "-0.05em",
                  color: "#000",
                  lineHeight: 1,
                  textShadow: "2px 2px #00D287",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 1,
                  height: props.height
                }}
              >
                <p>
                  UNLIMITED<br />EXCLUSIVE<br />10% OFF<br />AT NIKE
                </p>
              </div>

              <div
                style={{
                  rotate: -props.cardScroll / 10 + "deg",
                  marginTop: props.height / 2 - 220,
                  marginLeft: (props.width < 500) ? props.width / 2 - 250 : props.width / 2 - 250,
                  width: 500,
                  height: 300,
                  borderRadius: 20,
                  alignSelf: 'center',
                  justifySelf: 'center',
                  transition: "background 0.5s ease",
                  background: (window.scrollY > props.height) ?
                    'linear-gradient(' + props.mouseData.x / 30 + 'deg, #000, ' + (props.mouseData.x / 15) + '%, #121212 0%)'
                    : 'linear-gradient(' + props.mouseData.x / 30 + 'deg, #000, ' + (props.mouseData.x / 15) + '%, #121212 0%)',
                  animation: "anim 3s infinite ease-in-out",
                  transform:
                    (window.innerWidth > 500) ?
                      "translate3d(" + props.mouseData.x / 50 + "px, " + props.mouseData.y / 50 + "px, 0px)"
                      + "rotateX(" + props.mouseData.x / 50 + "deg)"
                      + "rotateY(" + props.mouseData.y / 50 + "deg)"
                      + "scale(1)" :
                      "translate3d(" + props.mouseData.x / 50 + "px, " + props.mouseData.y / 50 + "px, 0px)"
                      + "rotateX(" + props.mouseData.x / 50 + "deg)"
                      + "rotateY(" + props.mouseData.y / 50 + "deg)"
                      + "scale(.65)",
                  borderRight: "2px solid #00D287",
                  borderTop: "2px solid #00D287",
                }}>
                <div style={{ display: 'flex', padding: 20 }}>
                  <Zilch />
                </div>
                <div style={{ transform: "scale(0.6)", marginTop: 130, marginLeft: 390 }}>
                  <MasterCard />
                </div>
                <div style={{ display: 'flex', rotate: "-10deg", marginTop: -390, marginLeft: 0 }}>
                  {NikeLogo()}
                </div>

                <UiOverlay content={"BRAND NEW"}
                  marginLeft={-100}
                  marginTop={-430}
                  color={"#FFF"}
                  textColor="#006D63"
                  copySize="12px"
                />

                <UiOverlay content={"MOVE YOUR CURSOR"}
                  marginLeft={140}
                  marginTop={-470}
                  color={linearColor}
                  textColor="#FFF"
                  width={180}
                  copySize="12px"
                />

                <UiOverlay content={"UNLIMITED 10% OFF"}
                  marginLeft={-200}
                  marginTop={-250}
                  color={linearColor}
                  textColor="#FFF"
                  copySize="12px"
                />

                <UiOverlay content={"ALL THE TIME"}
                  marginLeft={-120}
                  marginTop={-100}
                  color={linearColor}
                  textColor="#FFF"
                  copySize="12px"
                />

                <UiOverlay content={"MASTERCARD"}
                  marginLeft={500}
                  marginTop={-100}
                  color={linearColor}
                  textColor="#FFF"
                  copySize="12px"
                />

                <UiOverlay content={"ON ALL MERCH"}
                  marginLeft={540}
                  marginTop={-250}
                  color={linearColor}
                  textColor="#FFF"
                  width={120}
                  copySize="12px"
                />

                <UiOverlay content={"EXCLUSIVE"}
                  marginLeft={505}
                  marginTop={-430}
                  color={linearColor}
                  textColor="#FFF"
                  width={80}
                  copySize="12px"
                />
              </div>

            </div>
          </div>
        </header>
    )
} 

export default Card;