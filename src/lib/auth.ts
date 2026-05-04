import { toast } from 'sonner'
import { create } from 'zustand'

// ======================
// 你自己设定的管理员账号密码
// ======================
const ADMIN_CONFIG = {
  username: "admin",      // 你自己改
  password: "12345678"    // 你自己改
}

// 登录状态缓存
const AUTH_KEY = 'admin_logged_in'

// ======================
// 登录状态管理
// ======================
export const useAuthStore = create(() => ({
  privateKey: null,
  isAdminLoggedIn: localStorage.getItem(AUTH_KEY) === 'true',
}))

// ======================
// 登录函数（账号密码校验）
// ======================
export async function adminLogin(username: string, password: string) {
  if (username === ADMIN_CONFIG.username && password === ADMIN_CONFIG.password) {
    localStorage.setItem(AUTH_KEY, 'true')
    useAuthStore.setState({ isAdminLoggedIn: true })
    toast.success('登录成功！')
    return true
  } else {
    toast.error('账号或密码错误')
    return false
  }
}

// ======================
// 登出
// ======================
export function adminLogout() {
  localStorage.removeItem(AUTH_KEY)
  useAuthStore.setState({ isAdminLoggedIn: false })
  toast.info('已退出登录')
}

// ======================
// 判断是否是管理员
// ======================
export function isAdmin() {
  return useAuthStore.getState().isAdminLoggedIn
}

// ======================
// 给写作页面用的获取token
// 现在直接返回固定字符串，不需要GitHub
// ======================
export async function getAuthToken() {
  if (!isAdmin()) {
    throw new Error('请先登录管理员账号')
  }
  return 'admin_token' // 固定值
}

// ======================
// 清理缓存（保留登录状态）
// ======================
export function clearAllAuthCache() {
  // 不清除登录
}

// ======================
// 判断是否已认证
// ======================
export async function hasAuth() {
  return isAdmin()
}

// 无用的兼容函数
export async function getPemFromCache() { return null }
export async function savePemToCache() { }
