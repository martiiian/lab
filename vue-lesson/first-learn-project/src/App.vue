<template>
  <Suspense @pending="prependHandler" @fallback="fallbackHandler" @resolve="resolveHandler">
    <div>
      <DynamicComponent />
      <DynamicComponent2 />
    </div>

    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<script setup>
import {defineAsyncComponent} from "vue";
import UIButton from "./component/UIButton.vue";

const DynamicComponent = defineAsyncComponent({
 loader: () => import("./component/DynamicComponent.vue"),
 loadingComponent: UIButton,
 delay: 300
})

const DynamicComponent2 = defineAsyncComponent({
  loader: () => import("./component/DynamicComponent2.vue"),
  loadingComponent: UIButton,
  delay: 300
})

const prependHandler = () => {
  // eslint-disable-next-line no-console
  console.log('prependHandler')
}

const resolveHandler = () => {
  // eslint-disable-next-line no-console
  console.log('resolve handler')
}

const fallbackHandler = () => {
  // eslint-disable-next-line no-console
  console.log('fallback handler')
}
</script>
