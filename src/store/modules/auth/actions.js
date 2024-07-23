export default {
  login(context, payload) {
    //call httpreqest
    if (payload.email != 'a@a.a') {
      const error = new Error('invalid Email');
      throw error;
    }
    context.commit('setUser', {
      token: Math.random(),
      userId: Math.random(),
      tokenExpiration: new Date().toISOString(),
    });
  },
  signup(context, payload) {
    //call httpreqest
    if (payload.email != 'a@a.a') {
      const error = new Error('invalid Email');
      throw error;
    }
    context.commit('setUser', {
      token: Math.random(),
      userId: Math.random(),
      tokenExpiration: new Date().toISOString(),
    });
  },
};
