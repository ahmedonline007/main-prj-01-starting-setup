<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-forme @save-data="saveData"></coach-forme>
    </base-card>
  </section>
</template>
  
 <script>
import CoachForme from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForme,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.push('/coaches');
    },
  },
};
</script>
  
<style scoped>
</style>