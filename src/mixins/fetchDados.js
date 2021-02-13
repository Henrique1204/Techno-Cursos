export default {
  data() {
    return {
      loading: null,
      dados: null
    };
  },
  methods: {
    async fetchDados(endpoint) {
      this.loading = true;
      
      const res = await fetch(`http://localhost:3000${endpoint}`);
      const json = await res.json();

      setTimeout(() => {
        this.loading = false;
        this.dados = json;
      }, 1500);
    }
  }
}
