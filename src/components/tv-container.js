import React from 'react';
import { connect } from 'react-redux';
import TV from '../image/image2.png'
import {buyTv} from '../redux/tv/actionTv'

function tvContainer (props) {
    const {tv , buyTv} = props
    console.log(props)
    return(
        <div className="p-5 text-center">
      <img src={TV} alt="phone" />
      <p className="p-5">
        Dispos: <span>{tv}</span>
      </p>
      <button
        className="p-2 bg-green-200 hover:bg-green-500"
        onClick={()=>buyTv()}
      >
        Acheter
      </button>
    </div>
    )

}

const mapStatetoProps = state=>{
    return {
        tv: state.television.tv
    }
}

const mapDispatchProps = (dispatch) => {
    return{
        buyTv : () => dispatch(buyTv()),
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(tvContainer)