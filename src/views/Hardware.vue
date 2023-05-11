<script setup lang="ts">
import PanelContainer from '@/components/PanelContainer.vue'
import Panel from '@/components/Panel.vue'
import { hardwares } from '@/data/hardware'
import MoreInformationSoon from '@/components/MoreInformationSoon.vue'
</script>

<template>
  <PanelContainer>
    <Panel title="HackUPC Hardware" size="big">
      <p>
        We have some hardware you can work with! If you want some, you just have
        to reserve it once the hacking time starts! You can reserve it in
        <a
          target="_blank"
          href="https://my.hackupc.com/"
          rel="noopener noreferrer"
          >myHackUPC</a
        >
        and then pick it in infoDesk or just pass by the infoDesk and tell us
        what you want. <b>Don't forget to bring your ID Card!!</b>
      </p>
      <p>This is the list of the sweet hardware you can hack with:</p>
    </Panel>
    <template v-for="hardware in hardwares" :key="hardware.title">
      <Panel
        :title="hardware.title"
        size="small"
        :panel-content-image="`url('${hardware.picture}')`"
      >
        <div v-if="hardware.picture !== undefined" style="height: 250px"></div>
        <MoreInformationSoon v-if="hardware.picture === undefined" />
      </Panel>
    </template>
  </PanelContainer>
</template>
