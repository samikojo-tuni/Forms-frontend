<template>
	<div class="container">
		<header class="jumbotron">
			<h3>
				<strong>{{ currentUser.email }}</strong> Profile
			</h3>
		</header>
		<p>
			<strong>Token:</strong>
			{{ currentUser.token.substring(0, 20) }} ... {{
				currentUser.token.substr(currentUser.token.length -
					20)
			}}
		</p>
		<!-- <p>
			<strong>Id:</strong>
			{{ currentUser.id }}
		</p> -->
		<p>
			<strong>Sähköposti:</strong>
			{{ currentUser.email }}
		</p>
		<strong>Rooli:</strong>
		<ul>
			<li v-if="currentUser.accountType == 0">Admin</li>
			<li v-else>Käyttäjä</li>
		</ul>
		<button @click="logout">Kirjaudu ulos</button>
	</div>
</template>

<script>
export default {
	name: 'Profile',
	computed: {
		currentUser() {
			return this.$store.state.auth.user;
		}
	},
	mounted() {
		if (!this.currentUser) {
			this.$router.push('/login');
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('auth/logout').then(
				() => {
					this.$router.push('/login');
				}
			)
		}
	}
};
</script>

<style scoped>
.jumbotron {
	color: black;
}
</style>
