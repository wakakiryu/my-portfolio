<template>
  <div>
    <nav id="nav">
      <ul>
        <li><NuxtLink to="/">HOME</NuxtLink></li>
        <li><NuxtLink to="/about">CAREER</NuxtLink></li>
        <li><NuxtLink to="/projects">PROJECTS</NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      </ul>
    </nav>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>
  #nav {
  position: fixed; /* 画面下に固定 */
  bottom: 0;
  left: 0;
  width: 100%;     /* 横幅いっぱい */
  background-color: #333; /* 背景色 */
  padding: 10px 0;
  z-index: 1000;   /* 他要素の上に表示 */
}

#nav ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#nav ul li a {
  color: white;
  text-decoration: none;
  padding: 10px;
  font-family: serif;
}
</style>