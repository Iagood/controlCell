<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F0E68C;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><b>ControlCell</b></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link active"><i class="fas fa-home"></i> Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i class="bi bi-folder-plus"></i>
              <i class="fas fa-plus-square"></i> Cadastros
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li><router-link :to="{name: 'customer'}" class="dropdown-item">Cientes</router-link></li>
                <li><a class="dropdown-item" href="#">Produtos</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i class="fas fa-cogs"></i> Segurança
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li><a class="dropdown-item" href="#">Perfis</a></li>
                <li><a class="dropdown-item" href="#">Usuários</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Pesquise"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

</script>