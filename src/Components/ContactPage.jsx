import { React, useState } from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"

function ContactPage() {
    const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e) => {
        const name = e.target.name; const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(data)
    }
    return (
        <div className='ContactPage'>
            <Grid container spacing={3} sx={{ px: 4, }}>
                <Grid md={4} sm={12} sx={{ py: 4, }}>
                    <h1>Company Name</h1>
                    <h6 className='contact_data'>Address</h6>
                    <h3>...............Address..................</h3>
                    <h6 className='contact_data'>Emaiil</h6>
                    <h3>...............Email....................</h3>
                    <h6 className='contact_data'>Number</h6>
                    <h3>...............0000000000.................</h3>
                </Grid>
                <Grid md={8} sm={12} sx={{ py: 4, }}>
                    <h1 style={{ textAlign: "center" }}>For any Query please Contact Us</h1>
                    <form style={{ margin: "50px 0px 50px 0px" }} method='post' onSubmit={handleSubmit}>
                        <Grid container spacing={3} sx={{ px: 4 }}>
                            <Grid md={6} sm={12}>
                                <h5>Name</h5>
                                <div className='inputdiv'>
                                    <input className='inputs' type="text" name="name" id="" onChange={handleChange} value={data.name} />
                                </div>
                            </Grid>
                            <Grid md={6} sm={12}>
                                <h5>Email</h5>
                                <div className='inputdiv'>
                                    <input className='inputs' type="email" name="email" id="" onChange={handleChange} value={data.email} />
                                </div>
                            </Grid>
                            <Grid sm={12}>
                                <h5>Contact Number</h5>
                                <div className='inputdiv'>
                                    <input className='inputs' type="phone" name="phone" id="" onChange={handleChange} value={data.phone} />
                                </div>
                            </Grid>
                            <Grid sm={12}>
                                <h5>Message</h5>
                                <div className='inputdiv'>
                                    <textarea className='inputs' name="message" id="" onChange={handleChange} value={data.message} />
                                </div>
                            </Grid>
                        </Grid>
                        <button type='submit'>Send</button>
                    </form>
                </Grid>
            </Grid>
            <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://thepasswordgame.com/">The Password Game</a></div></div>
        </div>
    )
}

export default ContactPage