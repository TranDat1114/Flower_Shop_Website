let emailInput = document.querySelector("#emailForLogin"); // Corrected id
let passwordInput = document.querySelector("#passwordForLogin"); // Corrected id
let loginForm = document.querySelector("#loginForm");

let loginMenu = document.querySelector("#loginMenu");


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login(); // Call the login function
});

const login = () => {
    alert(emailInput.value)
    // if (emailInput.value === "admin@gmail.com" && passwordInput.value === "123") {
    //     localStorage.setItem("isLogin", true);
    //     alert("Đăng nhập thành công!");
    //     window.location.href = "/";
    // } else {
    //     alert("Thông tin đăng nhập bị sai vui lòng nhập lại!");
    // }
};



//đặt biến isLogin = true nếu đã đăng nhập
let isLogin = Boolean(localStorage.getItem("isLogin"));
// nếu login true thì hiện menu profile và ẩn menu login
if (isLogin) {
    loginMenu.innerHTML = ``
}
else {
    loginMenu.innerHTML = ``
}
//hàm logout
const logout = () => {
    // .clear để xóa localStorage
    localStorage.clear();
    // .reload để tải lại trang
    window.location.reload();
}