function loadNavbar() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    return `
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container">
                <!-- Logo -->
                <div>
                    <img src="./assets/images/logo.PNG" alt="Logo">
                </div>
                

                <!-- Toggle Button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible Content -->
                <div class="collapse navbar-collapse" id="navbarContent">

                    <ul class="nav-list mx-auto">
                        <li class="${currentPage === "index.html" ? "active" : ""}">
                            <a href="./index.html">Home</a>
                        </li>
                        <li class="${currentPage === "market.html" ? "active" : ""}">
                            <a href="./market.html">Market</a>
                        </li>
                        <li class="${currentPage === "watchlist.html" ? "active" : ""}">
                            <a href="#">Watchlist</a>
                        </li>
                        <li class="${currentPage === "portfolio.html" ? "active" : ""}">
                            <a href="#">Portfolio</a>
                        </li>
                        <li class="${currentPage === "learn.html" ? "active" : ""}">
                            <a href="#">Learn</a>
                        </li>
                    </ul>

                    <div class="dropdown ms-lg-4">
                        <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            English | USD
                        </button>

                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Select Currency
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-buttons ms-lg-4">
                        <button id="signin-btn" onclick="window.location.href='login.html'">Sign In</button>
                        <button id="register-btn" onclick="window.location.href='register.html'">Register</button>
                    </div>

                </div>
            </div>
        </nav>
    `;
}