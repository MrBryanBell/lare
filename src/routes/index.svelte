<script lang="ts">
	import { auth } from '../lib/firebase/config/firebase-config';
  import{
		GoogleAuthProvider,
		getRedirectResult,
		signInWithRedirect,
		signOut,
		onAuthStateChanged,
	} from 'firebase/auth';
  import { userUID } from '$lib/stores/session-store';

	const provider = new GoogleAuthProvider();

	async function signIn() {
		await signInWithRedirect(auth, provider);
	}

	function signOutUser() {
		signOut(auth)
        .then(() => console.log('Se cerró la sesión'));
	}

</script>

<div>
    <h1>Hey You {$userUID}</h1>
	<button on:click={signOutUser}>Cerrar Sesión</button>
</div>

<style>
	div {
		padding-left: 150px;
	}
</style>
