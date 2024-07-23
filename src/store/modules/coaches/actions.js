export default {
  registerCoach(context, data) {
    console.log('context.rootGetters', context.rootGetters);
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    //using api

    context.commit('registerCoach', coachData);
  },
  loadCoaches(context) {
    //call api to get data
    const data = [];
    context.commit('setCoaches', data);
  },
};
