import { ApexChart } from "../../components/ApexBarChart"
import { options1, series1, options2, series2, dounut1, options3, series3, dounut2, seriesplantation, optionsplantation,data } from "./data"
import PieChart from "../../components/PieChart"
import { LineChart } from "../../components/LineChart"
import { useState } from "react"
import { getTitle,getData } from "../../utils"
export const Sustainability = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    return (
        <div className="bg-white">
            <div className="row gx-1">
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Energy {" (KWH)"}</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow(!show)}>IPR</button>
                            {show && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "0px", zIndex: 9999999999 }}>
                                {data[0].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[0].inferences, "#427ae3")}
                                </div>}
                                {data[0].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[0].recomondations, "#800080")}
                                </div>}
                                {data[0].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[0].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <ApexChart series={series1} options={options1} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Waste {" (tons)"}</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow1(!show1)}>IPR</button>
                            {show1 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "0px", zIndex: 9999999 }}>
                                {data[1].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[1].inferences, "#427ae3")}
                                </div>}
                                {data[1].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[1].recomondations, "#800080")}
                                </div>}
                                {data[1].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[1].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <ApexChart series={series2} options={options2} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Plantation</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow2(!show2)}>IPR</button>
                            {show2 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "0px", zIndex: 9999999 }}>
                                {data[2].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[2].inferences, "#427ae3")}
                                </div>}
                                {data[2].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[2].recomondations, "#800080")}
                                </div>}
                                {data[2].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[2].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <ApexChart series={seriesplantation} options={optionsplantation} height={"250px"} width={"100%"} />
                    </div>
                </div>
            </div>
            <div className="row gx-1">
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Water {" (Kilolitres)"}</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow3(!show3)}>IPR</button>
                            {show3 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "0px", zIndex: 9999999 }}>
                                {data[3].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[3].inferences, "#427ae3")}
                                </div>}
                                {data[3].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[3].recomondations, "#800080")}
                                </div>}
                                {data[3].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[3].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <ApexChart series={series3} options={options3} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Alternate Energy</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow4(!show4)}>IPR</button>
                            {show4 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "-60px", zIndex: 9999999 }}>
                                {data[4].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[4].inferences, "#427ae3")}
                                </div>}
                                {data[4].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[4].recomondations, "#800080")}
                                </div>}
                                {data[4].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[4].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <PieChart options={dounut1} width={"100%"} height={"260px"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>CO2 Emission</h6>
                            <button className='btn btn-primary mb-2' onClick={() => setShow5(!show5)}>IPR</button>
                            {show5 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "160px", marginTop: "-100px", zIndex: 9999999 }}>
                                {data[5].inferences?.length > 0 && <div>
                                    {getTitle("Inferences", "#427ae3")}
                                    {getData(data[5].inferences, "#427ae3")}
                                </div>}
                                {data[5].recomondations?.length > 0 && <div>
                                    {getTitle("Recommendations", "#800080")}
                                    {getData(data[5].recomondations, "#800080")}
                                </div>}
                                {data[5].predictions?.length > 0 && <div className='mt-2'>
                                    {getTitle("Predictions", "#39c734")}
                                    {getData(data[5].predictions, "#39c734")}
                                </div>}

                            </div>}
                        </div>
                        <LineChart height={"180px"} />
                    </div>
                </div>
            </div>
        </div>
    )
}