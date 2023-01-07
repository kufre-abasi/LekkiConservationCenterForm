<script>
// import Button from '../reusable/Button.vue';
// export default { components: { Button } };
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  components: {
    // Button
  },
  data() {
    return {
      from_name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_mj9twxa",
          "template_3zfxfj6",
          e.target,
          "udTUt8SyCLDlHBMC5",
          {
            from_name: this.from_name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.from_name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl p-6 rounded-xl shadow-xl text-left">
      <!-- <p class="font-general-medium text-gray-500 text-2xl mb-8">Contact Me</p> -->
      <form ref="form" class="font-general-regular space-y-7" @submit.prevent="sendEmail">
        <div>
          <label class="block text-lg text-primary-light mb-2" for="name"
            >Name or company Name
          </label>
          <input
            class="w-full px-5 py-2 border border-secondary-dark border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-dark rounded-md text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Your Name or company Name"
            aria-label="Name"
            v-model="from_name"
          />
        </div>
        <div>
          <label class="block text-lg text-primary-light mb-2" for="email">Email</label>
          <input
            class="w-full px-5 py-2 border border-secondary-dark border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-dark rounded-md text-md"
            name="email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
            v-model="email"
          />
        </div>
        <div>
          <label class="block text-lg text-primary-light mb-2" for="subject"
            >Subject</label
          >
          <input
            class="w-full px-5 py-2 border border-secondary-dark border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-dark rounded-md text-md"
            name="subject"
            type="text"
            required=""
            placeholder="Subject"
            aria-label="Subject"
            v-model="subject"
          />
        </div>

        <div>
          <label class="block text-lg text-primary-light mb-2" for="message"
            >Message</label
          >
          <textarea
            class="w-full px-5 py-2 border border-secondary-dark border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-dark rounded-md text-md"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            v-model="message"
          ></textarea>
        </div>
        <input class="bg-secondary-dark p-8 py-2" type="submit" value="Send" />

        <!-- <div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
						value="submit"
					/>
				</div> -->
      </form>
    </div>
  </div>
</template>

<style scoped>
input[type="submit"] {
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.bordercolor {
  border: solid 2px #022c0c;
}
.border-secondary-dark {
  border: solid 2px #022c0c;
}
</style>
