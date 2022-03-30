import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import BusinessList from '../views/BusinessList.vue'
import BusinessInfo from '../views/BusinessInfo.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Order from '../views/Order.vue'
import UserAddress from '../views/UserAddress.vue'
import AddUserAddress from '../views/AddUserAddress.vue'
import EditUserAddress from '../views/EditUserAddress.vue'
import Payment from '../views/Payment.vue'
import OrderList from '../views/OrderList.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		name:'index',
		component: Index
	},
	{
		path:'/businessList',
		name:'businessList',
		component: BusinessList
	},
	{
		path:'/businessInfo',
		name:'businessInfo',
		component: BusinessInfo
	},
	{
		path:'/login',
		name:'login',
		component: Login
	},
	{
		path:'/register',
		name:'register',
		component: Register
	},
	{
		path:'/order',
		name:'order',
		component: Order
	},
	{
		path:'/userAddress',
		name:'userAddress',
		component: UserAddress
	},
	{
		path:'/addUserAddress',
		name:'addUserAddress',
		component: AddUserAddress
	},
	{
		path:'/editUserAddress',
		name:'editUserAddress',
		component: EditUserAddress
	},
	{
		path:'/payment',
		name:'payment',
		component: Payment
	},
	{
		path:'/orderList',
		name:'orderList',
		component: OrderList
	}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
