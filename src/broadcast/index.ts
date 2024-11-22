

const logoutChannel = new BroadcastChannel('logout');

export const login = () => {
    localStorage.setItem("token", "test")
    window.history.pushState({}, '', '/dashboard');
}


export const logout = () => {
    logoutChannel.postMessage("Logout")
    localStorage.removeItem("token")
    window.location.href = window.location.origin + "/";

}

export const logoutAllTabs = () => {
    logoutChannel.onmessage = () => {
        logout();
        logoutChannel.close();   
    }
}