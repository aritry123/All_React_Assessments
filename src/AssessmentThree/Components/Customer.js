import { useSelector } from "react-redux"
import './Admin.css'
const Customer=()=>{
    const {movieData,loading}=useSelector((state)=>state.movieinfo.data)
    return(
        <div>
            <div style={{marginTop: '10px'}}>
            {
                loading ? <><h1 style={{textAlign: 'center',color: 'red',marginTop: '300px'}}>Not yet loaded!</h1></> : <>
                <h1 style={{textAlign: 'center',color: 'red',marginTop: '10px'}}>Here goes the movie list!</h1>
                <div className='row' style={{margin: '5%'}}>
                    {
                    movieData.map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px', borderRadius: '6px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px',borderRadius: '6px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '90%'}}>Movie Name: <b>{item.mname}</b></h2>
                                    <p className="card-text">Country: <b>{item.country}</b><br/>
                                    <i class="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i class="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i class="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i class="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i class="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                </>
            }
            </div>
        </div>
    )
}
export default Customer