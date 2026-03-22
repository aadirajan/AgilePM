(function () {
  const STORAGE = {
    VERSION: 'apm:version',
    SESSION: 'apm:session',
    PROJECTS: 'apm:projects',
    SPRINTS: 'apm:sprints',
    TASKS: 'apm:tasks',
    TEAM: 'apm:team',
  };

  const CURRENT_VERSION = '1.0.0';

  function readJSON(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function uid(prefix) {
    return `${prefix}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
  }

  function computeInitials(name) {
    if (!name) return '??';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(p => p[0]?.toUpperCase() || '')
      .join('') || '??';
  }

  function seedIfNeeded() {
    const ver = window.localStorage.getItem(STORAGE.VERSION);
    if (ver === CURRENT_VERSION) return;

    const team = [
      { id: 'u_jamie', name: 'Jamie Doe', role: 'Product Manager', email: 'jamie@company.com', color: '#6e6eff' },
      { id: 'u_alex',  name: 'Alex Kim',  role: 'Senior Engineer', email: 'alex@company.com',  color: '#3dd68c' },
      { id: 'u_sam',   name: 'Sam Patel', role: 'Frontend Engineer', email: 'sam@company.com', color: '#f5a623' },
      { id: 'u_morgan',name: 'Morgan Reed', role: 'Backend Engineer', email: 'morgan@company.com', color: '#f25f5c' },
      { id: 'u_taylor',name: 'Taylor Ng', role: 'DevOps Engineer', email: 'taylor@company.com', color: '#58a6ff' },
    ].map(m => ({ ...m, initials: computeInitials(m.name) }));

    const projects = [
      { id: 'p_atlas',  name: 'Atlas Platform',  desc: 'Core SaaS product — backend APIs and admin dashboard.', color: '#6e6eff', leadId: 'u_jamie', status: 'active', createdAt: Date.now() - 1000 * 60 * 60 * 24 * 60 },
      { id: 'p_mobile', name: 'Mobile App v2',   desc: 'New mobile app with refreshed design system.',            color: '#3dd68c', leadId: 'u_alex',  status: 'active', createdAt: Date.now() - 1000 * 60 * 60 * 24 * 45 },
      { id: 'p_data',   name: 'Data Pipeline',   desc: 'Real-time ingestion and analytics pipeline.',            color: '#b57bff', leadId: 'u_morgan',status: 'active', createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30 },
      { id: 'p_design', name: 'Design System',   desc: 'Shared tokens and components across products.',          color: '#f5a623', leadId: 'u_sam',   status: 'active', createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20 },
      { id: 'p_infra',  name: 'Infra Revamp',    desc: 'Kubernetes migration and observability stack.',          color: '#f25f5c', leadId: 'u_taylor',status: 'active', createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10 },
    ];

    const today = new Date();
    const dayMs = 1000 * 60 * 60 * 24;

    const sprints = [
      {
        id: 's_atlas_14',
        name: 'Sprint 14',
        projectId: 'p_atlas',
        goal: 'Ship auth redesign + pipeline alerting',
        startDate: new Date(today - 7 * dayMs).toISOString(),
        endDate: new Date(today + 9 * dayMs).toISOString(),
        status: 'active',
      },
      {
        id: 's_mobile_6',
        name: 'Sprint 6',
        projectId: 'p_mobile',
        goal: 'Improve navigation and offline UX',
        startDate: new Date(today - 10 * dayMs).toISOString(),
        endDate: new Date(today + 4 * dayMs).toISOString(),
        status: 'active',
      },
      {
        id: 's_data_9',
        name: 'Sprint 9',
        projectId: 'p_data',
        goal: 'Alerting & observability improvements',
        startDate: new Date(today - 15 * dayMs).toISOString(),
        endDate: new Date(today - 1 * dayMs).toISOString(),
        status: 'completed',
      },
    ];

    const STATUSES = ['Backlog', 'To Do', 'In Progress', 'In Review', 'Done'];
    const PRIORITIES = ['Low', 'Medium', 'High'];

    const tasks = [
      {
        id: 'AT-138',
        title: 'Redesign onboarding flow',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_sam',
        status: 'Done',
        priority: 'High',
        storyPoints: 5,
        dueDate: new Date(today - 2 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-139',
        title: 'Fix session expiry edge case',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_jamie',
        status: 'Done',
        priority: 'Medium',
        storyPoints: 3,
        dueDate: new Date(today - 5 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-140',
        title: 'SSO integration testing',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_taylor',
        status: 'In Review',
        priority: 'High',
        storyPoints: 3,
        dueDate: new Date(today + 1 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-141',
        title: 'Add multi-workspace support',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_sam',
        status: 'In Progress',
        priority: 'Medium',
        storyPoints: 8,
        dueDate: new Date(today + 4 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-142',
        title: 'Design token system refresh',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_jamie',
        status: 'In Progress',
        priority: 'High',
        storyPoints: 5,
        dueDate: new Date(today + 2 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-143',
        title: 'Set up feature flag service',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_taylor',
        status: 'To Do',
        priority: 'High',
        storyPoints: 5,
        dueDate: new Date(today + 6 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'AT-144',
        title: 'Migrate auth to PKCE flow',
        projectId: 'p_atlas',
        sprintId: 's_atlas_14',
        assigneeId: 'u_jamie',
        status: 'To Do',
        priority: 'High',
        storyPoints: 8,
        dueDate: new Date(today + 8 * dayMs).toISOString(),
        blocked: true,
      },
      {
        id: 'MB-086',
        title: 'Dark mode implementation',
        projectId: 'p_mobile',
        sprintId: 's_mobile_6',
        assigneeId: 'u_alex',
        status: 'Done',
        priority: 'High',
        storyPoints: 5,
        dueDate: new Date(today - 3 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'MB-089',
        title: 'Push notification deep linking',
        projectId: 'p_mobile',
        sprintId: 's_mobile_6',
        assigneeId: 'u_alex',
        status: 'In Progress',
        priority: 'Medium',
        storyPoints: 3,
        dueDate: new Date(today + 3 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'MB-091',
        title: 'Offline mode sync logic',
        projectId: 'p_mobile',
        sprintId: 's_mobile_6',
        assigneeId: 'u_jamie',
        status: 'In Progress',
        priority: 'High',
        storyPoints: 8,
        dueDate: new Date(today + 5 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'MB-092',
        title: 'Build offline queue for mutations',
        projectId: 'p_mobile',
        sprintId: 's_mobile_6',
        assigneeId: 'u_alex',
        status: 'To Do',
        priority: 'Medium',
        storyPoints: 5,
        dueDate: new Date(today + 9 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'DP-032',
        title: 'Debezium connector setup',
        projectId: 'p_data',
        sprintId: 's_data_9',
        assigneeId: 'u_morgan',
        status: 'Done',
        priority: 'Medium',
        storyPoints: 5,
        dueDate: new Date(today - 6 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'DP-033',
        title: 'S3 sink connector config',
        projectId: 'p_data',
        sprintId: 's_data_9',
        assigneeId: 'u_morgan',
        status: 'In Review',
        priority: 'Medium',
        storyPoints: 3,
        dueDate: new Date(today + 1 * dayMs).toISOString(),
        blocked: false,
      },
      {
        id: 'DP-034',
        title: 'Kafka consumer lag alerting',
        projectId: 'p_data',
        sprintId: 's_atlas_14',
        assigneeId: 'u_morgan',
        status: 'To Do',
        priority: 'Low',
        storyPoints: 5,
        dueDate: new Date(today + 10 * dayMs).toISOString(),
        blocked: true,
      },
      {
        id: 'IR-007',
        title: 'Set up Prometheus + Grafana',
        projectId: 'p_infra',
        sprintId: 's_atlas_14',
        assigneeId: 'u_taylor',
        status: 'In Progress',
        priority: 'High',
        storyPoints: 8,
        dueDate: new Date(today + 7 * dayMs).toISOString(),
        blocked: false,
      },
    ].map(t => ({
      description: '',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
      ...t,
    }));

    writeJSON(STORAGE.TEAM, team);
    writeJSON(STORAGE.PROJECTS, projects);
    writeJSON(STORAGE.SPRINTS, sprints);
    writeJSON(STORAGE.TASKS, tasks);
    window.localStorage.setItem(STORAGE.VERSION, CURRENT_VERSION);
    window.localStorage.removeItem(STORAGE.SESSION);
  }

  seedIfNeeded();

  // =========================
  // AUTH
  // =========================
  function getSession() {
    return readJSON(STORAGE.SESSION, null);
  }

  function setSession(session) {
    if (!session) {
      window.localStorage.removeItem(STORAGE.SESSION);
      return;
    }
    writeJSON(STORAGE.SESSION, session);
  }

  function authLogin(email, password) {
    const team = readJSON(STORAGE.TEAM, []);
    const normalized = (email || '').toLowerCase().trim();

    const defaultUser = team.find(m => m.email === 'jamie@company.com');
    const user = team.find(m => m.email.toLowerCase() === normalized) || defaultUser;

    if (!user || password !== 'password') {
      return { ok: false, error: 'Invalid email or password' };
    }

    const session = {
      userId: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      color: user.color,
      initials: user.initials,
    };
    setSession(session);
    return { ok: true, session };
  }

  function authLogout() {
    setSession(null);
  }

  function getLoginPath() {
    const isInPages = window.location.pathname.includes('/pages/');
    return isInPages ? 'login.html' : 'pages/login.html';
  }

  function requireAuth() {
    const session = getSession();
    if (!session) {
      const loginPath = getLoginPath();
      if (!window.location.pathname.endsWith(loginPath)) {
        window.location.href = loginPath;
      }
      return null;
    }
    return session;
  }

  const Auth = {
    login: authLogin,
    logout: authLogout,
    getSession,
    requireAuth,
  };

  // =========================
  // TEAM
  // =========================
  function listTeam() {
    return readJSON(STORAGE.TEAM, []);
  }

  function saveTeam(members) {
    writeJSON(STORAGE.TEAM, members);
  }

  function createMember(data) {
    const members = listTeam();
    const id = data.id || uid('u');
    const name = data.name || 'New Member';
    const member = {
      id,
      name,
      email: data.email || '',
      role: data.role || 'Member',
      color: data.color || '#6e6eff',
      initials: computeInitials(name),
    };
    members.push(member);
    saveTeam(members);
    return member;
  }

  function updateMember(id, patch) {
    const members = listTeam();
    const idx = members.findIndex(m => m.id === id);
    if (idx === -1) return null;
    const next = { ...members[idx], ...patch };
    next.initials = computeInitials(next.name);
    members[idx] = next;
    saveTeam(members);
    return next;
  }

  function removeMember(id) {
    const members = listTeam().filter(m => m.id !== id);
    saveTeam(members);
  }

  function buildTeamOptions() {
    return listTeam().map(m => ({ id: m.id, label: m.name }));
  }

  const Team = {
    list: listTeam,
    create: createMember,
    update: updateMember,
    remove: removeMember,
    buildOptions: buildTeamOptions,
  };

  // =========================
  // PROJECTS
  // =========================
  function listProjects() {
    return readJSON(STORAGE.PROJECTS, []);
  }

  function saveProjects(projects) {
    writeJSON(STORAGE.PROJECTS, projects);
  }

  function createProject(data) {
    const projects = listProjects();
    const id = data.id || uid('p');
    const project = {
      id,
      name: data.name || 'Untitled Project',
      desc: data.desc || '',
      color: data.color || '#6e6eff',
      leadId: data.leadId || null,
      status: data.status || 'active',
      createdAt: Date.now(),
    };
    projects.push(project);
    saveProjects(projects);
    return project;
  }

  function updateProject(id, patch) {
    const projects = listProjects();
    const idx = projects.findIndex(p => p.id === id);
    if (idx === -1) return null;
    const next = { ...projects[idx], ...patch };
    projects[idx] = next;
    saveProjects(projects);
    return next;
  }

  function removeProject(id) {
    const projects = listProjects().filter(p => p.id !== id);
    saveProjects(projects);

    // Cascade delete sprints & tasks
    const sprints = readJSON(STORAGE.SPRINTS, []).filter(s => s.projectId !== id);
    writeJSON(STORAGE.SPRINTS, sprints);
    const tasks = readJSON(STORAGE.TASKS, []).filter(t => t.projectId !== id);
    writeJSON(STORAGE.TASKS, tasks);
  }

  function getProjectStats() {
    const projects = listProjects();
    const tasks = readJSON(STORAGE.TASKS, []);

    const perProject = projects.map(p => {
      const projectTasks = tasks.filter(t => t.projectId === p.id);
      const total = projectTasks.length || 1;
      const done = projectTasks.filter(t => t.status === 'Done').length;
      const progress = Math.round((done / total) * 100);

      const overdue = projectTasks.filter(t => {
        if (!t.dueDate) return false;
        const d = new Date(t.dueDate);
        return d < new Date() && t.status !== 'Done';
      }).length;

      let risk = 'Low';
      if (overdue > 3) risk = 'High';
      else if (overdue > 0) risk = 'Medium';

      return { project: p, total, done, progress, overdue, risk };
    });

    return {
      count: projects.length,
      perProject,
    };
  }

  const Projects = {
    list: listProjects,
    create: createProject,
    update: updateProject,
    remove: removeProject,
    getStats: getProjectStats,
  };

  // =========================
  // SPRINTS
  // =========================
  function listSprints() {
    return readJSON(STORAGE.SPRINTS, []);
  }

  function saveSprints(sprints) {
    writeJSON(STORAGE.SPRINTS, sprints);
  }

  function createSprint(data) {
    const sprints = listSprints();
    const id = data.id || uid('s');
    const sprint = {
      id,
      name: data.name || 'New Sprint',
      projectId: data.projectId,
      goal: data.goal || '',
      startDate: data.startDate || new Date().toISOString(),
      endDate: data.endDate || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      status: data.status || 'active',
    };
    sprints.push(sprint);
    saveSprints(sprints);
    return sprint;
  }

  function updateSprint(id, patch) {
    const sprints = listSprints();
    const idx = sprints.findIndex(s => s.id === id);
    if (idx === -1) return null;
    const next = { ...sprints[idx], ...patch };
    sprints[idx] = next;
    saveSprints(sprints);
    return next;
  }

  function removeSprint(id) {
    const sprints = listSprints().filter(s => s.id !== id);
    saveSprints(sprints);
    const tasks = readJSON(STORAGE.TASKS, []).map(t => (t.sprintId === id ? { ...t, sprintId: null } : t));
    writeJSON(STORAGE.TASKS, tasks);
  }

  function getActiveSprintForProject(projectId) {
    const sprints = listSprints().filter(s => s.projectId === projectId);
    const active = sprints.find(s => s.status === 'active');
    return active || sprints[0] || null;
  }

  function getSprintStats(sprintId) {
    const tasks = readJSON(STORAGE.TASKS, []).filter(t => t.sprintId === sprintId);
    const total = tasks.length || 1;
    const done = tasks.filter(t => t.status === 'Done').length;
    const progress = Math.round((done / total) * 100);

    const sprint = listSprints().find(s => s.id === sprintId);
    let daysLeft = null;
    if (sprint && sprint.endDate) {
      const diff = new Date(sprint.endDate) - new Date();
      daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    return { total, done, progress, daysLeft };
  }

  const Sprints = {
    list: listSprints,
    create: createSprint,
    update: updateSprint,
    remove: removeSprint,
    getActive: getActiveSprintForProject,
    getStats: getSprintStats,
  };

  // =========================
  // TASKS
  // =========================
  const TASK_STATUSES = ['Backlog', 'To Do', 'In Progress', 'In Review', 'Done'];
  const TASK_PRIORITIES = ['Low', 'Medium', 'High'];

  function listTasks() {
    return readJSON(STORAGE.TASKS, []);
  }

  function saveTasks(tasks) {
    writeJSON(STORAGE.TASKS, tasks);
  }

  function createTask(data) {
    const tasks = listTasks();
    const id = data.id || uid('T');
    const task = {
      id,
      title: data.title || 'Untitled Task',
      description: data.description || '',
      projectId: data.projectId || null,
      sprintId: data.sprintId || null,
      assigneeId: data.assigneeId || null,
      status: data.status || 'To Do',
      priority: data.priority || 'Medium',
      storyPoints: data.storyPoints || 3,
      dueDate: data.dueDate || null,
      blocked: !!data.blocked,
      createdAt: Date.now(),
    };
    tasks.push(task);
    saveTasks(tasks);
    return task;
  }

  function updateTask(id, patch) {
    const tasks = listTasks();
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return null;
    const next = { ...tasks[idx], ...patch };
    tasks[idx] = next;
    saveTasks(tasks);
    return next;
  }

  function removeTask(id) {
    const tasks = listTasks().filter(t => t.id !== id);
    saveTasks(tasks);
  }

  function updateTaskStatus(id, status) {
    return updateTask(id, { status });
  }

  function getTasksByProject(projectId) {
    return listTasks().filter(t => t.projectId === projectId);
  }

  function getTasksBySprint(sprintId) {
    return listTasks().filter(t => t.sprintId === sprintId);
  }

  const Tasks = {
    list: listTasks,
    create: createTask,
    update: updateTask,
    remove: removeTask,
    updateStatus: updateTaskStatus,
    getByProject: getTasksByProject,
    getBySprint: getTasksBySprint,
    STATUSES: TASK_STATUSES,
    PRIORITIES: TASK_PRIORITIES,
  };

  // =========================
  // ANALYTICS
  // =========================
  function getOverview() {
    const tasks = listTasks();
    const total = tasks.length || 1;

    const byStatus = TASK_STATUSES.reduce((acc, st) => {
      const items = tasks.filter(t => t.status === st);
      acc[st] = {
        count: items.length,
        pct: Math.round((items.length / total) * 100),
      };
      return acc;
    }, {});

    const byPriority = TASK_PRIORITIES.reduce((acc, p) => {
      const items = tasks.filter(t => t.priority === p);
      acc[p] = {
        count: items.length,
        pct: Math.round((items.length / total) * 100),
      };
      return acc;
    }, {});

    return { total, byStatus, byPriority };
  }

  function getMemberStats() {
    const tasks = listTasks();
    const members = listTeam();

    return members.map(m => {
      const mine = tasks.filter(t => t.assigneeId === m.id);
      const done = mine.filter(t => t.status === 'Done').length;
      return {
        member: m,
        tasks: mine.length,
        done,
      };
    }).sort((a, b) => b.done - a.done);
  }

  function getRisk() {
    const overview = getOverview();
    const projectsStats = getProjectStats();
    return {
      overview,
      projects: projectsStats,
    };
  }

  const Analytics = {
    getOverview,
    getMemberStats,
    getRisk,
  };

  window.DB = {
    Auth,
    Team,
    Projects,
    Sprints,
    Tasks,
    Analytics,
  };
})();

