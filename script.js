<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and stylesheet link for FontAwesome -->
    <link rel="stylesheet" href="critical.css" media="all" importance="high">
    <link rel="stylesheet" href="non-critical.css" media="all" importance="low">
    <!-- Set caching for 1 day (adjust as needed) -->
    <meta http-equiv="Cache-Control" content="max-age=86400">

    <!-- Lazy loading image -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png" alt="Description" loading="lazy">
    <img srcset="image-320w.jpg 320w,
             image-480w.jpg 480w,
             image-800w.jpg 800w"
         sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px,
                800px"
         src="image-800w.jpg" alt="Description">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png" alt="Description" class="lazy-load">

    <!-- Lazy loading script -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var lazyImages = document.querySelectorAll('.lazy-load');

            var observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(function (img) {
                observer.observe(img);
            });
        });
    </script>

    <!-- Additional stylesheets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <style>
        /* Critical CSS here */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
        }

        .footer {
            background-color: #fff;
            color: #333;
            padding: 3px; /* Reduced padding for the navigation bar */
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .nav--icons ul {
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            padding: 0;
            margin: 0;
        }

        .nav--icons ul li {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .nav--icons ul li a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 40px; /* Adjusted width for smaller icons */
            height: 60px; /* Adjusted height for smaller icons and text */
            border-radius: 50%;
            background-color: transparent; /* Transparent background color */
            color: black; /* Navy icon font color */
            transition: background-color 0.3s ease, color 0.3s ease;
            outline: none; /* Remove default outline on focus */
        }

        .nav--icons ul li a:hover {
            color: black; /* Navy color on hover */
            animation: rocketAnimation 0.8s ease infinite; /* Add animation to rocket on hover */
        }

        @keyframes rocketAnimation {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
        }
    </style>

    <!-- Additional stylesheets -->
    <link rel="stylesheet" href="non-critical-styles.css">

    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6NSGCD7"
                height="0" width="0" style="display:none;visibility:hidden">
        </iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Async script -->
    <script async src="your-async-script.js"></script>

    <!-- Deferred script -->
    <script defer src="your-deferred-script.js"></script>
</head>
<body>
    <!-- Navigation menu for kids using custom SVG icons -->
    <div class="footer">
        <nav class="nav nav--icons">
            <ul>
                <li>
                    <a href="https://Spaceland.ae/" class="nav-link">
                        <!-- Custom SVG home icon -->
                        <img src="https://f.nooncdn.com/s/app/com/noon/images/bottomNav/home-inactive.svg" alt="Home" style="width: 25px; height: 25px;">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="https://Spaceland.ae/products/" class="nav-link">
                        <!-- Custom SVG products icon -->
                        <img src="https://f.nooncdn.com/s/app/com/noon/images/bottomNav/categories-v2-inactive.svg" alt="Products" style="width: 25px; height: 25px;">
                        <span>Category</span>
                    </a>
                </li>
                <li>
                    <a href="https://Spaceland.ae/products/account/favorites" class="nav-link">
                        <!-- Heart icon design from provided image URL -->
                        <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/heart-1024.png" alt="Favorites" style="width: 25px; height: 25px;">
                        <span>Favorites</span>
                    </a>
                </li>
                <li>
                    <a href="https://Spaceland.ae/products/account" class="nav-link">
                        <!-- Custom SVG account icon -->
                        <img src="https://f.nooncdn.com/s/app/com/noon/images/bottomNav/account-inactive.svg" alt="Account" style="width: 25px; height: 25px;">
                        <span>Account</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</body>
</html>
