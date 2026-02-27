/* components/components.js — shared UI loader */

// ============================================
// ICON HELPERS
// ============================================
const icons = {
  dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  projects:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  sprints:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  tasks:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  team:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  settings:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  analytics: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  search:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bell:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  plus:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chevron:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  menu:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x:         `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  info:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
};

// ============================================
// NAV CONFIG
// ============================================
const navConfig = {
  main: [
    { id: 'dashboard', label: 'Dashboard',  icon: 'dashboard', href: '../index.html',        badge: null },
    { id: 'projects',  label: 'Projects',   icon: 'projects',  href: '../pages/projects.html', badge: '5' },
    { id: 'sprints',   label: 'Sprints',    icon: 'sprints',   href: '../pages/sprints.html',  badge: null },
    { id: 'tasks',     label: 'Tasks',      icon: 'tasks',     href: '../pages/tasks.html',    badge: '24' },
  ],
  insights: [
    { id: 'analytics', label: 'Analytics',  icon: 'analytics', href: '../pages/analytics.html', badge: null },
    { id: 'team',      label: 'Team',       icon: 'team',      href: '../pages/team.html',       badge: null },
    { id: 'settings',  label: 'Settings',   icon: 'settings',  href: '../pages/settings.html',   badge: null },
  ]
};

// Determine current page from URL
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('projects'))  return 'projects';
  if (path.includes('sprints'))   return 'sprints';
  if (path.includes('tasks'))     return 'tasks';
  if (path.includes('analytics')) return 'analytics';
  if (path.includes('team'))      return 'team';
  if (path.includes('settings'))  return 'settings';
  return 'dashboard';
}

// ============================================
// SIDEBAR COMPONENT
// ============================================
function renderSidebar() {
  const currentPage = getCurrentPage();

  function buildNavItems(items) {
    return items.map(item => `
      <a href="${item.href}" class="nav-item ${currentPage === item.id ? 'active' : ''}">
        <span class="nav-icon">${icons[item.icon]}</span>
        ${item.label}
        ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
      </a>
    `).join('');
  }

  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-mark">A</div>
        <span class="logo-text">AgilePM</span>
        <span class="logo-badge">Beta</span>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-label">Workspace</div>
          ${buildNavItems(navConfig.main)}
        </div>
        <div class="nav-section">
          <div class="nav-section-label">Insights</div>
          ${buildNavItems(navConfig.insights)}
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="user-card" onclick="window.location='${window.location.pathname.includes('pages') ? '' : 'pages/'}settings.html'">
          <div class="avatar">JD</div>
          <div class="user-info">
            <div class="user-name">Jamie Doe</div>
            <div class="user-role">Product Manager</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}

// ============================================
// TOPBAR COMPONENT
// ============================================
function renderTopbar(config = {}) {
  const { title = 'Dashboard', breadcrumb = [] } = config;

  const breadcrumbHtml = breadcrumb.length > 0
    ? breadcrumb.map((b, i) => `
        <span class="breadcrumb-item ${i === breadcrumb.length - 1 ? 'current' : ''}">
          ${b.href && i < breadcrumb.length - 1 ? `<a href="${b.href}">${b.label}</a>` : b.label}
        </span>
        ${i < breadcrumb.length - 1 ? `<span class="breadcrumb-sep">${icons.chevron}</span>` : ''}
      `).join('')
    : `<span class="breadcrumb-item current">${title}</span>`;

  return `
    <header class="topbar" id="topbar">
      <div class="topbar-left">
        <button class="hamburger icon-btn" id="hamburger-btn" aria-label="Toggle menu">
          ${icons.menu}
        </button>
        <nav class="breadcrumb">${breadcrumbHtml}</nav>
      </div>
      <div class="topbar-right">
        <div class="search-bar">
          ${icons.search}
          <input type="text" placeholder="Search anything..." id="global-search" />
        </div>
        <button class="icon-btn" data-tooltip="New task" id="new-task-btn">
          ${icons.plus}
        </button>
        <button class="icon-btn" data-tooltip="Notifications" id="notif-btn">
          ${icons.bell}
          <span class="notif-dot"></span>
        </button>
        <a href="${window.location.pathname.includes('pages') ? '' : 'pages/'}login.html">
          <div class="avatar" style="width:30px;height:30px;font-size:11px;" data-tooltip="Profile">JD</div>
        </a>
      </div>
    </header>
  `;
}

// ============================================
// TOAST SYSTEM
// ============================================
let toastContainer;

function ensureToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
}

const toastStyles = {
  success: { color: 'var(--green)',  icon: icons.check },
  error:   { color: 'var(--red)',    icon: icons.x },
  info:    { color: 'var(--accent)', icon: icons.info },
};

function showToast(title, message = '', type = 'info', duration = 3500) {
  ensureToastContainer();
  const style = toastStyles[type] || toastStyles.info;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon" style="color:${style.color}">${style.icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-msg">${message}</div>` : ''}
    </div>
    <button class="icon-btn" onclick="this.closest('.toast').remove()" style="flex-shrink:0;width:20px;height:20px;">
      ${icons.x}
    </button>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastIn 0.2s ease reverse forwards';
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

// ============================================
// MODAL SYSTEM
// ============================================
function createModal(title, bodyHtml, footerHtml = '') {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <span class="modal-title">${title}</span>
        <button class="modal-close" id="modal-close-btn">${icons.x}</button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
      ${footerHtml ? `<div class="modal-footer">${footerHtml}</div>` : ''}
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));

  function close() {
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 250);
  }

  overlay.querySelector('#modal-close-btn').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); }, { once: true });

  return { overlay, close };
}

// ============================================
// "NEW TASK" QUICK-ADD MODAL
// ============================================
function openNewTaskModal() {
  const body = `
    <div class="input-group">
      <label class="input-label">Task Title</label>
      <input class="input" type="text" placeholder="e.g. Implement auth flow" id="task-title-input" />
    </div>
    <div class="two-col" style="gap:12px">
      <div class="input-group">
        <label class="input-label">Priority</label>
        <select class="input">
          <option>🔴 High</option>
          <option selected>🟡 Medium</option>
          <option>🟢 Low</option>
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Assignee</label>
        <select class="input">
          <option>Jamie Doe</option>
          <option>Alex Kim</option>
          <option>Sam Patel</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Project</label>
      <select class="input">
        <option>Atlas Platform</option>
        <option>Mobile App v2</option>
        <option>Data Pipeline</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Description (optional)</label>
      <textarea class="input" rows="3" placeholder="Add details…" style="resize:vertical"></textarea>
    </div>
  `;

  const footer = `
    <button class="btn btn-ghost" id="cancel-task-btn">Cancel</button>
    <button class="btn btn-primary" id="create-task-btn">${icons.plus} Create Task</button>
  `;

  const { close } = createModal('New Task', body, footer);

  setTimeout(() => {
    const cancelBtn  = document.getElementById('cancel-task-btn');
    const createBtn  = document.getElementById('create-task-btn');
    const titleInput = document.getElementById('task-title-input');

    if (titleInput) titleInput.focus();
    if (cancelBtn)  cancelBtn.addEventListener('click', close);
    if (createBtn) {
      createBtn.addEventListener('click', () => {
        const title = titleInput?.value.trim();
        if (!title) {
          titleInput?.classList.add('error');
          titleInput?.focus();
          return;
        }
        close();
        showToast('Task created', title, 'success');
      });
    }
  }, 50);
}

// ============================================
// HAMBURGER / SIDEBAR TOGGLE
// ============================================
function initHamburger() {
  const btn     = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !btn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// ============================================
// INJECT SHELL INTO PAGE
// ============================================
function initShell(topbarConfig = {}) {
  const appShell = document.getElementById('app-shell');
  if (!appShell) return;

  // Find the page body content already in the DOM
  const pageBodyEl = appShell.querySelector('.page-body');
  const pageBodyHtml = pageBodyEl ? pageBodyEl.outerHTML : '';

  appShell.innerHTML = `
    ${renderSidebar()}
    <div class="main-content">
      ${renderTopbar(topbarConfig)}
      ${pageBodyHtml}
    </div>
  `;

  // Wire up new-task button
  const newTaskBtn = document.getElementById('new-task-btn');
  if (newTaskBtn) newTaskBtn.addEventListener('click', openNewTaskModal);

  initHamburger();
}

// ============================================
// STAT CARD BUILDER
// ============================================
function buildStatCard({ value, label, icon, colorClass, trend, trendLabel, delay = '' }) {
  return `
    <div class="stat-card ${colorClass} fade-up ${delay}">
      <div class="stat-icon ${colorClass}">${icon}</div>
      <div class="stat-value">${value}</div>
      <div class="stat-label">${label}</div>
      ${trend ? `
        <div class="stat-trend ${trend > 0 ? 'up' : 'down'}">
          ${trend > 0 ? '↑' : '↓'} ${Math.abs(trend)}%
          <span>${trendLabel || 'vs last sprint'}</span>
        </div>` : ''}
    </div>
  `;
}

// ============================================
// PROGRESS BAR BUILDER
// ============================================
function buildProgressBar(percent, colorClass = '') {
  return `
    <div class="progress-bar">
      <div class="progress-fill ${colorClass}" style="width:${percent}%"></div>
    </div>
  `;
}

// ============================================
// BADGE BUILDER
// ============================================
function buildBadge(label, colorClass) {
  return `<span class="badge badge-${colorClass}"><span class="badge-dot" style="background:currentColor"></span>${label}</span>`;
}

// Expose globally
window.AgilePM = {
  initShell,
  showToast,
  createModal,
  openNewTaskModal,
  buildStatCard,
  buildProgressBar,
  buildBadge,
  icons,
};