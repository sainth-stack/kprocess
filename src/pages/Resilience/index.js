import { data, heading, roptions } from './data'
import { useState } from 'react'
import { ApexChart } from "../../components/ApexBarChart"
import { getTitle,getData,getOdometer } from '../../utils'
export const Resilience = () => {
    const Card = ({ img, text, series, data }) => {
        const [show, setShow] = useState(false)

        return (
            <div className='d-flex p-4 ps-2 pe-2 pt-2' style={{ border: "2px solid #E6E6E6", borderRadius: '0px', }}>
                <div>
                    <button className='btn btn-primary mb-2' onClick={() => setShow(!show)}>IPR</button>
                    <img src={img} alt="img" height={"100px"} className='mt-2' />
                    {show && <div className='card p-2' style={{ position: 'absolute', marginLeft: "70px", marginTop: "-160px", zIndex: 9999 }}>
                        {data.inferences?.length > 0 && <div>
                            {getTitle("Inferences", "#427ae3")}
                            {getOdometer(data.inferences,"#427ae3")}
                        </div>}
                        {data.recomondations?.length > 0 && <div>
                            {getTitle("Recommendations", "#800080")}
                            {getData(data.recomondations,"#800080")}
                        </div>}
                        {data.predictions?.length > 0 && <div className='mt-2'>
                            {getTitle("Predictions", "#39c734")}
                            {getData(data?.predictions,"#39c734")}
                        </div>}

                    </div>}
                </div>
                <div width={"70%"} className='ms-5'>
                    <h5 style={{ fontFamily: "Inter", fontSize: '18px', fontWeight: 600, height: '50px', marginBottom: '0px',width:"220px" }}>{text}</h5>
                    <div style={{ position: 'relative', right: '40px' }}>
                        <ApexChart series={series} options={roptions} width={"100%"} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="p-1 m-1">
            <div className='row gy-2 gx-3 mt-2 flex-wrap'>
                {heading.map((item) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div style={{ background: '#34b4eb', fontFamily: "Inter" }} className='pt-2 pb-2 text-center text-white'>
                                {/* <span className='lightcolor' style={{ position: 'absolute', left: 300 }}>{item.num}</span> */}
                                <h3 className='text-center mt-2' style={{ fontSize: '22px' }}>{item.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row gy-3 gx-3 mt-2">
                {data.map((item) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <Card img={item.img} text={item.name} series={item.series} data={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}