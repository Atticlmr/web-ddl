import { CONFIG } from './config.js';
import { state } from './state.js';
import { calculateCountdown, getDeadlineStatus } from './utils.js';

/**
 * 启动倒计时更新
 */
export function startCountdown() {
  updateCountdowns();
  state.countdownTimer = setInterval(updateCountdowns, CONFIG.updateInterval);
}

/**
 * 停止倒计时
 */
export function stopCountdown() {
  if (state.countdownTimer) {
    clearInterval(state.countdownTimer);
    state.countdownTimer = null;
  }
}

/**
 * 更新所有倒计时显示
 */
export function updateCountdowns() {
  const countdowns = document.querySelectorAll('.deadline-countdown');

  countdowns.forEach(el => {
    const deadline = el.getAttribute('data-deadline');
    if (!deadline) return;

    // 更新文本
    el.textContent = calculateCountdown(deadline);

    // 更新状态样式
    const newStatus = getDeadlineStatus(deadline);
    el.className = `deadline-countdown ${newStatus}`;
  });
}

/**
 * 清理倒计时定时器
 */
export function cleanup() {
  stopCountdown();
}