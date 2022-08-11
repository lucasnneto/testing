<template>
  <v-flex class="ma-5">
    <h1 class="mb-4">Usuários</h1>
    <textfield v-model="search" label="Pesquisar"></textfield>
    <v-row>
      <v-col v-for="(u, i) in listFilter" :key="u.id" cols="12" md="6">
        <user :item="u" :not-be-deleted="i % 2 === 0" />
      </v-col>
    </v-row>
  </v-flex>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState,mapActions } from 'pinia'
import { useStore,User } from '../store/index'
import textfield from "@/components/textfield.vue"
import user from "@/components/user.vue"
export default Vue.extend({
  components:{
textfield,user
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState(useStore,['users','status','loading','error']),
    listFilter(): User[] {
      if (!this.search) return this.users;
      return this.users.filter(
        (el) =>
          el.name.toLowerCase().includes(this.search.toLowerCase()) ||
          el.username.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.GET_USERS();
  },
  methods: {
    ...mapActions(useStore,['GET_USERS']),
  },
});
</script>