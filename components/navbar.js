function loadNavbar() {
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
                        <li><a href="#">Market</a></li>
                        <li><a href="#">Watchlist</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Learn</a></li>
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