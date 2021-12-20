<template>
  <div>
    <nav
        class="navbar navbar-dark bg-dark d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlink:href="#bootstrap"></use>
            </svg>
          <a class="navbar-brand" href="/"><b>Control</b><b style="color:#FFCA2C">Cell</b></a> </router-link>
        </a>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link :to="{name: 'home'}" class="nav-link active px-2 link-dark"><i class="fas fa-home fa-lg"></i> Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle link-light"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            Cadastros
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarScrollingDropdown"
            >
              <li><router-link :to="{name: 'customer'}" class="dropdown-item"><i class="fas fa-handshake"></i> Clientes</router-link></li>
              <li><a class="dropdown-item" href="#"><i class="fas fa-box-open"></i> Produtos</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle link-light"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            Segurança 
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarScrollingDropdown"
            >
              <li><router-link :to="{name: 'customer'}" class="dropdown-item"><i class="fas fa-user-tag"></i> Perfis</router-link></li>
              <li><a class="dropdown-item" href="#"><i class="fas fa-users"></i> Usuários</a></li>
            </ul>
          </li>
        </ul>
        <div class="col-md-3 text-end">
          <router-link :to="{name: 'login'}"><button type="button" class="btn btn-outline-warning me-2"> <i class="fas fa-door-open"></i> Sair</button> </router-link>
        </div>
    </nav>
  </div>
</template>
<script>

</script>
<style>
.active {
  background: #FFCA2C;
  border-radius: 10px;
}
</style>