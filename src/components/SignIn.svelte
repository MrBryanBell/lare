<script>
	import { auth } from '../firebase/firebaseConfig';
	import {
		GoogleAuthProvider,
		getRedirectResult,
		signInWithRedirect,
		signOut,
	} from 'firebase/auth';
    import { userUID } from '../stores/session_store';

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
    <h1>ID: {$userUID}</h1>
	<button on:click={signIn}>Iniciar Sesión</button>
	<button on:click={signOutUser}>Cerrar Sesión</button>
</div>

<style>
	div {
		padding-left: 150px;
	}
</style>
