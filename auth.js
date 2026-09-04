/* ============================================
   Medium Clone — Auth & Dashboard Logic
   ============================================ */

function initMockUsers() {
    if (!localStorage.getItem('medium_users')) {
        const defaultUsers = [
            {
                id: 1,
                username: 'admin',
                email: 'admin@mediumclone.com',
                password: 'password123',
                role: 'admin',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
            },
            {
                id: 2,
                username: 'writer_jane',
                email: 'jane@example.com',
                password: 'password123',
                role: 'user',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
            }
        ];
        localStorage.setItem('medium_users', JSON.stringify(defaultUsers));
    }
}

function getCurrentUser() {
    const userStr = localStorage.getItem('medium_current_user');
    return userStr ? JSON.parse(userStr) : null;
}

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('medium_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('medium_current_user', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'Invalid email or password' };
}

function register(username, email, password) {
    const users = JSON.parse(localStorage.getItem('medium_users') || '[]');
    
    if (users.some(u => u.email === email)) {
        return { success: false, message: 'Email already exists' };
    }
    
    if (users.some(u => u.username === username)) {
        return { success: false, message: 'Username already taken' };
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop'
    };
    
    users.push(newUser);
    localStorage.setItem('medium_users', JSON.stringify(users));
    
    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem('medium_current_user', JSON.stringify(userWithoutPassword));
    
    return { success: true, user: userWithoutPassword };
}

function logout() {
    localStorage.removeItem('medium_current_user');
    window.location.href = '/';
}

function updateNavigationAuth() {
    const user = getCurrentUser();
    const navRight = document.getElementById('nav-right');
    
    if (!navRight) return;

    if (user) {
        let dashboardLink = user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
        
        navRight.innerHTML = `
            <a href="/write" class="nav-link hidden-mobile">Write</a>
            <button class="icon-btn hidden-mobile" title="Notifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <div class="auth-dropdown">
                <img src="${user.avatar}" alt="Profile" class="avatar" onclick="toggleDropdown()">
                <div class="dropdown-menu" id="auth-dropdown-menu">
                    <div class="dropdown-header">
                        <strong>@${user.username}</strong>
                        <span class="role-badge ${user.role}">${user.role}</span>
                    </div>
                    <hr>
                    <a href="${dashboardLink}">Dashboard</a>
                    <a href="#">Settings</a>
                    <hr>
                    <a href="#" onclick="logout(); return false;" style="color: #ef4444;">Sign Out</a>
                </div>
            </div>
        `;
    } else {
        navRight.innerHTML = `
            <a href="/our-story" class="nav-link hidden-mobile">Our story</a>
            <a href="/membership" class="nav-link hidden-mobile">Membership</a>
            <a href="/write" class="nav-link hidden-mobile">Write</a>
            <a href="/login" class="nav-link">Sign In</a>
            <a href="/register" class="btn-primary">Get started</a>
        `;
    }
}

function toggleDropdown() {
    const menu = document.getElementById('auth-dropdown-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.auth-dropdown')) {
        const menu = document.getElementById('auth-dropdown-menu');
        if (menu) menu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initMockUsers();
    updateNavigationAuth();
});
