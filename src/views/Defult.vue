<script>
import AppBanner from "@/components/shared/AppBannerM";
import AboutUs from "../components/about/About.vue";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
// import Button from '../components/reusable/Button.vue';

export default {
  name: "Defult",
  components: {
    AppBanner,
    AboutUs,
    ProjectsGrid,
    // Button,
  },
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

<template>
  <div class="">
    <div :class="containerClasses" class="p-16">
      <AppBanner class="mb-5 sm:mb-8 container" />
    </div>
    <AboutUs />
    <ProjectsGrid />
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url(../assets/images/blackhub.jpg);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.418);
  background-blend-mode: overlay;
}
</style>
