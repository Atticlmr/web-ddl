/**
 * 应用程序配置
 */
export const CONFIG = {
  dataUrl: './data/conferences.json',
  updateInterval: 1000,    // 倒计时更新间隔 (ms)
  urgentDays: 7,           // 紧急天数阈值
  warningDays: 30,         // 警告天数阈值
  defaultLang: 'zh',
  defaultTimezone: 'Asia/Shanghai'
};

/**
 * 分类映射配置
 */
export const categoryMap = {
  ai: { zh: '人工智能', en: 'AI', color: '#2196F3', icon: '🤖' },
  robotics: { zh: '机器人', en: 'Robotics', color: '#607D8B', icon: '🔧' },
  ml: { zh: '机器学习', en: 'ML', color: '#4CAF50', icon: '📊' },
  cv: { zh: '计算机视觉', en: 'CV', color: '#9C27B0', icon: '👁️' },
  nlp: { zh: '自然语言处理', en: 'NLP', color: '#FF5722', icon: '💬' },
  control: { zh: '控制与决策', en: 'Control', color: '#795548', icon: '🎮' },
  general: { zh: '综合', en: 'General', color: '#9E9E9E', icon: '📋' }
};

/**
 * 多语言翻译
 */
export const i18n = {
  zh: {
    mainTitle: '学术会议投稿截止时间参考',
    subtitle: '汇集全球顶级学术会议，助您把握投稿时机',
    timezone: '时区',
    category: '分类',
    allCategories: '全部分类',
    ai: '人工智能',
    robotics: '机器人',
    ml: '机器学习',
    cv: '计算机视觉',
    nlp: '自然语言处理',
    control: '控制与决策',
    general: '综合类',
    switchLang: 'Switch to English',
    conferencesList: '会议列表',
    infoText: '本页面提供主要学术会议的投稿截止时间参考，时间会根据所选时区自动调整。',
    countdownInfo: '倒计时显示距离截止时间的剩余时间',
    days: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒',
    abstract: '摘要截止',
    fullPaper: '全文截止',
    deadline: '截止时间',
    visitWebsite: '访问官网',
    sortBy: '排序',
    sortByDeadline: '按截止时间',
    sortByName: '按名称',
    search: '搜索',
    searchPlaceholder: '搜索会议名称...',
    activeConferences: '未截止',
    expiredConferences: '已截止',
    location: '举办地点',
    conferenceDate: '会议时间',
    expired: '已截止',
    noConferences: '暂无符合条件的会议',
    urgentStatus: '紧急',
    warningStatus: '即将截止',
    normalStatus: '进行中',
    legendUrgent: '7天内截止',
    legendWarning: '30天内截止',
    legendNormal: '30天以上',
    legendExpired: '已截止'
  },
  en: {
    mainTitle: 'Academic Conference Deadlines',
    subtitle: 'Track submission deadlines for top conferences worldwide',
    timezone: 'Timezone',
    category: 'Category',
    allCategories: 'All Categories',
    ai: 'Artificial Intelligence',
    robotics: 'Robotics',
    ml: 'Machine Learning',
    cv: 'Computer Vision',
    nlp: 'Natural Language Processing',
    control: 'Control',
    general: 'General',
    switchLang: '切换到中文',
    conferencesList: 'Conferences',
    infoText: 'This page provides submission deadlines for major academic conferences.',
    countdownInfo: 'Countdown shows remaining time to deadline',
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
    abstract: 'Abstract',
    fullPaper: 'Full Paper',
    deadline: 'Deadline',
    visitWebsite: 'Visit',
    sortBy: 'Sort',
    sortByDeadline: 'By Deadline',
    sortByName: 'By Name',
    search: 'Search',
    searchPlaceholder: 'Search conferences...',
    activeConferences: 'Active',
    expiredConferences: 'Expired',
    location: 'Location',
    conferenceDate: 'Date',
    expired: 'Expired',
    noConferences: 'No conferences found',
    urgentStatus: 'Urgent',
    warningStatus: 'Upcoming',
    normalStatus: 'Active',
    legendUrgent: '< 7 days',
    legendWarning: '< 30 days',
    legendNormal: '> 30 days',
    legendExpired: 'Expired'
  }
};