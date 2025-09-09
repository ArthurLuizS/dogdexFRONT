<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-virtscroll-table"
      virtual-scroll
      flat
      bordered
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      title="Treats"
      :rows="rows"
      :columns="columns"
    />
  </div>
</template>

<script setup lang="ts">
interface TableDataProps {
  rows: object[];
  columns: object[];
}

withDefaults(defineProps<TableDataProps>(), {
  rows: () => [],
  columns: () => [],
});
</script>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #00b4ff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
