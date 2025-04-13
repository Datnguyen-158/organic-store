import Header from './Header'
import Slider from './Slider'

import classNames from 'classnames/bind'

function Admin({ children }) {
  return (
    <div style={{ backgroundColor: ' #ccc' }}>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <Slider />
          </div>

          <div className="col-10 ad-main">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default Admin
