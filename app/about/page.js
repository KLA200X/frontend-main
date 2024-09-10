import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
export default function about() {
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
            About
          </h2>
          <img
            src="/img/2.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          ทุเรียน เป็นไม้ผลในวงศ์ฝ้าย (Malvaceae) ในสกุลทุเรียน (Durio)[2][1] (ถึงแม้ว่านักอนุกรมวิธานบางคนจัดให้อยู่ในวงศ์ทุเรียน (Bombacaceae)[3] ก็ตาม[1]) เป็นผลไม้ซึ่งได้ชื่อว่าเป็นราชาของผลไม้[4][5][6] ผลทุเรียนมีขนาดใหญ่และมีหนามแข็งปกคลุมทั่วเปลือก อาจมีขนาดยาวถึง 30 ซม. และอาจมีเส้นผ่าศูนย์กลางยาวถึง 15 ซม. โดยทั่วไปมีน้ำหนัก 1-3 กิโลกรัม ผลมีรูปรีถึงกลม เปลือกมีสีเขียวถึงน้ำตาล เนื้อในมีสีเหลืองซีดถึงแดง แตกต่างกันไปตามสปีชีส์
          </p>
          <a href="#" className="btn btn-danger">
           ทุเรียน
          </a>
        </div>
      </div>
      <br />
    
    <Footer />
      </>
    );
  }
  