const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Contact</h2>
                </div>

                <div className='row'>
                    <div className='col-lg-12 d-flex align-items-stretch'>
                        <div className='info'>
                            <div className='address'>
                                <i className='bx bx-map'></i>
                                <h4>Location:</h4>
                                <p>
                                    HD-264,Oberoi Commerz II,20th Floor,
                                    <br></br>
                                    CTS no. 95, 4 B 3 & 4 590, Off W. E. Highway,
                                    Oberoi Garden City, Goregaon East(D2), Mumbai,MH 400063
                                </p>
                            </div>

                            <div className='email'>
                                <i className='bx bx-envelope'></i>
                                <h4>Email:</h4>
                                <p>Vitmedspharma@gmail.com</p>
                            </div>

                            <div className='phone'>
                                <i className='bx bx-phone'></i>
                                <h4>Call:</h4>
                                <p>+91 77719-54902</p>
                            </div>

                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.673358868675!2d81.29601937536039!3d24.5313825781456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMxJzUzLjAiTiA4McKwMTcnNTQuOSJF!5e0!3m2!1sen!2sin!4v1714829718580!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                                style={{
                                    borderWidth: 0,
                                    width: '100%',
                                    height: 290,
                                }}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
