<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="rounded-sm hover:shadow-sm mb-20 border border-gray-400"
    aria-label="Single Project"
  >
    <div class="text-center items-center px-4 py-3">
      <ul class="items-center text-center">
        <a
          data-feather="chart"
          class="cursor-pointer text-center items-center rounded-lg bg-primary shadow-sm duration-500 mb-10 p-6"
        >
          <i
            :data-feather="project.icon"
            class="items-center text-center text-light-400 w-0 h-0 m-0"
          ></i>
        </a>
      </ul>
    </div>
    <div class="text-center px-4 py-3">
      <p class="font-general-semibold text-xl text-left font-semibold mb-2 text-gray-400">
        {{ project.title }}
      </p>
      <p class="font-general-regular text-sm text-gray-700 text-center mb-10">
        {{ project.msg }}
      </p>
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
