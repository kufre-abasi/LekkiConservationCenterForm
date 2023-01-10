<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="rounded-sm hover:shadow-sm mb-20 h-64 border border-gray-400"
    aria-label="Single Project"
  >
    <div class="text-center px-4 py-3">
      <ul class="flex">
        <a class="cursor-pointer rounded-lg bg-primary shadow-sm duration-500 mb-10 p-10">
          <i
            :data-feather="project.icon"
            class="w-5 sm:w-6 h-5 sm:h-6 text-light-400"
          ></i>
        </a>
      </ul>
      <!-- <img
				:src="project.img"
				:alt="project.title"
				class="rounded-sm border-none w-2/4"
			/> -->
      <!-- <a class="font-general-semibold text-2 text-ternary-dark  mb-2"
				:href="project.href"
			>Visit Site</a> -->
    </div>
    <div class="text-center px-4 py-3">
      <!-- <p class="font-general-semibold text-xl text-left font-semibold mb-2 text-gray-400">
        {{ project.title }}
      </p> -->
      <p class="font-general-bold text-sm text-gray-700 text-left mb-10">
        {{ project.category }}
      </p>
      <!-- <a
				:href="project.href"
				class="font-general-regular  text-gray-200  mt-10 text-right"
			> -->

      <!-- <i
			:data-feather="project.icon.icon"
			class="w-5 text-gray-100 dark:text-gray-100 mr-4"
		>...</i>  -->
      <!-- </a> -->
    </div>
    <div class="text-right px-4">
      <a
        :href="project.href"
        class="fa fa-link text-secondary-dark cursor-pointer"
        aria-hidden="true"
        target="_blank"
      >
        &#128279;
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: solid 2px #022c0c;
}
.card:hover {
  border: none;
  box-shadow: none;
  box-shadow: 1px 2px 25px 8px #022c0c;
}
</style>
