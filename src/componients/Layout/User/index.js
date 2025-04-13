import Header from './Header'
import Footer from './Footer'
function User({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
export default User
