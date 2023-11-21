<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-12 w-auto" src="../../assets/logo.png" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
        account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" novalidate @submit.prevent="">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input
                id="email"
                name="email"
                type="email"
                required=""
                v-model="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          <span
              class="mt-2 text-sm text-red-500">
            {{emailError}}
          </span>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                required=""
                placeholder=" "
                v-model="password"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          <span
              class="mt-2 text-sm text-red-500">
            {{passwordError}}
          </span>
        </div>

        <div>
          <button type="submit"
                  @click="validateCredentials"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

            Sign in
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    }
  },
  methods: {
    validateCredentials() {
      this.emailValidation();
      this.passwordValidation()
    },
    emailValidation() {
      const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!this.email.match(reg)) {
        this.emailError = "Please enter a valid email address";
      }
    },
    passwordValidation() {
      if (this.password.length <= 8) {
        this.passwordError = "Please enter 8 digit password"
      } else if (!this.password.match(/(.*[A-Z].*)/)) {
        this.passwordError = "Please enter minimum one Upper letter"
      } else if (!this.password.match(/(.*[a-z].*)/)) {
        this.passwordError = "Please enter minimum one lower letter"
      } else if (!this.password.match(/(.*\d.*)/)) {
        this.passwordError = "Please enter minimum one digit"
      } else {
        this.passwordError = "";
      }
    }
  }
}

</script>

<style scoped>

</style>