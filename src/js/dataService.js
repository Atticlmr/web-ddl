/**
 * 数据服务 - 负责加载和管理会议数据
 */

import { state, updateState } from './state.js';
import { CONFIG } from './config.js';

/**
 * 加载会议数据
 * @returns {Promise<Array>} 会议数据数组
 */
export async function loadConferences() {
  try {
    const response = await fetch(CONFIG.dataUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateState('conferences', data);
    return data;
  } catch (error) {
    console.error('加载会议数据失败:', error);
    throw new Error('Failed to load conferences data');
  }
}

/**
 * 筛选会议
 * @param {string} category - 分类
 * @param {string} searchTerm - 搜索词
 * @returns {Array} 筛选后的会议
 */
export function filterConferences(category = 'all', searchTerm = '') {
  const { conferences } = state;
  const term = searchTerm.toLowerCase().trim();

  return conferences.filter(conf => {
    // 分类筛选
    if (category !== 'all') {
      if (category === 'active') {
        const earliest = conf.abstractDeadline || conf.fullPaperDeadline
          ? new Date(Math.min(
              conf.abstractDeadline ? new Date(conf.abstractDeadline) : Infinity,
              conf.fullPaperDeadline ? new Date(conf.fullPaperDeadline) : Infinity
            ))
          : new Date(0);
        if (earliest < new Date()) return false;
      } else if (category === 'expired') {
        const earliest = conf.abstractDeadline || conf.fullPaperDeadline
          ? new Date(Math.min(
              conf.abstractDeadline ? new Date(conf.abstractDeadline) : Infinity,
              conf.fullPaperDeadline ? new Date(conf.fullPaperDeadline) : Infinity
            ))
          : new Date(0);
        if (earliest >= new Date()) return false;
      } else if (!conf.categories?.includes(category)) {
        return false;
      }
    }

    // 搜索筛选
    if (term) {
      const nameMatch = Object.values(conf.name || {}).some(
        n => n.toLowerCase().includes(term)
      );
      const descMatch = Object.values(conf.description || {}).some(
        d => d.toLowerCase().includes(term)
      );
      const tagMatch = (conf.tags || []).some(
        t => t.toLowerCase().includes(term)
      );
      if (!nameMatch && !descMatch && !tagMatch) return false;
    }

    return true;
  });
}

/**
 * 排序会议
 * @param {Array} conferences - 会议数组
 * @param {string} sortBy - 排序方式
 * @returns {Array} 排序后的会议
 */
export function sortConferences(conferences, sortBy = 'deadline') {
  // 分离已截止和未截止
  const now = new Date();
  const active = [];
  const expired = [];

  conferences.forEach(conf => {
    const deadlines = [];
    if (conf.abstractDeadline) deadlines.push(new Date(conf.abstractDeadline));
    if (conf.fullPaperDeadline) deadlines.push(new Date(conf.fullPaperDeadline));
    const earliest = deadlines.length > 0 ? new Date(Math.min(...deadlines)) : new Date(0);

    if (earliest < now) {
      expired.push(conf);
    } else {
      active.push(conf);
    }
  });

  // 排序未截止的会议
  active.sort((a, b) => {
    if (sortBy === 'deadline') {
      const getDeadline = (conf) => {
        const deadlines = [];
        if (conf.abstractDeadline) deadlines.push(new Date(conf.abstractDeadline));
        if (conf.fullPaperDeadline) deadlines.push(new Date(conf.fullPaperDeadline));
        return deadlines.length > 0 ? Math.min(...deadlines) : 0;
      };
      return getDeadline(a) - getDeadline(b);
    } else if (sortBy === 'name') {
      const getName = (conf) => {
        return conf.name?.zh || conf.name?.en || '';
      };
      return getName(a).localeCompare(getName(b));
    }
    return 0;
  });

  // 已截止的按时间倒序
  expired.sort((a, b) => {
    const getDeadline = (conf) => {
      const deadlines = [];
      if (conf.abstractDeadline) deadlines.push(new Date(conf.abstractDeadline));
      if (conf.fullPaperDeadline) deadlines.push(new Date(conf.fullPaperDeadline));
      return deadlines.length > 0 ? Math.min(...deadlines) : 0;
    };
    return getDeadline(b) - getDeadline(a);
  });

  return [...active, ...expired];
}