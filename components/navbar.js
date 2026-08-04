function loadNavbar() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    return `
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <!-- Logo -->
                <div>
                    <img class="desktop-logo" src="./assets/images/logo.PNG" alt="Logo">
                    <img class="mobile-logo" src="./assets/images/charcoal-logo.PNG" alt="Logo">
                </div>


                <!-- Toggle Button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible Content -->
                <div class="collapse navbar-collapse" id="navbarContent">

                    <div class="mobile-nav-links">
                        <ul class="nav-list mx-auto">
                            <li class="${currentPage === "index.html" ? "active" : "" }">
                                <ion-icon name="home-outline"></ion-icon>
                                <a href="./index.html">Home</a>
                            </li>

                            <li class="${currentPage === "market.html" ? "active" : "" }">
                                <ion-icon name="flash-outline"></ion-icon>
                                <a href="./market.html">Market</a>
                            </li>

                            <li class="${currentPage === "watchlist.html" ? "active" : "" }">
                                <ion-icon name="bookmark-outline"></ion-icon>
                                <a href="./watchlist.html">Watchlist</a>
                            </li>

                            <li class="${currentPage === "portfolio.html" ? "active" : "" }">
                                <ion-icon name="briefcase-outline"></ion-icon>
                                <a href="#">Portfolio</a>
                            </li>

                            <li class="${currentPage === "learn.html" ? "active" : "" }">
                                <ion-icon name="book-outline"></ion-icon>
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


                        <div class="auth-links">
                            <button class="auth-nav-btn">
                                <ion-icon name="flash-outline"></ion-icon>
                                <span>Trade History</span>
                            </button>

                            <button class="auth-nav-btn">
                                <ion-icon name="wallet-outline"></ion-icon>
                                <span>Wallet</span>
                            </button>
                        </div>


                        <div class="dropdown profile-dropdown">
                            <button class="btn profile-btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="./assets/images/profile male.png" alt="Profile">
                                <span>Saad</span>
                            </button>

                            <ul class="dropdown-menu">
                                <li>
                                    <button class="dropdown-item" type="button">
                                        <ion-icon name="log-out-outline"></ion-icon>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>


                        <div class="nav-buttons ms-lg-4">
                            <button id="signin-btn" onclick="window.location.href='login.html'">Sign In</button>
                            <button id="register-btn" onclick="window.location.href='register.html'">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
}