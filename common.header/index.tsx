import { Grid, Typography } from '@mui/material'
import { Button } from '@components'
import { LeftArrow, LeftArrowAsset, RightArrow, RightArrowAsset } from '@svg'
interface ICommonHeader {
    step?: number,
    title?: string,
    setStep?:any
}
export const CommonHeader = ({ step,setStep, title }: ICommonHeader) => {
    return (
        <Grid container sx={{
            height: "72px",
            borderBottom: "1px solid #E6E6E6",
            display: 'flex',
            justifyContent: "space-between",
            padding: "8px 32px",
            alignItems: 'center'
        }}>
            <Grid item display={"flex"} justifyContent={"start"} alignItems={"center"} width={"320px"}>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontWeight: 700,
                    mr: '8px'
                }}>Step</Typography>
                <Grid sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    height: "36px",
                    width: "36px",
                    borderRadius: "18px",
                    background: "#175CE5",
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: "center",
                    color: 'white'
                }}>
                    1/3
                </Grid>
            </Grid>
            <Grid item>
                <Typography sx={{ fontSize: "16px", fontFamily: "Poppins", lineHeight: "24px", fontWeight: 700, color: "#242424" }}>
                    Device Information
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    id="get-service-btn"
                    variant="contained"
                    // onClick={() =>setOpenDrawer(true)}
                    sx={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 600,
                        backgroundColor: "#FFF !important",
                        color: "#000!important",
                        padding: "12px 32px",
                        gap: "8px",
                        lineHeight: "32px",
                        width: "137px",
                        height: '56px',
                        fontFamily: "Poppins",
                        borderRadius: "4px",
                        boxShadow: "none !important",
                        border: '1px solid #E6E6E6',
                        mr: '8px'
                    }}
                >
                    <LeftArrowAsset /> Back
                </Button>
                <Button
                    id="get-service-btn"
                    variant="contained"
                    // onClick={() =>setOpenDrawer(true)}
                    sx={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 600,
                        backgroundColor: "#2469F3 !important",
                        color: "#FFF!important",
                        padding: "12px 32px",
                        gap: "8px",
                        lineHeight: "32px",
                        height: '56px',
                        width: "137px",
                        fontFamily: "Poppins",
                        borderRadius: "4px",
                        boxShadow: "none !important",
                        border: '1px solid #E6E6E6'
                    }}
                >
                    Next <RightArrowAsset />
                </Button>
            </Grid>
        </Grid>
    )
}