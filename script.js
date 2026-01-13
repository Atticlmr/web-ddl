// 会议数据 - 按分类组织，包含机器人和人工智能分类
const conferencesData = [
    {
        name: {
            zh: "AAAI 2026",
            en: "AAAI 2026"
        },
        deadlines: {
            abstract: "2025-07-25T23:59:59",
            fullPaper: "2025-08-01T23:59:59"
        },
        link: "https://aaai.org",
        description: {
            zh: "人工智能顶级会议",
            en: "Top AI Conference"
        },
        categories: ["ai", "ml"],
        tags: ["AI", "Top", "CCF-A"],
        tagColors: {
            "AI": "#667eea",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        },
        location: {
            zh: "美国宾夕法尼亚州费城",
            en: "Philadelphia, Pennsylvania, USA"
        },
        conferenceDate: {
            zh: "2026年2月22日-3月1日",
            en: "February 22 - March 1, 2026"
        }
    },
    {
        name: {
            zh: "ICML 2026",
            en: "ICML 2026"
        },
        deadlines: {
            abstract: "2026-01-23T23:59:59",
            fullPaper: "2026-01-28T23:59:59"
        },
        link: "https://icml.cc",
        description: {
            zh: "机器学习顶级会议",
            en: "Top Machine Learning Conference"
        },
        categories: ["ml"],
        tags: ["ML", "Top", "CCF-A"],
        tagColors: {
            "ML": "#27ae60",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        },
        location: {
            zh: "首尔，韩国",
            en: "Seoul, South Korea"
        },
        conferenceDate: {
            zh: "2026年7月6日-11日",
            en: "July 13-19, 2026"
        }
    },
    {
        name: {
            zh: "NeurIPS 2026",
            en: "NeurIPS 2026"
        },
        deadlines: {
            abstract: "2024-10-08T23:59:59",
            fullPaper: "2024-10-15T23:59:59"
        },
        link: "https://neurips.cc",
        description: {
            zh: "神经信息处理系统会议（还未开始）",
            en: "Neural Information Processing Systems(Not publish)"
        },
        categories: ["ml"],
        tags: ["ML", "Top", "CCF-A"],
        tagColors: {
            "ML": "#27ae60",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        },
        location: {
            zh: "加拿大温哥华",
            en: "Vancouver, Canada"
        },
        conferenceDate: {
            zh: "2026年12月6日-12日",
            en: "December 6-12, 2026"
        }
    },
    {
        name: {
            zh: "ICLR 2026",
            en: "ICLR 2026"
        },
        deadlines: {
            abstract: "2025-09-19T23:59:59",
            fullPaper: "2025-09-24T23:59:59"
        },
        link: "https://iclr.cc",
        description: {
            zh: "学习表征会议",
            en: "International Conference on Learning Representations"
        },
        categories: ["ml"],
        tags: ["ML", "Top", "CCF-A"],
        tagColors: {
            "ML": "#27ae60",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        }
    },
    {
        name: {
            zh: "CVPR 2026",
            en: "CVPR 2026"
        },
        deadlines: {
            abstract: "2025-11-07T23:59:59",
            fullPaper: "2025-11-13T23:59:59"
        },
        link: "https://cvpr.thecvf.com",
        description: {
            zh: "计算机视觉与模式识别会议",
            en: "Computer Vision and Pattern Recognition"
        },
        categories: ["cv", "ai", "ml"],
        tags: ["CV", "Top", "CCF-A"],
        tagColors: {
            "CV": "#9b59b6",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        },
        location: {
            zh: "美国田纳西州纳什维尔",
            en: "Nashville, Tennessee, USA"
        },
        conferenceDate: {
            zh: "2026年6月7日-13日",
            en: "June 7-13, 2026"
        }
    },
    {
        name: {
            zh: "ACL 2026",
            en: "ACL 2026"
        },
        deadlines: {
            // abstract: "2026-01-05T23:59:59",
            fullPaper: "2026-01-05T23:59:59"
        },
        link: "https://aclweb.org",
        description: {
            zh: "计算语言学协会年会",
            en: "Association for Computational Linguistics"
        },
        categories: ["nlp", "ai"],
        tags: ["NLP", "Top", "CCF-A"],
        tagColors: {
            "NLP": "#e67e22",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        }
    },
    {
        name: {
            zh: "ICRA 2026",
            en: "ICRA 2026"
        },
        deadlines: {
            // abstract: "2025-09-09T07:59:59"，
            fullPaper: "2025-09-16T07:59:59"
        },
        link: "https://2026.ieee-icra.org/",
        description: {
            zh: "机器人与自动化国际会议",
            en: "International Conference on Robotics and Automation"
        },
        categories: ["robotics", "ai", "control"],
        tags: ["Robotics", "Top", "CCF-A"],
        tagColors: {
            "Robotics": "#34495e",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        },
        location: {
            zh: "日本东京",
            en: "Tokyo, Japan"
        },
        conferenceDate: {
            zh: "2026年5月17日-22日",
            en: "May 17-22, 2026"
        }
    },
    {
        name: {
            zh: "IROS 2026",
            en: "IROS 2026"
        },
        deadlines: {
            // abstract: "2026-03-02T23:59:59",
            fullPaper: "2026-03-03T07:59:59"
        },
        link: "https://2026.ieee-iros.org/",
        description: {
            zh: "智能机器人与系统国际会议",
            en: "International Conference on Intelligent Robots and Systems"
        },
        categories: ["robotics", "ai", "control"],
        tags: ["Robotics", "Top", "CCF-A"],
        tagColors: {
            "Robotics": "#34495e",
            "Top": "#e74c3c",
            "CCF-A": "#f39c12"
        }
    },
    {
        name: {
            zh: "RSS 2026",
            en: "RSS 2026"
        },
        deadlines: {
            // abstract: "2026-01-23T23:59:59+12:00",
            fullPaper: "2026-01-30T23:59:59+12:00"
        },
        link: "https://roboticsconference.org",
        description: {
            zh: "机器人：科学与系统",
            en: "Robotics: Science and Systems"
        },
        location: {
            zh: "悉尼， 澳大利亚",
            en: "Sydney, Australia"
        },
        conferenceDate: {
            zh: "2026年07月13日-07月17日",
            en: "july 13 - july 17, 2026"
        },
        categories: ["robotics", "ai"]
    },

    {
        name: {
            zh: "CDC 2026",
            en: "CDC 2026"
        },
        deadlines: {
            // abstract: "2026-09-23T23:59:59",
            fullPaper: "2026-09-18T23:59:59+08:00"
        },
        link: "https://cdc2026.ieeecss.org/",
        description: {
            zh: "决策与控制会议",
            en: "Conference on Decision and Control"
        },
        categories: ["control", "ai", "ml"]
    },
    {
        name: {
            zh: "ACC 2026",
            en: "ACC 2026"
        },
        deadlines: {
            // abstract: "2024-11-23T23:59:59",
            fullPaper: "2025-09-30T23:59:59+08:00"
        },
        link: "https://acc2026.a2c2.org/",
        description: {
            zh: "美国控制会议",
            en: "American Control Conference"
        },
        categories: ["control"]
    },
    {
        name: {
            zh: "ECC 2026",
            en: "ECC 2026"
        },
        deadlines: {
            // abstract: "2024-11-23T23:59:59",
            fullPaper: "2025-11-13T23:59:59+08:00"
        },
        link: "https://ecc26.euca-ecc.org/",
        description: {
            zh: "欧洲控制会议",
            en: "European Control Conference"
        },
        categories: ["control"]
    },
    {
        name: {
            zh: "L4DC 2025",
            en: "L4DC 2025"
        },
        deadlines: {
            // abstract: "2025-10-23T23:59:59+12:00",
            fullPaper: "2025-10-30T23:59:59+12:00"
        },
        link: "https://sites.google.com/usc.edu/l4dc2026/",
        description: {
            zh: "动力学与控制中的机器学习",
            en: "Learning for Dynamics & Control Conference"
        },
        categories: ["control", "ml"]
    },
    
];

// 语言配置
const translations = {
    zh: {
        mainTitle: "学术会议投稿截止时间参考",
        timezone: "时区:",
        category: "分类:",
        paperType: "论文类型:",
        allPaperTypes: "全部类型",
        abstract: "摘要",
        fullPaper: "全文",
        allCategories: "全部分类",
        artificialIntelligence: "人工智能",
        robotics: "机器人",
        machineLearning: "机器学习",
        computerVision: "计算机视觉",
        naturalLanguageProcessing: "自然语言处理",
        control: "控制与决策",
        general: "综合类",
        switchLang: "切换英文",
        conferencesList: "会议列表",
        infoText: "本页面提供主要学术会议的投稿截止时间参考，时间会根据所选时区自动调整。",
        countdownInfo: "倒计时显示距离截止时间的剩余时间，红色表示即将截止（少于7天）。",
        days: "天",
        hours: "小时",
        minutes: "分钟",
        seconds: "秒",
        deadline: "截止时间",
        countdown: "倒计时",
        description: "描述",
        visitWebsite: "访问网站",
        sortBy: "排序:",
        sortByDeadline: "按截止时间",
        sortByName: "按名称",
        sortByCategory: "按分类",
        sortOrder: "顺序:",
        ascending: "升序",
        descending: "降序",
        search: "搜索:",
        searchPlaceholder: "搜索会议名称...",
        activeConferences: "未截止",
        expiredConferences: "已截止",
        location: "举办地点",
        conferenceDate: "会议时间"
    },
    en: {
        mainTitle: "Academic Conference Submission Deadlines",
        timezone: "Timezone:",
        category: "Category:",
        paperType: "Paper Type:",
        allPaperTypes: "All Types",
        abstract: "Abstract",
        fullPaper: "Full Paper",
        allCategories: "All Categories",
        artificialIntelligence: "Artificial Intelligence",
        robotics: "Robotics",
        machineLearning: "Machine Learning",
        computerVision: "Computer Vision",
        naturalLanguageProcessing: "Natural Language Processing",
        control: "Control",
        general: "General",
        switchLang: "Switch to Chinese",
        conferencesList: "Conferences List",
        infoText: "This page provides reference for major academic conference submission deadlines, times are automatically adjusted based on selected timezone.",
        countdownInfo: "Countdown shows remaining time until deadline, red indicates urgent (less than 7 days).",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        deadline: "Deadline",
        countdown: "Countdown",
        description: "Description",
        visitWebsite: "Visit Website",
        sortBy: "Sort by:",
        sortByDeadline: "By Deadline",
        sortByName: "By Name",
        sortByCategory: "By Category",
        sortOrder: "Order:",
        ascending: "Ascending",
        descending: "Descending",
        search: "Search:",
        searchPlaceholder: "Search conference name...",
        activeConferences: "Active",
        expiredConferences: "Expired",
        location: "Location",
        conferenceDate: "Conference Date"
    }
};

// 全局变量
let currentLang = 'zh';
let currentTimezone = 'Asia/Shanghai';
let currentCategory = 'all';
let currentSortBy = 'deadline';
let currentSortOrder = 'asc'; // 升序或降序
let currentSearchTerm = ''; // 当前搜索词
let countdownInterval;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    renderConferences();
    startCountdownTimer();
});

// 事件监听器初始化
function initializeEventListeners() {
    // 时区选择
    document.getElementById('timezoneSelect').addEventListener('change', function(e) {
        currentTimezone = e.target.value;
        renderConferences();
    });

    // 分类筛选
    document.getElementById('categoryFilter').addEventListener('change', function(e) {
        currentCategory = e.target.value;
        renderConferences();
    });

    // 排序选择
    document.getElementById('sortBy').addEventListener('change', function(e) {
        currentSortBy = e.target.value;
        renderConferences();
    });

    // 排序顺序选择
    document.getElementById('sortOrder').addEventListener('change', function(e) {
        currentSortOrder = e.target.value;
        renderConferences();
    });

    // 搜索输入
    document.getElementById('searchInput').addEventListener('input', function(e) {
        currentSearchTerm = e.target.value.toLowerCase();
        renderConferences();
    });

    // 语言切换
    document.getElementById('langToggle').addEventListener('click', function() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage();
        renderConferences();
    });
}

// 更新语言
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.tagName === 'BUTTON') {
                element.textContent = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    // 更新分类选项的语言
    updateCategoryOptions();
    // 更新排序选项的语言
    updateSortOptions();
    // 更新排序顺序选项的语言
    updateSortOrderOptions();
    // 更新搜索占位符
    updateSearchPlaceholder();
}

// 更新分类选项语言
function updateCategoryOptions() {
    const categoryFilter = document.getElementById('categoryFilter');
    const options = categoryFilter.options;
    
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const key = option.getAttribute('data-i18n');
        if (key && translations[currentLang][key]) {
            option.textContent = translations[currentLang][key];
        }
    }
}

// 更新排序选项语言
function updateSortOptions() {
    const sortBy = document.getElementById('sortBy');
    const options = sortBy.options;
    
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const key = option.getAttribute('data-i18n');
        if (key && translations[currentLang][key]) {
            option.textContent = translations[currentLang][key];
        }
    }
}

// 更新排序顺序选项语言
function updateSortOrderOptions() {
    const sortOrder = document.getElementById('sortOrder');
    const options = sortOrder.options;
    
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const key = option.getAttribute('data-i18n');
        if (key && translations[currentLang][key]) {
            option.textContent = translations[currentLang][key];
        }
    }
}

// 更新搜索占位符语言
function updateSearchPlaceholder() {
    const searchInput = document.getElementById('searchInput');
    const key = searchInput.getAttribute('data-i18n-placeholder');
    if (key && translations[currentLang][key]) {
        searchInput.placeholder = translations[currentLang][key];
    }
}

// 渲染会议列表
function renderConferences() {
    const container = document.getElementById('conferencesList');
    container.innerHTML = '';

    let filteredConferences = conferencesData;

    // 根据分类筛选
    if (currentCategory !== 'all') {
        if (currentCategory === 'active' || currentCategory === 'expired') {
            // 按截止时间状态筛选
            filteredConferences = filteredConferences.filter(conference => {
                const earliestDeadline = getEarliestDeadline(conference.deadlines);
                const isExpired = new Date(earliestDeadline) < new Date();
                return currentCategory === 'expired' ? isExpired : !isExpired;
            });
        } else {
            // 按学科分类筛选（支持多分类）
            filteredConferences = filteredConferences.filter(conference =>
                conference.categories && conference.categories.includes(currentCategory)
            );
        }
    }

    // 根据搜索词筛选
    if (currentSearchTerm) {
        filteredConferences = filteredConferences.filter(conference => {
            const name = conference.name[currentLang].toLowerCase();
            const description = conference.description[currentLang].toLowerCase();
            return name.includes(currentSearchTerm) || description.includes(currentSearchTerm);
        });
    }

    // 排序会议（只针对未截止的会议）
    const activeConferences = filteredConferences.filter(conference => {
        const earliestDeadline = getEarliestDeadline(conference.deadlines);
        return new Date(earliestDeadline) >= new Date();
    });

    const expiredConferences = filteredConferences.filter(conference => {
        const earliestDeadline = getEarliestDeadline(conference.deadlines);
        return new Date(earliestDeadline) < new Date();
    });

    // 只对未截止的会议进行排序
    const sortedActiveConferences = sortConferences(activeConferences, currentSortBy, currentSortOrder);

    // 已截止的会议按截止时间降序排列（最新的已截止在前）
    const sortedExpiredConferences = expiredConferences.sort((a, b) => {
        const aDeadline = getEarliestDeadline(a.deadlines);
        const bDeadline = getEarliestDeadline(b.deadlines);
        return new Date(bDeadline) - new Date(aDeadline);
    });

    // 合并结果：未截止的在前，已截止的在后
    const finalConferences = [...sortedActiveConferences, ...sortedExpiredConferences];

    // 渲染会议
    finalConferences.forEach(conference => {
        const conferenceElement = createConferenceElement(conference);
        container.appendChild(conferenceElement);
    });
}

// 排序会议函数（只对未截止的会议排序）
function sortConferences(conferences, sortBy, sortOrder = 'asc') {
    const sortedConferences = [...conferences]; // 创建副本避免修改原数组
    const now = new Date();
    
    // 过滤出未截止的会议
    const activeConferences = sortedConferences.filter(conference => {
        const earliestDeadline = getEarliestDeadline(conference.deadlines);
        return new Date(earliestDeadline) >= now;
    });
    
    switch (sortBy) {
        case 'deadline':
            // 按最早的截止时间排序
            activeConferences.sort((a, b) => {
                const aEarliestDeadline = getEarliestDeadline(a.deadlines);
                const bEarliestDeadline = getEarliestDeadline(b.deadlines);
                const timeDiff = new Date(aEarliestDeadline) - new Date(bEarliestDeadline);
                return sortOrder === 'asc' ? timeDiff : -timeDiff;
            });
            break;
        case 'name':
            // 按名称排序
            activeConferences.sort((a, b) => {
                const nameA = a.name[currentLang].toLowerCase();
                const nameB = b.name[currentLang].toLowerCase();
                const nameDiff = nameA.localeCompare(nameB);
                return sortOrder === 'asc' ? nameDiff : -nameDiff;
            });
            break;
        case 'category':
            // 按主要分类排序
            activeConferences.sort((a, b) => {
                const categoryA = a.categories && a.categories[0] ? a.categories[0] : '';
                const categoryB = b.categories && b.categories[0] ? b.categories[0] : '';
                const categoryDiff = categoryA.localeCompare(categoryB);
                return sortOrder === 'asc' ? categoryDiff : -categoryDiff;
            });
            break;
        default:
            break;
    }
    
    return activeConferences;
}

// 获取最早的截止时间
function getEarliestDeadline(deadlines) {
    let earliest = null;
    
    if (deadlines.abstract) {
        earliest = deadlines.abstract;
    }
    if (deadlines.fullPaper) {
        if (!earliest || new Date(deadlines.fullPaper) < new Date(earliest)) {
            earliest = deadlines.fullPaper;
        }
    }
    
    return earliest;
}

// 创建会议元素
function createConferenceElement(conference) {
    const div = document.createElement('div');
    
    // 检查会议是否已截止
    const earliestDeadline = getEarliestDeadline(conference.deadlines);
    const isExpired = new Date(earliestDeadline) < new Date();
    
    div.className = isExpired ? 'conference-item expired' : 'conference-item';
    
    // 生成截止时间显示HTML（只显示一个截止时间，优先使用fullPaper）
    let deadlineHtml = '';
    let deadlineToShow = null;
    let deadlineLabel = '';
    
    // 优先使用fullPaper截止时间，如果没有则使用abstract截止时间
    if (conference.deadlines.fullPaper) {
        deadlineToShow = conference.deadlines.fullPaper;
        deadlineLabel = translations[currentLang].fullPaper;
    } else if (conference.deadlines.abstract) {
        deadlineToShow = conference.deadlines.abstract;
        deadlineLabel = translations[currentLang].abstract;
    }
    
    if (deadlineToShow) {
        const deadlineLocal = convertToTimezone(new Date(deadlineToShow), currentTimezone);
        const timeDiff = convertToTimezone(new Date(deadlineToShow), 'Etc/GMT+12') - convertToTimezone(new Date(), 'Etc/GMT+12');
        const countdownClass = timeDiff < 7 * 24 * 60 * 60 * 1000 ? 'urgent' :
                              timeDiff < 30 * 24 * 60 * 60 * 1000 ? 'warning' : 'normal';
        
        deadlineHtml = `
            <div class="detail-item deadline-item">
                <span class="detail-label">${deadlineLabel}:</span>
                <span class="detail-value">${formatDateTime(deadlineLocal, currentTimezone)}</span>
                <span class="detail-value countdown ${countdownClass}" data-deadline="${deadlineToShow}">
                    ${calculateCountdown(deadlineToShow)}
                </span>
            </div>
        `;
    }

    // 生成标签HTML
    let tagsHtml = '';
    if (conference.tags && conference.tagColors) {
        tagsHtml = conference.tags.map(tag =>
            `<span class="conference-tag" style="background-color: ${conference.tagColors[tag]}; color: white;">${tag}</span>`
        ).join('');
    }

    // 生成分类标签HTML（支持多分类）
    let categoriesHtml = '';
    if (conference.categories && conference.categories.length > 0) {
        categoriesHtml = conference.categories.map(category =>
            `<span class="conference-category">${getCategoryName(category, currentLang)}</span>`
        ).join('');
    }

    // 生成Google地图链接
    function getGoogleMapsLink(location) {
        const encodedLocation = encodeURIComponent(location);
        return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    }

    // 生成地点和会议时间HTML（同一行两列布局）
    let locationDateHtml = '';
    if (conference.location && conference.conferenceDate) {
        const mapsLink = getGoogleMapsLink(conference.location[currentLang]);
        locationDateHtml = `
            <div class="detail-item location-date-item">
                <div class="location-column">
                    <div class="location-column-content">
                        <span class="detail-label">📍 ${translations[currentLang].location}:</span>
                        <a href="${mapsLink}" target="_blank" class="location-link">
                            <span class="detail-value">${conference.location[currentLang]}</span>
                        </a>
                    </div>
                </div>
                <div class="date-column">
                    <div class="date-column-content">
                        <span class="detail-label">📅 ${translations[currentLang].conferenceDate}:</span>
                        <span class="detail-value">${conference.conferenceDate[currentLang]}</span>
                    </div>
                </div>
            </div>
        `;
    }

    div.innerHTML = `
        <div class="conference-header">
            <h3 class="conference-name">${conference.name[currentLang]}</h3>
        </div>
        <div class="conference-tags-row">
            ${tagsHtml}
        </div>
        <div class="conference-categories-row">
            ${categoriesHtml}
        </div>
        <div class="conference-deadline-row">
            ${deadlineHtml}
        </div>
        <div class="conference-location-date-row">
            ${locationDateHtml}
        </div>
        <div class="conference-footer">
            ${conference.link ? `<a href="${conference.link}" target="_blank" class="conference-link">${translations[currentLang].visitWebsite}</a>` : ''}
        </div>
    `;

    return div;
}

// 获取分类名称
function getCategoryName(category, lang) {
    const categoryMap = {
        ai: { zh: '人工智能', en: 'AI' },
        robotics: { zh: '机器人', en: 'Robotics' },
        control: { zh: '控制与决策', en: 'Control' },
        ml: { zh: '机器学习', en: 'ML' },
        cv: { zh: '计算机视觉', en: 'CV' },
        nlp: { zh: '自然语言处理', en: 'NLP' },
        general: { zh: '综合', en: 'General' }
    };
    return categoryMap[category] ? categoryMap[category][lang] : category;
}

// 计算倒计时
function calculateCountdown(deadline) {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - now;

    if (timeDiff <= 0) {
        return currentLang === 'zh' ? '已截止' : 'Deadline passed';
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    let result = '';
    if (days > 0) {
        result += `${days}${translations[currentLang].days} `;
    }
    if (hours > 0 || days > 0) {
        result += `${hours}${translations[currentLang].hours} `;
    }
    if (minutes > 0 || hours > 0 || days > 0) {
        result += `${minutes}${translations[currentLang].minutes} `;
    }
    result += `${seconds}${translations[currentLang].seconds}`;

    return result.trim();
}

// 启动倒计时定时器
function startCountdownTimer() {
    // 立即更新一次
    updateAllCountdowns();
    
    // 每秒更新一次
    countdownInterval = setInterval(updateAllCountdowns, 1000);
}

// 更新所有倒计时
function updateAllCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown');
    countdownElements.forEach(element => {
        const deadline = element.getAttribute('data-deadline');
        if (deadline) {
            const newCountdown = calculateCountdown(deadline);
            element.textContent = newCountdown;
            
            // 更新样式类
            const now = new Date();
            const deadlineDate = new Date(deadline);
            const timeDiff = deadlineDate - now;
            
            element.className = 'detail-value countdown ' + 
                (timeDiff < 7 * 24 * 60 * 60 * 1000 ? 'urgent' : 
                 timeDiff < 30 * 24 * 60 * 60 * 1000 ? 'warning' : 'normal');
        }
    });
}

// 时区转换函数
function convertToTimezone(date, timezone) {
    // 使用Intl.DateTimeFormat进行时区转换
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    
    const dateParts = {};
    parts.forEach(part => {
        dateParts[part.type] = part.value;
    });
    
    return new Date(`${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}`);
}

// 格式化日期时间
function formatDateTime(date, timezone) {
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long'
    };
    
    return new Intl.DateTimeFormat(currentLang === 'zh' ? 'zh-CN' : 'en-US', options).format(date);
}

// 页面卸载时清理定时器
window.addEventListener('beforeunload', function() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
});
