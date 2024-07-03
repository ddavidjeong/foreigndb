


const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('show-sidebar');
}

function redirectToCreateAccount() {
    window.location.href = "create_account.html";
  }

function redirectToLogInPortal() {
    window.location.href = "login_portal.html";
  }