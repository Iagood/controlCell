<template>
  <div class="container container-body mt-5">
    <div class="card p-4" style="background: #FFFFFF">
      <div class="d-flex justify-content-between">
        <h3>Produtos</h3>
        <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">Adicionar Produto <i class="fas fa-plus"></i>
                    <router-link :to="{name: 'customer'}"></router-link>
        </button>
        
      </div>
      <hr>
      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody v-if="typeof(products) === Array">
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.description }}</td>
            <!-- <td>{{ '(' + product.ddd_cellphone + ') ' + product.cellphone }}</td> -->
            <td> <button type="button" class="btn btn-secondary btn-sm">Editar</button> </td>
          </tr>
        </tbody>
        <tbody v-if="typeof(products) !== Array">
            <tr>
              <td style="text-align: center; vertical-align:middle !important" colspan="4">Nenhum registro foi encontrado!</td>
          </tr>
        </tbody>
      </table>

      <div class="modal" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Cadastrar Produto <i class="fas fa-box-open"></i></h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="row g-12">
                <div class="col-md-6">
                  <label for="name" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="name">
                </div>
                <div class="col-md-6">
                  <label for="code" class="form-label">Código</label>
                  <input type="text" class="form-control" id="code">
                </div>
              </div>
              <div class="row g-12 my-3">
                <div class="col-md-6">
                  <label for="category_id" class="form-label">Categoria</label>
                  <select class="form-select" id="category_id" aria-label="Default select example">
                    <option selected>Selecione a categoria</option>
                    <option v-for="(category, index) in categories" :key="index" value='category.id'>{{category.name}}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="description" class="form-label">Descrição</label>
                  <input type="text" class="form-control" id="description">
                </div>
              </div>
              <div class="row g-12 my-3">
                <div class="col-md-6">
                  <label for="product_cost" class="form-label">Custo do Produto</label>
                  <input type="text" class="form-control" id="product_cost">
                </div>
                <div class="col-md-6">
                  <label for="sale_price" class="form-label">Preço de Venda</label>
                  <input type="text" class="form-control" id="sale_price">
                </div>
              </div>
              <div class="row g-12 my-3">
                <div class="col-md-3">
                  <label for="guarantee_mounths" class="form-label">Meses de Garantia</label>
                  <input type="text" class="form-control" id="guarantee_mounths">
                </div>
                <div class="col-md-3">
                  <label for="commission" class="form-label">Comissão</label>
                  <input type="text" class="form-control" id="commission">
                </div>
                <div class="col-md-3">
                  <label for="minimum_inventory" class="form-label">Estoque Mínimo</label>
                  <input type="text" class="form-control" id="minimum_inventory">
                </div>
                <div class="col-md-3">
                  <label for="current_inventory" class="form-label">Estoque Atual</label>
                  <input type="text" class="form-control" id="current_inventory">
                </div>
              </div>
              <div class="row g-12 my-3">
                <div class="col-md-12">
                    <label for="observation" class="form-label">Observações</label>
                    <textarea class="form-control" id="observation" rows="3"></textarea>
                </div>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-warning">Salvar</button>
            </div>

          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
          name: null,
          code: null,
          category_id: null,
          description: null,
          product_cost: null,
          sale_price: null,
          guarantee_mounths: null,
          commission : null,
          minimum_inventory: null,
          current_inventory: null,
          observation: null,
      },
    }
  },
  mounted() {
    this.$store.dispatch('getProducts').catch(response => { this.$vToastify.error(response.message, 'Erro!') })
    this.$store.dispatch('getCategories').catch(response => { this.$vToastify.error(response.message, 'Erro!') })
  },
  computed: {
    products () {
      return this.$store.state.products.items
    },
    categories () {
      return this.$store.state.categories.items
    }
  }
}
</script>
