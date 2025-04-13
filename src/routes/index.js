//User
import Home from '../pages/User/Home'
import AboutUs from '../pages/User/AboutUs'
import Cart from '../pages/User/Cart'
import Checkout from '../pages/User/Checkout'
import Login from '../pages/User/Login'
import Order from '../pages/User/Order'
import OrderTracking from '../pages/User/OrderTracking'
import Product from '../pages/User/Product'
import ProductDetail from '../pages/User/ProductDetail'
import Register from '../pages/User/Register'
import Contact from '../pages/User/Contact'
import News from '../pages/User/News'
import Account from '../pages/User/Account'
import ChangePass from '../pages/User/ChangePass'
import Address from '../pages/User/Address'
// Admin
import Admin from '../componients/Layout/Admin'
import AdAccount from '../pages/Admin/Account'
import AdHome from '../pages/Admin/Home'
import AdOrder from '../pages/Admin/Order'
import AdProduct from '../pages/Admin/Product'
import Shipping from '../pages/Admin/Shipping'
import Category from '../pages/Admin/Category'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/Product', component: Product },
  { path: '/ProductDetail', component: ProductDetail },
  { path: '/AboutUs', component: AboutUs },
  { path: '/Cart', component: Cart },
  { path: '/Register', component: Register },
  { path: '/OrderTracking', component: OrderTracking },
  { path: '/Order', component: Order },
  { path: '/Login', component: Login },
  { path: '/News', component: News },
  { path: '/Contact', component: Contact },
  { path: '/Checkout', component: Checkout },
  { path: '/Account', component: Account },
  { path: '/ChangePass', component: ChangePass },
  { path: '/Address', component: Address },
  { path: '/Admin/Home', component: AdHome, layout: Admin },
  { path: '/Admin/Account', component: Account, layout: Admin },
  { path: '/Admin/Category', component: Category, layout: Admin },
  { path: '/Admin/Product', component: AdProduct, layout: Admin },
  { path: '/Admin/Order', component: AdOrder, layout: Admin },
  { path: '/Admin/Shipping', component: Shipping, layout: Admin },
  { path: '/Admin/AdAccount', component: AdAccount, layout: Admin },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
