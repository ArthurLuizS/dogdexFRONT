<template>
  <div class="tw-h-full">
    <q-table
      class="my-sticky-virtscroll-table"
      :class="customClass"
      virtual-scroll
      flat
      bordered
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      title="Lista de Cães"
      :rows="rows"
      :columns="columns"
    >
      <!-- coluna de 'ver mais' -->
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <span
            style="cursor: pointer"
            @click="$emit('handleActions', props.row)"
          >
            Ver Mais
            <q-icon
              style="font-size: 1.6rem"
              color="primary"
              name="chevron_right"
            />
          </span>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
interface TableDataProps {
  rows: object[];
  columns: object[];
  customClass: string;
}

withDefaults(defineProps<TableDataProps>(), {
  rows: () => [],
  columns: () => [],
  customClass: "",
});
</script>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 100%

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $accent

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
