import { CONFIG } from './config.js';

/**
 * 全局状态管理
 */
export const state = {
  conferences: [],
  currentLang: CONFIG.defaultLang,
  currentTimezone: CONFIG.defaultTimezone,
  currentCategory: 'all',
  currentSortBy: 'deadline',
  countdownTimer: null
};

/**
 * 更新状态
 * @param {string} key - 状态键
 * @param {*} value - 新值
 */
export function updateState(key, value) {
  state[key] = value;
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
export function getCurrentLang() {
  return state.currentLang;
}

/**
 * 切换语言
 */
export function toggleLanguage() {
  state.currentLang = state.currentLang === 'zh' ? 'en' : 'zh';
  return state.currentLang;
}