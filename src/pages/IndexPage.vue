<template>
  <q-page class="flex flex-center">
    <CardComponent class="bg-accent" title="Check-in" style="grid-area: a">
      <div class="tw-w-full">
        teste Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consectetur quos et, iste doloremque soluta ea omnis. Assumenda
        doloremque veniam eveniet exercitationem sunt, possimus consectetur
        temporibus laudantium necessitatibus voluptatum dolorem fugit.
      </div>
    </CardComponent>
    <CardComponent class="bg-accent" title="Hospedados" style="grid-area: b">
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque impedit
        ipsum ducimus ipsa dolore veritatis exercitationem aliquid id pariatur
        fugiat, nemo sunt repudiandae labore est cum distinctio obcaecati
        numquam laborum!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti
        eos exercitationem quam! Eos quaerat, at officiis necessitatibus soluta
        doloribus ab earum, adipisci vero maiores velit aspernatur mollitia quod
      </div>
    </CardComponent>
    <CardComponent class="bg-accent" title="Banhos" style="grid-area: c">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      provident harum modi velit. Quos quisquam tenetur, distinctio ad aliquid
      fugiat non possimus optio voluptate illo delectus debitis provident
      dolorum maxime!
    </CardComponent>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardComponent from "../components/CardComponent.vue";

defineOptions({
  name: "IndexPage",
});

const testTs = ref<number>(0);
</script>
<style lang="scss" scoped>
.q-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template:
    "a b" 1fr
    "c b" 1fr;
  gap: 16px;
}
</style>
