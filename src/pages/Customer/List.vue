<template>
  <div class="container container-body mt-5">
    <div class="card p-4" style="background: #FFFFFF">
      <div class="d-flex justify-content-between">
        <h3>Clientes</h3>
        <button type="button" class="btn btn-warning btn-sm">Adicionar Cliente <i class="fas fa-plus"></i></button>
      </div>
      <hr>
      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody v-if="typeof(customers) === Array">
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ '(' + customer.ddd_cellphone + ') ' + customer.cellphone }}</td>
            <td> <button type="button" class="btn btn-secondary btn-sm">Editar</button> </td>
          </tr>
        </tbody>
        <tbody v-if="typeof(customers) !== Array">
          <tr>
            <td style="text-align: center; vertical-align:middle !important" colspan="3">Nenhum registro foi encontrado!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('getCustomers').catch(response => { this.$vToastify.error(response.message, 'Erro!') })
  },
  computed: {
    customers () {
      return this.$store.state.customers.items
    }
  }
}
</script>
