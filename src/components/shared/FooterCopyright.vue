<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'My Portfolio',
			author: 'Kufre-abasi',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center ">
		<div
			class="font-general-regular text-lg text-gray-100"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/kufre-abasi/hire-me"
				target="__blank"
				class="font-general-medium hover:underline   text-color  duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href=""
				target="__blank"
				class="font-general-medium  uppercase hover:underline text-color  duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style  scoped>
.text-color:hover{
	color:#3cff76;
}
.text-color {
	color: #022c0c;
}

</style>
