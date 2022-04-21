const state = () => ({
  token: null,
  id: null,
  fullname: null,
  email: null,
  Posts: [],
  post: [],
  PostId: null,
  comments: [],
})

const getters = {}

const mutations = {
  Login(state, data) {
    state.token = data.token
    state.id = data.user_id
    state.email = data.email
    state.fullname = data.full_name
  },
  setList(state, data) {
    state.Posts = data
    console.log(state.Posts)
  },
  setPost(state, data) {
    state.post = data
  },
  CreatePost(state, data) {},
  UpdateName(state, data) {
    state.fullname = data
  },
  SetComments(state, data) {
    state.comments = data
  },
  updatePost(state, data) {
    state.post.title = data
  },
  setPostId(state, data) {
    state.PostId = data
  },
}

const actions = {
  async login({ commit }, data) {
    const res = await this.$axios.post('user/login', data)
    console.log(res.data)
    commit('Login', res.data)
    this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
  },
  async registerUser({ commit }, data) {
    console.log(data)
    const res = await this.$axios.post('user/register', data)
    console.log(res.data)
  },

  async getPosts({ commit, state }) {
    const res = await this.$axios.get('post')
    commit('setList', res.data)
  },
  async getPost({ commit, state }) {
    const res = await this.$axios.get('post/' + state.PostId)
    commit('setPost', res.data)
  },

  async createPost({ commit, state }, data) {
    await this.$axios.post('post', { title: data }).then((res) => {
      console.log(res.data)
      commit('CreatePost', res.data)
    })
  },
  async addPost({ commit }, data) {
    await this.$axios.post('post', {
      title: data,
    })
  },
  async getComments({ commit, state }, data) {
    console.log('hi' + state.PostId)
    const res = await this.$axios.get('comment/' + state.PostId)
    console.log(res.data)
    commit('SetComments', res.data)
  },

  async UpdateName({ state }, data) {
    const res = await this.$axios.put('user', { name: data })
  },
  async createComment({ commit, state }, data) {
    console.log('hi' + state.PostId)

    const res = await this.$axios.post('comment/' + state.PostId, {
      commentText: data,
    })
  },
  async deleteComment({}, data) {
    const res = await this.$axios.delete('comment/' + data)
  },
  async updatePost({ commit, state }, data) {
    const res = await this.$axios.put('post/' + state.post.id, {
      title: data,
    })
  },
  async deletePost({ commit, state }, data) {
    const res = await this.$axios.delete('post/' + data)
    console.log(res.data)
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
