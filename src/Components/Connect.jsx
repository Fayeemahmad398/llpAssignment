import { Textarea } from "@mui/joy";
import { Box, Button, TextField } from "@mui/material";
import "../style/connect.css"

function Connect() {
    return (
        <div className="connect-section">
            <h2 className="offers-services">
                Connect With Us
            </h2>
            <Box sx={{ padding: "10px" }} className="form-box">
                <div className="input-top-marg">

                    <Box class="gaper box-3">
                        <TextField id="outlined-basic" label="Name"
                            variant="outlined" className="input-handle" InputProps={{
                                style: {
                                    background: "white"
                                }
                            }} InputLabelProps={{
                                style: {
                                    height: "400px",
                                    color: "red"
                                }
                            }} />
                        <TextField id="outlined-basic" label="Email" variant="outlined"
                            className="input-handle" InputLabelProps={{ style: { color: "red", background: "white" } }}
                            InputProps={{
                                style: {
                                    background: "white"
                                }
                            }} />
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" className="input-handle"
                            InputLabelProps={{ style: { color: "red", background: "white" } }} InputProps={{
                                style: {
                                    background: "white"
                                    
                                }
                            }} />
                    </Box>
                </div>
                <div className="input-top-marg extend">

                    <TextField id="outlined-basic"
                        label="Subject" variant="outlined" className="input-handle"
                        InputLabelProps={{ style: { color: "red" } }} InputProps={{
                            style: {
                                background: "white"
                            }
                        }} />
                </div>
                <Textarea minRows={3} placeholder="Message"
                    sx={{ color: "red", maxWidth: "300px", minWidth: "230px", background: "white" }}
                    className="Textarea-"
                />


                <Button sx={{ margin: "10px", color: "red", background: "white" }}>Submit</Button>
            </Box>
        </div>
    )
}

export default Connect;
