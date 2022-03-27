<template>
    <header>
        <nav>
            <div class="menu">
                <div class="logo">
                    <a href="/"><img src="/images/product.png" alt=""></a>
                </div>
                <div class="links">
                    <ul class="">
                        <li v-if="isLogedIn" class="dropdown"><span class="with-caret">My account</span>
                            <ul>
                                <li><a href="/users/1/edit">My account</a></li>
                                <li><a href="/users/1/orders">My orders</a></li>
                                <li><a href="/users/1/subscriptions">My subscriptions</a></li>
                            </ul>
                        </li>
                        <li><a href="/cart"><span class="circle"><i class="fas fa-shopping-cart"></i></span></a></li>
                        <li class="dropdown-with-circle">
                            <span class="circle"><i class="fas fa-sort-down"></i></span>
                            <ul>
                                <li v-if="isLogedIn"><a @click="logout">Logout</a></li>
                                <li v-if="!isLogedIn"><a href="/login">Login</a></li>
                                <li v-if="!isLogedIn"><a href="/register">Register</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="menu-button">
                    <div class="bars">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    props: ['is_logged_in_prop'],
    data() {
        return {
            isLogedIn: this.is_logged_in_prop,
        }
    },
    mounted() {
        function toggleMenu() {
            if (!menuButton.classList.contains('active')) {
                menuButton.classList.add('active');
                links.classList.add('open');
                links.classList.remove('visually-hidden');
            } else {
                closeMenu();
            }
        }

        function closeMenuOnOutsideClick(event) {
            if (!links.contains(event.target) && !menuButton.contains(event.target)) {
                closeMenu();
            }
        }

        function closeMenu() {
            menuButton.classList.remove('active');
            links.classList.add('visually-hidden');
            links.addEventListener("animationend", function () {
                links.classList.remove('open');
            }, false);
        }

        // MENU
        if (document.querySelector('nav')) {

            var menuButton = document.querySelector('.menu-button');
            var links = document.querySelector('nav').querySelector('.links');

            menuButton.addEventListener("click", toggleMenu, false);
            document.addEventListener('click', closeMenuOnOutsideClick, false);
            document.addEventListener('touchstart', closeMenuOnOutsideClick, false);
        }
    },
     methods: {
      logout(){
        axios.post('/logout').then(response => {
          window.location.replace(window.location.protocol + "//" + window.location.host );
        }).catch(error => {
            console.log('error', error);
        })
      }
    }
}
</script>