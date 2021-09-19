import React, { useState } from 'react';
import { connect } from 'react-redux';
import TV from '../image/image3.png'
import {buyTv} from '../redux/tv/actionTv'

function tvContainer (props) {
    const {tv , buyTv} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [totalTv, setTotalTv] = useState(1)
    console.log(props)
    return(
        <div className="p-5 text-center">
      <img src={TV} alt="phone" />
      <p className="p-5">
        Dispos: <span>{tv}</span>
      </p>
      <div className='flex flex-col space-y-2'>
        <input className='border p-2' type='text' value={totalTv} onChange={e=>setTotalTv(e.target.value)}/>
      <button
        className="p-2 bg-green-200 hover:bg-green-500"
        onClick={()=>buyTv(totalTv)}
      >
        Acheter
      </button>
      </div>
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
        buyTv : (totalTv) => dispatch(buyTv(totalTv)),
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(tvContainer)