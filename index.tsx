import { Helmet } from "react-helmet"
import AssetHeader from "../common/asset.header"
import useRegisterDevice from "./useRegisterOtAssets"
import { Grid } from '@mui/material'
import CardTheme from '../../../components/card'
import { CommonHeader } from "./frames/common.header"
const RegisterAsset = () => {
    const {
        _breadcrumbs,
        step,
        setStep
    } = useRegisterDevice()
    return (
        <>
            <Helmet>
                <title>Register Device</title>
            </Helmet>
            <AssetHeader
                {...{
                    breadcrumb: _breadcrumbs,
                    register: true,
                    step,
                    setStep
                }}
            />
            <Grid container>
                <CardTheme
                    sx={{
                        border: "",
                        '&.MuiPaper-root.MuiCard-root': {
                            boxShadow: 'none',
                            background: "white",
                            padding: '0px'
                        },
                        "& .MuiBox-root.css-ml9o48": {
                            paddingTop: "0px !important",
                            // border: "1px solid #C2C2C2",
                            borderRadius: "4px",
                            paddingRight: "0px !important"
                        }
                    }}
                >
                    <CommonHeader {...{
                        step, setStep
                    }} />
                </CardTheme>
            </Grid>

        </>
    )
}

export default RegisterAsset