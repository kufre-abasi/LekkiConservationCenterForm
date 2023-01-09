<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
// import ContactForm from '@/components/FormSubmission/ContactForm.vue';
export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Uyo,Nigeria",
          icon: "map-pin",
        },
        // {
        //   id: 2,
        //   name: "Abak,Nigeria",
        //   icon: "map-pin",
        // },
        {
          id: 2,
          name: "kufreabasibassey@gmail.com",
          icon: "mail",
          href: "mailto: kufreabasibassey3@gmail.com",
        },
        {
          id: 3,
          name: "+234 8143 141 053",
          icon: "phone",
          href: "tel: +234 8143 141 053",
        },
      ],
      headings: [
        {
          id: 1,
          heading: "Contact Me",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto py-5 md:py-20 mt-10 md:mt-40">
    <!-- <div class="text-center pb-4">
      <h1
        v-for="heading in headings"
        :key="heading.id"
        class="heading text-secondary-dark border-color text-3xl sm:text-4xl font-general-medium mb-1 mt-20 text-center font-general-medium xl:text-2xl leading-none"
      >
        {{ heading.heading }}
      </h1>
    </div> -->

    <div class="flex flex-col-reverse md:flex-row">
     
           <!-- Contact details -->
           <ContactDetails :contacts="contacts" />

     
      <!-- Contact form -->
      <ContactForm />

    </div>
  </div>
</template>
