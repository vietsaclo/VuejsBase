<template>
	<div>
		<home-header />
		<home-main />
		<home-footer/>
	</div>
</template>

<script>
import HeaderCompoent from './components/HeaderComponent.vue';
import MainComponent from './components/main/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
	name: "HomeIndex",
	data() {
		return {
			msg: 'OK',
		}
	},
	components: {
		'home-header': HeaderCompoent,
		'home-main': MainComponent,
		'home-footer': FooterComponent,
	}
}
</script>

<style>

</style>