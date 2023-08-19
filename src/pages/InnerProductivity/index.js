import { ApexChart } from "../../components/ApexBarChart"
import { options, options2, options3, options4, dounut1 } from "./data"
import PieChart from "../../components/PieChart"
import { BiUpArrowAlt } from 'react-icons/bi'
import { BiDownArrowAlt } from 'react-icons/bi'
import AreaChart from "../../components/AreaChart/areacahrt"
import { useState } from "react"
import { getTitle, getData } from "../../utils"
import { aseries, aoptions, aoptions2, aoptions3, aseries2, aseries3 } from "../../components/AreaChart/data"
export const InnerProductivity = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const data = [
        {
            inferences: ["Average monthly units produced are consistent but for 2 months.", "Month of February'23 has seen 6% lower production", "Months of April'23 and June'23 have recorded 2.5% and 4.1% higher production"],
            recomondations: ["Ensure supply and availability of raw material and water sources. Shortage of Water in the month of February'23 led to drop in production"],
            predictions: ["Predicted units for the next 3 months are 36,013, 29,210 and 41,245"]
        },
        {
            inferences: ["Two major incidents resulted in 74% of lost units", "Deployed new resources couldn't avoid physical damage during their initial 2 work months", "Unplanned shutdown caused loss in the month of Februrary'23"],
            recomondations: ["Upskilling and tool training may reduce the loss", "Align planned maintenance schedules to off peak hours"],
            predictions: ["Units likely to be lost in next 3 months are 0, 12, 0"]
        },
        {
            inferences: ["Month on Month (MoM) plant productivity is Good and adheres to the planned production"],
            recomondations: ["Continue to adhere to the production and maintenance plans"],
            predictions: ["Productivity in next three months is expected to be 84%"]
        }
    ]


    return (
        <div className="">
            <div className="row gx-2 gy-2 p-2">
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }} className="p-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Units YTD</h6>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontSize: '14px', fontWeight: 400, display: 'flex', justifyContent: "start" }}>Units Produced</h6>
                            </div>
                            <button className='btn btn-primary mb-2' onClick={() => setShow(!show)}>IPR</button>
                        </div>
                        {/* <ApexChart series={options3.series1} options={options3} height={"250px"} width={"100%"} /> */}
                        <div className="d-flex text-center justify-content-between p-2" style={{ background: "", alignItems: 'center' }}>
                            <div >
                                <h2>428,297</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>Target</h6>
                                    <h6 style={{ color: '#d10f0f' }}>450,000</h6>
                                </div>
                            </div>
                            <div>
                                <AreaChart options={aoptions} series={aseries} />
                                <div className="d-flex text-white justify-content-center" style={{ height: "50px", width: '100%', background: "#d10f0f", borderRadius: '8px', alignItems: 'center', fontSize: '18px' }}>
                                    <BiDownArrowAlt size={24} style={{ marginRight: "10px", marginTop: "2px" }} />  -6%
                                </div>
                            </div>
                        </div>
                    </div>

                    {show && <div className='card p-2' style={{ position: 'absolute', marginLeft: "150px", marginTop: "-240px", zIndex: 9999 }}>
                        {data[0].inferences?.length > 0 && <div className="mt-1">
                            {getTitle("Inferences", "#427ae3")}
                            {getData(data[0].inferences, "#427ae3")}
                        </div>}
                        {data[0].recomondations?.length > 0 && <div className="mt-3">
                            {getTitle("Recommendations", "#800080")}
                            {getData(data[0].recomondations, "#800080")}
                        </div>}
                        {data[0].predictions?.length > 0 && <div className='mt-3'>
                            {getTitle("Predictions", "#39c734")}
                            {getData(data[0].predictions, "#39c734")}
                        </div>}

                    </div>}


                </div>
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }} className="p-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Units Lost</h6>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontSize: '14px', fontWeight: 400, display: 'flex', justifyContent: "start" }}>Units Losts</h6>
                            </div>
                            <button className='btn btn-primary mb-2' onClick={() => setShow1(!show1)}>IPR</button>
                        </div>
                        <div className="d-flex ps-2 justify-content-between" style={{ background: "", alignItems: 'center', height: '180px' }}>
                            <div className="pt-3" style={{ height: '70px' }}>
                                <h2>476</h2>
                            </div>
                            <div>
                                <AreaChart options={aoptions2} series={aseries2} />
                            </div>
                        </div>
                    </div>
                    {show1 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "150px", marginTop: "-240px", zIndex: 9999 }}>
                        {data[1].inferences?.length > 0 && <div className="mt-1">
                            {getTitle("Inferences", "#427ae3")}
                            {getData(data[1].inferences, "#427ae3")}
                        </div>}
                        {data[1].recomondations?.length > 0 && <div className="mt-3">
                            {getTitle("Recommendations", "#800080")}
                            {getData(data[1].recomondations, "#800080")}
                        </div>}
                        {data[1].predictions?.length > 0 && <div className='mt-3'>
                            {getTitle("Predictions", "#39c734")}
                            {getData(data[1].predictions, "#39c734")}
                        </div>}

                    </div>}
                </div>
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }} className="p-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Overall Plant Productivity</h6>
                                <h6 className="ps-2" style={{ fontFamily: "poppins", fontSize: '14px', fontWeight: 400, display: 'flex', justifyContent: "start" }}>Productivity</h6>
                            </div>
                            <button className='btn btn-primary mb-2' onClick={() => setShow2(!show2)}>IPR</button>
                        </div>
                        <div className="d-flex text-center justify-content-between p-2" style={{ background: "", alignItems: 'center' }}>
                            <div >
                                <h2>72.12%</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6 >Target</h6>
                                    <h6 style={{ color: '#d10f0f' }}>75%</h6>
                                </div>
                            </div>
                            <div>
                                <AreaChart options={aoptions3} series={aseries3} />
                                <div className="d-flex text-white justify-content-center" style={{ height: "50px", width: '100%', background: "#39c734", borderRadius: '8px', alignItems: 'center', fontSize: '18px' }}>
                                    <BiUpArrowAlt size={24} style={{ marginRight: "10px", marginTop: "2px" }} />  4%
                                </div>
                            </div>

                        </div>
                    </div>
                    {show2 && <div className='card p-2' style={{ position: 'absolute', marginLeft: "150px", marginTop: "-240px", zIndex: 9999 }}>
                        {data[2].inferences?.length > 0 && <div className="mt-1">
                            {getTitle("Inferences", "#427ae3")}
                            {getData(data[2].inferences, "#427ae3")}
                        </div>}
                        {data[2].recomondations?.length > 0 && <div className="mt-3">
                            {getTitle("Recommendations", "#800080")}
                            {getData(data[2].recomondations, "#800080")}
                        </div>}
                        {data[2].predictions?.length > 0 && <div className='mt-3'>
                            {getTitle("Predictions", "#39c734")}
                            {getData(data[2].predictions, "#39c734")}
                        </div>}

                    </div>}
                </div>
            </div>
            <div className="row gx-2 gy-2 p-2">
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }}>
                        <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Overall Productivity:YTD</h6>
                        <ApexChart series={options3.series1} options={options3} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }}>
                        <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Lost Units:Causes</h6>
                        <PieChart options={dounut1} width={445} />
                        {/* <div style={{ display: "flex", justifyContent: 'end', alignItems: "center", paddingRight: '10px' }}>
                            <div style={{ height: '13px', width: '13px', color: 'red', background: 'lightgreen', borderRadius: '50%', marginBottom: '15px', marginRight: '5px' }}></div><p>Tooling Error</p>
                            <div style={{ height: '13px', width: '13px', color: 'red', background: 'lightgreen', borderRadius: '50%', marginBottom: '15px', marginRight: '5px' }}></div><p>Physical Damage</p>
                            <div style={{ height: '13px', width: '13px', color: 'red', background: 'lightgreen', borderRadius: '50%', marginBottom: '15px', marginRight: '5px' }}></div><p>Opener Damage</p>
                            <div style={{ height: '13px', width: '13px', color: 'red', background: 'lightgreen', borderRadius: '50%', marginBottom: '15px', marginRight: '5px' }}></div><p>Other Causes</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-4">
                    <div style={{ border: '1px solid #E6E6E6' }}>
                        <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Overall Productivity:YTD</h6>
                        <ApexChart series={options4.series1} options={options4} height={"250px"} width={"100%"} />
                    </div>
                </div>
            </div>
            <div className="row gx-2 gy-2 p-2">
                <div className="col-6">
                    <div style={{ border: '1px solid #E6E6E6' }}>
                        <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Productivity By Machine</h6>
                        <ApexChart series={options.series1} options={options} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ border: '1px solid #E6E6E6' }}>
                        <h6 className="ps-2" style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Productivity By Machine</h6>
                        <ApexChart series={options2.series1} options={options2} height={"250px"} width={"100%"} />
                    </div>
                </div>
            </div>
        </div>
    )
}