<script>
// import Button from '../reusable/Button.vue';
// export default { components: { Button } };
// import emailjs from "@emailjs/browser";

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
  methods: {},
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl text-left mt-20">
      <!-- <p class="font-general-regular text-gray-500 text-md mb-8">
        Please fill out the form to create your custom package.
      </p> -->
      <form ref="form" class="font-general-regular space-y-7" @submit.prevent="sendEmail">
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="name">Name </label>
          <input
            class="w-full px-5 py-2 border border-primary border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-light rounded-md text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            v-model="from_name"
          />
        </div>
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="phone">Phone</label>
          <input
            class="w-full px-5 py-2 border border-primary border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-light rounded-md text-md"
            name="phone"
            type="text"
            required=""
            placeholder="Your Mobile Number"
            aria-label="phone"
            v-model="email"
          />
        </div>

        <div>
          <label class="block text-lg text-primary-dark mb-2" for="email">Email</label>
          <input
            class="w-full px-5 py-2 border border-primary border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-light rounded-md text-md"
            name="email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
            v-model="email"
          />
        </div>
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="subject"
            >We like to join the TGW Group:
          </label>

          <div>
            <div class="flex flex-cols-2 mb-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject"
                >Yes (Mondays Only 9a-5p)
              </label>
            </div>
            <div class="flex flex-cols-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject">
                No, thank you
              </label>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="subject"
            >Personalized t-shirts are available.</label
          >
          <div>
            <div class="flex flex-cols-2 mb-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject"
                >Yes, t-shirts $30 each
              </label>
            </div>
            <div class="flex flex-cols-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject">
                No, thank you
              </label>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="subject"
            >TGW Cap</label
          >
          <div>
            <div class="flex flex-cols-2 mb-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject"
                >Yes, $25 each
              </label>
            </div>
            <div class="flex flex-cols-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject">
                No, thank you
              </label>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-lg text-primary-dark mb-2" for="subject"
            >TGW Sports Water Bottle</label
          >
          <div>
            <div class="flex flex-cols-2 mb-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject"
                >Yes, $25 each
              </label>
            </div>
            <div class="flex flex-cols-2 gap-1">
              <input
                class="p-2 border border-primary-300 rounded-md ml-1"
                name="subject"
                type="radio"
                required=""
                placeholder="Subject"
                aria-label="Subject"
                v-model="subject"
              />

              <label class="block text-sm text-primary-dark mb-0" for="subject">
                No, thank you
              </label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-lg text-primary-dark mb-1" for="subject"
            >Subtotal:</label
          >
        </div>
        <div>
          <p>LEKKI CONSERVATION CENTER with round-trip transportation: $ <span></span></p>
          <p>LEKKI CONSERVATION CENTER without transportation: $<span></span></p>
          <p>Personalized T- Shirt: $ <span></span></p>
          <p>Personalized Cap: $<span></span></p>
          <p>Sports Water Bottle: $<span></span></p>
          <p>TOTAL:<span></span></p>
          <!-- <label class="block text-lg text-primary-dark mb-2" for="subject"
            >LEKKI CONSERVATION CENTER with round-trip transportation: $</label
          >
          <input
            class="w-full px-5 py-2 border border-primary-300 border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-light rounded-md text-md"
            name="subject"
            type="radio"
            required=""
            placeholder="Subject"
            aria-label="Subject"
            v-model="subject"
          /> -->
        </div>

        <!-- <div>
          <label class="block text-lg text-primary-dark mb-2" for="message"
            >Message</label
          >
          <textarea
            class="w-full px-5 py-2 border border-primary-300 border-opacity-50 bg-opacity-50 text-secondary-light bg-primary-light rounded-md text-md"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            v-model="message"
          ></textarea>
        </div> -->
        <input class="bg-primary p-8 py-2" type="submit" value="Send" />

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
[type="checkbox"]:checked,
[type="radio"]:checked {
  background-color: #c3910a;
}
[type="radio"] {
  border: solid 1px #c3910a;
}
.bordercolor {
  border: solid 2px #022c0c;
}
/* .border-primary-300 {
  border: solid 2px #022c0c;
} */
</style>
