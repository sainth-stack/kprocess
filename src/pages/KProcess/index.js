import { Piechart } from "./piechart"
import { options, options2, options3, options4, options5, options6 } from "./data"
import co2 from '../../assets/svg/co2.png'
import waste from '../../assets/svg/garbage.png'
import water from '../../assets/svg/sea.png'
import electric from '../../assets/svg/electric.png'
import plantation from '../../assets/svg/plantation.png'
import energy from '../../assets/svg/energy2.png'
import { Productivity } from "../productivity"
export const KProcess = () => {
    const Sustainability = ({ name, image, value, target }) => {
        return (
            <div style={{ border: '1px solid #E6E6E6', padding: 5, display: 'flex', flexDirection: "column", alignItems: 'center', marginLeft: '3px' }}>
                <h5 style={{ fontFamily: 'Inter', marginTop: '0.5px', fontSize: '14px', lineHeight: '16px', fontWeight: 500 }}>
                    {name}
                </h5>
                <img src={image} alt="Girl in a jacket" width={"25%"} className="mb-2" />
                <h5 style={{ fontFamily: 'Inter', marginTop: '4px', fontSize: '12px', lineHeight: '14px', fontWeight: 500, textAlign: "center" }}>{value} <br />                    
                <span> {target}</span>
                </h5>
            </div>
        )
    }
    return (
        <div style={{ height: '88vh', background: 'white' }}>
            <div className="gradient-color row p-0 m-2 mb-0 mt-0" style={{ border: '1px solid black', height: '88vh' }}>
                <div className="col-6">
                    <div>
                        <h5 style={{ fontFamily: "poppins", fontWeight: 550, display: 'flex', justifyContent: "center", marginBottom: '10px', marginTop: '1px', fontSize: '22px',lineHeight:"22px" }}>Productivity</h5>
                        <Productivity />
                    </div>
                </div>
                <div className="col-6 gy-0 p-0" style={{ borderLeft: '0px solid black' }}>
                    <div style={{ borderBottom: '0px solid black', paddingBottom: '10px', marginBottom: '5px', padding: '10px' }} className="mt-0">
                        <h5 style={{ fontFamily: "poppins", fontWeight: 550, display: 'flex', justifyContent: "center", fontSize: '22px',lineHeight:"22px" }}>Sustainability</h5>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Sustainability name="CO2 Emission" image={co2} value={"15.23 KG/Ton"} target={"(Target: 14 KG/Ton)"} />
                            <Sustainability name="Water Consumption" image={water} value={"45.37 m3/Ton"} target={"(Target: 45m3/Ton)"}/>
                            <Sustainability name="Waste Produced" image={waste} value={"10.25 KG/Ton"} target={"(Target: 9.25 KG/Ton)"} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: '3px' }}>
                            <Sustainability name="Electricity Used" image={electric} value={"1.067 MWh/Ton"} target={"(Target: 0.95 MWh/Ton)"}/>
                            <Sustainability name="Plantation" image={plantation} value={"89,726"} target={"(Target: 100,000)"} />
                            <Sustainability name="Energy Produced" image={energy} value={"3MWh"} target={"(Target: 4MWh)"} />
                        </div>
                    </div>

                    <div style={{ height: "50%" }} className="mt-0">
                        <h5 style={{ fontFamily: "poppins", fontWeight: 550, display: 'flex', justifyContent: "center", fontSize: '22px',lineHeight:"22px" }}>Resilience</h5>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Piechart options={options} />
                            <Piechart options={options2} />
                            <Piechart options={options3} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Piechart options={options4} />
                            <Piechart options={options5} />
                            <Piechart options={options6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}