import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '祁劲松博客的聊天机器人 🤖 Chat APP',
  description: '你好，我代表祁劲松欢迎你👏',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

#export const APP_INFO: AppInfo = {
#  title: 'Chat APP',
#  description: '',
#  copyright: '',
#  privacy_policy: '',
#  default_language: 'zh-Hans'
#}

#export const isShowPrompt = true
#export const promptTemplate = ''
