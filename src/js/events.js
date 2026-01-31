import { state, toggleLanguage, updateState } from './state.js';
import { loadConferences, filterConferences, sortConferences } from './dataService.js';
import { renderConferencesList, updatePageText, renderFooterLegend } from './renderer.js';
import { startCountdown, stopCountdown, cleanup } from './countdown.js';
import { debounce } from './utils.js';

/**
 * 初始化应用
 */
export async function init() {
  try {
    await loadConferences();
    initEventListeners();
    updatePageText();
    renderFooterLegend();
    render();
    startCountdown();
  } catch (error) {
    console.error('初始化失败:', error);
    showError('加载数据失败，请刷新页面重试');
  }
}

/**
 * 初始化事件监听器
 */
function initEventListeners() {
  // 时区选择
  const timezoneSelect = document.getElementById('timezoneSelect');
  if (timezoneSelect) {
    timezoneSelect.addEventListener('change', (e) => {
      updateState('currentTimezone', e.target.value);
      render();
    });
  }

  // 分类筛选
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      updateState('currentCategory', e.target.value);
      render();
    });
  }

  // 排序
  const sortBy = document.getElementById('sortBy');
  if (sortBy) {
    sortBy.addEventListener('change', (e) => {
      updateState('currentSortBy', e.target.value);
      render();
    });
  }

  // 搜索（防抖）
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const debouncedSearch = debounce((value) => {
      state.currentSearchTerm = value;
      render();
    }, 300);

    searchInput.addEventListener('input', (e) => {
      debouncedSearch(e.target.value.toLowerCase().trim());
    });
  }

  // 语言切换
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', handleLanguageToggle);
  }

  // 页面卸载清理
  window.addEventListener('beforeunload', cleanup);

  // 页面可见性变化处理
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCountdown();
    } else {
      startCountdown();
    }
  });
}

/**
 * 处理语言切换
 */
function handleLanguageToggle() {
  toggleLanguage();
  updatePageText();
  renderFooterLegend();
  render();
}

/**
 * 渲染主函数
 */
function render() {
  const filtered = filterConferences(state.currentCategory, state.currentSearchTerm);
  const sorted = sortConferences(filtered, state.currentSortBy);
  renderConferencesList(sorted);
}

/**
 * 显示错误信息
 * @param {string} message - 错误消息
 */
function showError(message) {
  const container = document.getElementById('conferencesList');
  if (container) {
    container.innerHTML = `
      <div class="empty-state" style="color: var(--urgent);">
        <div class="empty-state-icon">⚠️</div>
        <div>${message}</div>
      </div>
    `;
  }
}