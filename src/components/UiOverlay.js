const Ui = (props) => {
    return ( 
    <div
        className={"UIinterface"}
        style={{
          position: "absolute", 
          marginTop: props.marginTop, 
          marginLeft: props.marginLeft, 
          borderRadius:20,
          padding:10,
          width:props.width,
          fontSize: props.copySize,
          border: props.border,
          background: props.color,
          color: props.textColor,
          filter: (window.scrollY > window.innerHeight/2) ? "blur(0px)" : "blur(1px)",
          opacity: (window.innerWidth > 800) ? (window.scrollY > window.innerHeight/2) ? '1' : '0' : '0',
          transition:"opacity .4s ease"
          }}>
            {props.content}
        </div>
          )

}

export default Ui;