const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

const themes = {
    light: {
        '--primary-color': '#4a90e2',
        '--text-color': '#333',
        '--bg-color': '#fff'
    },
    dark: {
        '--primary-color': '#2980b9',
        '--text-color': '#fff',
        '--bg-color': '#222'
    }
};

let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
});

function setTheme(theme) {
    const selectedTheme = themes[theme];
    Object.keys(selectedTheme).forEach(property => {
        root.style.setProperty(property, selectedTheme[property]);
    });
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
} 