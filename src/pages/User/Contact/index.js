import classNames from 'classnames/bind'
import styles from './contact.scss'
import { Link } from 'react-router-dom'

const d = classNames.bind(styles)
function Contact() {
  return (
    <div>
      <section className={d('bread_crumb')}>
        <div className="container ">
          <div className={d('bread_crumb_head  align-content-center ')}>
            <h1>Liên hệ</h1>
            <div className={d('link_bread_crumb ')}>
              <Link to="./Home">Trang chủ </Link>
              <span style={{ fontWeight: 'bolder' }}> Liên hệ</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.952399284493!2d105.7973124!3d20.9829966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452aa32518ef1%3A0x812b4c82b3c1237e!2zTMOqIEzDqiDEkOG7pWMgMjAgVOG6pXQgVGjhu6ljLCBUw6JuIFRyaeG7gW8sIFRoxqEgdGjhu4sgVGjhu4sgxJDhuqFvLCBIw6AgxJDhuqFv!5e0!3m2!1svi!2s!4v1698684726953!5m2!1svi!2s"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="col-4 contact-info">
            <h3>Thông tin liên hệ</h3>
            <p className="">
              Website thương mại điện tử ND Fresh do ND Group là đơn vị chủ
              quản, chịu trách nhiệm và thực hiện các giao dịch liên quan mua
              sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
            </p>
            <div
              className={d('contact-box')}
              style={{ marginTop: '10px', fontSize: '16px' }}
            >
              <p className={d('add')}>
                <strong>Địa chỉ :</strong> 299 Phố Xốm, Hà Đông, Hà Nội"
              </p>
              <p className={d('phone')}>
                <strong>Điện thoại :</strong>0333158971
                <p className={d('email')}>
                  <strong>Email :</strong>datnguyen158203@gmail.com
                </p>
              </p>
            </div>
          </div>
          <div className="col-8 ">
            <form action="" method="post">
              <div className="row">
                <div className={d('col-6 ')}>
                  <fieldset className={d('form_group')}>
                    <label for="">
                      Họ và tên <span className={d('required')}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ và tên"
                      required
                    ></input>
                  </fieldset>
                </div>
                <div className={d('col-6 ')}>
                  <fieldset className={d('form_group ')}>
                    <label for="">
                      Email <span className={d('required')}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      required
                    ></input>
                  </fieldset>
                </div>
                <div className={d('col-12 ')}>
                  <fieldset className={d('form_group ')}>
                    <label for="">
                      Số điện thoại <span className={d('required')}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập SĐT của bạn"
                      required
                    ></input>
                  </fieldset>
                </div>
                <div className={d('col-12 ')}>
                  <fieldset className={d('form_group ')}>
                    <label for="">
                      Nội dung <span className={d('required')}>*</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Nội dung bạn muốn nhắn"
                      required
                    ></textarea>
                  </fieldset>
                  <div className={d('col-3 ')}>
                    <fieldset className={d('form_group ')}>
                      <button type="submit" className={d('btn btn-blues ')}>
                        Gửi tin nhắn
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
