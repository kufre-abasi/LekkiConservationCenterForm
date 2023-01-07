<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
export default {
  components: { FooterCopyright },
  data() {
    return {
      socials: [
        {
          id: 1,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/kufre-abasi",
        },
        {
          id: 2,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/kufreabasiBass1",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://web.facebook.com/kufreabasi",
        },
        {
          id: 4,
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/basseykufreabasi/",
        },
        {
          id: 5,
          name: "Linkedin",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/",
        },
        // {
        //   id: 5,
        //   name: "WhatsApp",
        //   icon: "phone",
        //   url: "https://wa.link/x477i5",
        // },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="bg-secondary-dark">
    <div class="pt-20 sm:pt-30 mt-20">
      <!-- Footer social links -->
      <div class="flex flex-col justify-left items-left text-left mb-12 sm:mb-20 px-20">
        <img src="@/assets/images/logoss.png " alt="" class="logo" />

        <!-- <p class="font-general-regular text-md capitalize sm:text-md text-gray-300"></p> -->
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300 mb-2">
          Lekki,Lagos,Nigeria
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300">
          Phone: +234 81323232
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300 mb-6">
          Email: info@tribalgetway.com
        </p>

        <ul class="flex gap-4 sm:gap-2">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="cursor-pointer rounded-lg bg-primary shadow-sm p-2 duration-500"
          >
            <i :data-feather="social.icon" class="w-4 sm:w-5 h-4 sm:h-6"></i>
          </a>
        </ul>
      </div>
    </div>


          <!-- Footer copyright -->
          <FooterCopyright />

  </div>
</template>

<style scoped>
.icons:hover {
  background: #3cff76;
  color: #000;
}
.icons {
  background: #022c0c;
  color: #000;
}
.logo {
  width: 10%;
}
</style>
