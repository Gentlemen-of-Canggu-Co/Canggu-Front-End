function Accordion(props){

    const {spot} = props

    return(

        <div>
                <div
      dangerouslySetInnerHTML={{__html: spot.openingTimes}}
    />
        </div>

    )
}

export default Accordion