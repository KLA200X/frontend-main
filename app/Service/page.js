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
          Service
          </h2>
          <img
            src="/img/544.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          ทุเรียนเป็นไม้ผลยืนต้นไม่ผลัดใบ ลำต้นตรง สูง 25-50 เมตรขึ้นกับชนิด[10] แตกกิ่งเป็นมุมแหลม ปลายกิ่งตั้งกระจายกิ่งกลางลำต้นขึ้นไป เปลือกชั้นนอกของลำต้นสีเทาแก่ ผิวขรุขระหลุดลอกออกเป็นสะเก็ด ไม่มียาง ใบเป็นใบเดี่ยว เกิดกระจายทั่วกิ่ง เกิดเป็นคู่อยู่ตรงกันข้ามระนาบเดียวกัน ก้านใบกลมยาว 2–4 ซม. แผ่นใบรูปไข่แกมขอบขนานปลายใบใบเรียวแหลม ยาว 10-18 ซม. ผิวใบเรียบลื่น มีไขนวล ใบด้านบนมีสีเขียว ท้องใบมีสีน้ำตาลเส้นใบด้านล่างนูนเด่น ขอบใบเรียบ ดอกเป็นดอกช่อ มี 3-30 ช่อบนกิ่งเดียวกัน เกิดตามลำต้น และกิ่งก้านยาว 1–2 ซม. ลักษณะดอกสมบูรณ์เพศ มีกลีบเลี้ยงและมีกลีบดอก 5 กลีบ (บางครั้งอาจมี 4 หรือ 6 กลีบ) มีสีขาวหอม ลักษณะดอกคล้ายระฆัง มีช่วงเวลาออกดอก 1-2 ครั้งต่อปี 
          </p>
          <a href="#" className="btn btn-danger">
            ทุเรียน
          </a>
        </div>
      </div>
      <br></br>
    <Footer />
      </>
    );
  }
  