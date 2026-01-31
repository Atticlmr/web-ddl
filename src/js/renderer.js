import { state, getCurrentLang } from './state.js';
import { i18n, categoryMap } from './config.js';
import { getText, isExpired, isUrgent, formatDate, calculateCountdown, getDeadlineStatus } from './utils.js';

/**
 * 更新页面文本
 */
export function updatePageText() {
  const t = i18n[getCurrentLang()];

  // 更新带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // 更新占位符
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }

  // 更新下拉选项
  updateSelectOptions('categoryFilter', ['all', 'ai', 'robotics', 'ml', 'cv', 'nlp', 'control', 'active', 'expired']);
  updateSelectOptions('sortBy', ['deadline', 'name']);
}

/**
 * 更新下拉选项
 * @param {string} selectId - select元素ID
 * @param {Array} keys - 键数组
 */
function updateSelectOptions(selectId, keys) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const t = i18n[getCurrentLang()];
  Array.from(select.options).forEach((option, index) => {
    const key = keys[index];
    if (key && t[key]) {
      option.textContent = t[key];
    }
  });
}

/**
 * 渲染会议列表
 * @param {Array} conferences - 会议数组
 */
export function renderConferencesList(conferences) {
  const container = document.getElementById('conferencesList');
  if (!container) return;

  if (conferences.length === 0) {
    container.innerHTML = renderEmptyState();
    return;
  }

  container.innerHTML = conferences.map(conf => renderConferenceCard(conf)).join('');
}

/**
 * 渲染空状态
 * @returns {string} HTML字符串
 */
function renderEmptyState() {
  const t = i18n[getCurrentLang()];
  return `
    <div class="empty-state">
      <div class="empty-state-icon">📭</div>
      <div>${t.noConferences}</div>
    </div>
  `;
}

/**
 * 渲染会议卡片
 * @param {Object} conf - 会议对象
 * @returns {string} HTML字符串
 */
function renderConferenceCard(conf) {
  const t = i18n[getCurrentLang()];

  const expired = isExpired(conf);
  const urgent = isUrgent(conf);
  const name = getText(conf.name);
  const description = getText(conf.description);

  // 生成标签
  const tagsHtml = (conf.tags || []).map(tag => {
    const color = conf.tagColors?.[tag] || '#2196F3';
    return `<span class="tag" style="background:${color}">${tag}</span>`;
  }).join('');

  // 生成分类标签
  const categoriesHtml = (conf.categories || []).map(cat => {
    const catInfo = categoryMap[cat] || categoryMap.general;
    return `<span class="category-tag" style="background:${catInfo.color}">${catInfo[getCurrentLang()]}</span>`;
  }).join('');

  // 生成截止时间HTML
  const deadlinesHtml = renderDeadlines(conf);

  // 生成地点和会议时间（并排显示）
  const locationDateHtml = renderLocationDate(conf);

  return `
    <article class="conference-card ${expired ? 'expired' : ''} ${urgent ? 'urgent' : ''}">
      <div class="card-header">
        <h3 class="conf-name">${name}</h3>
        <a href="${conf.link}" target="_blank" class="btn-visit" rel="noopener">${t.visitWebsite}</a>
      </div>
      ${tagsHtml ? `<div class="card-tags">${tagsHtml}</div>` : ''}
      ${categoriesHtml ? `<div class="card-categories">${categoriesHtml}</div>` : ''}
      <div class="card-deadlines">${deadlinesHtml}</div>
      ${locationDateHtml}
      <div class="card-desc">${description}</div>
    </article>
  `;
}

/**
 * 渲染地点和会议时间（并排显示）
 * @param {Object} conf - 会议对象
 * @returns {string} HTML字符串
 */
function renderLocationDate(conf) {
  const t = i18n[getCurrentLang()];
  const location = conf.location ? getText(conf.location) : null;
  const date = conf.date ? getText(conf.date) : null;

  if (!location && !date) return '';

  let html = '<div class="card-info location-date-row">';

  if (location) {
    html += `
      <div class="info-column">
        <div class="info-row">
          <span class="info-icon">📍</span>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}" 
             target="_blank" class="location-link" rel="noopener">${location}</a>
        </div>
      </div>
    `;
  }

  if (date) {
    html += `
      <div class="info-column">
        <div class="info-row">
          <span class="info-icon">📅</span>
          <span>${date}</span>
        </div>
      </div>
    `;
  }

  html += '</div>';
  return html;
}

/**
 * 渲染截止时间
 * @param {Object} conf - 会议对象
 * @returns {string} HTML字符串
 */
function renderDeadlines(conf) {
  const t = i18n[getCurrentLang()];
  const deadlines = [];

  if (conf.abstractDeadline) {
    deadlines.push(renderDeadlineItem(t.abstract, conf.abstractDeadline));
  }
  if (conf.fullPaperDeadline) {
    deadlines.push(renderDeadlineItem(t.fullPaper, conf.fullPaperDeadline));
  }

  return deadlines.join('');
}

/**
 * 渲染单个截止时间项
 * @param {string} label - 标签
 * @param {string} deadline - 截止时间
 * @returns {string} HTML字符串
 */
function renderDeadlineItem(label, deadline) {
  const date = new Date(deadline);
  const status = getDeadlineStatus(deadline);
  const formattedDate = formatDate(date);

  return `
    <div class="deadline-item ${status}">
      <div class="deadline-label">${label}</div>
      <div class="deadline-time">${formattedDate}</div>
      <div class="deadline-countdown ${status}" data-deadline="${deadline}">
        ${calculateCountdown(deadline)}
      </div>
    </div>
  `;
}

/**
 * 渲染页脚图例
 */
export function renderFooterLegend() {
  const t = i18n[getCurrentLang()];
  const legend = document.getElementById('footerLegend');
  if (!legend) return;

  legend.innerHTML = `
    <div class="legend-item">
      <span class="legend-dot urgent"></span>
      <span>${t.legendUrgent}</span>
    </div>
    <div class="legend-item">
      <span class="legend-dot warning"></span>
      <span>${t.legendWarning}</span>
    </div>
    <div class="legend-item">
      <span class="legend-dot normal"></span>
      <span>${t.legendNormal}</span>
    </div>
    <div class="legend-item">
      <span class="legend-dot expired"></span>
      <span>${t.legendExpired}</span>
    </div>
  `;
}