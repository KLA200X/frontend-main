import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
export default function Contact() {
    return (
      <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            Contact
          </h2>
          
       
          <p style={{ color: '#666' }}>
          Email : 66309010067@cmtc.ac.th
          <br></br>
          </p>
          <p style={{ color: '#666' }}>
           เบอร์โทร : 0813511069
          </p>
          <p style={{ color: '#666' }}>
          FB  :  aeknarin tonkla
          <br></br>
          </p>
          <p style={{ color: '#666' }}>
           IG  :  KLA_200X
          </p>
          
        </div>
      </div>
      <br></br>
        <Footer />
      </>
    );
  }
  