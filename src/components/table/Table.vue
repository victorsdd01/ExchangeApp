<template>
  <div>
    <table>
      <thead>
        <tr class="bg-gray-100 border-b-2 border-gray-400">
          <th></th>
          <th>
            <span>Ranking</span>
          </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cap. de Mercado</th>
          <th>Variación 24hs</th>
          <td class="hidden sm:block"></td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-gray-200 hover:bg-gray-100"
          v-for="item in assets"
          :key="item.id"
        >
          <td>
            <img
              class="w-6 h-6"
              :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
              :alt="item.name"
            />
          </td>
          <td>{{ item.rank }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.priceUsd | dollar }}</td>
          <td>{{ item.marketCapUsd | dollar }}</td>
          <td
            :class="
              item.vwap24Hr.includes('-') ? 'text-red-600' : 'text-green-600'
            "
          >
            {{ item.vwap24Hr | percent }}
          </td>
          <td class="hidden sm:block"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {
      keys: [],
    };
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
