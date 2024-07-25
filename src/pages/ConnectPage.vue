<template>
    <div class="q-pa-md" style="display: flex; max-width: 100%; height: 100vh;">
      
      <!-- Left Side -->
      <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <div style="max-width: fit-content">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        
          >
            <q-input
              filled
              v-model="firstName"
              label="First name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="lastName"
              label="Last name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="email"
              label="Your Email"
              hint="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
    
            <q-input
              filled
              type="phoneNumber"
              v-model="phoneNumber"
              label="Your Phone Number"
              lazy-rules
              :rules="[
                val => val.length == 100 || 'Must be 10 digits'
              ]"
            />
    
            <q-toggle v-model="accept" label="I accept the license and terms" />
    
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
  
      <!-- Right Side -->
      <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <img src="https://picsum.photos/500/300" alt="Image" style="width: 630px; height: 640px; border: 5px solid black;">
      </div>
    </div>
</template>
  
  
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
      const url = ref('https://picsum.photos/500/300')  
      const firstName = ref(null)
      const lastName = ref(null)
      const email = ref(null)
      const phoneNumber = ref(null)
      const accept = ref(false)
  
      return {
        firstName,
        lastName,
        email,
        phoneNumber,
        accept,
        url,
  
        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
        refresh () {
            url.value = 'https://picsum.photos/500/300?t=' + Math.random()
        },
  
        onReset () {
          firstName.value = null
          lastName.value = null
          email.value = null
          phoneNumber.value = null
          accept.value = false
        }
      }
    }
  }
</script>

<style scope>
body {
 background-color: bisque;
}
</style>
  

  