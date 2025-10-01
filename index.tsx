/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// --- MOCK DATA ---
const mockAuthenticatedUser = {
    dni: "12345678",
    password: "password123",
    email: "ana.garcia@example.com",
    name: "Ana García",
    career: "Profesorado de Historia",
    avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Ana%20Garcia`,
    role: "student" as const,
};

const mockAuthenticatedPreceptor = {
    dni: "98765432",
    password: "password123",
    email: "carlos.lopez@example.com",
    name: "Carlos López",
    avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Carlos%20Lopez`,
    role: "proctor" as const,
};

const mockCareers = [
    { id: 'hist', name: 'Profesorado de Historia' },
    { id: 'geo', name: 'Profesorado de Geografía' },
    { id: 'mat', name: 'Profesorado de Matemática' }
];

const mockStudents = [
    { id: '1', name: 'Juan Pérez', dni: '30111222', careerId: 'hist', year: 1 },
    { id: '2', name: 'Laura Gómez', dni: '31222333', careerId: 'hist', year: 1 },
    { id: '3', name: 'Maria Rodriguez', dni: '32333444', careerId: 'hist', year: 2 },
    { id: '4', name: 'Carlos Sanchez', dni: '33444555', careerId: 'geo', year: 1 },
    { id: '5', name: 'Sofia Fernandez', dni: '34555666', careerId: 'geo', year: 2 },
    { id: '6', name: 'Martin Acosta', dni: '35666777', careerId: 'mat', year: 1 },
];

const mockSubjects = [
    {
        id: "HIS01",
        name: "Historia Antigua",
        teacher: "Dr. Morales",
        careerId: "hist",
        year: 1,
        schedule: "Lunes y Miércoles, 18:00 - 20:00",
        syllabus: [
            "Unidad 1: Las primeras civilizaciones de Mesopotamia y Egipto.",
            "Unidad 2: El mundo griego: de la civilización minoica a la helenística.",
            "Unidad 3: Roma: de la República al Imperio.",
            "Unidad 4: La Antigüedad tardía y la transición a la Edad Media."
        ],
        examDates: [
            { description: "1er Parcial", date: "2024-04-15" },
            { description: "Recuperatorio 1er Parcial", date: "2024-04-22" },
            { description: "2do Parcial", date: "2024-06-10" },
            { description: "Recuperatorio 2do Parcial", date: "2024-06-17" }
        ]
    },
    {
        id: "PED02",
        name: "Pedagogía General",
        teacher: "Lic. Rivas",
        careerId: "hist",
        year: 1,
        schedule: "Martes y Jueves, 20:00 - 22:00",
        syllabus: [
            "Unidad 1: Conceptos fundamentales de la Pedagogía.",
            "Unidad 2: Principales corrientes pedagógicas.",
            "Unidad 3: La relación educador-educando.",
            "Unidad 4: El currículum y la planificación didáctica."
        ],
        examDates: [
            { description: "1er Parcial", date: "2024-04-20" },
            { description: "Recuperatorio 1er Parcial", date: "2024-04-27" },
            { description: "2do Parcial", date: "2024-06-12" },
            { description: "Recuperatorio 2do Parcial", date: "2024-06-19" }
        ]
    },
    {
        id: "SOC03",
        name: "Sociología de la Educación",
        teacher: "Dra. Campos",
        careerId: "hist",
        year: 2,
        schedule: "Viernes, 19:00 - 21:00",
        syllabus: [
            "Unidad 1: Introducción a la Sociología de la Educación.",
            "Unidad 2: La escuela como institución social.",
            "Unidad 3: Desigualdad social y educación.",
            "Unidad 4: Nuevos desafíos para el sistema educativo."
        ],
        examDates: [
            { description: "Parcial Único", date: "2024-05-22" },
            { description: "Recuperatorio Parcial Único", date: "2024-05-29" },
        ]
    },
    {
        id: "GEO01",
        name: "Geografía Física",
        teacher: "Lic. Torres",
        careerId: "geo",
        year: 1,
        schedule: "Lunes, 19:00 - 21:00",
        syllabus: [],
        examDates: []
    },
];


const mockGrades = {
    "HIS01": [
        { description: "1er Parcial", date: "2024-04-15", grade: 8 },
        { description: "Trabajo Práctico N°1", date: "2024-05-10", grade: 9 },
    ],
    "PED02": [
        { description: "1er Parcial", date: "2024-04-20", grade: 7 },
    ],
    "SOC03": [
        { description: "Exposición Grupal", date: "2024-05-22", grade: 10 },
    ]
};

const mockAttendance = {
    "HIS01": { totalClasses: 20, absences: 2 }, // 10% -> Regular
    "PED02": { totalClasses: 18, absences: 4 }, // 22.2% -> Peligro de quedar libre
    "SOC03": { totalClasses: 16, absences: 5 }, // 31.25% -> Libre
};

const mockExamTables = [
    { id: "FIN01", subject: "Historia Antigua", date: "2024-07-15", description: "Examen Final - 1er llamado", teacher: "Dr. Morales", enrolled: true },
    { id: "FIN02", subject: "Pedagogía General", date: "2024-07-22", description: "Examen Final - 1er llamado", teacher: "Lic. Rivas", enrolled: true },
    { id: "FIN03", subject: "Sociología de la Educación", date: "2024-07-29", description: "Examen Final - 1er llamado", teacher: "Dra. Campos", enrolled: false },
    { id: "FIN04", subject: "Didáctica General", date: "2024-08-01", description: "Examen Final - 1er llamado", teacher: "Mg. Soto", enrolled: false },
    { id: "FIN05", subject: "Psicología Educacional", date: "2024-08-05", description: "Examen Final - 1er llamado", teacher: "Lic. Vega", enrolled: false },
];

const mockNotifications = [
    { title: "Inscripción a finales", content: "Se abren las inscripciones a finales el día 10/06." },
    { title: "Suspensión de clases", content: "Se suspenden las clases del turno tarde por desinfección." },
];

const mockForumThreads = [
    { id: 1, title: "¿Alguien entendió el texto de Foucault?", author: "Juan Pérez", replies: 3, forum: "general" },
    { id: 2, title: "Grupo de estudio para el final de Pedagogía", author: "Laura Gómez", replies: 1, forum: "student_only" },
];

const mockForumReplies: { [key: number]: { author: string, content: string, avatar: string }[] } = {
    1: [
        { author: "Maria Rodriguez", content: "Yo tampoco estoy segura, sobre todo la parte del panóptico.", avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Maria%20Rodriguez` },
        { author: "Carlos Sanchez", content: "Creo que se refiere al poder y la vigilancia en la sociedad moderna. Busqué un resumen en YouTube que me ayudó.", avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Carlos%20Sanchez` },
        { author: "Juan Pérez", content: "¡Gracias! Voy a buscarlo. Si alguien más tiene material, bienvenido sea.", avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Juan%20Perez` },
    ],
    2: [
        { author: "Ana García", content: "¡Me sumo! ¿Cuándo y dónde nos juntamos?", avatar: `https://api.dicebear.com/8.x/initials/svg?seed=Ana%20Garcia` }
    ]
};

const mockAttendanceHistory = [
  { id: 'att-hist-1', date: '2024-05-20', careerId: 'hist', year: 1, subjectId: 'HIS01', summary: '2 Presentes, 0 Ausentes' },
  { id: 'att-hist-2', date: '2024-05-22', careerId: 'hist', year: 1, subjectId: 'HIS01', summary: '1 Presente, 1 Ausente' },
];

const mockGradesHistory = [
  { id: 'grd-hist-1', date: '2024-04-15', careerId: 'hist', year: 1, subjectId: 'HIS01', description: '1er Parcial', summary: '2 notas cargadas.' }
];

// --- APP STATE ---
let isAuthenticated = false;
type User = typeof mockAuthenticatedUser | typeof mockAuthenticatedPreceptor;
let currentUser: User | null = null;
let userRole: 'student' | 'proctor' | null = null;
let currentPage = 'dashboard';
let examPageActiveTab = 'my-exams';
let authPageMode: 'login' | 'forgot-password' = 'login';
let forgotPasswordStep: 'request' | 'verify' | 'reset' | 'success' = 'request';
let resetAttempt = { dni: '', email: '' };
let selectedForumThreadId: number | null = null;
let selectedSubjectId: string | null = null;
let proctorToolFilters = {
    careerId: '',
    year: '',
    subjectId: ''
};
let attendanceToolTab: 'entry' | 'history' = 'entry';
let gradesToolTab: 'entry' | 'history' = 'entry';


// --- RENDER FUNCTIONS ---
const rootContainer = document.getElementById('root')!;

function render() {
    if (!userRole) {
        renderRoleSelectionScreen();
    } else if (isAuthenticated && currentUser) {
        if (currentUser.role === 'student') {
            renderAppLayout();
        } else {
            renderPreceptorLayout();
        }
    } else {
        renderAuthScreen();
    }
}

function renderRoleSelectionScreen() {
    rootContainer.innerHTML = `
        <div class="login-container">
            <div class="login-card" style="text-align: center;">
                <h1 class="login-title">Bienvenido al Portal ISFDyT 26</h1>
                <p class="form-description" style="text-align: center;">Por favor, selecciona tu rol para continuar.</p>
                <div class="role-buttons">
                    <button id="role-student-btn" class="login-btn">Soy Alumno</button>
                    <button id="role-proctor-btn" class="login-btn">Soy Preceptor</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('role-student-btn')?.addEventListener('click', () => {
        userRole = 'student';
        render();
    });
    document.getElementById('role-proctor-btn')?.addEventListener('click', () => {
        userRole = 'proctor';
        render();
    });
}

function renderAuthScreen() {
    let title = userRole === 'student' ? 'Portal Estudiantil' : 'Portal Preceptor';
    let content = '';
    let credentialsGuide = '';

    if (authPageMode === 'login') {
         if (userRole === 'student') {
            credentialsGuide = `
                <div class="credentials-guide">
                    <p><strong>Guía de Acceso (Alumno):</strong></p>
                    <p><strong>DNI:</strong> ${mockAuthenticatedUser.dni}</p>
                    <p><strong>Contraseña:</strong> ${mockAuthenticatedUser.password}</p>
                </div>
            `;
        } else if (userRole === 'proctor') {
            credentialsGuide = `
                <div class="credentials-guide">
                    <p><strong>Guía de Acceso (Preceptor):</strong></p>
                    <p><strong>DNI:</strong> ${mockAuthenticatedPreceptor.dni}</p>
                    <p><strong>Contraseña:</strong> ${mockAuthenticatedPreceptor.password}</p>
                </div>
            `;
        }
        content = `
            <h1 class="login-title">${title}</h1>
            <form id="login-form">
                <div class="form-group">
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" name="dni" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <p id="login-error" class="login-error"></p>
                <button type="submit" class="login-btn">Ingresar</button>
            </form>
            ${credentialsGuide}
            <a href="#" id="forgot-password-link" class="forgot-password-link">¿Olvidaste tu contraseña?</a>
        `;
    } else { // 'forgot-password' mode
        switch (forgotPasswordStep) {
            case 'request':
                content = `
                    <h1 class="login-title">Recuperar Contraseña</h1>
                    <form id="forgot-password-form">
                        <p class="form-description">Ingresa tu DNI y tu correo electrónico para recibir un código de verificación.</p>
                        <div class="form-group">
                            <label for="dni-forgot">DNI</label>
                            <input type="text" id="dni-forgot" name="dni" required>
                        </div>
                        <div class="form-group">
                            <label for="email-forgot">Correo Electrónico</label>
                            <input type="email" id="email-forgot" name="email" required>
                        </div>
                        <p id="forgot-message" class="form-message"></p>
                        <button type="submit" class="login-btn">Enviar Código</button>
                    </form>
                    <a href="#" id="back-to-login-link" class="forgot-password-link">Volver al inicio de sesión</a>
                `;
                break;
            case 'verify':
                content = `
                    <h1 class="login-title">Verificar Código</h1>
                    <form id="verify-code-form">
                        <p class="form-description">Hemos enviado un código a tu correo. Ingrésalo a continuación (pista: es 1234).</p>
                        <div class="form-group">
                            <label for="verification-code">Código de Verificación</label>
                            <input type="text" id="verification-code" name="code" required maxlength="4" pattern="\\d{4}" inputmode="numeric">
                        </div>
                        <p id="verify-message" class="form-message"></p>
                        <button type="submit" class="login-btn">Verificar</button>
                    </form>
                    <a href="#" id="back-to-login-link" class="forgot-password-link">Volver al inicio de sesión</a>
                `;
                break;
            case 'reset':
                content = `
                    <h1 class="login-title">Restablecer Contraseña</h1>
                    <form id="reset-password-form">
                        <p class="form-description">Establece una nueva contraseña.</p>
                        <div class="form-group">
                            <label for="new-password-reset">Nueva Contraseña</label>
                            <input type="password" id="new-password-reset" required>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password-reset">Confirmar Nueva Contraseña</label>
                            <input type="password" id="confirm-password-reset" required>
                        </div>
                        <p id="reset-message" class="form-message"></p>
                        <button type="submit" class="login-btn">Guardar Contraseña</button>
                    </form>
                    <a href="#" id="back-to-login-link" class="forgot-password-link">Volver al inicio de sesión</a>
                `;
                break;
            case 'success':
                 content = `
                    <h1 class="login-title">¡Éxito!</h1>
                    <p class="form-description">Tu contraseña ha sido actualizada correctamente. Ya puedes iniciar sesión con tu nueva contraseña.</p>
                    <a href="#" id="back-to-login-link" class="login-btn" style="text-decoration: none; display: block; text-align: center;">Volver al inicio de sesión</a>
                `;
                break;
        }
    }

    const backToRoleLink = `<a href="#" id="back-to-role-select" class="forgot-password-link" style="margin-top: 1rem;">Cambiar rol</a>`;

    rootContainer.innerHTML = `
        <div class="login-container">
            <div class="login-card">
                ${content}
                ${forgotPasswordStep !== 'success' ? backToRoleLink : ''}
            </div>
        </div>
    `;

    // Add event listeners
    if (authPageMode === 'login') {
        document.getElementById('login-form')?.addEventListener('submit', handleLogin);
        document.getElementById('forgot-password-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            authPageMode = 'forgot-password';
            forgotPasswordStep = 'request';
            render();
        });
    } else { // 'forgot-password' mode
        switch (forgotPasswordStep) {
            case 'request':
                document.getElementById('forgot-password-form')?.addEventListener('submit', handleForgotPasswordRequest);
                break;
            case 'verify':
                document.getElementById('verify-code-form')?.addEventListener('submit', handleVerifyCode);
                break;
            case 'reset':
                document.getElementById('reset-password-form')?.addEventListener('submit', handleResetPassword);
                break;
        }
        // This link is present on almost all forgot password steps
        document.getElementById('back-to-login-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            authPageMode = 'login';
            forgotPasswordStep = 'request';
            render();
        });
    }

    document.getElementById('back-to-role-select')?.addEventListener('click', (e) => {
        e.preventDefault();
        userRole = null;
        authPageMode = 'login';
        forgotPasswordStep = 'request';
        render();
    });
}


function renderAppLayout() {
    if (!currentUser) return;
    rootContainer.innerHTML = `
      <div id="app-container">
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h1>ISFDyT 26</h1>
            </div>
            <nav>
                <ul id="nav-links">
                    <li><a href="#" data-page="dashboard" class="active">📊 Dashboard</a></li>
                    <li><a href="#" data-page="subjects">🏫 Mis Materias</a></li>
                    <li><a href="#" data-page="grades">📚 Mis Notas</a></li>
                    <li><a href="#" data-page="finals">🗓️ Finales</a></li>
                    <li><a href="#" data-page="forums">💬 Foros</a></li>
                    <li><a href="#" data-page="notifications">🔔 Notificaciones</a></li>
                    <li><a href="#" data-page="settings">⚙️ Configuraciones</a></li>
                </ul>
            </nav>
            <div class="sidebar-footer">
                 <div class="user-profile">
                    <img src="${currentUser.avatar}" alt="Avatar de usuario">
                    <div class="user-profile-info">
                        <p>${currentUser.name}</p>
                    </div>
                </div>
                <button id="logout-btn">Cerrar Sesión</button>
            </div>
        </aside>
        <main class="main-content" id="main-content">
             <header class="main-content-header">
                <h2>Portal Estudiantil</h2>
                <button class="menu-toggle" id="menu-toggle">☰</button>
            </header>
            <div id="page-content"></div>
        </main>
      </div>
    `;
    navigateTo(currentPage);
    addAppEventListeners();
}

function renderPreceptorLayout() {
    if (!currentUser) return;
    rootContainer.innerHTML = `
      <div id="app-container">
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h1>ISFDyT 26 - Preceptor</h1>
            </div>
            <nav>
                <ul id="nav-links">
                    <li><a href="#" data-page="dashboard" class="active">📊 Dashboard</a></li>
                    <li><a href="#" data-page="attendance">✅ Asistencia</a></li>
                    <li><a href="#" data-page="grades-tool">📝 Cargar Notas</a></li>
                    <li><a href="#" data-page="send-notification">📣 Enviar Notificación</a></li>
                    <li><a href="#" data-page="settings">⚙️ Configuraciones</a></li>
                    <li><a href="#" data-page="students">🧑‍🎓 Alumnos</a></li>
                </ul>
            </nav>
            <div class="sidebar-footer">
                 <div class="user-profile">
                    <img src="${currentUser.avatar}" alt="Avatar de usuario">
                    <div class="user-profile-info">
                        <p>${currentUser.name}</p>
                    </div>
                </div>
                <button id="logout-btn">Cerrar Sesión</button>
            </div>
        </aside>
        <main class="main-content" id="main-content">
             <header class="main-content-header">
                <h2>Portal Preceptor</h2>
                <button class="menu-toggle" id="menu-toggle">☰</button>
            </header>
            <div id="page-content"></div>
        </main>
      </div>
    `;
    renderPreceptorPageContent();
    addAppEventListeners();
}

function renderPreceptorPageContent() {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    let content = '';
    switch(currentPage) {
        case 'dashboard':
        default:
            content = renderPreceptorDashboard();
            break;
        case 'attendance':
            content = renderAttendanceTool();
            break;
        case 'grades-tool':
            content = renderGradesTool();
            break;
        case 'send-notification':
            content = renderNotificationsTool();
            break;
        case 'settings':
            renderSettingsPage();
            updateMobileHeaderTitle();
            return; // renderSettingsPage renders directly
        case 'students':
            content = `<header class="page-header"><h2>Alumnos</h2><p>Funcionalidad en desarrollo.</p></header>`;
            break;
    }
    pageContent.innerHTML = content;
    updateMobileHeaderTitle();
}


function renderPreceptorDashboard() {
    if (!currentUser) return '';
    return `
        <header class="page-header">
            <h2>Dashboard Preceptor</h2>
            <p>Bienvenido, ${currentUser.name}.</p>
        </header>
        <div class="dashboard-grid">
            <div class="card">
                <h3 class="card-header">Estadísticas Rápidas</h3>
                <ul>
                    <li><strong>Total Alumnos:</strong> ${mockStudents.length}</li>
                    <li><strong>Carreras Activas:</strong> ${mockCareers.length}</li>
                    <li><strong>Mesas de Examen Abiertas:</strong> ${mockExamTables.length}</li>
                </ul>
            </div>
            <div class="card">
                <h3 class="card-header">Gestiones Pendientes</h3>
                <ul>
                    <li>Revisar inscripciones a finales</li>
                    <li>Cargar fechas de recuperatorios</li>
                    <li>Publicar comunicado sobre cursada de verano</li>
                </ul>
            </div>
            <div class="card">
                <h3 class="card-header">Últimos Comunicados</h3>
                 <ul>${mockNotifications.map(n => `<li><strong>${n.title}</strong>: ${n.content}</li>`).join('')}</ul>
            </div>
        </div>
    `;
}

function updateMobileHeaderTitle() {
    const mobileHeaderTitle = document.querySelector('.main-content-header h2');
    if (!mobileHeaderTitle) return;

    let title = "Portal"; // Default
    if (currentUser?.role === 'proctor') {
        title = "Portal Preceptor";
    } else {
        title = "Portal Estudiantil";
    }
    
    if (selectedSubjectId) {
        const subject = mockSubjects.find(s => s.id === selectedSubjectId);
        title = subject?.name || "Detalle de Materia";
    } else if (selectedForumThreadId) {
        const thread = mockForumThreads.find(t => t.id === selectedForumThreadId);
        title = thread?.title || "Detalle de Foro";
    } else {
        const activeLink = document.querySelector('#nav-links a.active');
        if (activeLink?.textContent) {
            const textContent = activeLink.textContent;
            // Assumes emoji is first, followed by a space
            const firstSpaceIndex = textContent.indexOf(' '); 
            title = firstSpaceIndex > -1 ? textContent.substring(firstSpaceIndex + 1) : textContent;
        }
    }
    mobileHeaderTitle.textContent = title;
}

function renderPageContent() {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;
    
    pageContent.innerHTML = ''; // Clear previous content

    switch (currentPage) {
        case 'dashboard':
            pageContent.innerHTML = renderDashboard();
            break;
        case 'subjects':
            pageContent.innerHTML = renderSubjects();
            break;
        case 'grades':
            pageContent.innerHTML = renderGradesList();
            break;
        case 'finals':
            pageContent.innerHTML = renderFinals();
            break;
        case 'forums':
            pageContent.innerHTML = renderForums();
            break;
        case 'notifications':
            pageContent.innerHTML = renderNotifications();
            break;
        case 'settings':
            renderSettingsPage();
            break;
    }
    updateMobileHeaderTitle();
}

// --- PAGE RENDERERS ---

function renderDashboard() {
    if (!currentUser || currentUser.role !== 'student') return '';
    return `
        <header class="page-header">
            <h2>Dashboard</h2>
            <p>Bienvenida, ${currentUser.name}. Aquí tienes un resumen de tu actividad.</p>
        </header>
        <div class="dashboard-grid">
            <div class="card">
                <h3 class="card-header">Próximos Finales</h3>
                <ul>${mockExamTables.filter(e => e.enrolled).map(e => `<li><strong>${e.subject}</strong> - ${e.date}</li>`).join('')}</ul>
            </div>
            <div class="card">
                <h3 class="card-header">Últimas Notificaciones</h3>
                <ul>${mockNotifications.map(n => `<li><strong>${n.title}</strong>: ${n.content}</li>`).join('')}</ul>
            </div>
            <div class="card">
                <h3 class="card-header">Actividad Reciente en Foros</h3>
                 <ul>${mockForumThreads.map(t => `<li>${t.title} (${t.replies} respuestas)</li>`).join('')}</ul>
            </div>
        </div>
    `;
}

function renderSubjectDetails(subjectId: string) {
    const subject = mockSubjects.find(s => s.id === subjectId);
    if (!subject) {
        return `<p>Error: No se pudo encontrar la materia.</p>`;
    }

    const scheduleHtml = `
        <div class="card">
            <h3 class="card-header">Horario</h3>
            <p>${subject.schedule || 'No disponible'}</p>
        </div>
    `;

    const examDatesHtml = `
        <div class="card">
            <h3 class="card-header">Fechas de Parciales</h3>
            <ul class="syllabus-list">
                ${subject.examDates && subject.examDates.length > 0
                    ? subject.examDates.map(exam => `<li><strong>${exam.description}:</strong> ${exam.date}</li>`).join('')
                    : '<li>No hay fechas de parciales cargadas.</li>'
                }
            </ul>
        </div>
    `;

    return `
        <header class="page-header">
            <a href="#" onclick="window.backToSubjects()">&larr; Volver a Mis Materias</a>
            <h2>${subject.name}</h2>
            <p>Docente: ${subject.teacher}</p>
        </header>
        <div class="subject-details-grid">
            ${scheduleHtml}
            ${examDatesHtml}
            <div class="card">
                <h3 class="card-header">Temario de la Materia</h3>
                <ul class="syllabus-list">
                    ${subject.syllabus.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}


function viewSubjectDetails(subjectId: string) {
    selectedSubjectId = subjectId;
    renderPageContent();
}
(window as any).viewSubjectDetails = viewSubjectDetails;

function backToSubjects() {
    selectedSubjectId = null;
    renderPageContent();
}
(window as any).backToSubjects = backToSubjects;


function renderSubjects() {
    if (selectedSubjectId) {
        return renderSubjectDetails(selectedSubjectId);
    }
    return `
        <header class="page-header">
            <h2>Mis Materias</h2>
            <p>Selecciona una materia para ver el temario, horario y fechas de parciales.</p>
        </header>
        <div class="item-list">
        ${mockSubjects.filter(s => s.careerId === 'hist').map(subject => `
            <div class="list-item" onclick="window.viewSubjectDetails('${subject.id}')">
                <h3>${subject.name}</h3>
                <p>Docente: ${subject.teacher}</p>
            </div>
        `).join('')}
        </div>
    `;
}


function renderGradesList() {
    return `
        <header class="page-header">
            <h2>Mis Notas</h2>
            <p>Selecciona una materia para ver el detalle de tus calificaciones y asistencias.</p>
        </header>
        <div class="item-list">
        ${mockSubjects.filter(s => s.careerId === 'hist').map(subject => `
            <div class="list-item" onclick="window.renderGradeDetails('${subject.id}')">
                <h3>${subject.name}</h3>
                <p>Docente: ${subject.teacher}</p>
            </div>
        `).join('')}
        </div>
    `;
}

function renderGradeDetails(subjectId: string) {
    const subject = mockSubjects.find(s => s.id === subjectId)!;
    const grades = mockGrades[subjectId] || [];
    const attendance = mockAttendance[subjectId];
    const pageContent = document.getElementById('page-content')!;

    let attendanceHtml = `
        <h3>Asistencias</h3>
        <div class="card">
             <p>No hay datos de asistencia disponibles para esta materia.</p>
        </div>
    `;

    if (attendance) {
        const { totalClasses, absences } = attendance;
        const percentage = totalClasses > 0 ? Math.round((absences / totalClasses) * 100) : 0;
        let statusText = '';
        let statusClass = '';

        if (percentage <= 15) {
            statusText = 'Regular';
            statusClass = 'status-acceptable';
        } else if (percentage <= 25) {
            statusText = 'Peligro de quedar libre';
            statusClass = 'status-risky';
        } else {
            statusText = 'Libre';
            statusClass = 'status-final';
        }

        attendanceHtml = `
            <h3>Asistencias</h3>
            <div class="card attendance-card ${statusClass}">
                 <div class="attendance-status">
                    <h4>Estado de Asistencia: <strong>${statusText}</strong></h4>
                 </div>
                 <div class="attendance-details">
                    <p><strong>Total de Clases:</strong> ${totalClasses}</p>
                    <p><strong>Inasistencias:</strong> ${absences} (${percentage}%)</p>
                 </div>
                 <div class="attendance-bar-container">
                    <div class="attendance-bar" style="width: ${percentage}%"></div>
                 </div>
            </div>
        `;
    }

    pageContent.innerHTML = `
         <header class="page-header">
            <a href="#" onclick="window.navigateTo('grades')">&larr; Volver a Mis Notas</a>
            <h2>${subject.name}</h2>
            <p>Docente: ${subject.teacher}</p>
        </header>
        <h3>Calificaciones</h3>
        <table class="content-table">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
                ${grades.map(g => `
                    <tr>
                        <td data-label="Descripción">${g.description}</td>
                        <td data-label="Fecha">${g.date}</td>
                        <td data-label="Nota">${g.grade}</td>
                    </tr>
                `).join('')}
                 ${grades.length === 0 ? `<tr><td colspan="3">No hay calificaciones cargadas.</td></tr>` : ''}
            </tbody>
        </table>
        <br>
        ${attendanceHtml}
    `;
    updateMobileHeaderTitle();
}
(window as any).renderGradeDetails = renderGradeDetails;

function switchFinalsTab(tab: string) {
    examPageActiveTab = tab;
    renderPageContent();
}
(window as any).switchFinalsTab = switchFinalsTab;

function enrollInExam(examId: string) {
    const exam = mockExamTables.find(e => e.id === examId);
    if (exam && !exam.enrolled) {
        exam.enrolled = true;
        renderPageContent(); // Re-render to show updated state
    }
}
(window as any).enrollInExam = enrollInExam;

function renderFinals() {
    const myExams = mockExamTables.filter(e => e.enrolled);
    
    const myExamsContent = `
        <table class="content-table">
            <thead>
                <tr>
                    <th>Materia</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                ${myExams.map(e => `
                    <tr>
                        <td data-label="Materia">${e.subject}</td>
                        <td data-label="Fecha">${e.date}</td>
                        <td data-label="Descripción">${e.description}</td>
                    </tr>
                `).join('')}
                ${myExams.length === 0 ? `<tr><td colspan="3">No te has inscripto a ningún examen final.</td></tr>` : ''}
            </tbody>
        </table>
    `;

    const availableExamsContent = `
         <table class="content-table">
            <thead>
                <tr>
                    <th>Materia</th>
                    <th>Fecha</th>
                    <th>Docente</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                ${mockExamTables.map(e => `
                    <tr>
                        <td data-label="Materia">${e.subject}</td>
                        <td data-label="Fecha">${e.date}</td>
                        <td data-label="Docente">${e.teacher}</td>
                        <td data-label="Acción">
                            <button onclick="window.enrollInExam('${e.id}')" class="${e.enrolled ? 'btn-enrolled' : 'btn-enroll'}" ${e.enrolled ? 'disabled' : ''}>
                                ${e.enrolled ? '✔ Inscripto' : 'Inscribirse'}
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    return `
        <header class="page-header">
            <h2>Finales</h2>
            <p>Consulta tus inscripciones y las mesas de examen final disponibles.</p>
        </header>
        <div class="tabs">
            <button class="tab-link ${examPageActiveTab === 'my-exams' ? 'active' : ''}" onclick="window.switchFinalsTab('my-exams')">Mis Inscripciones</button>
            <button class="tab-link ${examPageActiveTab === 'available-exams' ? 'active' : ''}" onclick="window.switchFinalsTab('available-exams')">Inscripción a Mesas</button>
        </div>
        <div id="exam-tab-content">
            ${examPageActiveTab === 'my-exams' ? myExamsContent : availableExamsContent}
        </div>
    `;
}

function viewForumThread(threadId: number) {
    selectedForumThreadId = threadId;
    renderPageContent();
}
(window as any).viewForumThread = viewForumThread;

function backToForums() {
    selectedForumThreadId = null;
    renderPageContent();
}
(window as any).backToForums = backToForums;

function handleReplySubmit(event: Event, threadId: number) {
    event.preventDefault();
    if (!currentUser) return;

    const replyTextarea = document.getElementById('reply-content') as HTMLTextAreaElement;
    const newReply = replyTextarea.value.trim();

    if (newReply) {
        mockForumReplies[threadId].push({
            author: currentUser.name,
            content: newReply,
            avatar: currentUser.avatar
        });
        
        const thread = mockForumThreads.find(t => t.id === threadId);
        if (thread) {
            thread.replies = mockForumReplies[threadId].length;
        }

        renderPageContent();
    }
}
(window as any).handleReplySubmit = handleReplySubmit;


function renderForumThreadDetails(threadId: number) {
    const thread = mockForumThreads.find(t => t.id === threadId);
    const replies = mockForumReplies[threadId] || [];

    if (!thread || !currentUser) return `<p>Error: No se pudo encontrar el hilo del foro.</p>`;

    return `
        <header class="page-header">
            <a href="#" onclick="window.backToForums()">&larr; Volver a los Foros</a>
            <h2>${thread.title}</h2>
            <p>Iniciado por: <strong>${thread.author}</strong></p>
        </header>

        <div class="forum-thread-container">
            <div class="replies-list">
                ${replies.map(reply => `
                    <div class="reply-card">
                        <div class="reply-author">
                            <img src="${reply.avatar}" alt="Avatar de ${reply.author}">
                            <strong>${reply.author}</strong>
                        </div>
                        <p class="reply-content">${reply.content}</p>
                    </div>
                `).join('')}
            </div>

            <div class="reply-form-container card">
                 <h3 class="card-header">Escribe una respuesta</h3>
                 <form id="reply-form" onsubmit="window.handleReplySubmit(event, ${threadId})">
                    <div class="form-group">
                        <textarea id="reply-content" rows="5" placeholder="Tu respuesta..." required></textarea>
                    </div>
                    <button type="submit" class="login-btn">Publicar Respuesta</button>
                 </form>
            </div>
        </div>
    `;
}


function renderForums() {
    if (selectedForumThreadId) {
        return renderForumThreadDetails(selectedForumThreadId);
    }
    return `
        <header class="page-header">
            <h2>Foros</h2>
            <p>Espacios de debate y consulta.</p>
        </header>
        
        <h3>Foro General (Alumnos y Docentes)</h3>
        <div class="item-list">
             ${mockForumThreads.filter(t => t.forum === 'general').map(thread => `
                <div class="list-item" onclick="window.viewForumThread(${thread.id})">
                    <h3>${thread.title}</h3>
                    <p>Autor: ${thread.author} - Respuestas: ${mockForumReplies[thread.id]?.length || 0}</p>
                </div>
            `).join('')}
        </div>
        <br>
        <h3>Foro de Alumnos</h3>
        <div class="item-list">
            ${mockForumThreads.filter(t => t.forum === 'student_only').map(thread => `
                <div class="list-item" onclick="window.viewForumThread(${thread.id})">
                    <h3>${thread.title}</h3>
                    <p>Autor: ${thread.author} - Respuestas: ${mockForumReplies[thread.id]?.length || 0}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderNotifications() {
     return `
        <header class="page-header">
            <h2>Notificaciones</h2>
            <p>Todos los comunicados importantes de la institución.</p>
        </header>
        <div class="item-list">
        ${mockNotifications.map(n => `
            <div class="list-item">
                <h3>${n.title}</h3>
                <p>${n.content}</p>
            </div>
        `).join('')}
        </div>
    `;
}

function renderSettingsPage() {
    if (!currentUser) return;
    const pageContent = document.getElementById('page-content')!;

    const settingsHTML = `
        <header class="page-header">
            <h2>Configuraciones</h2>
            <p>Gestiona tu perfil, la apariencia de la aplicación y las notificaciones.</p>
        </header>
        <div class="settings-grid">
            
            <!-- Profile Card -->
            <div class="card">
                <h3 class="card-header">Editar Perfil</h3>
                <form id="profile-form">
                    <div id="profile-message"></div>
                    <div class="form-group">
                        <label for="profile-name">Nombre Completo</label>
                        <input type="text" id="profile-name" value="${currentUser.name}" required>
                    </div>
                    <hr class="form-divider">
                    <h3 class="form-section-title">Cambiar Contraseña</h3>
                    <div class="form-group">
                        <label for="new-password">Nueva Contraseña</label>
                        <input type="password" id="new-password" placeholder="Dejar en blanco para no cambiar">
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirmar Nueva Contraseña</label>
                        <input type="password" id="confirm-password">
                    </div>
                    <button type="submit" class="login-btn">Guardar Cambios</button>
                </form>
            </div>

            <!-- Appearance Card -->
            <div class="card">
                <h3 class="card-header">Apariencia</h3>
                <p class="settings-description">Elige un tema de color para la interfaz.</p>
                <div class="theme-selector" id="theme-selector">
                    <button class="theme-button" data-theme="default">Claro</button>
                    <button class="theme-button" data-theme="dark">Oscuro</button>
                </div>
            </div>

            <!-- Notifications Card -->
            <div class="card">
                <h3 class="card-header">Notificaciones</h3>
                <p class="settings-description">Selecciona qué notificaciones deseas recibir.</p>
                <div class="notification-settings">
                    <div class="notification-toggle">
                        <label for="notif-general">Novedades de la institución</label>
                        <label class="switch">
                            <input type="checkbox" id="notif-general" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="notification-toggle">
                        <label for="notif-forums">Actividad en los foros</label>
                         <label class="switch">
                            <input type="checkbox" id="notif-forums" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="notification-toggle">
                        <label for="notif-exams">Recordatorios de exámenes</label>
                         <label class="switch">
                            <input type="checkbox" id="notif-exams">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;
    pageContent.innerHTML = settingsHTML;

    // Set active theme button
    const currentTheme = localStorage.getItem('theme') || 'default';
    const activeBtn = document.querySelector(`#theme-selector [data-theme="${currentTheme}"]`);
    activeBtn?.classList.add('active');

    // Add event listeners
    document.getElementById('profile-form')?.addEventListener('submit', handleProfileUpdate);
    document.getElementById('theme-selector')?.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        if (target.matches('.theme-button')) {
            const theme = target.dataset.theme;
            if (theme) setTheme(theme);
        }
    });
}

function setTheme(themeName: string) {
    document.body.className = `theme-${themeName}`;
    localStorage.setItem('theme', themeName);

    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        themeSelector.querySelectorAll('.theme-button').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = themeSelector.querySelector(`[data-theme="${themeName}"]`);
        activeBtn?.classList.add('active');
    }
}

// --- PRECEPTOR TOOLS ---

function renderAttendanceTool() {
    const careerOptions = mockCareers.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    const filtersSelected = proctorToolFilters.careerId && proctorToolFilters.year && proctorToolFilters.subjectId;

    const entryContent = `
        <form id="attendance-form" onsubmit="event.preventDefault(); window.saveAttendance();">
            <div id="student-list-container">${renderStudentList('attendance')}</div>
            <div id="tool-actions" style="display: ${filtersSelected ? 'block' : 'none'};">
                <p id="tool-message" class="form-message"></p>
                <button type="submit" class="login-btn">Guardar Asistencia</button>
            </div>
        </form>
    `;

    const historyContent = renderAttendanceHistory();

    return `
        <header class="page-header">
            <h2>Tomar Asistencia</h2>
            <p>Selecciona la carrera, año y materia para ver la lista de alumnos.</p>
        </header>
        <div class="card">
            <div class="tool-form-filters">
                <div class="form-group">
                    <label for="career-select">Carrera</label>
                    <select id="career-select" onchange="window.handleCareerChange(this.value, 'attendance')">
                        <option value="">Seleccione una carrera...</option>
                        ${careerOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label for="year-select">Año</label>
                    <select id="year-select" onchange="window.handleYearChange(this.value, 'attendance')" disabled>
                        <option value="">Seleccione un año...</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="subject-select">Materia</label>
                    <select id="subject-select" onchange="window.handleSubjectChange(this.value, 'attendance')" disabled>
                        <option value="">Seleccione una materia...</option>
                    </select>
                </div>
            </div>

            <div class="tabs" style="display: ${filtersSelected ? 'flex' : 'none'};">
                <button class="tab-link ${attendanceToolTab === 'entry' ? 'active' : ''}" onclick="window.switchAttendanceTab('entry')">Tomar Asistencia</button>
                <button class="tab-link ${attendanceToolTab === 'history' ? 'active' : ''}" onclick="window.switchAttendanceTab('history')">Historial</button>
            </div>

            <div id="tool-content-container">
                ${attendanceToolTab === 'entry' ? entryContent : historyContent}
            </div>
        </div>
    `;
}

function renderGradesTool() {
    const careerOptions = mockCareers.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    const filtersSelected = proctorToolFilters.careerId && proctorToolFilters.year && proctorToolFilters.subjectId;

     const entryContent = `
        <form id="grades-form" onsubmit="event.preventDefault(); window.saveGrades();">
             <div class="form-group" id="evaluation-desc-group">
                <label for="evaluation-description">Descripción de la Evaluación</label>
                <input type="text" id="evaluation-description" placeholder="Ej: 1er Parcial, Trabajo Práctico N°1" required>
            </div>
            <div id="student-list-container">${renderStudentList('grades')}</div>
            <div id="tool-actions" style="display: ${filtersSelected ? 'block' : 'none'};">
                <p id="tool-message" class="form-message"></p>
                <button type="submit" class="login-btn">Guardar Notas</button>
            </div>
        </form>
    `;

    const historyContent = renderGradesHistory();

    return `
        <header class="page-header">
            <h2>Cargar Notas</h2>
            <p>Selecciona la carrera, año y materia para cargar las notas de una evaluación.</p>
        </header>
        <div class="card">
            <div class="tool-form-filters">
                <div class="form-group">
                    <label for="career-select">Carrera</label>
                    <select id="career-select" onchange="window.handleCareerChange(this.value, 'grades')">
                        <option value="">Seleccione una carrera...</option>
                        ${careerOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label for="year-select">Año</label>
                    <select id="year-select" onchange="window.handleYearChange(this.value, 'grades')" disabled>
                        <option value="">Seleccione un año...</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="subject-select">Materia</label>
                    <select id="subject-select" onchange="window.handleSubjectChange(this.value, 'grades')" disabled>
                        <option value="">Seleccione una materia...</option>
                    </select>
                </div>
            </div>

            <div class="tabs" style="display: ${filtersSelected ? 'flex' : 'none'};">
                <button class="tab-link ${gradesToolTab === 'entry' ? 'active' : ''}" onclick="window.switchGradesTab('entry')">Cargar Notas</button>
                <button class="tab-link ${gradesToolTab === 'history' ? 'active' : ''}" onclick="window.switchGradesTab('history')">Historial</button>
            </div>
             <div id="tool-content-container">
                ${gradesToolTab === 'entry' ? entryContent : historyContent}
            </div>
        </div>
    `;
}

function renderNotificationsTool() {
    return `
        <header class="page-header">
            <h2>Enviar Notificación</h2>
            <p>Redacta y envía un comunicado a todos los alumnos.</p>
        </header>
        <div class="card">
             <form id="notification-form" onsubmit="window.handleSendNotification(event)">
                <p id="notification-message" class="form-message" style="display: none;"></p>
                <div class="form-group">
                    <label for="notification-title">Título</label>
                    <input type="text" id="notification-title" required>
                </div>
                <div class="form-group">
                    <label for="notification-content">Contenido</label>
                    <textarea id="notification-content" rows="6" required></textarea>
                </div>
                <button type="submit" class="login-btn">Enviar Notificación</button>
             </form>
        </div>
    `;
}

function renderAttendanceHistory() {
    const history = mockAttendanceHistory.filter(h =>
        h.careerId === proctorToolFilters.careerId &&
        h.year === parseInt(proctorToolFilters.year) &&
        h.subjectId === proctorToolFilters.subjectId
    );

    if (history.length === 0) {
        return '<p>No hay historial de asistencia para esta materia.</p>';
    }

    return `
        <div class="history-list">
            ${history.map(item => `
                <div class="history-item">
                    <div class="history-item-header">
                        <span>${new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div class="history-item-details">${item.summary}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderGradesHistory() {
    const history = mockGradesHistory.filter(h =>
        h.careerId === proctorToolFilters.careerId &&
        h.year === parseInt(proctorToolFilters.year) &&
        h.subjectId === proctorToolFilters.subjectId
    );

     if (history.length === 0) {
        return '<p>No hay historial de notas para esta materia.</p>';
    }

    return `
        <div class="history-list">
            ${history.map(item => `
                <div class="history-item">
                    <div class="history-item-header">
                         <strong>${item.description}</strong>
                        <span>${new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div class="history-item-details">${item.summary}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// --- EVENT LISTENERS & ROUTING ---
function handleLogin(event: Event) {
    event.preventDefault();
    const dniInput = document.getElementById('dni') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const errorElement = document.getElementById('login-error');

    const userToAuth = userRole === 'student' ? mockAuthenticatedUser : mockAuthenticatedPreceptor;

    if (dniInput.value === userToAuth.dni && passwordInput.value === userToAuth.password) {
        isAuthenticated = true;
        currentUser = userToAuth;
        render();
    } else {
        if (errorElement) {
            errorElement.textContent = 'DNI o contraseña incorrectos.';
        }
    }
}

function handleForgotPasswordRequest(event: Event) {
    event.preventDefault();
    const dniInput = document.getElementById('dni-forgot') as HTMLInputElement;
    const emailInput = document.getElementById('email-forgot') as HTMLInputElement;
    const messageElement = document.getElementById('forgot-message');

    if (!messageElement) return;
    
    const userToAuth = userRole === 'student' ? mockAuthenticatedUser : mockAuthenticatedPreceptor;

    if (dniInput.value === userToAuth.dni) {
        resetAttempt.dni = dniInput.value;
        resetAttempt.email = emailInput.value;
        forgotPasswordStep = 'verify';
        render();
    } else {
        messageElement.textContent = 'El DNI no se encuentra registrado.';
        messageElement.className = 'form-message error';
    }
}

function handleVerifyCode(event: Event) {
    event.preventDefault();
    const codeInput = document.getElementById('verification-code') as HTMLInputElement;
    const messageElement = document.getElementById('verify-message');
    if (!messageElement) return;

    if (codeInput.value === '1234') {
        forgotPasswordStep = 'reset';
        render();
    } else {
        messageElement.textContent = 'El código de verificación es incorrecto.';
        messageElement.className = 'form-message error';
    }
}

function handleResetPassword(event: Event) {
    event.preventDefault();
    const newPasswordInput = document.getElementById('new-password-reset') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password-reset') as HTMLInputElement;
    const messageElement = document.getElementById('reset-message');

    if (!messageElement) return;

    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword.length < 8) {
        messageElement.textContent = 'La nueva contraseña debe tener al menos 8 caracteres.';
        messageElement.className = 'form-message error';
        return;
    }

    if (newPassword !== confirmPassword) {
        messageElement.textContent = 'Las contraseñas no coinciden.';
        messageElement.className = 'form-message error';
        return;
    }

    // In a real app, you'd find the user by DNI/email from `resetAttempt` and update their password.
    if (userRole === 'student') {
        mockAuthenticatedUser.password = newPassword;
    } else {
        mockAuthenticatedPreceptor.password = newPassword;
    }
    forgotPasswordStep = 'success';
    render();
}

function handleProfileUpdate(event: Event) {
    event.preventDefault();
    if (!currentUser) return;

    const nameInput = document.getElementById('profile-name') as HTMLInputElement;
    const newPasswordInput = document.getElementById('new-password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    const messageElement = document.getElementById('profile-message');

    if (!messageElement) return;

    // Update name
    currentUser.name = nameInput.value;
    
    // Update password logic
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Only process password change if a new password is provided
    if (newPassword !== "") {
        if (newPassword.length < 8) {
             messageElement.innerHTML = `<p class="error-message">La nueva contraseña debe tener al menos 8 caracteres.</p>`;
            return;
        }
        if (newPassword !== confirmPassword) {
            messageElement.innerHTML = `<p class="error-message">Las nuevas contraseñas no coinciden.</p>`;
            return;
        }
        // If all checks pass, update the password
        if (currentUser.role === 'student') {
            mockAuthenticatedUser.password = newPassword;
        } else if (currentUser.role === 'proctor') {
            mockAuthenticatedPreceptor.password = newPassword;
        }
    } else if (confirmPassword !== "") {
        // Handle case where only confirm is filled
        messageElement.innerHTML = `<p class="error-message">El campo 'Nueva Contraseña' no puede estar vacío si se desea cambiar.</p>`;
        return;
    }

    messageElement.innerHTML = `<p class="success-message">¡Perfil actualizado correctamente!</p>`;
    
    // Clear password fields for security
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';

    // Rerender the whole app to reflect changes (e.g., name in sidebar)
    if (currentUser.role === 'student') {
        renderAppLayout();
        navigateTo('settings'); 
    } else {
        renderPreceptorLayout();
        currentPage = 'settings';
        document.querySelectorAll('#nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
        renderPreceptorPageContent();
    }
}

function handleLogout() {
    isAuthenticated = false;
    currentUser = null;
    userRole = null;
    currentPage = 'dashboard';
    authPageMode = 'login';
    forgotPasswordStep = 'request';
    render();
}

function navigateTo(page: string) {
    currentPage = page;
    if (page === 'finals') {
        examPageActiveTab = 'my-exams'; // Reset to default tab when navigating
    }
    if (page !== 'forums') {
        selectedForumThreadId = null;
    }
    if (page !== 'subjects' && page !== 'grades') {
        selectedSubjectId = null;
    }
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    renderPageContent();
    
    const sidebar = document.getElementById('sidebar');
    if(sidebar?.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}
(window as any).navigateTo = navigateTo;


function addAppEventListeners() {
    document.getElementById('nav-links')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (!currentUser) return;
        const target = e.target as HTMLAnchorElement;
        const page = target.getAttribute('data-page');
        if (page) {
            if (currentUser.role === 'student') {
                navigateTo(page);
            } else {
                // Preceptor navigation
                currentPage = page;
                // Reset filters and tabs when changing pages
                proctorToolFilters = { careerId: '', year: '', subjectId: '' };
                attendanceToolTab = 'entry';
                gradesToolTab = 'entry';
                 document.querySelectorAll('#nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-page') === page) link.classList.add('active');
                });
                renderPreceptorPageContent();
                const sidebar = document.getElementById('sidebar');
                if(sidebar?.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        }
    });
    
    document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

    document.getElementById('menu-toggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('open');
    });
}

// --- PROCTOR TOOL HANDLERS ---
function resetAndDisable(selectElement: HTMLSelectElement) {
    selectElement.disabled = true;
    selectElement.innerHTML = `<option value="">Seleccione...</option>`;
}

function handleCareerChange(careerId: string, tool: 'attendance' | 'grades') {
    proctorToolFilters.careerId = careerId;
    proctorToolFilters.year = '';
    proctorToolFilters.subjectId = '';
    
    if (tool === 'attendance') {
        attendanceToolTab = 'entry';
        renderPreceptorPageContent(); 
    } else {
        gradesToolTab = 'entry';
        renderPreceptorPageContent();
    }
    
    // After re-render, get the new elements
    const yearSelect = document.getElementById('year-select') as HTMLSelectElement;
    const subjectSelect = document.getElementById('subject-select') as HTMLSelectElement;

    if (!careerId) {
        resetAndDisable(yearSelect);
        resetAndDisable(subjectSelect);
        return;
    }

    const years = [...new Set(mockSubjects.filter(s => s.careerId === careerId).map(s => s.year))];
    yearSelect.innerHTML = '<option value="">Seleccione un año...</option>';
    years.sort().forEach(year => {
        yearSelect.innerHTML += `<option value="${year}">${year}º Año</option>`;
    });
    yearSelect.disabled = false;
    yearSelect.value = '';
    subjectSelect.value = '';
}
(window as any).handleCareerChange = handleCareerChange;

function handleYearChange(year: string, tool: 'attendance' | 'grades') {
    proctorToolFilters.year = year;
    proctorToolFilters.subjectId = '';
    
    if (tool === 'attendance') {
        attendanceToolTab = 'entry';
        renderPreceptorPageContent();
    } else {
        gradesToolTab = 'entry';
        renderPreceptorPageContent();
    }

    const subjectSelect = document.getElementById('subject-select') as HTMLSelectElement;
    
    if (!year) {
        resetAndDisable(subjectSelect);
        return;
    }
    
    const subjects = mockSubjects.filter(s => s.careerId === proctorToolFilters.careerId && s.year === parseInt(year));
    subjectSelect.innerHTML = '<option value="">Seleccione una materia...</option>';
    subjects.forEach(subject => {
        subjectSelect.innerHTML += `<option value="${subject.id}">${subject.name}</option>`;
    });
    subjectSelect.disabled = false;
    subjectSelect.value = '';
}
(window as any).handleYearChange = handleYearChange;

function handleSubjectChange(subjectId: string, toolType: 'attendance' | 'grades') {
    proctorToolFilters.subjectId = subjectId;
    
    if (toolType === 'attendance') {
        attendanceToolTab = 'entry';
    } else {
        gradesToolTab = 'entry';
    }
    
    renderPreceptorPageContent();
}
(window as any).handleSubjectChange = handleSubjectChange;

function renderStudentList(toolType: 'attendance' | 'grades') {
    const { careerId, year } = proctorToolFilters;
    if (!careerId || !year) return '';

    const students = mockStudents.filter(s => s.careerId === careerId && s.year === parseInt(year));
    
    if (students.length === 0) {
        return '<p>No se encontraron alumnos para esta selección.</p>';
    }

    if (toolType === 'attendance') {
        return `
            <table class="content-table">
                <thead><tr><th>Nombre del Alumno</th><th>Asistencia</th></tr></thead>
                <tbody>
                    ${students.map(student => `
                        <tr>
                            <td data-label="Nombre">${student.name}</td>
                            <td data-label="Asistencia">
                                <label><input type="radio" name="attendance-${student.id}" value="present" checked> Presente</label>
                                <label style="margin-left: 1rem;"><input type="radio" name="attendance-${student.id}" value="absent"> Ausente</label>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    } else { // grades
         return `
            <table class="content-table">
                <thead><tr><th>Nombre del Alumno</th><th>Nota</th></tr></thead>
                <tbody>
                    ${students.map(student => `
                        <tr>
                            <td data-label="Nombre">${student.name}</td>
                            <td data-label="Nota"><input type="number" min="1" max="10" class="grade-input" placeholder="1-10" id="grade-${student.id}"></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
         `;
    }
}

function saveAttendance() {
    const students = mockStudents.filter(s => s.careerId === proctorToolFilters.careerId && s.year === parseInt(proctorToolFilters.year));
    let presentCount = 0;
    let absentCount = 0;
    students.forEach(student => {
        const status = (document.querySelector(`input[name="attendance-${student.id}"]:checked`) as HTMLInputElement)?.value;
        if (status === 'present') presentCount++;
        else absentCount++;
    });

    mockAttendanceHistory.unshift({
        id: `att-hist-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        careerId: proctorToolFilters.careerId,
        year: parseInt(proctorToolFilters.year),
        subjectId: proctorToolFilters.subjectId,
        summary: `${presentCount} Presentes, ${absentCount} Ausentes`
    });
    
    const message = document.getElementById('tool-message') as HTMLParagraphElement;
    message.textContent = 'Asistencia guardada con éxito.';
    message.className = 'form-message success';
    message.style.display = 'block';

    setTimeout(() => { message.style.display = 'none'; }, 3000);
}
(window as any).saveAttendance = saveAttendance;

function saveGrades() {
    const descriptionInput = document.getElementById('evaluation-description') as HTMLInputElement;
    const students = mockStudents.filter(s => s.careerId === proctorToolFilters.careerId && s.year === parseInt(proctorToolFilters.year));
    let gradesCount = 0;
    students.forEach(student => {
        const gradeInput = document.getElementById(`grade-${student.id}`) as HTMLInputElement;
        if (gradeInput && gradeInput.value) {
            gradesCount++;
        }
    });

    mockGradesHistory.unshift({
        id: `grd-hist-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        careerId: proctorToolFilters.careerId,
        year: parseInt(proctorToolFilters.year),
        subjectId: proctorToolFilters.subjectId,
        description: descriptionInput.value,
        summary: `${gradesCount} notas cargadas.`
    });

    const message = document.getElementById('tool-message') as HTMLParagraphElement;
    message.textContent = 'Notas guardadas con éxito.';
    message.className = 'form-message success';
    message.style.display = 'block';

    setTimeout(() => { message.style.display = 'none'; }, 3000);
}
(window as any).saveGrades = saveGrades;

function switchAttendanceTab(tab: 'entry' | 'history') {
    attendanceToolTab = tab;
    renderPreceptorPageContent();
}
(window as any).switchAttendanceTab = switchAttendanceTab;

function switchGradesTab(tab: 'entry' | 'history') {
    gradesToolTab = tab;
    renderPreceptorPageContent();
}
(window as any).switchGradesTab = switchGradesTab;


function handleSendNotification(event: Event) {
    event.preventDefault();
    const titleInput = document.getElementById('notification-title') as HTMLInputElement;
    const contentInput = document.getElementById('notification-content') as HTMLTextAreaElement;
    const message = document.getElementById('notification-message') as HTMLParagraphElement;
    
    mockNotifications.unshift({
        title: titleInput.value,
        content: contentInput.value
    });

    message.textContent = 'Notificación enviada con éxito.';
    message.className = 'form-message success';
    message.style.display = 'block';
    
    titleInput.value = '';
    contentInput.value = '';
    
    setTimeout(() => { message.style.display = 'none'; }, 3000);
}
(window as any).handleSendNotification = handleSendNotification;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    document.body.className = `theme-${savedTheme}`;
    render();
});