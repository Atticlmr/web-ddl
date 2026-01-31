import { state, getCurrentLang } from './state.js';
import { CONFIG, i18n } from './config.js';

/**
 * 获取多语言文本
 * @param {Object|string} obj - 多语言对象或字符串
 * @returns {string} 当前语言的文本
 */
export function getText(obj) {
  if (typeof obj === 'string') return obj;
  const lang = getCurrentLang();
  return obj?.[lang] || obj?.zh || obj?.en || '';
}

/**
 * 获取最早的截止日期
 * @param {Object} conf - 会议对象
 * @returns {Date} 最早的截止日期
 */
export function getEarliestDeadline(conf) {
  const deadlines = [];
  if (conf.abstractDeadline) deadlines.push(new Date(conf.abstractDeadline));
  if (conf.fullPaperDeadline) deadlines.push(new Date(conf.fullPaperDeadline));
  return deadlines.length > 0 ? new Date(Math.min(...deadlines)) : new Date(0);
}

/**
 * 检查会议是否已截止
 * @param {Object} conf - 会议对象
 * @returns {boolean}
 */
export function isExpired(conf) {
  const earliest = getEarliestDeadline(conf);
  return earliest < new Date();
}

/**
 * 检查会议是否紧急（7天内截止）
 * @param {Object} conf - 会议对象
 * @returns {boolean}
 */
export function isUrgent(conf) {
  const earliest = getEarliestDeadline(conf);
  const now = new Date();
  const diff = earliest - now;
  return diff > 0 && diff < CONFIG.urgentDays * 24 * 60 * 60 * 1000;
}

/**
 * 检查会议是否为警告状态（30天内截止）
 * @param {Object} conf - 会议对象
 * @returns {boolean}
 */
export function isWarning(conf) {
  const earliest = getEarliestDeadline(conf);
  const now = new Date();
  const diff = earliest - now;
  return diff > 0 && diff < CONFIG.warningDays * 24 * 60 * 60 * 1000;
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date) {
  const options = {
    timeZone: state.currentTimezone,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short'
  };
  const locale = getCurrentLang() === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * 计算倒计时
 * @param {string} deadline - 截止日期字符串
 * @returns {string} 倒计时文本
 */
export function calculateCountdown(deadline) {
  const now = new Date();
  const target = new Date(deadline);
  const diff = target - now;

  if (diff <= 0) return i18n[getCurrentLang()].expired;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const t = i18n[getCurrentLang()];

  if (days > 0) {
    return `${days}${t.days} ${hours}${t.hours}`;
  }
  return `${hours}${t.hours} ${minutes}${t.minutes} ${seconds}${t.seconds}`;
}

/**
 * 获取截止日期状态
 * @param {string} deadline - 截止日期字符串
 * @returns {string} 状态类名
 */
export function getDeadlineStatus(deadline) {
  const now = new Date();
  const target = new Date(deadline);
  const diff = target - now;

  if (diff <= 0) return 'expired';
  if (diff < CONFIG.urgentDays * 24 * 60 * 60 * 1000) return 'urgent';
  if (diff < CONFIG.warningDays * 24 * 60 * 60 * 1000) return 'warning';
  return 'normal';
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间
 * @returns {Function}
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 创建URL友好的slug
 * @param {string} text - 文本
 * @returns {string} slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}