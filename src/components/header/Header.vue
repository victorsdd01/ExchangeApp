<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <div class="flex items-center mr-2 align-middle">
            <img
              src="../../assets/icons/exchange.png"
              alt="photo"
              height="50"
              width="50"
            />
          </div>
          <span class="font-semibold text-xl tracking-tight">
            Cripto Exchange
          </span>
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped></style>
