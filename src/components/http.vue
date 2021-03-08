<template>
  <div>http</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loaddata() {
      console.log(999);
      this.$http.post("/api/admin/checklogin"
      ,{username:'ldq',pass:'123'},
        success=>{
            console.log(success)
        },failure=>{}
      );
    },
  },
  created() {
    this.loaddata();
  },
};
</script>

<style>
</style>