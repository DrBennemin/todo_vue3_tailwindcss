<template>
    <div id="nav">
        <router-link to="/">Todo</router-link> |
        <router-link to="/done">Done</router-link>
    </div>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(120deg, #023e8a, #ffc2cc);
    min-height: 100vh;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
}

#nav a.router-link-exact-active {
    color: #ffc2cc;
}
</style>
