import { ApexChart } from "../../components/ApexBarChart"
import { options1, series1, options2, series2, dounut1, options3, series3, dounut2,seriesplantation,optionsplantation } from "./data"
import PieChart from "../../components/PieChart"
import { LineChart } from "../../components/LineChart"
export const Sustainability = () => {
    return (
        <div className="bg-white" style={{ height: 'calc(100vh - 80px)' }}>
            <div className="row gx-1">
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Energy {" (KWH)"}</h6>
                        <ApexChart series={series1} options={options1} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Waste {" (tons)"}</h6>
                        <ApexChart series={series2} options={options2} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Plantation</h6>
                        <ApexChart series={seriesplantation} options={optionsplantation} height={"250px"} width={"100%"} />
                    </div>
                </div>
            </div>
            <div className="row gx-1">
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Water {" (Kilolitres)"}</h6>
                        <ApexChart series={series3} options={options3} height={"250px"} width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>Alternate Energy</h6>
                        <PieChart options={dounut1}  width={"100%"} height={"260px"}/>
                    </div>
                </div>
                <div className="col">
                    <div style={{ border: '1px solid #E6E6E6', padding: '2px', margin: '5px 0px 5px 5px' }}>
                        <h6 style={{ fontFamily: "poppins", fontWeight: 500, fontSize: '18px', fontWeight: 600, display: 'flex', justifyContent: "start" }}>CO2 Emission</h6>
                       <LineChart height={"180px"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}