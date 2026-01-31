document.addEventListener("DOMContentLoaded", function () {
    /* ======================
        NAME GATE
    ====================== */
    const nameGate = document.getElementById("name-gate");
    const saveNameBtn = document.getElementById("save-name-btn");
    const userNameInput = document.getElementById("user-name-input");
    const nameError = document.getElementById("name-error");
    const userNameText = document.getElementById("user-name");

    // Disable scroll saat gate aktif
    document.body.style.overflow = "hidden";

    saveNameBtn.addEventListener("click", function () {
        const userName = userNameInput.value.trim();

        if (!userName) {
        nameError.textContent = "Nama tidak boleh kosong.";
        return;
        }

        userNameText.textContent = userName;
        nameGate.style.display = "none";
        document.body.style.overflow = "auto";
    });

    /* ======================
        SMOOTH SCROLL NAVBAR
    ====================== */
    document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
            behavior: 'smooth'
            });
        }
        });
    });

    /* ======================
        MESSAGE US FORM
    ====================== */
    const form = document.getElementById("contact-form");
    const errorText = document.getElementById("form-error");
    const popupSuccess = document.getElementById("popup-success");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("messageText").value.trim();

        errorText.textContent = "";

        if (!name || !email || !phone || !message) {
            errorText.textContent = "Semua field wajib diisi.";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorText.textContent = "Format email tidak valid.";
            return;
        }

        if (!/^\d+$/.test(phone)) {
            errorText.textContent = "Nomor telepon harus berupa angka.";
            return;
        }

        // ===== TAMPILKAN HASIL INPUT =====
        const submitTime = new Date().toLocaleString("id-ID");

        document.getElementById("result-name").textContent = name;
        document.getElementById("result-email").textContent = email;
        document.getElementById("result-phone").textContent = phone;
        document.getElementById("result-message").textContent = message;
        document.getElementById("result-time").textContent = submitTime;

        popupSuccess.classList.add("show");

        setTimeout(() => {
            popupSuccess.classList.remove("show");
        }, 3000);

        form.reset();
    });
});
